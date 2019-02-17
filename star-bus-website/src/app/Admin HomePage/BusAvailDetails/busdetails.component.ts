import { Component } from '@angular/core';
import { BusAvail } from '../BusAvailibilityForm/busavail';
import { BusDetailsService } from './busdetails-service';
import { Router } from '@angular/router';


@Component({
    selector : 'bus-details',
    templateUrl : './busdetails.component.html'
 })

 export class BusDetailsComponent{

    busavail: BusAvail[];

    url9 = "http://localhost:8181/admin/display/busdetails";

    constructor(private bs:  BusDetailsService, private r: Router ) {

    }

    ngOnInit() {
            this.bs.retrieveFromServer(this.url9).subscribe(
                data => {
                    console.log(data);
                    this.busavail =  data;
                });
        }

        add(){
            this.r.navigate(['/busavail']);
        }
    }


     
 