import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../flight.service';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-delete-flight',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-delete-flight.component.html',
  styleUrl: './edit-delete-flight.component.css'
})
export class EditDeleteFlightComponent {

    @Input() edit_delete_flightID: number | null = null; // recieve selected pilotID
    flight: any = {}; // store flight info to be displayed in form
    validPilots: number[] = [];
   
  
    count: number = 0;
    @Output() tableChanged = new EventEmitter<number>(); // to emit count++ for display when table changed
  
  
    constructor(private flightService: FlightService, private router: Router) { }
  
  
  
    // when edit_delete_pilotID changes, update the form
    ngOnChanges(changes: SimpleChanges): void {
      // if pilotID was changed and it's not null
      if (changes['edit_delete_flightID'] && this.edit_delete_flightID !== null) {
  
        // get new flight info to display in form
        this.flightService.getFlightById(this.edit_delete_flightID).subscribe(
          (response) => { this.flight = response; 
            this.getValidPilots();
          }
        );

      }
    }
  
    updateFlight(): void {

      if (this.flight && this.flight.flightID) {

        this.flightService.updateFlight(this.flight).subscribe(
          response => {
            this.count += 1;
            this.tableChanged.emit(this.count);
            alert('Flight updated successfully!'); // use native browser alert to display status
          },
          error => {
            alert('Error updating flight.');
          }
        );
      }
    }
  
    deleteFlight(): void{
      if (this.flight && this.flight.flightID) {
        
        this.flightService.deleteFlightByID(Number(this.flight.flightID)).subscribe(
          response => {
            // Clears form of old pilot info
            this.flight.flightID = null; // disable button pressing until new pilot selected
            this.flight.scr = '';
            this.flight.dest = '';
            this.flight.planeID = null;
            this.flight.plt1_ID = null;
            this.flight.plt2_ID = null;
  
            // signal to refresh table
            this.count += 1;
            this.tableChanged.emit(this.count);
            alert('Deletion success ! '); // use native browser alert to display status
          },
          error => {
            alert('Error cannot delete flight');
          }
        );
      }
    }

    getValidPilots(){
      this.flightService.getValidPilots(this.flight.planeID, this.flight.scr).subscribe(
        response => {this.validPilots = response;}
      );

    }

    goToSeats(): void{
      if (this.flight.flightID !== null){
        this.router.navigate(['/flightSeats', this.flight.flightID]);
      }
    }

}
