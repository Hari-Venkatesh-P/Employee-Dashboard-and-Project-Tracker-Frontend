import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponent } from './login/login.component';
import {BasicAuthHtppInterceptorService} from './basic-auth-htpp-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    SearchemployeeComponent,
    NavbarComponent,
    HomecomponentComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
