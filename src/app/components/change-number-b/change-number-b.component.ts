import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number-b',
  templateUrl: './change-number-b.component.html',
  styleUrls: ['./change-number-b.component.css']
})
export class ChangeNumberBComponent implements OnInit {
  @Output() trocaNumber: EventEmitter <any> = new EventEmitter();

  usaClick(){
    this.trocaNumber.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
