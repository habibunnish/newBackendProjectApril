import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BookedDetailsService } from './booked-details.service';

describe('BookedDetailsService', () => {
  let service: BookedDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BookedDetailsService]
    });
    service = TestBed.inject(BookedDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
