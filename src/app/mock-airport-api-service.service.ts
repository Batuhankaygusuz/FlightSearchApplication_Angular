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
        airport.departureTime.toLowerCase().includes(lowerCaseQuery) ||
        airport.code.toLowerCase().includes(lowerCaseQuery)
    );
    return of(matchingAirports);
  }
}
