import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable()

export class BusAvailabilityService {
    
constructor(private http:HttpClient){

}
    sendToServer(url6,user) : Observable<Bus[]> {
        return this.http.post<Bus[]>(url6,user) 
      }
    
}