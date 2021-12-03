import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmdComponent } from './kmd.component';

describe('KmdComponent', () => {
  let component: KmdComponent;
  let fixture: ComponentFixture<KmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
