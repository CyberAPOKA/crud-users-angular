import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    // Verifica se o usuário já está logado ao inicializar o serviço
    this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  }

  // Método de login
  login(username: string, password: string): boolean {
    // Para fins de estudo, qualquer username e password funcionam
    if (username && password) {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Método de logout
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  // Verifica se o usuário está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
