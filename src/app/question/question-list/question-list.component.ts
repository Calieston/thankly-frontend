import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question-service.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

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
    this.router.navigate(['question-create'])
      .then((e) => {
        if (e) console.log("Navigation is successful");
        else console.log("Navigation has failed!");
      });
  }

  deleteQuestion(question: Question): void {
    this.questionService.deleteQuestion(question).subscribe(data => {
      this.getQuestions();
    });
  }

}
