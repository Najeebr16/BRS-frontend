
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Login } from './login';

@Injectable()
export class LoginService {
    login: Login[];
    
constructor(private http:HttpClient){

}
sendToServer(url,login){
    //our code to be communicated with the server will be here
 return this.http.post(url,this.login) ;
 
  }
    
}