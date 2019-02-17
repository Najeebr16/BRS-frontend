
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    
constructor(private http:HttpClient){

}
    sendToServer(url,user){
        //our code to be communicated with the server will be here
     return this.http.post(url,user) 
     
      }
    
}