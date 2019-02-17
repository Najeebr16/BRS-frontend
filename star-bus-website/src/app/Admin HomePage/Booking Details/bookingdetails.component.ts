import { Component } from '@angular/core';
import { BookingDetailsService } from './bookingdetails-service';
import { BookingDetails } from './bookingdetails';

@Component({
    selector : 'booking-details',
    templateUrl : './bookingdetails.component.html'
 })

 export class BookingDetailsComponent{

    book: BookingDetails[];

    url10 = "http://localhost:8181/admin/display/bookingdetails";

    constructor(private bs:  BookingDetailsService ) {

    }

    ngOnInit() {

    }

    getBus(from,to) {
        this.bs.retrieveFromServer(this.url10+"/"+from+"/"+to).subscribe(
            data => {
                console.log(data);
                this.book =  data;
            });
    }

 }
     
 