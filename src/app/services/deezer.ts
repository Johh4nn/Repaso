import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  private baseUrl = '/api-deezer';

  constructor(private http: HttpClient) {}

  // Obtener top global
  getTopTracks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/chart/0/tracks`);
  }

  // Buscar canciones por nombre
  searchTracks(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${query}`);
  }

  // Obtener top de un artista específico
  getArtistTop(artistId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/artist/${artistId}/top?limit=10`);
  }
}
