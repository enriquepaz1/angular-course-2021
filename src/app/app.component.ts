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
  vacArray: [] = [];
  noVacArray: [] = [];
  vacunadosArray: Vaccinates[] = [];

  constructor(private vacunasService: VacunasService) {}
  ngOnInit(): void {
    this.vacunasService.getAllVacunados().subscribe(res => {
      console.log('Response', Object.entries(res));
    });

    this.vacunasService.getAllNoVacunados().subscribe(res => {
      console.log('Response', Object.entries(res));
    });

    this.getVacunados();
    this.getNoVacunados();
  }

  // personasVacunadas = {
  //vacunados: this.vacunadosArray.filter(p => p.vaccined === 1),
  //noVacunados: this.vacunadosArray.filter(p => p.vaccined === 0)
  //};

  getVacunados(): void {
    this.vacunasService.getAllVacunados().subscribe(
      res =>
        (this.vacArray = Object.entries(res).map((m: any) => ({
          id: m[0],
          ...m[1]
        })))
    );
  }

  getNoVacunados(): void {
    this.vacunasService.getAllNoVacunados().subscribe(
      res =>
        (this.noVacArray = Object.entries(res).map((m: any) => ({
          id: m[0],
          ...m[1]
        })))
    );
  }

  verificarVacunados() {
    const verificar = this.noVacArray.filter(p => p.age > 18);
    return verificar.length === 0;
  }
}
