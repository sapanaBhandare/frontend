import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
const API_PATH = 'http://localhost:7000/';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  result;

  loggedIn:Subject<any> = new Subject();
  constructor(private _http: HttpClient) {}
  register(data) {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    return this._http
      .post<any>(`${API_PATH}users/signup`, data, { headers })
      .pipe(
        map((data) => {

          return data;
        })
      );
  }

  login(data) {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    return this._http
      .post<any>(`${API_PATH}users/signin`, data, { headers })
      .pipe(
        map((data) => {
          this.loggedIn.next(true)
          return data;
        })
      );
  }
}
