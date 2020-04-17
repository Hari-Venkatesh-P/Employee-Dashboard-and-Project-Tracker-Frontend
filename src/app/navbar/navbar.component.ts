import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public httpService:AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }


  logout()
  {
    this.httpService.logOut();
    this.httpService.userAndAdminLogout();
    this.router.navigate(['']);
  }


}
