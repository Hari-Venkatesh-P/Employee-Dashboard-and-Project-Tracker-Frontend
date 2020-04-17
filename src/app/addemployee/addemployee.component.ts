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

  employeeForm: FormGroup;
  constructor(private httpService:EmployeeService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.getMaxEmployeeId();
    this.employeeForm  = this.fb.group({
          id:  [' ',Validators.required],
          name:  ['',Validators.required],
          mobile : ['',Validators.required],
          email : ['',Validators.required],
          department : ['',Validators.required],
          type :  ['',Validators.required],
          gender : ['',Validators.required],
    });
  }

  getMaxEmployeeId()
  {
    this.httpService.getMaxEmployeeId()
    .subscribe((data:any) => this.maxEmpID = data.value);
  }

  validationFields(mobileNumber)
  {
    if(mobileNumber.length==10)
    {
        return true
    }
    else{
      return false
    }
  }

  createEmployee():void
  {

    if(!this.validationFields(this.employeeForm.value.mobile))
    {
      alert("Enter the Mobile Number of the Employee Correctly")
    }
    else{
      this.employeeForm.value["id"] = this.maxEmpID;
      console.log(this.employeeForm.value);
      this.httpService.addEmployee((this.employeeForm.value))
      .subscribe((data:any) => 
      {
        window.alert(data.message);
      }
      );
      window.location.reload();
    }
  }
}
