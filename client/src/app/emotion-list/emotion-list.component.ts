import { Component, OnInit } from '@angular/core';
import { EmotionService } from '../../services/emotion.service';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emotion-list',
  templateUrl: './emotion-list.component.html',
  styleUrls: ['./emotion-list.component.css']
})
export class EmotionListComponent implements OnInit {

  emotions: Observable<Array<Object>>;
  user: object;

  constructor(private sessionserv: SessionService, private emotionserv: EmotionService) { }

  ngOnInit() {
    this.emotionserv.getUserEmotions(this.sessionserv.user._id)
      .subscribe((emotions) => this.emotions = emotions);
  }

}
