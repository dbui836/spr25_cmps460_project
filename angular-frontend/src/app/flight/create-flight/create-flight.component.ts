import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../flight.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-flight',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-flight.component.html',
  styleUrl: './create-flight.component.css'
})
export class CreateFlightComponent {

  constructor(private router: Router, private flightService: FlightService) {
    this.getValidPlanes();

  }

  flight: any = {};
  validPilots: number[] = [];
  planeIDs: number[] = [];

  createFlight(): void{

    if (this.flight) {
      
      this.flightService.createFlight(this.flight).subscribe(
        response => {
          this.router.navigate(['/flights']);
          alert('Flight added successfully !'); // use native browser alert to display status
        },
        error => {
          alert('Error adding flight.');
        }
      );
    }
    
  }

  getValidPlanes(){
    this.flightService.getValidPlanes().subscribe(
      response => {this.planeIDs = response;}
    );
  }

  getValidPilots(){
    this.flightService.getValidPilots(this.flight.planeID, this.flight.scr).subscribe(
      response => {this.validPilots = response;}
    );

  }
}
