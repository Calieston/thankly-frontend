import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotReserveComponent } from './timeslot-reserve.component';

describe('TimeslotReserveComponent', () => {
  let component: TimeslotReserveComponent;
  let fixture: ComponentFixture<TimeslotReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
