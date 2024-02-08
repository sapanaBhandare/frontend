import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  result;
  constructor(private _http: HttpClient) {}
  getPosts() {
    // return of([])
    return this._http.get('/api/posts').pipe(
      map((result) =>
        console.log('result', result) // this.result = result
      )
    );
  }
}
