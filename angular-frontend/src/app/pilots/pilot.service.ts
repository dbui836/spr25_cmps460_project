import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  
  constructor(private http: HttpClient) { }

  getPilots(optFilter_license: any): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/getPilots.php';
    return this.http.get<any>(`${apiURL}?license=${optFilter_license}`); // GET request to php API  
  }

  getPilotById(pilotID: number): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/getPilotByID.php';
    return this.http.get<any>(`${apiURL}?id=${pilotID}`);
  }

  updatePilot(pilot: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/updatePilotByID.php';
    return this.http.post<any>(apiURL, pilot);
  }

  deletePilotByID(pilotID: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/deletePilotByID.php';
    return this.http.delete<any>(`${apiURL}?id=${pilotID}`);
  }

  createPilot(pilot: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/createPilot.php';
    return this.http.post<any>(apiURL, pilot);
  }
 

  // Can include more functions below
}
