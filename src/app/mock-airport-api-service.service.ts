import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { mockAirports } from './mock-flights';

@Injectable({
  providedIn: 'root',
})
export class MockAirportApiServiceService {
  searchAirports(query: string): Observable<any[]> {
    // Mock verilerde sorgulama yaparak sonuç döndürme
    const lowerCaseQuery = query.toLowerCase();
    const matchingAirports = mockAirports.filter(
      (airport) =>
        airport.name.toLowerCase().includes(lowerCaseQuery) ||
        airport.code.toLowerCase().includes(lowerCaseQuery)
    );
    return of(matchingAirports);
  }

  private flights = [
    {
      departure: mockAirports[0],
      arrival: mockAirports[1],
      date: '2023-08-30',
      price: 1000,
    },
    {
      departure: mockAirports[1],
      arrival: mockAirports[0],
      date: '2023-09-05',
      price: 950,
    },
    // ... diğer uçuşlar ...
  ];

  getFlights(): Observable<any[]> {
    return of(this.flights);
  }
}
