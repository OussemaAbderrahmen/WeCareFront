import { TestBed } from '@angular/core/testing';

import { ActualityserviceService } from './actualityservice.service';

describe('ActualityserviceService', () => {
  let service: ActualityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
