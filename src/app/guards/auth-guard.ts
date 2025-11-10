import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/auth';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.user.pipe(
      take(1), // toma un valor y completa
      map(user => {
        if (user) {
          // Si hay usuario autenticado, permite el acceso
          return true;
        } else {
          // Si no hay sesión, redirige al login
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
