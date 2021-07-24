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

    getQuestions(): Observable<any> {
        return this.http.get(`${this.url}`);
    }

    getQuestionById(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    addQuestion(question: Question): Observable<Object> {
        return this.http.post(`${this.url}`, question);
    }

    deleteQuestion(question: Question): Observable<Object> {
        return this.http.delete(`${this.url}/${question.id}`);
    }
    
    updateQuestion(question: Question): Observable<Object> {
        console.log('call update in service');
        return this.http.patch(`${this.url}/${question.id}`, question);
    }

    answerQuestion(answer: Answer, questionId: number): Observable<Object> {
        console.log('call answer in service');
        console.log(answer);
        return this.http.post(`${this.url}/${questionId}/answers`, answer);
    }

}