import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCreateComponent,
    QuestionListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuestionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
