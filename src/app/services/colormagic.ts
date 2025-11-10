import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColormagicService {
  // Usa el proxy local en desarrollo, pero el dominio real al compilar el APK
  private baseUrl =
    window.location.hostname === 'localhost'
      ? '/api-colormagic/palette'
      : 'https://colormagic.app/api/palette';

  constructor(private http: HttpClient) {}

  searchPalettes(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${query}`);
  }
}
