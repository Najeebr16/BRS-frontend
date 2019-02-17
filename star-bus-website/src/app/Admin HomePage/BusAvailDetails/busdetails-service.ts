
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusAvail } from '../BusAvailibilityForm/busavail';

@Injectable()
export class BusDetailsService {

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}

    // get products from server
    retrieveFromServer(url9) : Observable <BusAvail[]> {
         return this.http.get<BusAvail[]>(url9);
    }
}