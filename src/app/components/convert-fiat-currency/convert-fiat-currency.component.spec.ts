import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConvertFiatCurrencyComponent } from './convert-fiat-currency.component';

describe('ConvertFiatCurrencyComponent', () => {
  let component: ConvertFiatCurrencyComponent;
  let fixture: ComponentFixture<ConvertFiatCurrencyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertFiatCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertFiatCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
