import { Component, Input, EventEmitter, Output } from '@angular/core';
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

  count: number = 0;
  @Output() tableChanged = new EventEmitter<number>(); // to emit count++ for display when table changed


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
      this.pilotService.updatePilot(this.pilot).subscribe(
        response => {
          this.count += 1;
          this.tableChanged.emit(this.count);
          alert('Pilot updated successfully!'); // use native browser alert to display status
        },
        error => {
          alert('Error updating pilot.');
        }
      );
    }
  }

  deletePilot(): void{
    if (this.pilot && this.pilot.pltID) {
      
      this.pilotService.deletePilotByID(Number(this.pilot.pltID)).subscribe(
        response => {
          // Clears form of old pilot info
          this.pilot.pltID = null; // disable button pressing until new pilot selected
          this.pilot.plt_fname = '';
          this.pilot.plt_lname = '';
          this.pilot.license = '';
          this.pilot.plt_location = '';
          this.pilot.consec_hrs_flown = null;

          // signal to refresh table
          this.count += 1;
          this.tableChanged.emit(this.count);
          alert('Deletion success ! Congratulation, you just made a pilot homeless ! '); // use native browser alert to display status
        },
        error => {
          alert('Error cannot fire pilot');
        }
      );
    }
  }

}
