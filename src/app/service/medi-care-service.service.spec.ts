import { TestBed } from '@angular/core/testing';

import { MediCareServiceService } from './medi-care-service.service';

describe('MediCareServiceService', () => {
  let service: MediCareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediCareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
