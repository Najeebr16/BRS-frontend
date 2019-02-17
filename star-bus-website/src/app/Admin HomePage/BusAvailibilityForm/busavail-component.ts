import { Component } from "@angular/core";
import { BusAvail } from './busavail';
import { BusAvailService } from './busavail-service';
import { Router } from '@angular/router';

 @Component({
    selector : 'busavail',
    templateUrl : './busavail.component.html'
 })


 export class BusAvailComponent{
    busavail: BusAvail = new BusAvail();

    constructor( public ur:BusAvailService, public r: Router){
    }

    
    store(){
        let url8="http://localhost:8181/admin/bus/details/add";
        this.ur.sendToServer(url8,this.busavail).subscribe(data=>{
      });
      this.r.navigate(['bus-details']);

      console.log("lol"+JSON.stringify(this.busavail));
  }
}