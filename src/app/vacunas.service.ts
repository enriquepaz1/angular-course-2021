import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VacunasService {

  constructor(private http:HttpClient) { }

   public getAllVacunados():Observable <any>{
     return this.http.get(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json`
      
     );
   }

   public getAllNoVacunados():Observable <any>{
    return this.http.get(
     `https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated.json`
     
    );
  }
   
   public createVacunados(body:any):Observable<any>{
         return this.http.post(
          `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json`,body
         );
   }

   public createNoVacunados(body:any):Observable<any>{
    return this.http.post(
     `https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated.json`,body
    );
}

  public updateVacunados(id: string, body:any):Observable<any>{
    return this.http.put(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated/{id}.json`,body)
    }

   public updateNoVacunados(id: string, body:any):Observable<any>{
    return this.http.put(
      `https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated/{id}.json`,body)
  }

  public deleteVacunados (id: string):Observable<any>{
    return this.http.delete(
      `https://vaccines-test-default-rtdb.firebaseio.com/vaccinated/{id}.json`
    )
  }
  public deleteNoVacunados (id: string):Observable<any>{
    return this.http.delete(
      `https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated/{id}.json`
    )
  }



}