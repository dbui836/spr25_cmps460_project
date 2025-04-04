import { TestBed } from '@angular/core/testing';

import { PlaneModelService } from './plane-model.service';

describe('PlaneModelService', () => {
  let service: PlaneModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaneModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
