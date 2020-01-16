import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData: string;
  @Input() lData: string;
  @Input() eData: string;
  @Input() gData: string;
  @Output() declined = new EventEmitter();
  @Output() Submit = new EventEmitter();
  public approve = true;
  public decline = true;
  public student = [];
  public students = [];



  // @Output() childEvent = new EventEmitter();
  // public cdata: string;
  constructor() { }

  ngOnInit() {
  }

  // onChange(value: string){
  //   this.childEvent.emit(value);
  // }
  onClickApprove(title: string = "Approved") {
    this.Submit.emit(title);

    console.log(this.parentData)
    this.student.push({ fname: this.parentData, lname: this.lData, status: this.eData, gender: this.gData })

  }
  onClickDecline(title: string = "Declined") {
    this.Submit.emit(title);

    // console.log()
    this.students.push({ fname: this.parentData, lname: this.lData, status: this.eData, gender: this.gData });
    this.declined.emit(this.students);
  }


}
