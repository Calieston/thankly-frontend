import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TimeSlot } from '../timeslot.model';
import { TimeSlotService } from '../timeslot.service';
import Utils from './../../shared/util';

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
      this.loadTimeSlots(this.selectedDate);
    });
  }

  loadTimeSlots(selectedDate: Date): void {
    this.timeSlotService
      .getTimeSlots(Utils.formatDate(selectedDate))
      .subscribe((data) => {
        this.timeSlots = data;
      });
  }

  initSampleData(selectedDate: Date): void {
    this.timeSlotService
      .initSamples(Utils.formatDate(selectedDate))
      .subscribe(() => {
        this.loadTimeSlots(this.selectedDate);
      });
  }

  removeTimeSlots(selectedDate: Date): void {
    this.timeSlotService
      .removeTimeSlots(Utils.formatDate(selectedDate))
      .subscribe(() => {
        this.loadTimeSlots(this.selectedDate);
      });
  }
}
