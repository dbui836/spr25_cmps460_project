import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotService } from '../pilot.service';
import { SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-display-pilots',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './display-pilots.component.html',
  styleUrl: './display-pilots.component.css',
})
export class DisplayPilotsComponent {
  pilots: any[] = []; 
  selectedPilotID: number | null = null; // to color the selected pilot

  @Output() curr_pilot = new EventEmitter<number>(); // to emit ID for edit-delete
  @Input() updateTable: number | null = null; // recieved when edit-delete changed something

  filterLicense: any = "All";
  filterConsecHrs: number | null = null;

  constructor(private pilotService: PilotService) {}

  ngOnInit(): void {

    this.loadPilots();

  }

  // when table updated via edit-delete, re-get the new pilot table
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updateTable']){
      this.loadPilots();
    }
  }

  loadPilots(): void{
    this.pilotService.getPilots(this.filterLicense, this.filterConsecHrs).subscribe(
      response => {this.pilots = response;}
    );
  }

  selectPilot(pilotID: number): void {
    this.selectedPilotID = pilotID;
    this.curr_pilot.emit(pilotID); // emit selected pilotID to parent component
  }

}
