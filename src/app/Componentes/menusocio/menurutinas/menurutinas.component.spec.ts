import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenurutinasComponent } from './menurutinas.component';

describe('MenurutinasComponent', () => {
  let component: MenurutinasComponent;
  let fixture: ComponentFixture<MenurutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenurutinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenurutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
