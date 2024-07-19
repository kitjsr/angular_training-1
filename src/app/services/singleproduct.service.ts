import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url="https://fakestoreapi.com/products/1";

@Injectable({
  providedIn: 'root'
})
export class SingleproductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(url);
  }
}
