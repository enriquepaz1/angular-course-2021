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
  vacunadosArray: VACCINATED[]=[

{  
      "P002": {
          "age": 23,
          "date": "2020-12-03T18:30:00.000Z",
          "disease": false,
          "doses": 2,
          "name": "maria",
          "vaccineType": "B",
          "vaccined": 1
      },
      "P004": {
          "age": 50,
          "date": "2029-12-03T18:30:00.000Z",
          "disease": false,
          "doses": 1,
          "name": "marco",
          "vaccineType": "A",
          "vaccined": 1
      },
      "P006": {
          "age": 36,
          "date": "2021-12-03T18:30:00.000Z",
          "disease": false,
          "doses": 3,
          "name": "jorge",
          "vaccineType": "C",
          "vaccined": 1
      },
      "P009": {
          "age": 24,
          "date": "2019-12-03T18:30:00.000Z",
          "disease": false,
          "doses": 2,
          "name": "ramiro",
          "vaccineType": "B",
          "vaccined": 1
      }
    }  
  ];
  
 constructor(private vacunasService: VacunasService){}
   ngOnInit():void{
     this.vacunasService.getAll().subscribe(res=>{
       console.log('Response', res);
     })
   }
  
   personasVacunadas={
     vacunados: this.vacunadosArray.filter(p=>p.vaccined ===1),
     noVacunados: this.vacunadosArray.filter(p=>p.vaccined ===1)
   }
  




}
