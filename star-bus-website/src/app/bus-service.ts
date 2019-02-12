
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable()
export class BusService {
    buses: Bus[];
    from: string;
    to: string;

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}


    // get products from server
    retrieveFromServer(url2) : Observable <Bus[]> {
         return this.http.get<Bus[]>(url2);
    }
    
}