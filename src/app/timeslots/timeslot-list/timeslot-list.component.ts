import { Component, OnInit } from '@angular/core';
import { TimeSlot } from '../timeslot.model';
import { TimeSlotService } from '../timeslot.service';

@Component({
  selector: 'app-timeslot-list',
  templateUrl: './timeslot-list.component.html',
  styleUrls: ['./timeslot-list.component.css'],
})
export class TimeslotListComponent implements OnInit {
  timeSlots: TimeSlot[] = [];

  constructor(private timeSlotService: TimeSlotService) {}

  ngOnInit(): void {
    this.getTimeSlots();
  }

  getTimeSlots(): void {
    this.timeSlotService.getTimeSlots().subscribe((data) => {
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
    })
  }
}
