import { Component } from '@angular/core';
import { PassengerService } from './booking-service';
import { Router } from '@angular/router';

 @Component({
    selector : 'seats-user',
    templateUrl : './seats.component.html',
    styleUrls: ['./seats.component.css']
 })
 export class SeatBookingComponent{
     seats: number;

     constructor(private passengerService: PassengerService, private router: Router) {

     }
    
     addPassengers(seats:number) {
      let url = "http://localhost:8181/";
      sessionStorage.setItem('seats',""+seats);
      this.passengerService.sendToServer(url,this.seats).subscribe(
         data =>{

         });
      this.passengerService.seats = this.seats;
      this.router.navigate(['/booking']);
     }


 
}