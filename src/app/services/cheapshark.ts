import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheapsharkService {
  private baseUrl = 'https://www.cheapshark.com/api/1.0';

  constructor(private http: HttpClient) {}

  // 🔍 Buscar juegos por nombre
  searchGames(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/games`, {
      params: { title }
    });
  }

  // 🏷️ Obtener ofertas destacadas
  getDeals(): Observable<any> {
    return this.http.get(`${this.baseUrl}/deals`, {
      params: { storeID: '1', pageSize: 10 } // Steam por defecto
    });
  }
}
