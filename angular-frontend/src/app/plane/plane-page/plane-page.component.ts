import { Component, OnInit } from '@angular/core';
import { DisplayPlaneComponent } from '../display-plane/display-plane.component';
import { EditDeletePlaneComponent } from '../edit-delete-plane/edit-delete-plane.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-plane-page',
  imports: [ DisplayPlaneComponent, EditDeletePlaneComponent ],
  templateUrl: './plane-page.component.html',
  styleUrl: './plane-page.component.css'
})
export class PlanePageComponent implements OnInit {
  selectedPlaneID: number | null = null; // get from displayPilot Component to pass to edit-delete-pilot component
  change: number | null = null;
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/");
    }
  }

  OnPlaneSelected(planeID: number): void {
    this.selectedPlaneID = planeID; 
  }

  OnTableChange(count: number): void{
    this.change = count;
  }
}
