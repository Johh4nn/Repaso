import { Component } from '@angular/core';
import { AuthService } from '../../core/auth';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';
  isRegistering = false;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.navCtrl.navigateRoot('/tabs'); // Ir al home principal
    } catch (err: any) {
      this.showAlert('Error', this.getFriendlyError(err.message));
    }
  }

  async register() {
    if (!this.email || !this.password) {
      this.showAlert('Aviso', 'Debes ingresar correo y contraseña');
      return;
    }
    try {
      await this.authService.register(this.email, this.password);
      this.showAlert('Cuenta creada', 'Tu cuenta ha sido registrada correctamente');
      this.isRegistering = false; // volver al modo login
    } catch (err: any) {
      this.showAlert('Error', this.getFriendlyError(err.message));
    }
  }

  async forgotPassword() {
    if (!this.email) {
      this.showAlert('Aviso', 'Ingresa tu correo primero');
      return;
    }
    try {
      await this.authService.resetPassword(this.email);
      this.showAlert('Correo enviado', 'Revisa tu bandeja de entrada');
    } catch (err: any) {
      this.showAlert('Error', this.getFriendlyError(err.message));
    }
  }

  toggleRegister() {
    this.isRegistering = !this.isRegistering;
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({ header, message, buttons: ['OK'] });
    await alert.present();
  }

  private getFriendlyError(error: string): string {
    if (error.includes('auth/email-already-in-use')) {
      return 'Este correo ya está registrado.';
    }
    if (error.includes('auth/invalid-email')) {
      return 'El correo electrónico no es válido.';
    }
    if (error.includes('auth/weak-password')) {
      return 'La contraseña debe tener al menos 6 caracteres.';
    }
    if (error.includes('auth/user-not-found')) {
      return 'No existe una cuenta con ese correo.';
    }
    if (error.includes('auth/wrong-password')) {
      return 'Contraseña incorrecta.';
    }
    return 'Ocurrió un error inesperado.';
  }
}
