import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookAFlightService } from '../book-a-flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-a-flight-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-a-flight-page.component.html',
  styleUrl: './book-a-flight-page.component.css'
})
export class BookAFlightPageComponent {

  constructor(private router: Router, private bookService: BookAFlightService) {}

  bookingInfo: any = {

    passID : null,
    src : "",
    dest: "",
    flightID : null,
    seat : null

  };

  validPass: boolean = false;
  avalFlights: number[] = [];
  avalSeats: number[] = [];

  oldSrc: any = "";
  oldDest: any = "";

  bookFlight(): void {

    this.bookService.bookFlight(this.bookingInfo).subscribe(
      response => {
        this.router.navigate(['/passengers']);
        alert("Booking successful !");
      },
      error => {
        alert("Error, cannot book flight");
      }
    );

  }


  checkPassID(): void{
    this.bookService.checkPassenger(this.bookingInfo.passID).subscribe(
      (response: boolean) => {
        this.validPass = response;
      },
      error => {
        alert("Error checking passenger id");
      }


    );

  }

  onSrcDestChange(): void{

    if (this.bookingInfo.src !== this.oldSrc || this.bookingInfo.dest !== this.oldDest){

      this.bookingInfo.flightID = null;
      this.bookingInfo.seat = null;

      this.bookService.getFlights(this.bookingInfo.src, this.bookingInfo.dest).subscribe(
        (response) => {
          this.avalFlights = response;
        },
        error => {
          alert("Error checking passenger id");
        }

      );

      this.oldSrc = this.bookingInfo.src;
      this.oldDest = this.bookingInfo.dest;
    }

  }


  onFlightChange(): void{
    this.bookService.getSeats(this.bookingInfo.flightID).subscribe(
      (response) => {
        this.avalSeats = response;
      },
      error => {
        alert("Error checking passenger id");
      }

    );

  }
}
