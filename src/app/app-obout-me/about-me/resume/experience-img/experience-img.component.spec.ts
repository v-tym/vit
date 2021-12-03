import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceImgComponent } from './experience-img.component';

describe('ExperienceImgComponent', () => {
  let component: ExperienceImgComponent;
  let fixture: ComponentFixture<ExperienceImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
