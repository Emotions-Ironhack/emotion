import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSingleComponent } from './recommendation-single.component';

describe('RecommendationSingleComponent', () => {
  let component: RecommendationSingleComponent;
  let fixture: ComponentFixture<RecommendationSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
