import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CartDetailsService } from './cart-details.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('CartDetailsService', () => {
  let service: CartDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[CartDetailsService],
      schemas:[NO_ERRORS_SCHEMA]
     
    });
    service = TestBed.inject(CartDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
