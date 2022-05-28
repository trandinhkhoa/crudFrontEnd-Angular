import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

// BE configures CORS for port 8081, so FE need to be on 8081 as well: ng serve --port 8081 instead ???
const baseUrl = 'http://localhost:8080/api/tutorials'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    console.log("executing getAll...");
    return this.http.get<Tutorial[]>(baseUrl);
  }
  create(data: any): Observable<Tutorial> {
    console.log("executing create...");
    return this.http.post(baseUrl, data);
  }
}
