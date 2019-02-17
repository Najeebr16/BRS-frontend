import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AdminLogin } from './adminlogin';

@Injectable()
export class AdminLoginService {
    
constructor(private http:HttpClient){

}
sendToServer(adminlogin: AdminLogin){
    //our code to be communicated with the server will be here
    let url7 ="http://localhost:8181/verify/admin";
    return this.http.post(url7,adminlogin) ;
 
  }
}