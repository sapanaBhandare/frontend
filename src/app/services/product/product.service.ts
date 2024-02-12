import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const API_PATH = 'http://localhost:5000/';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getProductList() {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'My-Custom-Header': 'foobar',
    };
    const url=`${API_PATH}product`
    return this._http.get(url,{
      headers: headers
    }).pipe(map((result) => {
      return result
    }));
  }
}
