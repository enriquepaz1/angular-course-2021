import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'enrique-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  @Input('status') statusTest:string= 'working';

  constructor() { }

  ngOnInit() {
  }

}