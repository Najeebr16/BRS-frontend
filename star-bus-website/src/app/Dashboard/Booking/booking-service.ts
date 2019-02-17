
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Passenger } from './passenger';

@Injectable()

export class PassengerService {
    seats: number;
    passengers : Passenger[];
    
constructor(private http:HttpClient){

}
    sendToServer(url5,user){
        //our code to be communicated with the server will be here
     return this.http.post(url5,user) 
     
      }
    
}