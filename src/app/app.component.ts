import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'anddgular2021';

  allVacunados = [
    {
      name: 'juan',
      age: 16,
      date: '2019-09-07T15:50+00Z',
      disease: true,
      vaccineType: 'A',
      vaccined: 0,
      doses: 0
    },
    {
      name: 'maria',
      age: 23,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'B',
      vaccined: 1,
      doses: 2
    },
    {
      name: 'carla',
      age: 45,
      date: '2019-09-07T15:50+00Z',
      disease: true,
      vaccineType: 'C',
      vaccined: 0,
      doses: 0
    },
    {
      name: 'marco',
      age: 50,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'A',
      vaccined: 1,
      doses: 1
    },
    {
      name: 'marta',
      age: 12,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'A',
      vaccined: 0,
      doses: 0
    },
    {
      name: 'jorge',
      age: 36,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'C',
      vaccined: 1,
      doses: 3
    },
    {
      name: 'maritza',
      age: 18,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'C',
      vaccined: 0,
      doses: 0
    },
    {
      name: 'leonardo',
      age: 35,
      date: '2019-09-07T15:50+00Z',
      disease: true,
      vaccineType: 'B',
      vaccined: 0,
      doses: 0
    },
    {
      name: 'ramiro',
      age: 24,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'B',
      vaccined: 1,
      doses: 2
    },
    {
      name: 'juana',
      age: 13,
      date: '2019-09-07T15:50+00Z',
      disease: false,
      vaccineType: 'A',
      vaccined: 0,
      doses: 0
    }
  ];

  personas = {
    vacunados: this.allVacunados.filter(p => p.vaccined),
    noVacunados: this.allVacunados.filter(p => !p.vaccined)
  };

  verificarVacunados() {
    const enf = this.personas.vacunados.filter(p => (p.disease = true));
    const noEnf = this.personas.noVacunados.filter(p => (p.disease = false));
    return enf.length + noEnf.length === 0;
  }

  //vacunar(person,status){
  //const estado= this.personas[status].findIndex(p=>p===person);
  //this.personas[status].splice(estado,1);
  //this.personas.vacunados.push({...estado,vacunado:true});

  //}
}
