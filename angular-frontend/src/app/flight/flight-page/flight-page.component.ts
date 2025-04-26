import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DisplayFlightComponent } from '../display-flight/display-flight.component';
import { EditDeleteFlightComponent } from '../edit-delete-flight/edit-delete-flight.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-flight-page',
  imports: [DisplayFlightComponent, EditDeleteFlightComponent, RouterLink],
  templateUrl: './flight-page.component.html',
  styleUrl: './flight-page.component.css'
})
export class FlightPageComponent implements OnInit {
  selectedFlightID: number | null = null; // get from displayFlight Component to pass to edit-delete-flight component
  change: number | null = null;
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  OnFlightSelected(pilotID: number): void {
    this.selectedFlightID = pilotID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
