import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 x={};

  constructor(
    private servicesService: ServicesService,
    private router: Router
    ) {}
  signup () {
    this.servicesService.createList(this.x) 
    .subscribe((data) => {
      console.log('data saved')
      this.router.navigate(['/login'])
    },(error) => {
      console.log('error')
    })
   

  }

  ngOnInit() { }
}
