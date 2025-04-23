import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayFlightComponent } from '../display-flight/display-flight.component';
import { EditDeleteFlightComponent } from '../edit-delete-flight/edit-delete-flight.component';

@Component({
  selector: 'app-flight-page',
  imports: [DisplayFlightComponent, EditDeleteFlightComponent, RouterLink],
  templateUrl: './flight-page.component.html',
  styleUrl: './flight-page.component.css'
})
export class FlightPageComponent {
  selectedFlightID: number | null = null; // get from displayFlight Component to pass to edit-delete-flight component
  change: number | null = null;
  
  OnFlightSelected(pilotID: number): void {
    this.selectedFlightID = pilotID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
