import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommedationListComponent } from './recommedation-list.component';

describe('RecommedationListComponent', () => {
  let component: RecommedationListComponent;
  let fixture: ComponentFixture<RecommedationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommedationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommedationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
