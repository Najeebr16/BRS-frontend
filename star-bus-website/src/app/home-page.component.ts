import { Component } from '@angular/core';
import { Bus } from './bus';
import { BusService } from './bus-service';


 @Component({
    selector : 'home-page',
    templateUrl : './home-page.component.html'
 })

 export class HomePageComponent{
     
    buses: Bus[];


    url = "";

    constructor(private bs: BusService) {

    }

    ngOnInit() {

    }

    getFlights(from,to) {
        this.bs.retrieveFromServer(this.url + '?from='+from + '&to=' + to  ).subscribe(
            data => {
                this.buses =  data;
            });
    }

 }