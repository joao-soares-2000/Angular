import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ["backGroundTitle", "colorTitle"];

  underline = 'underline-title';

  smallText = ['font-size','font-family','font-color'];

  constructor() { }

  ngOnInit(): void {
  }

}
