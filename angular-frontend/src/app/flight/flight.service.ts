import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/getFlights.php';
    return this.http.get<any>(apiURL); // GET request to php API  
  }

  getFlightById(flightID: number): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/getFlightByID.php';
    return this.http.get<any>(`${apiURL}?id=${flightID}`);
  }

  updateFlight(flight: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/updateFlightByID.php';
    return this.http.post<any>(apiURL, flight);
  }

  deleteFlightByID(flightID: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/deleteFlightByID.php';
    return this.http.delete<any>(`${apiURL}?id=${flightID}`);
  }

  createFlight(flight: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/createFlight.php';
    return this.http.post<any>(apiURL, flight);
  }

  getValidPilots(planeID: any, scr: any): Observable<any>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/getValidPilots.php';
    return this.http.get<any>(`${apiURL}?planeID=${planeID}&scr=${scr}`);
  }

  getValidPlanes(): Observable<any>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/flight_APIs/getValidPlanes.php';
    return this.http.get<any>(apiURL);
  }

}
