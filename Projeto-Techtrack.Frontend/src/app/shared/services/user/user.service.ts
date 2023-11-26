import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/components/occupation-section/interfaces/IUser';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: IUser;
  url = `${environment.urlMock}/user`
  constructor(private http: HttpClient) { }
  
  Create(user: IUser) {
    return this.http.post(this.url, user)
  }

  Get() {
    return this.http.get<IUser[]>(this.url);
  }

}
