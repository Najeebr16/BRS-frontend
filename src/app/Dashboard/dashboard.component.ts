import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


 @Component({
    selector : 'dash-board',
    templateUrl : './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
 })

 export class DashBoardComponent{
    title : 'DashBoard';
 }
