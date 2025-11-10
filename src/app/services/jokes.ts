import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private baseUrl = 'https://v2.jokeapi.dev';

  constructor(private http: HttpClient) {}

  // Obtener un chiste aleatorio en español
  getRandomJoke(): Observable<any> {
    return this.http.get(`${this.baseUrl}/joke/Any?lang=es`);
  }
}
