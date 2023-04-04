import { TestBed } from '@angular/core/testing';

import { MainPageDetailsService } from './main-page-details.service';

describe('MainPageDetailsService', () => {
  let service: MainPageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
