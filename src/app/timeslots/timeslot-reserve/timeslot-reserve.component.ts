import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeSlot } from '../timeslot.model';
import { TimeSlotService } from '../timeslot.service';

@Component({
  selector: 'app-timeslot-reserve',
  templateUrl: './timeslot-reserve.component.html',
  styleUrls: ['./timeslot-reserve.component.css'],
})
export class TimeslotReserveComponent implements OnInit {
  timeSlotId: number;
  timeSlot: TimeSlot;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timeSlotService: TimeSlotService
  ) {}

  ngOnInit(): void {
    this.timeSlotId = this.route.snapshot.params['id'];
    this.getTimeSlot();
  }

  getTimeSlot() {
    this.timeSlotService.getTimeSlotById(this.timeSlotId).subscribe((data) => {
      this.timeSlot = data;
    });
  }

  reserveTimeSlot() {
    this.timeSlotService.reserveTimeSlot(this.timeSlotId).subscribe(() => {
      this.router.navigate(['timeslot-list']);
    });
  }
}
