import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CityDetailsService } from './city-details.service';

describe('CityDetailsService', () => {
  let service: CityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CityDetailsService]
    });
    service = TestBed.inject(CityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
