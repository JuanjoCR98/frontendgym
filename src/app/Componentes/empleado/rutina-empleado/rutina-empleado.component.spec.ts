import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaEmpleadoComponent } from './rutina-empleado.component';

describe('RutinaEmpleadoComponent', () => {
  let component: RutinaEmpleadoComponent;
  let fixture: ComponentFixture<RutinaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
