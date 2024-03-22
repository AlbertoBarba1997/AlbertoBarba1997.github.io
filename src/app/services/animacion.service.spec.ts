import { TestBed } from '@angular/core/testing';

import { AnimacionService } from './animacion.service';

describe('AnimacionService', () => {
  let service: AnimacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
