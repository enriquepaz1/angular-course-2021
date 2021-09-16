import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}