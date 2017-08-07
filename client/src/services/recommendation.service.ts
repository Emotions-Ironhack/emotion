import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RecommendationService{

  BASE_URL:string = environment.BASE_URL;

  constructor(private http: Http) { }


  getEmotionRecommendations(emotionId) {
    return this.http.get(`${this.BASE_URL}/api/emotion/${emotionId}/recommendations`)
      .map((res) => {
        console.log(res.json());
        return res.json();
       });
  }

  createRecommendation(emotionId) {
    return this.http.get(`${this.BASE_URL}/api/emotion/${emotionId}/new-recommendation`)
      .map((res) => {
        return res.json();
       });
  }

  getRecommendation(id) {
     return this.http.get(`${this.BASE_URL}/api/recommendation/${id}`)
       .map((res:Response) => { return res.json() });   // return Observable<response>
  }

}
