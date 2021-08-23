import { Component, OnInit } from '@angular/core';

@Component({
 

  selector: 'app-admin2',
  template: `
    <p class="hola">
      admin2 works!
    </p>
    <p>{{test2 ?? test3}}</p>
    <p>{{test2 || 'cscxcxc'}}</p>
    <p>{{testA ?? 'No existe'}}</p>  
    <button (click)="testParams('dkmsd')">test</button>
  `,

  styles:[
    `
    .hola{
     background-color: yellow;
      color:red;
     }
   `
  ]
  
})
export class Admin2Component implements OnInit {
  test2 = null;
  test3= 'maria';


  testA=0
  testB=0
  testC="n/a"

   test=[
    {name:"a", status: 0},
    {name: "b", status: 0},
    {name: "c", status: null}

   ]


  constructor() {}

  ngOnInit() {}

  /**
   * @param name
   * @params lastName
   * return name and lastName joined
   *
   *
   */

  public testParams(name: string, lastName?: string='gutierrez'): string {
    const aux='juan';

    console.log((name ?? aux) + '' + lastName);
    return name + '' + lastName;
  }
}
