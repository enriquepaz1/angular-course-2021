import { Component } from '@angular/core';
import routerPreserveQueryParams from '@angular/core/schematics/migrations/router-preserve-query-params';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  id: number = 3;
  title = 'angular2021';
  data=[1,2,3,4,5,6,7,8,9];
  
  constructor(private router:Router) {
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


  onGoView2FromTS():void{
  this.router.navigate(['view2',this.id, 'sub', 3333]),
   {queryParams: {name:'enrique', lastName:'paz'}}
  }
  

}
