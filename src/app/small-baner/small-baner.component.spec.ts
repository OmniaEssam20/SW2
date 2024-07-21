import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBanerComponent } from './small-baner.component';

describe('SmallBanerComponent', () => {
  let component: SmallBanerComponent;
  let fixture: ComponentFixture<SmallBanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallBanerComponent]
    });
    fixture = TestBed.createComponent(SmallBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
