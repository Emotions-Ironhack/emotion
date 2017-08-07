import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recommendation-single',
  templateUrl: './recommendation-single.component.html',
  styleUrls: ['./recommendation-single.component.css']
})
export class RecommendationSingleComponent implements OnInit {

  recomm: any;
  constructor(public route: ActivatedRoute, public recommserv: RecommendationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecommendationDetail(params['id']);
    });
  }

  getRecommendationDetail(id) {
    this.recommserv.getRecommendation(id)
      .subscribe((recomm) => {
        console.log(recomm);
        this.recomm = recomm;
      });
  }

}
