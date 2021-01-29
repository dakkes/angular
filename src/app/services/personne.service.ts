import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../interfaces/personne';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  url = 'http://localhost:8080/cours-jersey/webapi/personnes';
  constructor(private http: HttpClient) {
   }
  getAll(): Observable<Array<Personne>>{
    return this.http.get<Array<Personne>>(this.url);
  }
  addPerson(p: Personne): void {
  }
}