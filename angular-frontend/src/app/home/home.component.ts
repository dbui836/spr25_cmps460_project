import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  imports: [ ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (public authService: AuthService) { }

  username = new FormControl('');
  password = new FormControl('');

  submitLogin(): void {
    if (this.username.value != null && this.password.value != null) {
      this.authService.authenticate(this.username.value, this.password.value);
    }
  }

  submitLogout(): void {
    this.authService.logout();
  }
}
