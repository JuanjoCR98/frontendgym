import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEntrenadoresComponent } from './home-entrenadores.component';

describe('HomeEntrenadoresComponent', () => {
  let component: HomeEntrenadoresComponent;
  let fixture: ComponentFixture<HomeEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEntrenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
