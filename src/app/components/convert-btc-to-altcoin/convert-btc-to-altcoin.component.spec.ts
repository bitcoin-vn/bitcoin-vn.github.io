import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConvertBtcToAltcoinComponent } from './convert-btc-to-altcoin.component';

describe('ConvertBtcToAltcoinComponent', () => {
  let component: ConvertBtcToAltcoinComponent;
  let fixture: ComponentFixture<ConvertBtcToAltcoinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertBtcToAltcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertBtcToAltcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
