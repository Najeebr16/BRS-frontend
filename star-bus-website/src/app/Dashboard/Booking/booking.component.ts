import { Component, OnInit } from '@angular/core';
import { Passenger } from './passenger';
import { PassengerService } from './booking-service';
import { Router } from '@angular/router';

 @Component({
    selector : 'booking-user',
    templateUrl : './booking.component.html'
 })

 export class UserBookingComponent implements OnInit {

   passengers: Passenger[];
   seats: number[];
   pass: Passenger;

     constructor( public pr:PassengerService, public r: Router){

   }
   
   ngOnInit() {
     console.log("seats selected " + this.pr.seats);
    this.seats = new Array(this.pr.seats);
    this.passengers = new Array(this.pr.seats);
    let counter = 0;
    for(let i = 0; i<this.pr.seats; i++)
      this.passengers[counter++] = new Passenger();
  }

   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
      store(){
      let user_id = sessionStorage.getItem('userid');
      console.log('user id is' +user_id);
      let url5="";
      console.log("=========" + JSON.stringify(this.passengers));
      this.r.navigate(['confirm-page']);
      this.pr.sendToServer(url5,this.passengers).subscribe(data=>{

      });
          }
      
}
