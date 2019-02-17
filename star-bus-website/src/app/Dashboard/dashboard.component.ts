import { Component, OnInit } from '@angular/core';

 @Component({
    selector : 'dash-board',
    templateUrl : './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
 })

 export class DashBoardComponent implements OnInit {
    title : 'DashBoard';
    name: string;

    ngOnInit() {
        this.name = sessionStorage.getItem("name");
    }
 }