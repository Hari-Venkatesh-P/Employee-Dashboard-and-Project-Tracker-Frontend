import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {
  employee:any = {
    id :  "",
    name : "",
    department : "",
    type : "",
    mobile : ""
  };

  reports:any = {
    position: " ",
    kpi: " ",
    status : " ",
    comment : " "
  };

  projectDetails:any = [];
  searchId : any;
  expression : any;

  constructor(private httpService:EmployeeService) { }
  ngOnInit(): void {
  }

  searchEmployee()
  {
    this.httpService.searchEmployee(this.searchId)
    .subscribe((data:any) =>{
    if(data)
    { 
      this.employee.id = (data.id);
      this.employee.name =  (data.name);
      this.employee.department = (data.department);
      this.employee.type = (data.type);
      this.employee.mobile = (data.mobile);
      this.getProjectsById();
      this.getEmployeeReport();
    }
    else{
        window.alert("Enter a Valid Employee ID..!!");
    }});
  }

  getProjectsById()
  {
    this.httpService.getProjects(this.searchId)
    .subscribe((data:any) => {
      this.projectDetails = data;
      console.log(this.projectDetails);
    });
  }

  removeProject(id:any)
  {
    this.httpService.deleteProjectsById(id.value,this.employee.id)
    .subscribe((data:any) => {
      window.alert(data.message)
    });
  }

  getEmployeeReport()
  {
    this.httpService.getEmployeeReport(this.searchId)
    .subscribe((data:any) => {
      if(data!=null)
      {
        this.reports = data;
      }
      else{
        this.reports.position="Trainee";
        this.reports.comment=" ";
        this.reports.status=" ";
        this.reports.kpi=" ";
      }
    });
  }
}
