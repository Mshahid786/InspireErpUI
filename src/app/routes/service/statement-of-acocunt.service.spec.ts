import { TestBed } from '@angular/core/testing';

import { StatementOfAcocuntService } from './statement-of-acocunt.service';

describe('StatementOfAcocuntService', () => {
  let service: StatementOfAcocuntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatementOfAcocuntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
