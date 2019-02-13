import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './Register/register-page.component';
import { VerifyLoginComponent } from './Login/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './HomePage/home-page.component';
import { UserService } from './Register/register-page-service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { LoginService } from './Login/login-page-service';
import { BusService } from './Bus/bus-service';
import { DashBoardComponent } from './dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserBookingComponent } from './Dashboard/Booking/booking.component';
import { ChangePassComponent } from './Dashboard/ChangePassword/changepass.component';
import { UserProfileComponent } from './Dashboard/Profile/profile.component';
import { UserWalletComponent } from './Dashboard/Wallet/wallet.component';
import { HeaderComponent } from './Header/header.component';



const appRoutes: Routes = [
  { path: 'login-page', component: VerifyLoginComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'register-page', component: AddUserComponent },
  { path: 'booking', component: UserBookingComponent},
  { path: 'changepass', component: ChangePassComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'wallet', component: UserWalletComponent},
  { path: 'dashboard', component: DashBoardComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    VerifyLoginComponent,
    HomePageComponent,
    DashBoardComponent,
    UserBookingComponent,
    ChangePassComponent,
    UserProfileComponent,
    UserWalletComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AppRoutingModule
  ],
  providers: [UserService, HttpClient, LoginService, BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
