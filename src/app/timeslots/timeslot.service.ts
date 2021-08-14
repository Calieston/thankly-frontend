import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeSlot } from './timeslot.model';

@Injectable({
  providedIn: 'root',
})
export class TimeSlotService {
  private url = 'http://localhost:8090/api/time-slots';

  constructor(private http: HttpClient) {}

  getTimeSlots(): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.url}`);
  }

  getTimeSlotById(timeSlotId: number): Observable<TimeSlot> {
    return this.http.get<TimeSlot>(`${this.url}/${timeSlotId}`);
  }

  reserveTimeSlot(timeSlotId: number): Observable<TimeSlot> {
    return this.http.post<TimeSlot>(`${this.url}/${timeSlotId}/reservation`, null);
  }

  freeTimeSlot(timeSlotId: number) {
    return this.http.patch<TimeSlot>(`${this.url}/${timeSlotId}`, null);
  }
}
