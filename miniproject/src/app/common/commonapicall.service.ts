import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonapicallService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getapicall(endpoint: string) {
    let url = this.url + endpoint;
    return this.http.get(url);
  }
}
