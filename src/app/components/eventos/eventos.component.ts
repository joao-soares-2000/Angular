import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show = false;
  message = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show;
  }

  switchMessage(): void {
    this.message = !this.message;
  }
}
