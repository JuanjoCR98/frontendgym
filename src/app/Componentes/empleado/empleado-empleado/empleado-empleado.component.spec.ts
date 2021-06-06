import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEmpleadoComponent } from './empleado-empleado.component';

describe('EmpleadoEmpleadoComponent', () => {
  let component: EmpleadoEmpleadoComponent;
  let fixture: ComponentFixture<EmpleadoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
