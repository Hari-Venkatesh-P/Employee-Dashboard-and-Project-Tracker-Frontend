import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employee:any = {
    id :  "",
    name : "",
    department : "",
    type : "",
    mobile : ""
  };

  projectId:string;

  employeeId:any;

  test = {
    projectId:"",
    status:"",
    progress:""
  }

  reports:any = {
    position: "",
    kpi: "",
    status : "",
    comment : ""
  };
  
  projectDetails:any = [];

  constructor(private httpService:AuthenticationService,private employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.searchEmployee(this.httpService.getLoggedInId());
  }

  searchEmployee(eid:string)
  {
    this.employeeService.searchEmployee(eid)
    .subscribe((data:any) =>{
      console.log(data);
    if(data)
    { 
      this.employee.id = (data.id);
      this.employee.name =  (data.name);
      this.employee.department = (data.department);
      this.employee.type = (data.type);
      this.employee.mobile = (data.mobile);
      this.getProjectsById(eid);
      this.getReports(eid);
    }
    else{
        window.alert("Problem with the Session Management..!!");
    }});
  }

  getProjectsById(eid:string)
  {
    this.employeeService.getProjects(eid)
    .subscribe((data:any) => {
      this.projectDetails = data;
    });
  }

  getReports(eid:string)
  {
    console.log("Outside");
    this.employeeService.getReports(eid)
    .subscribe((data:any) => {
     if(data!=null){
     this.reports.kpi = (data.kpi);
      this.reports.position =  (data.position);
      this.reports.status = (data.status);
      this.reports.comment = (data.comment);
    }
  else{
    console.log("No reports");
  }});
  }
  

  updateProject()
  {
    console.log("Inside Update Project");
    this.projectId = this.test.projectId.substring(0,this.test.projectId.indexOf(','));
    console.log(this.projectId);
    this.employeeService.updateProject(this.test.projectId.substring(0,this.test.projectId.indexOf(',')),this.test.status,this.test.progress,this.employee.id)
    .subscribe((data:any) => {
      window.alert(data.message);
    });
  }
}
