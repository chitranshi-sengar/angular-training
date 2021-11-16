import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountClickTimerComponent } from './count-click-timer.component';

describe('CountClickTimerComponent', () => {
  let component: CountClickTimerComponent;
  let fixture: ComponentFixture<CountClickTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountClickTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountClickTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
