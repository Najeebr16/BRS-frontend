import { Component } from '@angular/core';
import { LoginService } from './login-page-service';
import { Login } from './login';


 @Component({
    selector : 'login-user',
    templateUrl : './login-page.component.html'
 })

 export class VerifyLoginComponent{

    login: Login = new Login();
    response: string;
    constructor( private lr:LoginService){

    }

    add(mform){
       this.lr.sendToServer(this.login).subscribe(
          data =>{
                   
                   this.response = data['status'];
                   console.log(data);
                 }
      );
          }
        
    }