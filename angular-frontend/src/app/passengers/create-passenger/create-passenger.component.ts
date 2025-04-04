import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassengerService } from '../passenger.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-passenger',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-passenger.component.html',
  styleUrl: './create-passenger.component.css'
})
export class CreatePassengerComponent {

  constructor(private router: Router, private passengerService: PassengerService) { }
  
    passenger: any = {};
  
    createPassenger(): void{
  
      if (this.passenger) {
        
        console.log('Pilot to add:', this.passenger); // debug info
        this.passengerService.createPassenger(this.passenger).subscribe(
          response => {
            this.router.navigate(['/passengers']);
            alert('Passenger added successfully !'); // use native browser alert to display status
          },
          error => {
            alert('Error adding passenger.');
          }
        );
      }
      
    }
}
