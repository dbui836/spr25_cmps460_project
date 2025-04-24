import { Component } from '@angular/core';
import { DisplayPassengerComponent } from '../display-passenger/display-passenger.component';
import { EditDeletePassengerComponent } from '../edit-delete-passenger/edit-delete-passenger.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passenger-page',
  imports: [DisplayPassengerComponent, EditDeletePassengerComponent, RouterLink],
  templateUrl: './passenger-page.component.html',
  styleUrl: './passenger-page.component.css'
})
export class PassengerPageComponent {
  selectedPassengerID: number | null = null; // get from displayPilot Component to pass to edit-delete-pilot component
  change: number | null = null;

  constructor(private router: Router) {}
  
  OnPassengerSelected(pilotID: number): void {
    this.selectedPassengerID = pilotID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
