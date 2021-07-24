import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

    addQuestion(question: Question): Observable<Object> {
        return this.http.post(`${this.url}`, question);
    }

    deleteQuestion(question: Question): Observable<Object> {
        return this.http.delete(`${this.url}/${question.id}`);
    }


}