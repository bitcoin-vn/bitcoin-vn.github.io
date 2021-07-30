import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConvertUsdToBtcComponent } from './convert-usd-to-btc.component';

describe('ConvertUsdToBtcComponent', () => {
  let component: ConvertUsdToBtcComponent;
  let fixture: ComponentFixture<ConvertUsdToBtcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertUsdToBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertUsdToBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
