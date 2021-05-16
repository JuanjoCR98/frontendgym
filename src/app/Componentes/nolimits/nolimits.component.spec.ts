import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolimitsComponent } from './nolimits.component';

describe('NolimitsComponent', () => {
  let component: NolimitsComponent;
  let fixture: ComponentFixture<NolimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NolimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NolimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
