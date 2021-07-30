import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CryptocurrencyComponent } from './cryptocurrency.component';

describe('CryptocurrencyComponent', () => {
  let component: CryptocurrencyComponent;
  let fixture: ComponentFixture<CryptocurrencyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
