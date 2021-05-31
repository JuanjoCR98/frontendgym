import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraRutinasComponent } from './cabecera-rutinas.component';

describe('CabeceraRutinasComponent', () => {
  let component: CabeceraRutinasComponent;
  let fixture: ComponentFixture<CabeceraRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraRutinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
