import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreateComponent } from './question-create.component';

describe('AddQuestionComponent', () => {
  let component: QuestionCreateComponent;
  let fixture: ComponentFixture<QuestionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
