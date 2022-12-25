import { TestBed } from '@angular/core/testing';

import { VoucherPrintingServiceService } from './voucher-printing-service.service';

describe('VoucherPrintingServiceService', () => {
  let service: VoucherPrintingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherPrintingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
