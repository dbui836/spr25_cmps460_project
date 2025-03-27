import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotService } from '../pilot.service';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-delete-pilot',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-delete-pilot.component.html',
  styleUrl: './edit-delete-pilot.component.css'
})
export class EditDeletePilotComponent {

  @Input() edit_delete_pilotID: number | null = null; // recieve selected pilotID
  pilot: any = {}; // store pilot info to be displayed in form


  constructor(private pilotService: PilotService) { }

  // when edit_delete_pilotID changes, update the form
  ngOnChanges(changes: SimpleChanges): void {
    // if pilotID was changed and it's not null
    if (changes['edit_delete_pilotID'] && this.edit_delete_pilotID !== null) {

      // get new pilot info to display in form
      this.pilotService.getPilotById(this.edit_delete_pilotID).subscribe(
        (response) => { this.pilot = response; }
      );

    }
  }

  updatePilot(): void {
    // Safety check for number field before update
    if (this.pilot.consec_hrs_flown < 0 || this.pilot.consec_hrs_flown === null) {
      alert('Consecutive hours flown must be a non-negative number.');
      return;
    }


    if (this.pilot && this.pilot.pltID) {
      
      console.log('Pilot to update:', this.pilot); // debug info
      this.pilotService.updatePilotByID(this.pilot).subscribe(
        response => {
          alert('Pilot updated successfully!'); // use native browser alert to display status
        },
        error => {
          alert('Error updating pilot.');
        }
      );
    }
  }

}
