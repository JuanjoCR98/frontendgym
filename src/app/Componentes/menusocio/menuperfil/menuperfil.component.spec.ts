import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuperfilComponent } from './menuperfil.component';

describe('MenuperfilComponent', () => {
  let component: MenuperfilComponent;
  let fixture: ComponentFixture<MenuperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
