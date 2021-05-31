import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraEjerciciosComponent } from './cabecera-ejercicios.component';

describe('CabeceraEjerciciosComponent', () => {
  let component: CabeceraEjerciciosComponent;
  let fixture: ComponentFixture<CabeceraEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraEjerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
