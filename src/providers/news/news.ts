import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getTopHeadlines():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ie&apiKey=eb27b87f4cf04ff8b1253be759bd4b05');
  }

  getBusinessNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=eb27b87f4cf04ff8b1253be759bd4b05');
  }

  getSportsNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=eb27b87f4cf04ff8b1253be759bd4b05');
  }

  getTechNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ie&category=technology&apiKey=eb27b87f4cf04ff8b1253be759bd4b05');
  }

  getEntertainmentNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ie&category=entertainment&apiKey=eb27b87f4cf04ff8b1253be759bd4b05');
  }

}
