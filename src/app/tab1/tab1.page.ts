import { Component } from '@angular/core';
import { LrclibService } from '../services/lrclib';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false
})
export class Tab1Page {
  query = '';
  artist = '';
  results: any[] = [];
  selectedLyrics: string | null = null;

  constructor(private lrclib: LrclibService) {}

  search() {
    this.selectedLyrics = null;
    this.results = [];

    this.lrclib.searchTracks({
      track_name: this.query,
      artist_name: this.artist
    }).subscribe({
      next: (res) => {
        this.results = res;
        console.log('Resultados:', res);
      },
      error: (err) => {
        console.error('Error buscando:', err);
      }
    });
  }

  viewLyrics(track: any) {
    this.lrclib.findLyrics({
      track_name: track.trackName,
      artist_name: track.artistName,
      album_name: track.albumName,
      duration: track.duration
    }).subscribe({
      next: (res) => {
        this.selectedLyrics = res?.plainLyrics ?? 'No se encontraron letras.';
      },
      error: (err) => {
        console.error('Error obteniendo letra:', err);
      }
    });
  }
}
