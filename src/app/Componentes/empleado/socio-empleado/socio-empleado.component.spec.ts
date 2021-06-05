import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEmpleadoComponent } from './socio-empleado.component';

describe('SocioEmpleadoComponent', () => {
  let component: SocioEmpleadoComponent;
  let fixture: ComponentFixture<SocioEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
