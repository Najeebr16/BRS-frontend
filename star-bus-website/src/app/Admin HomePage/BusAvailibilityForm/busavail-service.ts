import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BusAvailService{
    
constructor(private http:HttpClient){

}
    sendToServer(url,bus){
    //our code to be communicated with the server will be here
        return this.http.post(url,bus)
  }

}