import { TestBed } from '@angular/core/testing';

import { LesseesService } from './lessees.service';

describe('LesseesService', () => {
  let service: LesseesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesseesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
