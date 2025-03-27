import { Component } from '@angular/core';
import { DisplayPilotsComponent } from '../display-pilots/display-pilots.component';
import { EditDeletePilotComponent } from '../edit-delete-pilot/edit-delete-pilot.component';

@Component({
  selector: 'app-pilots-page',
  imports: [DisplayPilotsComponent, EditDeletePilotComponent],
  templateUrl: './pilots-page.component.html',
  styleUrl: './pilots-page.component.css'
})
export class PilotsPageComponent {
  selectedPilotID: number | null = null; // get from displayPilot Component to pass to edit-delete-pilot component

  
  OnPilotSelected(pilotID: number): void {
    this.selectedPilotID = pilotID; 
  }
}
