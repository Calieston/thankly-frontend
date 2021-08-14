import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../answer.model';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
  questionId = null;
  question: Question;
  answerText: string;
  faTimes = faTimes;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params['id'];
    this.loadQuestion();
  }

  updateQuestion(question: Question): void {
    this.questionService.updateQuestion(question).subscribe((data) => {});
  }

  answerQuestion(questionId: number): void {
    let answer = {
      answer: this.answerText,
    };
    answer.answer = this.answerText;
    this.questionService
      .answerQuestion(answer, questionId)
      .subscribe((data) => {
        this.loadQuestion();
      });
    this.answerText = '';
  }

  deleteAnswer(answerId: number) {
    this.answerService.deleteAnswerById(answerId).subscribe(() => {
      this.loadQuestion();
    });
  }

  loadQuestion() {
    this.questionService.getQuestionById(this.questionId).subscribe((data) => {
      this.question = data;
    });
  }
}
