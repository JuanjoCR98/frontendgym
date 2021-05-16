import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsnolimitsComponent } from './optionsnolimits.component';

describe('OptionsnolimitsComponent', () => {
  let component: OptionsnolimitsComponent;
  let fixture: ComponentFixture<OptionsnolimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsnolimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsnolimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
