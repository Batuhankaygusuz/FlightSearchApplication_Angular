import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAramaComponent } from './flight-arama.component';

describe('FlightAramaComponent', () => {
  let component: FlightAramaComponent;
  let fixture: ComponentFixture<FlightAramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightAramaComponent]
    });
    fixture = TestBed.createComponent(FlightAramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
