import { Component } from '@angular/core';
import { AdminLogin } from './adminlogin';
import { AdminLoginService } from './adminlogin-page-service';


 @Component({
    selector : 'admin-login',
    templateUrl : './adminlogin-page.component.html'
 })

 export class VerifyAdminLoginComponent{

    login: AdminLogin = new AdminLogin();
    response: string;
    constructor( private lr:AdminLoginService){

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