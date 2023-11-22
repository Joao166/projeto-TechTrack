import { TestBed } from '@angular/core/testing';

import { TecnologieService } from './tecnologie.service';

describe('TecnologieService', () => {
  let service: TecnologieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnologieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
