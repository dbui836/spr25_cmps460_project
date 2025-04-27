import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneService } from '../plane.service';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-delete-plane',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-delete-plane.component.html',
  styleUrl: './edit-delete-plane.component.css'
})
export class EditDeletePlaneComponent {

  @Input() edit_delete_planeID: number | null = null; // recieve selected planeID
  plane: any = {}; // store plane info to be displayed in form

  count: number = 0;
  @Output() tableChanged = new EventEmitter<number>(); // to emit count++ for display when table changed

  constructor(private planeService: PlaneService) { }

  // when edit_delete_planeID changes, update the form
  ngOnChanges(changes: SimpleChanges): void {
    // if planeID was changed and it's not null
    if (changes['edit_delete_planeID'] && this.edit_delete_planeID !== null) {

      // get new plane info to display in form
      this.planeService.getPlaneById(this.edit_delete_planeID).subscribe(
        (response) => { this.plane = response; }
      );

    }
  }

  updatePlane(): void {
    // Safety check for number field before update
    if (this.plane.hrs_flown < 0 || this.plane.hrs_flown === null) {
      alert('Consecutive hours flown must be a non-negative number.');
      return;
    }


    if (this.plane && this.plane.planeID) {
      
      console.log('Plane to update:', this.plane); // debug info
      this.planeService.updatePlane(this.plane).subscribe(
        response => {
          this.count += 1;
          this.tableChanged.emit(this.count);
          alert('Plane updated successfully!'); // use native browser alert to display status
        },
        error => {
          alert('Error updating plane.');
        }
      );
    }
  }

  deletePlane(): void{
    if (this.plane && this.plane.planeID) {
      
      this.planeService.deletePlaneByID(Number(this.plane.planeID)).subscribe(
        response => {
          // Clears form of old plane info
          this.plane.planeID = null; // disable button pressing until new plane selected
          this.plane.modelID = null;
          this.plane.hrs_flown = null;

          // signal to refresh table
          this.count += 1;
          this.tableChanged.emit(this.count);
          alert('Deletion success !'); // use native browser alert to display status
        },
        error => {
          alert('Error cannot delete plane');
        }
      );
    }
  }

}
