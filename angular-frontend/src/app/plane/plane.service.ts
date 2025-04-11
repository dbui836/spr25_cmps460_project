import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
  constructor(private http: HttpClient) { }

  getPlanes(): Observable<any[]>{
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/plane_APIs/getPlanes.php';
    return this.http.get<any>(apiURL); // GET request to php API  
  }

  getPlaneById(planeID: number): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/plane_APIs/getPlaneByID.php';
    return this.http.get<any>(`${apiURL}?id=${planeID}`);
  }

  updatePlane(plane: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/plane_APIs/updatePlaneByID.php';
    return this.http.post<any>(apiURL, plane);
  }

  deletePlaneByID(planeID: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/plane_APIs/deletePlaneByID.php';
    return this.http.delete<any>(`${apiURL}?id=${planeID}`);
  }

  createPlane(plane: any): Observable<any> {
    const apiURL = 'http://localhost/spr25_cmps460_project/backend/api/plane_APIs/createPlane.php';
    return this.http.post<any>(apiURL, plane);
  }
}