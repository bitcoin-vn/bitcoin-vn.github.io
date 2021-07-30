import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BitcoinPaperWalletComponent } from './bitcoin-paper-wallet.component';

describe('BitcoinPaperWalletComponent', () => {
  let component: BitcoinPaperWalletComponent;
  let fixture: ComponentFixture<BitcoinPaperWalletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinPaperWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinPaperWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
