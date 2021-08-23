import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <div
      [style.background]="vaccined === 0 ? 'red' : 'green'"
      style="float: left; margin: 10px; padding: 10px;"
    >
      <p>Name:{{ name | uppercase }}</p>
      <p>Age:{{ age }}</p>
      <p>Date:{{ date}}</p>
      <p>Disease:{{ disease }}</p>
      <p>VaccineType:{{ vaccineType }}</p>
      <p>Vaccined:{{ vaccined }}</p>
      <p>Doses:{{ doses }}</p>



      <button  *ngIf= "!vaccined" (click)="onVacunar()"
      
      [disabled]="age<18">Vacunar</button>
      
    </div>
  `
})
export class PersonComponent implements OnInit {


  //age<18 && disease=true
  @Input() name: string;
  @Input() age: number;
  @Input() date: string;
  @Input() disease: boolean;
  @Input() vaccineType: string;
  @Input() vaccined: number;
  @Input() doses: number;

  @Output() vacunar = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onVacunar() {
    this.vacunar.emit();
  }
}
