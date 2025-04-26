import { Injectable } from '@angular/core';

const USERNAME = "admin"
const PASSWORD = "password"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;
  currentUser: string | null = null;

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  authenticate(username: string, password: string): boolean {
    if (username == USERNAME && password == PASSWORD) {
      this.authenticated = true;
      this.currentUser = username;
    }

    return this.authenticated;
  }

  logout(): void {
    this.authenticated = false;
  }

  constructor() { }
}
