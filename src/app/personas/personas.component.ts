import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  template: `
    <div
      [style.background]="vaccined === 0 ? 'red' : 'green'"
      style="float: left; margin: 10px; padding: 10px;"
    >
      <p>Name:{{ name | uppercase }}</p>
      <p>Age:{{ age }}</p>
      <p>Date:{{ date | date: 'dd/MM/yyyy' : '' }}</p>
      <p>Disease:{{ disease ? 'Yes' : 'No' }}</p>
      <p>VaccineType:{{ vaccineType }}</p>
      <p>Vaccined:{{ vaccined ? 'Yes' : 'No' }}</p>
      <p>Doses:{{ doses }}</p>

      <button *ngIf="!vaccined" (click)="onVacunar()" [disabled]="age < 18 || disease" >
        Vacunar
      </button>
    </div>
  `
})
export class PersonasComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Input() date: string;
  @Input() disease: boolean;
  @Input() vaccineType: string;
  @Input() vaccined: number;
  @Input() doses: number;

  constructor() {}

  ngOnInit() {}
}
