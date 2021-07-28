import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private url = 'http://localhost:8090/api/answers';

  constructor(private http: HttpClient) { }

  deleteAnswerById(answerId: number): Observable<Answer>{
    return this.http.delete<Answer>(`${this.url}/${answerId}`)
  }
}
