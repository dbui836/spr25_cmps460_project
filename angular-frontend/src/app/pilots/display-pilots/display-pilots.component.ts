import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotService } from '../pilot.service';



@Component({
  selector: 'app-display-pilots',
  imports: [CommonModule],
  templateUrl: './display-pilots.component.html',
  styleUrl: './display-pilots.component.css',
})
export class DisplayPilotsComponent {
  pilots: any[] = []; 
  selectedPilotID: number | null = null; // to color the selected pilot

  @Output() curr_pilot = new EventEmitter<number>(); // to emit ID for edit-delete

  constructor(private pilotService: PilotService) {}

  ngOnInit(): void {

    this.pilotService.getAllPilots().subscribe(
        response => {this.pilots = response;}

    );

  }

  selectPilot(pilotID: number): void {
    this.selectedPilotID = pilotID;
    this.curr_pilot.emit(pilotID); // emit selected pilotID to parent component
  }

}
