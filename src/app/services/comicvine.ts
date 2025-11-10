import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicvineService {
  private baseUrl = 'https://comicvine.gamespot.com/api';
  private apiKey = 'f241aa233bfb71963bd4ad64c1452eafc3366653'; // 🔑 Reemplaza con tu key

  constructor(private http: HttpClient) {}

  searchComics(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/?api_key=${this.apiKey}&format=json&query=${encodeURIComponent(query)}&resources=issue`;
    return this.http.get(url);
  }
}
