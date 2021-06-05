import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuejerciciosComponent } from './menuejercicios.component';

describe('MenuejerciciosComponent', () => {
  let component: MenuejerciciosComponent;
  let fixture: ComponentFixture<MenuejerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuejerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuejerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
