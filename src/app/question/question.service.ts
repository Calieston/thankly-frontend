import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Answer } from "./answer.model";
import { Question } from "./question.model";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private url = 'http://localhost:8090/api/questions';

    constructor(private http: HttpClient) {
    }

    getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.url}`);
    }

    getQuestionById(id: number): Observable<Question> {
        return this.http.get<Question>(`${this.url}/${id}`);
    }

    addQuestion(question: Question): Observable<Question> {
        return this.http.post<Question>(`${this.url}`, question);
    }

    deleteQuestion(question: Question): Observable<Question> {
        return this.http.delete<Question>(`${this.url}/${question.id}`);
    }

    updateQuestion(question: Question): Observable<Question> {
        return this.http.patch<Question>(`${this.url}/${question.id}`, question);
    }

    answerQuestion(answer: Answer, questionId: number): Observable<Question> {
        return this.http.post<Question>(`${this.url}/${questionId}/answers`, answer);
    }

}