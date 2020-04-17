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
    return this.httpClient.delete("http://localhost:8080/employee/deleteemployee/"+id);
}


public getProjects(id:any)
{
  
  return this.httpClient.get("http://localhost:8080/project/getprojectsbyid/"+id);
}

 public getAllEmployees()
 {
  
   return this.httpClient.get("http://localhost:8080/employee/getallemployees");
 }

public addProject(project:any)
{
  
  return this.httpClient.post("http://localhost:8080/project/addproject", project);
}

public deleteProjectsById(id:string,eid:string)
{
  return this.httpClient.delete("http://localhost:8080/project/deleteprojectbyid/"+id+"/"+eid);
}

public updateProject(id:any,status:any,progress:any,eid:any)
{
  return this.httpClient.get("http://localhost:8080/project/updateproject/"+id+"/"+status+"/"+progress+"/"+eid);
}

 public searchEmployee(id:any)
 {
  
   return this.httpClient.get("http://localhost:8080/employee/searchemployee/"+id);
 }

 public getMaxEmployeeId()
 {
    return this.httpClient.get("http://localhost:8080/employee/getmaxemployeeid");
 }

 public getEmployeeReport(id:any)
 {
    return this.httpClient.get("http://localhost:8080/report/getreportbyid/"+id);
 }
 public addEmployee(employee:any)
  {
    return this.httpClient.post("http://localhost:8080/employee/addemployee", employee);
  }

  public updateReport(id:string,position:string,kpi:string,status:string,comment:string)
  {
    return this.httpClient.get("http://localhost:8080/report/updatereport/"+id+"/"+position+"/"+kpi+"/"+status+"/"+comment);
  }

  public getReports(id:any)
  {
    return this.httpClient.get("http://localhost:8080/report/getreportbyid/"+id);
  }

  public changePassword(id:any)
  {
    return this.httpClient.get("http://localhost:8080/report/getreportbyid/"+id);
  }
}
