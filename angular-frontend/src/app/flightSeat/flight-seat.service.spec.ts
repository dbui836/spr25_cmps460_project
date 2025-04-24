import { TestBed } from '@angular/core/testing';

import { FlightSeatService } from './flight-seat.service';

describe('FlightSeatService', () => {
  let service: FlightSeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
