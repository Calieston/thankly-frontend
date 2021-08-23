import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeSlot } from '../timeslot.model';
import { TimeSlotService } from '../timeslot.service';

@Component({
  selector: 'app-timeslot-reserve',
  templateUrl: './timeslot-reserve.component.html',
  styleUrls: ['./timeslot-reserve.component.css'],
  providers: [],
})
export class TimeslotReserveComponent implements OnInit {
  timeSlotId: number;
  timeSlot: TimeSlot;

  // form groups
  serviceFormGroup: FormGroup;
  timeSlotFormGroup: FormGroup;
  customerDetailsFormGroup: FormGroup;
  paymentFormGroup: FormGroup;

  // demo data
  services: string[] = ['nails basic', 'nails premium'];
  timeSlots: string[] = ['09:00', '11:00', '12:00', '16:00'];
  paymentOptions: string[] = ['cash', 'paypal'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timeSlotService: TimeSlotService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.serviceFormGroup = this._formBuilder.group({
      serviceCtrl: ['', Validators.required],
    });
    this.timeSlotFormGroup = this._formBuilder.group({
      timeSlotCtrl: ['', Validators.required],
    });
    this.customerDetailsFormGroup = this._formBuilder.group({
      fullNameCtrl: ['', Validators.required],
      phoneNumberCtrl: ['', Validators.required],
      mailCtrl: ['', Validators.required],
    });
    this.paymentFormGroup = this._formBuilder.group({
      paymentCtrl: ['', Validators.required],
    });

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

  send() {
    // console.log(this.firstFormGroup.value);
    // console.log(this.secondFormGroup.value);
  }
}
