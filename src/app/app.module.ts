import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { ButtonComponent } from './shared/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas);
    // library.addIcons(faCoffee);
  // }
}
