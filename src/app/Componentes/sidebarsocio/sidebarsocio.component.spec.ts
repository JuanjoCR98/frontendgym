import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsocioComponent } from './sidebarsocio.component';

describe('SidebarsocioComponent', () => {
  let component: SidebarsocioComponent;
  let fixture: ComponentFixture<SidebarsocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarsocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarsocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
