import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './question/add-question/add-question.component';
import { ListQuestionsComponent } from './question/list-questions/list-questions.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "add-question", component: AddQuestionComponent },
  { path: "list-questions", component: ListQuestionsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
