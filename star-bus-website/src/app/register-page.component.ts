import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './register-page-service';


 @Component({
    selector : 'register-user',
    templateUrl : './register-page.component.html'
 })

 export class AddUserComponent{
     users :User = new User();

     constructor( public ur:UserService){

   }

     store(){
      let url=''
      this.ur.sendToServer(url).subscribe(data=>{
      
      });
          }
}

 


