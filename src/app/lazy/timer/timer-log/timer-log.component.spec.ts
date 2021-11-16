import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogComponent } from './timer-log.component';

describe('TimerLogComponent', () => {
  let component: TimerLogComponent;
  let fixture: ComponentFixture<TimerLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
