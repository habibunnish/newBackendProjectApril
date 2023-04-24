import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginDetailsService } from './login-details.service';

describe('LoginDetailsService', () => {
  let service: LoginDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginDetailsService]
    });
    service = TestBed.inject(LoginDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
