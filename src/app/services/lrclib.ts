import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Query {
  track_name: string;
  artist_name?: string;
  album_name?: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class LrclibService {
  private baseUrl = 'https://lrclib.net/api';

  constructor(private http: HttpClient) {}

  /**
   * 🔍 Buscar canciones por nombre y artista (puede devolver varias coincidencias)
   */
  searchTracks(query: Query): Observable<any> {
    let params = new HttpParams().set('track_name', query.track_name);

    if (query.artist_name) params = params.set('artist_name', query.artist_name);
    if (query.album_name) params = params.set('album_name', query.album_name);
    if (query.duration) params = params.set('duration', query.duration.toString());

    return this.http.get(`${this.baseUrl}/search`, { params });
  }

  /**
   * 🎵 Obtener letra completa (una vez tienes el track exacto)
   */
  findLyrics(query: Query): Observable<any> {
    let params = new HttpParams().set('track_name', query.track_name);

    if (query.artist_name) params = params.set('artist_name', query.artist_name);
    if (query.album_name) params = params.set('album_name', query.album_name);
    if (query.duration) params = params.set('duration', query.duration.toString());

    return this.http.get(`${this.baseUrl}/get`, { params });
  }

  /**
   * 📜 Letra sincrónica (tipo karaoke)
   */
  getSynced(query: Query): Observable<any> {
    let params = new HttpParams().set('track_name', query.track_name);
    if (query.artist_name) params = params.set('artist_name', query.artist_name);
    return this.http.get(`${this.baseUrl}/get_synced`, { params });
  }

  /**
   * 🧾 Letra en texto plano (sin tiempos)
   */
  getUnsynced(query: Query): Observable<any> {
    let params = new HttpParams().set('track_name', query.track_name);
    if (query.artist_name) params = params.set('artist_name', query.artist_name);
    return this.http.get(`${this.baseUrl}/get_plain`, { params });
  }
}
