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
import { PassengerService } from './Dashboard/Booking/booking-service';
import { ProfileService } from './Dashboard/Profile/profile-service';
import { SeatBookingComponent } from './Dashboard/Booking/seats.component';
import { ConfirmBookingComponent } from './Dashboard/Booking/confirm.component';
import { BusAvailabilityService } from './Bus/busAvail-service';
import { AdminLoginService } from './AdminLogin/adminlogin-page-service';
import { VerifyAdminLoginComponent } from './AdminLogin/adminlogin-page.component';
import { AdminComponent } from './Admin HomePage/Admin-homepage.component';
import { BookingDetailsComponent } from './Admin HomePage/Booking Details/bookingdetails.component';
import { BusDetailsComponent } from './Admin HomePage/BusAvailDetails/busdetails.component';
import { BusAvailComponent } from './Admin HomePage/BusAvailibilityForm/busavail-component';
import { BookingDetailsService } from './Admin HomePage/Booking Details/bookingdetails-service';
import { BusDetailsService } from './Admin HomePage/BusAvailDetails/busdetails-service';
import { BusAvailService } from './Admin HomePage/BusAvailibilityForm/busavail-service';
import { PassengerDetailsComponent } from './Dashboard/Booking/passenger.component';
import { ConfirmService } from './Dashboard/Booking/confirm-service';
import { PassengerDisplayService } from './Dashboard/Booking/passenger-service';



const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login-page', component: VerifyLoginComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'register-page', component: AddUserComponent },
  { path: 'booking', component: UserBookingComponent},
  { path: 'changepass', component: ChangePassComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'wallet', component: UserWalletComponent},
  { path: 'dashboard', component: DashBoardComponent},
  { path: 'seats-page', component: SeatBookingComponent},
  { path: 'confirm-page', component: ConfirmBookingComponent},
  { path: 'admin-login', component: VerifyAdminLoginComponent},
  { path: 'admin-homepage', component: AdminComponent},
  { path: 'booking-details', component: BookingDetailsComponent},
  { path: 'bus-details', component: BusDetailsComponent},
  { path: 'busavail', component: BusAvailComponent},
  { path: 'pass-details', component: PassengerDetailsComponent}
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
    HeaderComponent,
    UserBookingComponent,
    SeatBookingComponent,
    ConfirmBookingComponent,
    VerifyAdminLoginComponent,
    AdminComponent,
    BookingDetailsComponent,
    BusDetailsComponent,
    BusAvailComponent,
    PassengerDetailsComponent
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
  providers: [UserService, 
              HttpClient,
              LoginService,
              BusService,
              PassengerService, 
              ProfileService, 
              BusAvailabilityService,
              AdminLoginService,
              BookingDetailsService,
              BusDetailsService,
              BusAvailService,
              ConfirmService,
              PassengerDisplayService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
