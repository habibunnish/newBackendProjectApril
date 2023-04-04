import { TestBed } from '@angular/core/testing';

import { CityDetailsService } from './city-details.service';

describe('CityDetailsService', () => {
  let service: CityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
