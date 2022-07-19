import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {
  myNumber: number = 0;
  otherNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onchangeNumber() {
    this.myNumber = Math.random();
  }

  ontrocaNumber(){
    this.otherNumber = this.otherNumber + 1;
  }
}
