import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
const API_PATH = 'http://localhost:7000/';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _http: HttpClient) {}

  insertProduct(cartProduct) {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'My-Custom-Header': 'foobar',
    };
    const url = `${API_PATH}cart`;
    return this._http.post<any>(url, cartProduct, { headers }).pipe(
      map((data) => {
        console.log('dataaaaaaaaaaaaaaaa', data);
      })
    );
  }
  getProductList() {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'My-Custom-Header': 'foobar',
    };
    const url = `${API_PATH}cart`;
    return this._http
      .get(url, {
        headers: headers,
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
}
