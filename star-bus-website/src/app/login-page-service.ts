
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Login } from './login';

@Injectable()
export class LoginService {
    
constructor(private http:HttpClient){

}
sendToServer(login: Login){
    //our code to be communicated with the server will be here
    let url ="http://localhost:8181/verify"
 return this.http.post(url,login) ;
 
  }
    
}