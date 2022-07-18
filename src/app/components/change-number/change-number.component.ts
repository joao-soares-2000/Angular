import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter <any> = new EventEmitter();
  @Output() trocaNumber: EventEmitter <any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
  }

  usaClick(){
    this.trocaNumber.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
