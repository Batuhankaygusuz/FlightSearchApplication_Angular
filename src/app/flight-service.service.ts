import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightServiceService {
  private apiUrl = 'https://www.air-port-codes.com/auth'; // Airport API'nin URL'sini buraya ekleyin
  private apiKey = 'c466960d43'; // Airport API anahtarını buraya ekleyin

  constructor(private http: HttpClient) {}

  searchAirportsByCodeOrCity(keyword: string): Observable<any> {
    const headers = new HttpHeaders({
      c466960d43: this.apiKey,
    });

    const params = {
      keyword: keyword,
    };

    return this.http.get(`${this.apiUrl}/search/by-code-or-city`, {
      headers,
      params,
    });
  }
}
