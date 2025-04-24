import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookAFlightService {

  constructor(private http: HttpClient) { }

  bookFlight(info: any): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/booking_APIs/bookFlight.php';
    return this.http.post<any>(apiURL, info); // GET request to php API  
  }

  checkPassenger(id: number): Observable<boolean>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/booking_APIs/checkValidPassenger.php';
    return this.http.get<boolean>(`${apiURL}?id=${id}`);
  }

  getFlights(src: any, dest: any): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/booking_APIs/getFlightsforBooking.php';
    return this.http.get<any>(`${apiURL}?src=${src}&dest=${dest}`);
  }

  getSeats(id: number): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/booking_APIs/getSeats.php';
    return this.http.get<any[]>(`${apiURL}?id=${id}`);
  }

}
