import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent implements OnInit {
  public submitted: Boolean;
  reactiveForm=this.fb.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  email:['',Validators.required],
  street:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  zipcode:['',Validators.required],
  })

  constructor(private fb : FormBuilder) {}
  

  ngOnInit() {
  }
  onSubmit(){
    
  
  }
  
}
