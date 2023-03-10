import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MediCareServiceService } from '../service/medi-care-service.service';
import { global } from '../utility/endpoint';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private route: Router, private service : MediCareServiceService) {}

  ngOnInit(): void {
    debugger
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        pwd: new FormControl('',[Validators.required]),
        check :new FormControl('')
      }
    );
  }

  get f(){
    return this.loginForm.controls;
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      Swal.fire('Error', "Invalid Data", 'error');
      return;
    }
   
    this.service.authCheck(this.loginForm.value).subscribe((response: any)=>{
      global.showLoading();
      if(response && response.status && response.status == '0'){
        global.hideLoading();
        if(this.loginForm.value['check'] == true){
          sessionStorage.setItem("email",JSON.stringify(response.data));
        }
        this.route.navigate(['/landing']);
      }
      else{
        global.hideLoading();
        Swal.fire('Error', response.status_msg, 'error');
      }
    })
  }
}
