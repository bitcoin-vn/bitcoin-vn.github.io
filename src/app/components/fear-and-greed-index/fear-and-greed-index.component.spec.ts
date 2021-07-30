import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FearAndGreedIndexComponent } from './fear-and-greed-index.component';

describe('FearAndGreedIndexComponent', () => {
  let component: FearAndGreedIndexComponent;
  let fixture: ComponentFixture<FearAndGreedIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FearAndGreedIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FearAndGreedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
