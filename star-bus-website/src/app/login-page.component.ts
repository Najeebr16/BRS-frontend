import { Component } from '@angular/core';
import { UserService } from './register-page-service';
import { User } from './user'
import { LoginService } from './login-page-service';


 @Component({
    selector : 'login-user',
    templateUrl : './login-page.component.html'
 })

 export class VerifyLoginComponent{

    constructor( public ur:LoginService){

    }

    verify(){
        let url1='http://localhost:8181/verify'
        this.ur.sendToServer(url1).subscribe(data=>{
        
        });
    }

 }