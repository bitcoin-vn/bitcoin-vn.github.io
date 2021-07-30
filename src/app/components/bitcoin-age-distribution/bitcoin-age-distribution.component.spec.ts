import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BitcoinAgeDistributionComponent } from './bitcoin-age-distribution.component';

describe('BitcoinAgeDistributionComponent', () => {
  let component: BitcoinAgeDistributionComponent;
  let fixture: ComponentFixture<BitcoinAgeDistributionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinAgeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinAgeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
