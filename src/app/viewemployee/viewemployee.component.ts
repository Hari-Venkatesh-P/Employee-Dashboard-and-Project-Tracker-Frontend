import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private httpService:EmployeeService) { }
  employeeDetails:any = [];
  Project:any = {
    id : "",
    employeeid: "",
    name : "",
    status:"Kick Started",
    progress:"5",
  }

  reports:any = {
    id:"",
    position: "",
    kpi: "",
    status : "",
    comment : ""
  };

  deleteId:any;
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees()
  {
    this.httpService.getAllEmployees()
      .subscribe((data:any) => this.employeeDetails = data);
      console.log( this.employeeDetails)
  }


  assignProject()
  {
    this.httpService.addProject((this.Project))
    .subscribe((data:any) => window.alert(data.message));
  }

  deleteEmployee()
  {
     this.httpService.deleteEmployee(this.deleteId)
      .subscribe((data:any) => 
      {
        if(data.status==200){
          window.alert(data.message);
          this.getAllEmployees();
        }
        else{
          window.alert(data.message);
        }
      });
  }

  updateReport()
  {
    console.log(this.reports.id);
      this.httpService.updateReport(this.reports.id,this.reports.position,this.reports.kpi,this.reports.status,this.reports.comment)
      .subscribe((data:any) => 
      {
          window.alert(data.message);
      });
  }
}
