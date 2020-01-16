import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabalhao',
  // template:`<div><p>Someone</p> 
  // <p>From You : {{cdata}} <br><input type="text" [(ngModel)]="pdata"/><button>Send</button><hr/>
  // <app-child (childEvent)="cdata=$event" [parentData]="pdata">
  // </app-child></div>`,
  styles: ['form{background-color: red;}']


})
export class ManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSend(){
    
}

}
