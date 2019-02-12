import { Flight } from './flight';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FlightService {
    flights: Flight[];

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}

    sendToServer(flight: Flight) {
        // Code to communicate with the server 
    }

    // get products from server
    retrieveFromServer(url) : Observable <Flight[]> {
        console.log('here'+ url);
         return this.http.get<Flight[]>(url);
    }
    
}