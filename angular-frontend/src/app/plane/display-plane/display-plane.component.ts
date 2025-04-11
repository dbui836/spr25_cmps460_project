import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneService } from '../plane.service';
import { SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-plane',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './display-plane.component.html',
  styleUrl: './display-plane.component.css'
})
export class DisplayPlaneComponent {
  planes: any[] = [];
  selectedPlaneID: number | null = null; // to color the selected plane

  @Output() curr_plane = new EventEmitter<number>(); // to emit ID for edit-delete
  @Input() updateTable: number | null = null; // recieved when edit-delete changed something

  constructor(private planeService: PlaneService) {}

  ngOnInit(): void {
    this.loadPlanes();
  }

  // when table updated via edit-delete, re-get the new plane table
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updateTable']){
      this.loadPlanes();
    }
  }

  loadPlanes(): void{
    this.planeService.getPlanes().subscribe(
      response => {this.planes = response;}
    );
  }

  selectPlane(planeID: number) {
    this.selectedPlaneID = planeID;
    this.curr_plane.emit(planeID); // emit selected pilotID to parent component
  }
}
