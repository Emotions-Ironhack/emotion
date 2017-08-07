import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RecommendationService{

  BASE_URL:string = environment.BASE_URL;

  constructor(private http: Http) { }

  getUserRecommendations(userId) {
    return this.http.get(`${this.BASE_URL}/api/emotion/user/${userId}`)
      .map((res) => {
        console.log(res.json());
        return res.json();
       });
  }

  getRecommendation(id) {
     return this.http.get(`${this.BASE_URL}/api/emotion/${id}`)
       .map((res:Response) => { return res.json() });   // return Observable<response>
  }
}
