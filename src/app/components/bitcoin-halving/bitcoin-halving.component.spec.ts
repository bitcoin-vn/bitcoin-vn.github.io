import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BitcoinHalvingComponent } from './bitcoin-halving.component';

describe('BitcoinHalvingComponent', () => {
  let component: BitcoinHalvingComponent;
  let fixture: ComponentFixture<BitcoinHalvingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinHalvingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinHalvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
