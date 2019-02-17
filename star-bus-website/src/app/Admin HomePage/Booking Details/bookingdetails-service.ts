import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDetails } from './bookingdetails';

@Injectable()
export class BookingDetailsService {

    book: BookingDetails;

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}


    // get products from server
    retrieveFromServer(url10) : Observable <BookingDetails[]> {
         return this.http.get<BookingDetails[]>(url10);
    }
    
}
