import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public fullname: string;
  public tname: string;
  public emails: string;
  public temails: string;
  public gendersheee: string;
  public tgendersheee: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.tname = this.fullname;
    this.emails = this.temails;
    this.gendersheee = this.tgendersheee;
    console.log(this.fullname);
  }
}
