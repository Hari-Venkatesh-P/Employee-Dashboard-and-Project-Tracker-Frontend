import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class ApiResponse{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private httpClient:HttpClient
  ) { 
     }

  authenticate(username ,password) {
    console.log(username);
    console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<ApiResponse>('https://employeebackend.herokuapp.com/validate/tokenvalidation',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )
    );
  }

  public loginUser(userid:string,password:string)
  {
    return this.httpClient.get("https://employeebackend.herokuapp.com/validate/loginvalidation/"+userid+"/"+password);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null)
  }

  setAdminLoggedIn(id:string)
  {
      sessionStorage.setItem('AdminId',id);
  }

  setUserLoggedIn(id:string)
  {
    sessionStorage.setItem('UserId',id);
  }

  isAdminLoggedIn()
  {
    let user = sessionStorage.getItem('AdminId');
    return !(user === null)
  }

  isMyUserLoggedIn()
  {
    let user = sessionStorage.getItem('UserId');
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('basicauth');
  }

  userAndAdminLogout()
  {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('basicauth');
    sessionStorage.removeItem('AdminId');
    sessionStorage.removeItem('UserId');

  }



  public getLoggedInId()
  {
      return sessionStorage.getItem('UserId');
  }
}