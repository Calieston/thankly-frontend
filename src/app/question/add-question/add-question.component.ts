import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../question-service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  // question : {id, question} = {id: null, question: ""};

  constructor(private formBuilder: FormBuilder, private router: Router, private questionService: QuestionService) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      question: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.questionService.addQuestion(this.addForm.value)
      .subscribe(() => {
        this.router.navigate(['list-questions']);
      })
  }

}
