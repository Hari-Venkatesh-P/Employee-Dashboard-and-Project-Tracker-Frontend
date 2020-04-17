import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient :HttpClient ) { 
  
  }

public deleteEmployee(id:any)
{
    return this.httpClient.delete("https://employeebackend.herokuapp.com/employee/deleteemployee/"+id);
}


public getProjects(id:any)
{
  
  return this.httpClient.get("https://employeebackend.herokuapp.com/project/getprojectsbyid/"+id);
}

 public getAllEmployees()
 {
  
   return this.httpClient.get("https://employeebackend.herokuapp.com/employee/getallemployees");
 }

public addProject(project:any)
{
  
  return this.httpClient.post("https://employeebackend.herokuapp.com/project/addproject", project);
}

public deleteProjectsById(id:string,eid:string)
{
  return this.httpClient.delete("https://employeebackend.herokuapp.com/project/deleteprojectbyid/"+id+"/"+eid);
}

public updateProject(id:any,status:any,progress:any,eid:any)
{
  return this.httpClient.get("https://employeebackend.herokuapp.com/project/updateproject/"+id+"/"+status+"/"+progress+"/"+eid);
}

 public searchEmployee(id:any)
 {
  
   return this.httpClient.get("https://employeebackend.herokuapp.com/employee/searchemployee/"+id);
 }

 public getMaxEmployeeId()
 {
    return this.httpClient.get("https://employeebackend.herokuapp.com/employee/getmaxemployeeid");
 }

 public getEmployeeReport(id:any)
 {
    return this.httpClient.get("https://employeebackend.herokuapp.com/report/getreportbyid/"+id);
 }
 public addEmployee(employee:any)
  {
    return this.httpClient.post("https://employeebackend.herokuapp.com/employee/addemployee", employee);
  }

  public updateReport(id:string,position:string,kpi:string,status:string,comment:string)
  {
    return this.httpClient.get("https://employeebackend.herokuapp.com/report/updatereport/"+id+"/"+position+"/"+kpi+"/"+status+"/"+comment);
  }

  public getReports(id:any)
  {
    return this.httpClient.get("https://employeebackend.herokuapp.com/report/getreportbyid/"+id);
  }

  public changePassword(id:any)
  {
    return this.httpClient.get("https://employeebackend.herokuapp.com/report/getreportbyid/"+id);
  }
}
