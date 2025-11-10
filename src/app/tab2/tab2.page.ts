import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})
export class Tab2Page implements OnInit {
  joke: string = '';
  isLoading = false;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {
    this.loadJoke();
  }

  loadJoke() {
    this.isLoading = true;
    this.jokesService.getRandomJoke().subscribe({
      next: (data) => {
        if (data.type === 'single') {
          this.joke = data.joke;
        } else if (data.type === 'twopart') {
          this.joke = `${data.setup}\n\n${data.delivery}`;
        } else {
          this.joke = 'No se encontró un chiste 😅';
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener chiste', err);
        this.joke = 'Error al cargar el chiste 🤕';
        this.isLoading = false;
      }
    });
  }
}
