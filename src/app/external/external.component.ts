import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {
  title:string="This is an Interpolation bindings!"
  IsActive=true;
  onClick(){
    alert("This is an Event Bindings")
  }
  property:string="This is a Property Bindings!"
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQmaHBDjzK-yFvbTNpVv8TcXlKcw-JPlmFjtcm62rG0Eq-KPbS"




  constructor() { }

  ngOnInit() {
  }

}
