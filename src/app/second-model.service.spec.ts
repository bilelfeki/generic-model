import { TestBed } from '@angular/core/testing';

import { SecondModelService } from './second-model.service';

describe('SecondModelService', () => {
  let service: SecondModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
