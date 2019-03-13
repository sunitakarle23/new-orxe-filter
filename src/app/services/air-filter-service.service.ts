import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirFilterServiceService {

  constructor(private http:HttpClient) { }
  createFilters() {
    return this.http.get('https://api.myjson.com/bins/10e05m');
  }
}
