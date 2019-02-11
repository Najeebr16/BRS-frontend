
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()

export class UserService {
    users : User[];
    
constructor(private http:HttpClient){

}
    sendToServer(url:string):Observable<User[]>{
        //our code to be communicated with the server will be here
     return this.http.get<User[]>(url)
     
      }
    
}