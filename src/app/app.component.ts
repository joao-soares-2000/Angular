import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Caio';

  userData = {
    email: 'teste@email.com',
    role: 'normalUser',
  };

  userCar = {
    name: 'Celta',
    engine: '1.0',
    year: 2020,
  };
  title = 'curso-angular';
}
