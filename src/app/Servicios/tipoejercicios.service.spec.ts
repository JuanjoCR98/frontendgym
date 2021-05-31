import { TestBed } from '@angular/core/testing';

import { TipoejerciciosService } from './tipoejercicios.service';

describe('TipoejerciciosService', () => {
  let service: TipoejerciciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoejerciciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
