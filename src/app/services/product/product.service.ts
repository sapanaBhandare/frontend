import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const url = `${API_PATH}product`;
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
  insertProduct(product) {
    // let headers = new Headers({ 'content-Type': 'application/json' });
    const options = {
      headers: new HttpHeaders().append('key', 'value'),
      params: new HttpParams().append('key', 'value'),
    };
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }),
    };

    const headers = {
      authorization:  `Bearer ${localStorage.getItem('token')}`,
      'My-Custom-Header': 'foobar',
    };
    const url = `${API_PATH}product`;
    return this._http.post<any>(url, product, { headers }).pipe(
      map((data) => {
        console.log('dataaaaaaaaaaaaaaaa', data);
      })
    );
  }
  deleteProduct(id) {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'My-Custom-Header': 'foobar',
    };
    const url = `${API_PATH}product/${id}`;
    return this._http
      .delete(url, {
        headers: headers,
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
}
