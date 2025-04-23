import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../flight.service';
import { SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-display-flight',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './display-flight.component.html',
  styleUrl: './display-flight.component.css'
})
export class DisplayFlightComponent {
  flights: any[] = []; 
  selectedFlightID: number | null = null; // to color the selected pilot

  @Output() curr_flight = new EventEmitter<number>(); // to emit ID for edit-delete
  @Input() updateTable: number | null = null; // recieved when edit-delete changed something

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {

    this.loadFlights();

  }

  // when table updated via edit-delete, re-get the new pilot table
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updateTable']){
      this.loadFlights();
    }
  }

  loadFlights(): void{
    this.flightService.getFlights().subscribe(
      response => {this.flights = response;}
    );
  }

  selectFlight(flightID: number): void {
    this.selectedFlightID = flightID;
    this.curr_flight.emit(flightID); // emit selected pilotID to parent component
  }
}
