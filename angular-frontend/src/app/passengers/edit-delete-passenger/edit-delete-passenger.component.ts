import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerService } from '../passenger.service';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-delete-passenger',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-delete-passenger.component.html',
  styleUrl: './edit-delete-passenger.component.css'
})
export class EditDeletePassengerComponent {

  @Input() edit_delete_passID: number | null = null; // recieve selected passID
    passenger: any = {}; // store passenger info to be displayed in form
  
    count: number = 0;
    @Output() tableChanged = new EventEmitter<number>(); // to emit count++ for display when table changed
  
  
    constructor(private passengerService: PassengerService, private router: Router) { }


    // when edit_delete_pilotID changes, update the form
  ngOnChanges(changes: SimpleChanges): void {
    // if pilotID was changed and it's not null
    if (changes['edit_delete_passID'] && this.edit_delete_passID !== null) {

      // get new pilot info to display in form
      this.passengerService.getPassengerById(this.edit_delete_passID).subscribe(
        (response) => { this.passenger = response; }
      );

    }
  }

  updatePassenger(): void {

    if (this.passenger && this.passenger.passID) {
      
      console.log('Passenger to update:', this.passenger); // debug info
      this.passengerService.updatePassenger(this.passenger).subscribe(
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

  deletePassenger(): void{
    if (this.passenger && this.passenger.passID) {
      
      this.passengerService.deletePassengerByID(Number(this.passenger.passID)).subscribe(
        response => {
          // Clears form of old pilot info
          this.passenger.passID = null; // disable button pressing until new pilot selected
          this.passenger.pass_fname = '';
          this.passenger.pass_lname = '';

          // signal to refresh table
          this.count += 1;
          this.tableChanged.emit(this.count);
          alert('Deletion success ! Congratulation, you deleted a passenger from existence ! '); // use native browser alert to display status
        },
        error => {
          alert('Error cannot delete passenger');
        }
      );
    }
  }

  goToMySeats(): void{
    if (this.edit_delete_passID !== null){
      this.router.navigate(['/mySeats', this.edit_delete_passID]);
    }
  }
}
