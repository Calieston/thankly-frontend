import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../answer.model';
import { QuestionService } from '../question-service.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  questionId = null;
  question: Question = new Question();
  answer: Answer = new Answer();

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params['id'];
    this.questionService.getQuestionById(this.questionId).subscribe(data => {
      console.log(data);
      this.question = data;
    });
  }

  updateQuestion(question: Question): void {
    console.log('call update');
    this.questionService.updateQuestion(question).subscribe(data => {
      console.log('UPDATED');
    })
  }

  answerQuestion(questionId: number): void {
    this.questionService.answerQuestion(this.answer, questionId).subscribe(data => {
      console.log('Answered');
    })
  }

}
