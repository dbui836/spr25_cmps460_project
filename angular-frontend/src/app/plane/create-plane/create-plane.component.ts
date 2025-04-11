import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaneService } from '../plane.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-plane',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-plane.component.html',
  styleUrl: './create-plane.component.css'
})
export class CreatePlaneComponent {

  constructor(private router: Router, private planeService: PlaneService) { }

  plane: any = {};

  createPlane(): void{

    if (this.plane) {
      
      console.log('Plane to add:', this.plane); // debug info
      this.planeService.createPlane(this.plane).subscribe(
        response => {
          this.router.navigate(['/planes']);
          alert('Plane added successfully !'); // use native browser alert to display status
        },
        error => {
          alert('Error adding pilot.');
        }
      );
    }
    
  }
}
