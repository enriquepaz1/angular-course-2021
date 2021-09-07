import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VacunasService {

  constructor(private http:HttpClient) { }

   public getAll():Observable <any>{
     return this.http.get(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json`
      
     );
   }
   
   public create(body:any):Observable<any>{
         return this.http.post(
          `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json`
         );
   }

  //public update(id: string, body:any)Observable<any>{
    //return this.http.put(
      //`https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.jsonvacci//nated/{id}.json`)
 // }
   
  public delete (id: string):Observable<any>{
    return this.http.delete(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.jsonvaccinated/{id}.json`
    )
  }



}