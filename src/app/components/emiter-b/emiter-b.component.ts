import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter-b',
  templateUrl: './emiter-b.component.html',
  styleUrls: ['./emiter-b.component.css']
})
export class EmiterBComponent implements OnInit {
otherNumber: number = 0;

  onchangeNumber() {
    this.otherNumber = Math.random();
  }

  ontrocaNumber (){
    this.otherNumber = this.otherNumber +1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
