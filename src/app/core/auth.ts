import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Iniciar sesión
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logout() {
    return this.afAuth.signOut();
  }

  // Crear usuario
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Recuperar contraseña
  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  // Obtener estado del usuario (observable)
  get user() {
    return this.afAuth.authState;
  }

  // Obtener usuario actual (promesa)
  getCurrentUser() {
    return this.afAuth.currentUser;
  }
}
