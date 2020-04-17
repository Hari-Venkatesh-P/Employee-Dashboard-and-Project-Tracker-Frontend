import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:any;
  password:any;
  TokenId:string="hari";
  TokenPassword:string="password";

  constructor(private httpService:AuthenticationService,private  router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.httpService.loginUser(this.userid,this.password)
    .subscribe((data:any) => {
      if(data.status==200)
      {
         if(data.value =="ADMIN")
          {
            this.router.navigate(['viewemployee']);
            this.httpService.setAdminLoggedIn(this.userid);
          }
          else
          {
             this.router.navigate(['profile']);
             this.httpService.setUserLoggedIn(this.userid);
          }
      }
      else{
          window.alert(data.message);
      }
    });
  }

  validateTokens()
  {
    console.log(this.TokenId);
    (this.httpService.authenticate(this.TokenId, this.TokenPassword).subscribe(
      (data:any) => {
        if(data.status==200)
        {
          this.loginUser();
        }
        else{
          throw new Error("Issues with Backend Authentication.")      
        }
      },
      error => {
        console.log("Issues with Backend Authentication.");
        window.alert("Issues with Backend Authentication.");
      }
    )
    );
  }
}
