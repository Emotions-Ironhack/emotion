import { Component, OnInit } from '@angular/core';
import { EmotionService } from '../../services/emotion.service';
import { RecommendationService } from '../../services/recommendation.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emotion-single',
  templateUrl: './emotion-single.component.html',
  styleUrls: ['./emotion-single.component.css']
})
export class EmotionSingleComponent implements OnInit {

  recommendation: any;
  emotion: any;

  constructor(public route: ActivatedRoute, public emotionserv: EmotionService, public recommserv: RecommendationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEmotionDetail(params['id']);
    });
  }

  createEmotionRecomm(){
    this.route.params.subscribe(params => {
      this.createRecommendation(params['id']);
    });
  }

  createRecommendation(id){
    this.recommserv.createRecommendation(id)
      .subscribe( recomm => {
        this.recommendation = recomm;
        console.log('new recomendation: ',this.recommendation);
      });
  }

  getEmotionDetail(id) {
    this.emotionserv.getEmotion(id)
      .subscribe((emotion) => {
        console.log(emotion);
        this.emotion = emotion;
      });
  }

}
