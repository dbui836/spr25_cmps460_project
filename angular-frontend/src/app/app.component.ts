import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FlyingPlaneComponent } from './flyingPlane/flying-plane/flying-plane.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FlyingPlaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-frontend';
}
