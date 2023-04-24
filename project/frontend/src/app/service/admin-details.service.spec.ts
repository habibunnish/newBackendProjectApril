import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminDetailsService } from './admin-details.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('AdminDetailsService', () => {
  let service: AdminDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AdminDetailsService],
      schemas:[NO_ERRORS_SCHEMA]
     
    });
    service = TestBed.inject(AdminDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
