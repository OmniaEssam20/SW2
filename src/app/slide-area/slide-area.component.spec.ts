import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAreaComponent } from './slide-area.component';

describe('SlideAreaComponent', () => {
  let component: SlideAreaComponent;
  let fixture: ComponentFixture<SlideAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideAreaComponent]
    });
    fixture = TestBed.createComponent(SlideAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
