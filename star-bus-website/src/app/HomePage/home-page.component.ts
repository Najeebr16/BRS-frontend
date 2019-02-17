import { Component } from '@angular/core';
import { Bus } from '../Bus/bus';
import { BusService } from '../Bus/bus-service';
import { BusAvailability } from '../Bus/busAvail';
import { BusAvailabilityService } from '../Bus/busAvail-service';
import { Router } from '@angular/router';
import { Session } from '../session-status';


 @Component({
    selector : 'home-page',
    templateUrl : './home-page.component.html'
 })

 export class HomePageComponent{
     
    busavail: BusAvailability = new BusAvailability();
    buses: Bus[];
    response: Session[];

    url2 = "http://localhost:8181/findbus/applyfilter";

    constructor(private bal: BusAvailabilityService, private r: Router) {

    }


    ngOnInit() {

    }

    getBus() {
        console.log("=========" + JSON.stringify(this.busavail));

        this.bal.sendToServer(this.url2,this.busavail).subscribe(data=>{
            this.buses = data;
            JSON.stringify(console.log(data));
        });
    }

    book(bus_id: number,tfare: number){
        console.log("bus id " + bus_id);
        sessionStorage.setItem('bus_id',""+bus_id);
        sessionStorage.setItem('tfare',""+tfare);
        if(sessionStorage != null){
            sessionStorage.getItem('email');
            sessionStorage.getItem('password');
            this.r.navigate(["/dashboard"]);
        }
        else{
            this.r.navigate(['/login-page']);
        }

    }
}

 