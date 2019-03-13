import { TestBed } from '@angular/core/testing';

import { AirFilterServiceService } from './air-filter-service.service';

describe('AirFilterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirFilterServiceService = TestBed.get(AirFilterServiceService);
    expect(service).toBeTruthy();
  });
});
