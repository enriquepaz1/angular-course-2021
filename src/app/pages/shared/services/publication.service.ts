import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PublicationService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${this.url}/publications.json`)
  }

}
