import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionSingleComponent } from './emotion-single.component';

describe('EmotionSingleComponent', () => {
  let component: EmotionSingleComponent;
  let fixture: ComponentFixture<EmotionSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
