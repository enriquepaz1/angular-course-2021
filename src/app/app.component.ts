import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  data=[1,2,3,4,5,6,7,8,9];
  
  constructor() {
    this.pure(2, 3);
    this.pure(5, 4);
    this.pure(3, 4);

    this.impure(2, 3);
    this.impure(5, 4);
    this.impure(3, 4);
  }

  pure(a: number, b: number) {
    console.log(a + b);
    return a + b;
  }

  impure(a: number, b: number) {
    const aux = Math.random();
    console.log(a + b + aux);
    return a + b + aux;
  }
}
