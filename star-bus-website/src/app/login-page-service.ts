
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable()

export class LoginService {
    email: string;
    password: string;
    
constructor(private http:HttpClient){

}
sendToServer(url){
    //our code to be communicated with the server will be here
 return this.http.get(url) 
 
  }
    
}