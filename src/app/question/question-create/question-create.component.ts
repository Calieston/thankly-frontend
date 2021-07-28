import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css'],
})
export class QuestionCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private questionService: QuestionService
  ) {}

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      question: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.addForm.valid) {
      alert('Please add a question!');
      return;
    }

    const newQuestion = this.addForm.value;

    this.questionService.addQuestion(newQuestion).subscribe(
      () => {
        this.addForm.reset();
        this.router.navigate(['question-list']);
      },
      (err) => {
        alert(`Error occured: ${err.message}`);
      }
    );
  }
}
