import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class TransaccionService {
  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${this.url}/transactions.json`);
  }

  public create(body: any): Observable<any> {
    return this.http.post(`${this.url}/transactions.json`, body);
  }

  public update(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/transactions/${id}.json`, body);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/transactions/${id}.json`);
  }
}
