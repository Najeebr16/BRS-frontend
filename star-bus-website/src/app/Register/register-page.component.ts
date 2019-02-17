import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './register-page-service';
import {Router} from '@angular/router';


 @Component({
    selector : 'register-user',
    templateUrl : './register-page.component.html'
 })

 export class AddUserComponent{
     users :User = new User();
     confirmpass:String;
     array={password:""};

     constructor( public ur:UserService, public r: Router){

   }
   
   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


     store(){
       let check=true;
      if (this.confirmpass != this.users.password) {
        this.array['password']; 
        check=false;
        alert("password does not match!!");
    }

    if(check) {
      let url="http://localhost:8181/user/registration/add";
      this.r.navigate(['login-page']);
      this.ur.sendToServer(url,this.users).subscribe(data=>{
      
      });
          }
      }
}

 


