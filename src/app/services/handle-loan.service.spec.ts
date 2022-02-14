import { TestBed } from '@angular/core/testing';

import { HandleLoanService } from './handle-loan.service';

describe('HandleLoanService', () => {
  let service: HandleLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
