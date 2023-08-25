import { TestBed } from '@angular/core/testing';

import { MockAirportApiServiceService } from './mock-airport-api-service.service';

describe('MockAirportApiServiceService', () => {
  let service: MockAirportApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAirportApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
