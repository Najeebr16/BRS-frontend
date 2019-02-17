import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile-service';
import { User } from 'src/app/Register/user';

 @Component({
    selector : 'profile-user',
    templateUrl : './profile.component.html'
 })

 export class UserProfileComponent implements OnInit{
   users: User[];
   user_id: string;
    
    url2 = "http://localhost:8181/user/detail/";

    constructor(private ps: ProfileService) {

    }

    ngOnInit() {
        this.user_id = sessionStorage.getItem('userid');
        this.ps.retrieveFromServer(this.url2+this.user_id).subscribe(
            data => {
                console.log(data);
                this.users =  data;
            });
    }

 }
