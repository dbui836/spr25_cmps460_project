import { TestBed } from '@angular/core/testing';

import { BookAFlightService } from './book-a-flight.service';

describe('BookAFlightService', () => {
  let service: BookAFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
