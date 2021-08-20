import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
    <p class="hola">
      admin2 works!
    </p>
  `,

  style: [
    `
  .hola{
  background-color: yellow;
    color: red;
     }
   `
  ]
})
export class Admin2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  /**
   * @param name
   * @params lastName
   * return name and lastName joined
   *
   *
   */

  public testParams(name: string, lastName: string): string {
    console.log(name + '' + lastName);
    return name + '' + lastName;
  }
}
