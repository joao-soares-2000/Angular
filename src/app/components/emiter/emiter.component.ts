import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {
  myNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onchangeNumber() {
    this.myNumber = Math.random();
  }

  ontrocaNumber(){
    this.myNumber = this.myNumber+ 1 ;
  }
}
