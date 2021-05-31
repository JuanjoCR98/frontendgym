import { TestBed } from '@angular/core/testing';

import { EjerciciosrutinasService } from './ejerciciosrutinas.service';

describe('EjerciciosrutinasService', () => {
  let service: EjerciciosrutinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjerciciosrutinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
