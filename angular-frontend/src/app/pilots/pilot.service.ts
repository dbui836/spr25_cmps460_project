import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  
  constructor(private http: HttpClient) { }

  getAllPilots(): Observable<any[]>{
    const pilot_apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/getPilots.php';
    return this.http.get<any[]>(pilot_apiURL); // GET request to php API  
  }

  getPilotById(pilotID: number): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/getPilotByID.php';
    return this.http.get<any>(`${apiURL}?id=${pilotID}`);
  }

  updatePilotByID(pilot: any): Observable<any> {
    const apiURL2 = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/updatePilotByID.php';
    return this.http.post<any>(apiURL2, pilot);
  }

 

  // Can include more functions below
}
