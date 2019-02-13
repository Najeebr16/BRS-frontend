import { Component } from '@angular/core';
import { Bus } from '../Bus/bus';
import { BusService } from '../Bus/bus-service';


 @Component({
    selector : 'home-page',
    templateUrl : './home-page.component.html'
 })

 export class HomePageComponent{
     
    buses: Bus[];
    from: string;
    to: string;


    url2 = "http://localhost:8181/busres";

    constructor(private bs: BusService) {

    }

    ngOnInit() {

    }

    getBus(from,to) {
        this.bs.retrieveFromServer(this.url2+"/"+from+"/"+to).subscribe(
            data => {
                console.log(data);
                this.buses =  data;
            });
    }

 }