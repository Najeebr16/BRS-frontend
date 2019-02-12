import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './register-page.component';
import { VerifyLoginComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page.component';
import { UserService } from './register-page-service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { LoginService } from './login-page-service';
import { BusService } from './bus-service';

const appRoutes: Routes = [
  { path: 'login-page', component: VerifyLoginComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'register-page', component: AddUserComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    VerifyLoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,

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
