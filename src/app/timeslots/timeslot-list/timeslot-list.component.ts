import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TimeSlot } from '../timeslot.model';
import { TimeSlotService } from '../timeslot.service';

@Component({
  selector: 'app-timeslot-list',
  templateUrl: './timeslot-list.component.html',
  styleUrls: ['./timeslot-list.component.css'],
})
export class TimeslotListComponent implements OnInit {
  timeSlots: TimeSlot[] = [];
  startDate = new Date();
  selectedDate = new Date();

  constructor(private timeSlotService: TimeSlotService) {}

  ngOnInit(): void {
    this.loadTimeSlots(this.startDate);
  }

  getTimeSlots(): void {
    this.timeSlotService.getTimeSlots(null).subscribe((data) => {
      this.timeSlots = data;
    });
  }

  addTimeSlot(): void {
    console.log('add new time slot');
  }

  freeTimeSlot(timeSlotId: number): void {
    this.timeSlotService.freeTimeSlot(timeSlotId).subscribe((data) => {
      console.log('done');
      this.getTimeSlots();
    });
  }

  loadTimeSlots(selectedDate: Date): void {
    let selectedDayParsed = moment(selectedDate).format('YYYY-MM-DD');
    this.timeSlotService.getTimeSlots(selectedDayParsed).subscribe((data) => {
      this.timeSlots = data;
    });
  }
}
