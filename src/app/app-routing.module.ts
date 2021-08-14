import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { TimeslotListComponent } from './timeslots/timeslot-list/timeslot-list.component';
import { TimeslotReserveComponent } from './timeslots/timeslot-reserve/timeslot-reserve.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  // questions
  { path: 'question-list', component: QuestionListComponent },
  { path: 'question-detail/:id', component: QuestionDetailComponent },
  { path: 'question-create', component: QuestionCreateComponent },

  // timeslots
  { path: 'timeslot-list', component: TimeslotListComponent },
  { path: 'time-slot-reserve/:id', component: TimeslotReserveComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
