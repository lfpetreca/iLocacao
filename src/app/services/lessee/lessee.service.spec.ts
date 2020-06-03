import { TestBed } from '@angular/core/testing';

import { LesseeService } from './lessee.service';

describe('LesseeService', () => {
  let service: LesseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
