
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Session } from '../session-status';
import { LoginStatus } from './login-status';

@Injectable()
export class LoginService {
    
constructor(private http:HttpClient){

}
sendToServer(login: Login) : Observable<LoginStatus> {
    //our code to be communicated with the server will be here
    let url ="http://localhost:8181//verify/user";
     return this.http.post<LoginStatus>(url,login) ;
 
  }
    
}