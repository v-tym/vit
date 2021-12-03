import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOboutMeComponent } from './app-obout-me.component';

describe('AppOboutMeComponent', () => {
  let component: AppOboutMeComponent;
  let fixture: ComponentFixture<AppOboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
