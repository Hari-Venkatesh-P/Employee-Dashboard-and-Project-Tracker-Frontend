import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './authguard.service';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"profile",component:ProfileComponent,canActivate:[AuthGaurdService]},
  {path:"home",component:HomecomponentComponent,canActivate:[AuthGaurdService]},
  {path:"viewemployee",component:ViewemployeeComponent,canActivate:[AuthGaurdService]},
  {path:"addemployee",component:AddemployeeComponent,canActivate:[AuthGaurdService]},
  {path:"searchemployee",component:SearchemployeeComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
