import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSeatService {

  constructor(private http: HttpClient) { }

  getMySeats(id: number | null): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/seat_APIs/getMySeats.php';
    return this.http.get<any>(`${apiURL}?id=${id}`); // GET request to php API  
  }

  getFlightSeats(id: number | null): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/seat_APIs/getFlightSeats.php';
    return this.http.get<any>(`${apiURL}?id=${id}`); // GET request to php API  
  }
}
