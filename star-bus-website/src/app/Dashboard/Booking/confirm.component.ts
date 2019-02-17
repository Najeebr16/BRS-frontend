import { Component, OnInit } from '@angular/core';
import { ConfirmBooking } from './confirm';
import { ConfirmService } from './confirm-service';
import { Router } from '@angular/router';


 @Component({
    selector : 'confirm',
    templateUrl : './confirm.component.html',
 })
 export class ConfirmBookingComponent implements OnInit{

    confirm: ConfirmBooking[];
    url11 = "http://localhost:8181/display/busdetails/";
    bus_id: string;
    email: string;
    tfare: string;
    seats: string;

    constructor(private cs: ConfirmService, private router: Router) {

   }
   
   ngOnInit(){
      this.bus_id = sessionStorage.getItem('bus_id');
      this.email = sessionStorage.getItem('email');
      this.tfare = sessionStorage.getItem('tfare');
      this.seats = sessionStorage.getItem('seats');
      console.log("bus id is "+this.bus_id);

      this.cs.retrieveFromServer(this.url11+this.bus_id).subscribe(
         data => {
             console.log(data);
             this.confirm =  data;
         });
   }
   display(){
      
      //this.router.navigate(['/pass-details']);
   }
}