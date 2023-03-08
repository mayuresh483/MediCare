import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,private route: Router, private service : MediCareServiceService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        pwd: ['',[Validators.required]],
        check :['']
      },
    );
  }

  get f(){
    return this.loginForm.controls;
  }

  public onSubmit() {
    debugger
    if (this.loginForm.invalid) {
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
