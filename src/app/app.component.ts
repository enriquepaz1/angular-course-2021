import { Component } from '@angular/core';
import { VACCINATED } from './model/vaccinated';
import { VacunasService } from './vacunas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  vacunadosArray: Vaccinates[] = [
    {
      age: 23,
      date: '2020-12-03T18:30:00.000Z',
      disease: false,
      doses: 2,
      name: 'maria',
      vaccineType: 'B',
      vaccined: 1
    },
    {
      age: 50,
      date: '2029-12-03T18:30:00.000Z',
      disease: false,
      doses: 1,
      name: 'marco',
      vaccineType: 'A',
      vaccined: 1
    },
    {
      age: 36,
      date: '2021-12-03T18:30:00.000Z',
      disease: false,
      doses: 3,
      name: 'jorge',
      vaccineType: 'C',
      vaccined: 1
    },
    {
      age: 24,
      date: '2019-12-03T18:30:00.000Z',
      disease: false,
      doses: 2,
      name: 'ramiro',
      vaccineType: 'B',
      vaccined: 1
    },

    {
      age: 16,
      date: '2021-10-03T18:30:00.000Z',
      disease: true,
      doses: 0,
      name: 'juan',
      vaccineType: 'A',
      vaccined: 0
    },
    {
      age: 45,
      date: '2021-12-03T18:30:00.000Z',
      disease: true,
      doses: 0,
      name: 'carla',
      vaccineType: 'C',
      vaccined: 0
    },
    {
      age: 12,
      date: '2021-01-03T18:30:00.000Z',
      disease: false,
      doses: 0,
      name: 'marta',
      vaccineType: 'A',
      vaccined: 0
    },
    {
      age: 18,
      date: '2021-11-03T18:30:00.000Z',
      disease: false,
      doses: 0,
      name: 'maritza',
      vaccineType: 'C',
      vaccined: 0
    },
    {
      age: 35,
      date: '2021-02-03T18:30:00.000Z',
      disease: true,
      doses: 0,
      name: 'leonardo',
      vaccineType: 'B',
      vaccined: 0
    },
    {
      age: 13,
      date: '2021-12-03T18:30:00.000Z',
      disease: false,
      doses: 0,
      name: 'juana',
      vaccineType: 'A',
      vaccined: 0
    }
  ];

  constructor(private vacunasService: VacunasService) {}
  ngOnInit(): void {
    this.vacunasService.getAllVacunados().subscribe(res => {
      console.log('Response', Object.entries(res));
    });

    this.vacunasService.getAllNoVacunados().subscribe(res => {
      console.log('Response', Object.entries(res));
    });
  }

  personasVacunadas = {
    vacunados: this.vacunadosArray.filter(p => p.vaccined === 1),
    noVacunados: this.vacunadosArray.filter(p => p.vaccined === 0)
  };

  verificarVacunados() {
    const verificar = this.personasVacunadas.noVacunados.filter(
      p => p.age > 18
    );
    return verificar.length === 0;
  }
}
