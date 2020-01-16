import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public pdata: string;
  public cdata: string;
  public new: string;
  public lData: string;
  public ldata: string
  public eData: string;
  public edata: string;
  public gData: string;
  public gdata: string;

  constructor() { }

  ngOnInit() {


  }
  onClick() {
    this.pdata = this.new;
    this.ldata = this.lData;
    this.edata = this.eData;
    this.gdata = this.gData
    if (this.eData) {
      this.edata = "Yes";
    } else {
      this.edata = "No";
    }

  }

}
