import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotoEmotionComponent } from './add-photo-emotion.component';

describe('AddPhotoEmotionComponent', () => {
  let component: AddPhotoEmotionComponent;
  let fixture: ComponentFixture<AddPhotoEmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhotoEmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
