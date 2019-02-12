import { Component } from '@angular/core';
import { UserService } from './register-page-service';
import { User } from './user'
import { LoginService } from './login-page-service';
import { Login } from './login';


 @Component({
    selector : 'login-user',
    templateUrl : './login-page.component.html'
 })

 export class VerifyLoginComponent{

    login: Login = new Login();
    constructor( public lr:LoginService){

    }

    verify(){
        let url1='http://localhost:8181/buslogin/verify';
        this.lr.sendToServer(url1,this.login).subscribe(data=>{
      
      });
          }
        
    }