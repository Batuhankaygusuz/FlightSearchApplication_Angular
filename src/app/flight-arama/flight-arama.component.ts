import { Component } from '@angular/core';
import { MockAirportApiServiceService } from '../mock-airport-api-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-flight-arama',
  templateUrl: './flight-arama.component.html',
  styleUrls: ['./flight-arama.component.scss'],
})
export class FlightAramaComponent {
  departureAirport: string = '';
  arrivalAirport: string = '';
  departureDate: string = '';
  returnDate: string = '';
  oneWay: boolean = false;
  searchResults: any[] = []; // Uçuş sonuçlarını tutmak için boş bir dizi oluşturuldu.
  departureAirports: any[] = [];
  arrivalAirports: any[] = [];
  selectedDeparture: any = null;
  flights: any[] = [];
  sortBy: string = '';
  selectedArrival: any = null;
  sortOrder: string = ''; // 'departureTime', 'arrivalTime', 'flightLength', 'price'

  constructor(
    private mockAirportApiServiceService: MockAirportApiServiceService
  ) {}

  searchAirports(query: string, type: 'departure' | 'arrival') {
    this.mockAirportApiServiceService
      .searchAirports(query)
      .subscribe((data) => {
        if (type === 'departure') {
          this.departureAirports = data;
        } else if (type === 'arrival') {
          this.arrivalAirports = data;
        }
      });
  }
  selectAirport(airport: any, type: 'departure' | 'arrival') {
    if (type === 'departure') {
      this.selectedDeparture = airport;
    } else if (type === 'arrival') {
      this.selectedArrival = airport;
    }
  }

  sortFlights() {
    if (this.sortOrder === 'departureTime') {
      this.flights.sort((a, b) =>
        a.departureTime.localeCompare(b.departureTime)
      );
    } else if (this.sortOrder === 'arrivalTime') {
      this.flights.sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime));
    } else if (this.sortOrder === 'flightLength') {
      this.flights.sort((a, b) => a.flightLength - b.flightLength);
    } else if (this.sortOrder === 'price') {
      this.flights.sort((a, b) => a.price - b.price);
    }
  }
  searchFlights() {
    // Uçuş arama işlemleri burada yapılabilir
    console.log('Kalkış:', this.departureAirport);
    console.log('Varış:', this.arrivalAirport);
    console.log('Kalkış Tarihi:', this.departureDate);
    console.log('Dönüş Tarihi:', this.returnDate);
    console.log('Tek Yönlü:', this.oneWay);
    console.log('Seçilen Kalkış Havaalanı:', this.selectedDeparture);
    console.log('Seçilen Varış Havaalanı:', this.selectedArrival);
  }
  clearReturnDate() {
    if (this.oneWay) {
      this.returnDate = '';
    }
  }
}
