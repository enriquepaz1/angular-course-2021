import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css'],
})
export class TransaccionComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
