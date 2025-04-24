import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FlightSeatService } from '../flight-seat.service';

@Component({
  selector: 'app-passenger-seat-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './passenger-seat-page.component.html',
  styleUrl: './passenger-seat-page.component.css'
})
export class PassengerSeatPageComponent {

  id: number | null = null;
  seats: any[] = [];

  constructor(private route: ActivatedRoute, private seatService: FlightSeatService) {}

  ngOnInit(): void {
    const temp = this.route.snapshot.paramMap.get('id')
    this.id = temp !== null ? +temp : null;


    this.seatService.getMySeats(this.id).subscribe(
      response => {this.seats = response;}

    );
  }

}
