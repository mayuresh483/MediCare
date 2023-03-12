import { Component } from '@angular/core';
import { Router } from '@angular/router';
import pageSettings from './../../utility/page-settings'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  pageSettings = pageSettings;
  constructor(private router: Router) {
    this.pageSettings.pageHeader = true;
    this.pageSettings.pageNewFooter = true;
   }

  ngOnInit() {
  }
  getCourses(){
    this.router.navigate(['/subjects']);
  }

  ngOnDestroy() {
    this.pageSettings.pageHeader = false;
    this.pageSettings.pageNewFooter = false;
  }
}
