import { Component, OnInit } from '@angular/core';
import { EmotionService } from '../../services/emotion.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emotion-single',
  templateUrl: './emotion-single.component.html',
  styleUrls: ['./emotion-single.component.css']
})
export class EmotionSingleComponent implements OnInit {


  emotion: any;
  constructor(public route: ActivatedRoute, public emotionserv: EmotionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEmotionDetail(params['id']);
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
