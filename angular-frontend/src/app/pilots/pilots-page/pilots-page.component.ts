import { Component, Input, OnInit } from '@angular/core';
import { DisplayPilotsComponent } from '../display-pilots/display-pilots.component';
import { EditDeletePilotComponent } from '../edit-delete-pilot/edit-delete-pilot.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-pilots-page',
  imports: [DisplayPilotsComponent, EditDeletePilotComponent, RouterLink],
  templateUrl: './pilots-page.component.html',
  styleUrl: './pilots-page.component.css'
})
export class PilotsPageComponent implements OnInit {
  selectedPilotID: number | null = null; // get from displayPilot Component to pass to edit-delete-pilot component
  change: number | null = null;
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  OnPilotSelected(pilotID: number): void {
    this.selectedPilotID = pilotID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
