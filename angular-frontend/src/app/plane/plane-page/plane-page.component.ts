import { Component } from '@angular/core';
import { DisplayPlaneComponent } from '../display-plane/display-plane.component';
import { EditDeletePlaneComponent } from '../edit-delete-plane/edit-delete-plane.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plane-page',
  imports: [ DisplayPlaneComponent, EditDeletePlaneComponent ],
  templateUrl: './plane-page.component.html',
  styleUrl: './plane-page.component.css'
})
export class PlanePageComponent {
  selectedPlaneID: number | null = null; // get from displayPilot Component to pass to edit-delete-pilot component
  change: number | null = null;
  
  OnPlaneSelected(planeID: number): void {
    this.selectedPlaneID = planeID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
