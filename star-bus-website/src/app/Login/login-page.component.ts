import { Component } from '@angular/core';
import { LoginService } from './login-page-service';
import { Login } from './login';
import { Router } from '@angular/router';
import { LoginStatus } from './login-status';


 @Component({
    selector : 'login-user',
    templateUrl : './login-page.component.html'
 })

 export class VerifyLoginComponent{

    login: Login = new Login();
    response: LoginStatus;
    constructor( private lr: LoginService, private r: Router){

    }

    add(mform){
       this.lr.sendToServer(this.login).subscribe(
          data =>{
                   
                   this.response = data;

                   if(this.response.status == "VERIFIED"){
                     sessionStorage.setItem('email', this.login.email);
                     sessionStorage.setItem('password', this.login.password);
                     sessionStorage.setItem('name',this.response.name);
                     sessionStorage.setItem('userid',this.response.userid);
                     this.r.navigate(["/dashboard"]);
                   }
                   else{
                      this.r.navigate(["/login-page"]);
                   }



                 }
      );
          }
        
    }