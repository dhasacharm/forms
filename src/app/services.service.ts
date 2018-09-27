import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { getDefaultService } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private http: HttpClient) {
    
  }
  createList(data){
    return this.http.post('http://localhost:8080/signup' , data)
    } 
}