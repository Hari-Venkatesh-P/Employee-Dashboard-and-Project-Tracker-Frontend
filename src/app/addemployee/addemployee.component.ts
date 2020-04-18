import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddemployeeComponent implements OnInit {
  maxEmpID: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,4}";
  employeeForm: FormGroup;
  constructor(private httpService:EmployeeService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.getMaxEmployeeId();
    this.employeeForm  = this.fb.group({
          id:  [' ',Validators.required],
          name:  ['',[Validators.required]],
          mobile : ['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
          email : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
          department : ['',[Validators.required]],
          type :  ['',[Validators.required]],
          gender : ['',[Validators.required]],
    });
  }

  getMaxEmployeeId()
  {
    this.httpService.getMaxEmployeeId()
    .subscribe((data:any) => this.maxEmpID = data.value);
  }

  createEmployee():void
  {

    if(!this.employeeForm.valid)
    {
      alert("Issues with adding the Employee")
    }
    else{
      this.employeeForm.value["id"] = this.maxEmpID;
      console.log(this.employeeForm.value);
      this.httpService.addEmployee((this.employeeForm.value))
      .subscribe((data:any) => 
      {
        alert(data.message);
      }
      );
      window.location.reload();
    }
  }
}
