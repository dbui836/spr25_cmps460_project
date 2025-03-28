import { Component } from '@angular/core';
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

  constructor(private pilotService: PilotService) {}

  ngOnInit(): void {

    this.pilotService.getAllPilots().subscribe(
        response => {this.pilots = response;}

    );

  }

}
