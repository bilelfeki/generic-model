import { TestBed } from '@angular/core/testing';

import { FirstModelService } from './first-model.service';

describe('FirstModelService', () => {
  let service: FirstModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
