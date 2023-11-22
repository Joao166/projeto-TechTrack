import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITecnologie } from 'src/app/components/occupation-section/interfaces/ITecnologie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnologieService {


  url = environment.urlBase + "/Tecnologies";
  constructor(private http: HttpClient) { }

  GetTecnologiesWithOccupationId(id: any): Observable<ITecnologie[]> {
    
    return this.http.get<ITecnologie[]>(`${this.url}/GetTecnologiesWithOccupationId/${id}`)
  }
}
