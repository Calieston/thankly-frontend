import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "question-create", component: QuestionCreateComponent },
  { path: "question-list", component: QuestionListComponent },
  { path: "question-detail/:id", component: QuestionDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
