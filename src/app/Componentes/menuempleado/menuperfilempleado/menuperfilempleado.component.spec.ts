import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuperfilempleadoComponent } from './menuperfilempleado.component';

describe('MenuperfilempleadoComponent', () => {
  let component: MenuperfilempleadoComponent;
  let fixture: ComponentFixture<MenuperfilempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuperfilempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuperfilempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
