import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MediCareServiceService } from '../service/medi-care-service.service';
import { global } from '../utility/endpoint';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  regForm!:FormGroup;
  
  constructor(private service : MediCareServiceService, private route : Router){}

  ngOnInit(): void {
    this.regForm = new FormGroup({
      fname : new FormControl('',Validators.required),
      lname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      remail : new FormControl('',[Validators.required,Validators.email]),
      pwd : new FormControl('',Validators.required),
      check :new FormControl('',Validators.required)
    });
  }

  get f(){
    return this.regForm.controls;
  }

  onSubmit(){
    if (this.regForm.invalid) {
      Swal.fire('Error', "Invalid Data", 'error');
      return;
    }

    this.service.registerUser(this.regForm.value).subscribe(response=>{
      global.showLoading();
      if(response && response.status && response.status == '0'){
        global.hideLoading();
        Swal.fire('Ok', "Done", 'success');
        this.route.navigate(['/login']);
      }
      else{
        global.hideLoading();
        Swal.fire('Error', response.status_msg, 'error');
      }
    })
  }


}
