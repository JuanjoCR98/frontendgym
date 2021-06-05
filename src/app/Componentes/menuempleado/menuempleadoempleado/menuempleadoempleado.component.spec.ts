import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuempleadoempleadoComponent } from './menuempleadoempleado.component';

describe('MenuempleadoempleadoComponent', () => {
  let component: MenuempleadoempleadoComponent;
  let fixture: ComponentFixture<MenuempleadoempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuempleadoempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuempleadoempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
