import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-arama',
  templateUrl: './flight-arama.component.html',
  styleUrls: ['./flight-arama.component.scss'],
})
export class FlightAramaComponent {
  departureAirport: string = '';
  arrivalAirport: string = '';
  departureDate: Date | null = null; // veya başlangıç tarihi ataması yapabilirsiniz
  arrivalDate: Date | null = null; // veya başlangıç tarihi ataması yapabilirsiniz
  flightType: string = 'oneWay'; // Varsayılan değeri ayarlayın

  searchFlights() {
    // Uçuş arama işlemleri ve sonuçlarını burada gerçekleştirin
    // Uygun sonuçları bir diziye atayarak kullanıcıya gösterin
  }
}
