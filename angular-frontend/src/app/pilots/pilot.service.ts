import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  

  constructor(private http: HttpClient) { }

  getAllPilots(): Observable<any[]>{
    const pilot_apiURL = 'http://localhost/spr25_cmps460_project/backend/api/pilot_APIs/getPilots.php';
    return this.http.get<any[]>(pilot_apiURL); // GET request to php API  
  }

  // Can include more functions below
}
