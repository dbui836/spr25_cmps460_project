import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotService } from '../pilot.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-display-pilots',
  imports: [RouterLink, CommonModule],
  templateUrl: './display-pilots.component.html',
  styleUrl: './display-pilots.component.css',
})
export class DisplayPilotsComponent {
  pilots: any[] = []; 
  error: string = ''; 

  constructor(private pilotService: PilotService) {}

  ngOnInit(): void {

    this.pilotService.getAllPilots().subscribe(
        response => {this.pilots = response;}

    );

  }

}
