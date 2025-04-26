import { Component, OnInit } from '@angular/core';
import { DisplayPassengerComponent } from '../display-passenger/display-passenger.component';
import { EditDeletePassengerComponent } from '../edit-delete-passenger/edit-delete-passenger.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-passenger-page',
  imports: [DisplayPassengerComponent, EditDeletePassengerComponent, RouterLink],
  templateUrl: './passenger-page.component.html',
  styleUrl: './passenger-page.component.css'
})
export class PassengerPageComponent implements OnInit {
  selectedPassengerID: number | null = null; // get from displayPilot Component to pass to edit-delete-pilot component
  change: number | null = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }
  
  OnPassengerSelected(pilotID: number): void {
    this.selectedPassengerID = pilotID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
