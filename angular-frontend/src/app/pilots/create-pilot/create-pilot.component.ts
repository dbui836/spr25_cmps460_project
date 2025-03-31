import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PilotService } from '../pilot.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pilot',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-pilot.component.html',
  styleUrl: './create-pilot.component.css'
})
export class CreatePilotComponent {

  constructor(private router: Router, private pilotService: PilotService) { }

  pilot: any = {};

  createPilot(): void{

    if (this.pilot) {
      
      console.log('Pilot to add:', this.pilot); // debug info
      this.pilotService.createPilot(this.pilot).subscribe(
        response => {
          this.router.navigate(['/pilots']);
          alert('Pilot added successfully !'); // use native browser alert to display status
        },
        error => {
          alert('Error adding pilot.');
        }
      );
    }
    
  }
}
