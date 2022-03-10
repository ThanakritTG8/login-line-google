import { TestBed } from '@angular/core/testing';

import { LineSigninService } from './line-signin.service';

describe('LineSigninService', () => {
  let service: LineSigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineSigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
