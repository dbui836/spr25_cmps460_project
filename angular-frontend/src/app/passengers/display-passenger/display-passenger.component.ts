import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerService } from '../passenger.service';
import { SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-display-passenger',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './display-passenger.component.html',
  styleUrl: './display-passenger.component.css'
})
export class DisplayPassengerComponent {
  passengers: any[] = []; 
  selectedPassengerID: number | null = null; // to color the selected pilot

  @Output() curr_pass = new EventEmitter<number>(); // to emit ID for edit-delete
  @Input() updateTable: number | null = null; // recieved when edit-delete changed something

  filterfName: any = "";
  filterlName: any = "";

  constructor(private passengerService: PassengerService) {}

  ngOnInit(): void {

    this.loadPassengers();

  }

  // when table updated via edit-delete, re-get the new pilot table
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updateTable']){
      this.loadPassengers();
    }
  }

  loadPassengers(): void{
    this.passengerService.getPassengers(this.filterfName, this.filterlName).subscribe(
      response => {this.passengers = response;}
    );
  }

  selectPassenger(passID: number): void {
    this.selectedPassengerID = passID;
    this.curr_pass.emit(passID); // emit selected pilotID to parent component
  }

}
