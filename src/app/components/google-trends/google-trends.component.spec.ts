import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoogleTrendsComponent } from './google-trends.component';

describe('GoogleTrendsComponent', () => {
  let component: GoogleTrendsComponent;
  let fixture: ComponentFixture<GoogleTrendsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
