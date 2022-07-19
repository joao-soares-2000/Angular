import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'
  private apiUrl2 = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.nome !== a.nome)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  geTudo(): Observable <Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl2)
  }

}
