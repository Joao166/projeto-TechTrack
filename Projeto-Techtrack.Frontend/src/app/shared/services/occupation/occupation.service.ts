import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOccupation } from 'src/app/components/occupation-section/interfaces/IOccupation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {


   //url = environment.urlBase + "/Occupation";
   url = `${environment.urlMock}/occupation`
  constructor(private http: HttpClient) { }

  get(): Observable<IOccupation[]> {
    return this.http.get<IOccupation[]>(`${this.url}`)
  }
  getById(id: any): Observable<IOccupation> {
    
    return this.http.get<IOccupation>(`${this.url}/${id}`)
  }
}
