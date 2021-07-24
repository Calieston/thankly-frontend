import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question-service.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  questions: Question[];

  constructor(
    private router: Router,
    private questionService: QuestionService) {

  }

  ngOnInit(): void {
    // TODO why it gets so many events
    // this.router.events.subscribe(value => {
    this.getQuestions();
    // })

  }

  getQuestions() {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
    })
  }

  addQuestion(): void {
    this.router.navigate(['add-question'])
      .then((e) => {
        if (e) console.log("Navigation is successful");
        else console.log("Navigation has failed!");
      });
  }

  selectQuestion(question: Question): void {
    console.log(`selected question ${question.id}`);
  }

  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question).subscribe(data => {
      this.getQuestions();
    });
  }

}
