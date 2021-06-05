import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusocioempleadoComponent } from './menusocioempleado.component';

describe('MenusocioempleadoComponent', () => {
  let component: MenusocioempleadoComponent;
  let fixture: ComponentFixture<MenusocioempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusocioempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusocioempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
