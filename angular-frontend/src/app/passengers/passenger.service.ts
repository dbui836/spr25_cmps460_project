import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }
  
  getPassengers(fname: any, lname: any): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/passenger_APIs/getPassengers.php';
    return this.http.get<any>(`${apiURL}?fname=${fname}&lname=${lname}`); // GET request to php API  
  }

  getPassengerById(passID: number): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/passenger_APIs/getPassengerByID.php';
    return this.http.get<any>(`${apiURL}?id=${passID}`);
  }

  updatePassenger(passenger: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/passenger_APIs/updatePassengerByID.php';
    return this.http.post<any>(apiURL, passenger);
  }

  deletePassengerByID(passID: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/passenger_APIs/deletePassengerByID.php';
    return this.http.delete<any>(`${apiURL}?id=${passID}`);
  }

  createPassenger(passenger: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/passenger_APIs/createPassenger.php';
    return this.http.post<any>(apiURL, passenger);
  }

}
