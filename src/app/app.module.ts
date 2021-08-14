import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatMomentDateModule, MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { ButtonComponent } from './shared/button/button.component';
import { TimeslotListComponent } from './timeslots/timeslot-list/timeslot-list.component';
import { TimeslotReserveComponent } from './timeslots/timeslot-reserve/timeslot-reserve.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionCreateComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    TimeslotListComponent,
    TimeslotReserveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(library: FaIconLibrary) {
  // library.addIconPacks(fas);
  // library.addIcons(faCoffee);
  // }
}
