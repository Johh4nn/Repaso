import { Component, OnInit } from '@angular/core';
import { CheapsharkService } from '../../app/services/cheapshark';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: false
})
export class Tab3Page implements OnInit {
  games: any[] = [];
  searchTerm = '';
  loading = false;

  constructor(private cheapsharkService: CheapsharkService) {}

  ngOnInit() {
    this.loadDeals();
  }

  loadDeals() {
    this.loading = true;
    this.cheapsharkService.getDeals().subscribe({
      next: (res) => {
        this.games = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar ofertas', err);
        this.loading = false;
      }
    });
  }

  searchGame() {
    if (!this.searchTerm.trim()) return;
    this.loading = true;
    this.cheapsharkService.searchGames(this.searchTerm).subscribe({
      next: (res) => {
        this.games = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error en la búsqueda', err);
        this.loading = false;
      }
    });
  }

  // 👇 Método auxiliar para obtener nombre y precio dinámicos
  getTitle(game: any): string {
    return game.title || game.external || 'Sin título';
  }

  getPrice(game: any): string {
    return game.salePrice || game.cheapest || 'N/A';
  }
}
