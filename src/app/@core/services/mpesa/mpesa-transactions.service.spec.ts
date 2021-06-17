import { TestBed } from '@angular/core/testing';

import { MpesaTransactionsService } from './mpesa-transactions.service';

describe('MpesaTransactionsService', () => {
  let service: MpesaTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpesaTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
