import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  x : any={};

  constructor(
    private servicesService: ServicesService,
    private router: Router
    ) {}
  userSignup() {
    console.log(this.x);
    this.servicesService.createList(this.x) 
    .subscribe((data) => {
      console.log('data saved')
      this.router.navigate(['/login'])
    },(error) => {
      console.log('error')
    })
   

  }

  ngOnInit() {
  }

}
