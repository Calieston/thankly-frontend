import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe((data) => {
      this.questions = data;
    });
  }

  addQuestion(): void {
    this.router.navigate(['question-create']).then(() => {});
  }

  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question).subscribe(() => {
      this.getQuestions();
    });
  }
}
