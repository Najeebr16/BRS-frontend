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

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    VerifyLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path :'register-page',component:AddUserComponent},
      {path :'login-page',component:VerifyLoginComponent}
    ]),
    AppRoutingModule
  ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
