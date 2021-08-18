import { TestBed } from '@angular/core/testing';

import { DdrService } from './ddr.service';

describe('DdrService', () => {
  let service: DdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
