import { Component, OnInit, Inject, Renderer2, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPriceFix, configWidgetPrice, Fiats, CrytoStandard } from "../../components/config-chart/data-display";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";

interface SelOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-convert-usd-to-btc',
  templateUrl: './convert-usd-to-btc.component.html',
  styleUrls: ['./convert-usd-to-btc.component.scss']
})
export class ConvertUsdToBtcComponent implements OnInit, AfterViewInit {

  public fiats = Fiats;
  public cryptos = CrytoStandard;
  public selLeftCoin: SelOption = this.fiats[0];
  public selRightCoin: SelOption = this.cryptos[0];
  public flags: any = {
    showTicketTab: true,
    showTicket: true,
    heightChart: 245
  };
  public isSubmit: boolean = false;
  public formGroup: FormGroup;

  public onLeftSelected(e): void {
    this.selLeftCoin = this.fiats.filter(f => f.value === e)[0];
  }

  public onRightSelected(e): void {
    this.selRightCoin = this.cryptos.filter(f => f.value === e)[0];
  }

  public onCalculate(e): void {
    e.preventDefault();
    if (!this.f.currencyL.value) {
      alert("Please check the amount you want to convert");
    } else {
      this.isSubmit = true;
      var myUrl = `https://min-api.cryptocompare.com/data/price?fsym=${this.selLeftCoin.value}&tsyms=${this.selRightCoin.value}`;
      this.http.get(myUrl).subscribe((res: any) => {
        if (res && res.Response === 'Error') {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: res.Message });
        } else {
          this.formGroup.setValue({
            currencyL: this.f.currencyL.value,
            currencyR: Number(this.f.currencyL.value) * Number(res[`${this.selRightCoin.value}`])
          });
        }
        this.isSubmit = false;
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
      })
    }
  }

  public onChangeLocale(e): void {
    this.ngAfterViewInit();
  }

  public onChangeTicket(e): void {
    this.initialTicket();
  }

  public onChangeTicketTab(e): void {
    this.initialTicketTab();
  }

  public onChangeTickerChecked(): void {
    if (this.flags.showTicket && this.flags.showTicketTab) {
      this.flags.heightChart = 245;
    } else if (!this.flags.showTicket && this.flags.showTicketTab) {
      this.flags.heightChart = 199;
    } else if (this.flags.showTicket && !this.flags.showTicketTab) {
      this.flags.heightChart = 173;
    } else {
      this.flags.heightChart = 126;
    }
  }

  // 2. pass then in constructor
  constructor(
    private http: HttpClient,
    private renderer2: Renderer2,
    private messageService: MessageService,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
    this.validate();
  }

  ngAfterViewInit() {
    this.setupLocale();
    this.initialTicketTab();
    this.initialTicket();
  }

  public validate(): void {
    this.formGroup = new FormGroup({
      currencyL: new FormControl(),
      currencyR: new FormControl()
    })
  }

  get f() { return this.formGroup.controls }

  private setupLocale(e: string = null): void {
    const l = localStorage.getItem('locale_btc_vn');
    configWidgetPrice.locale = e ? e : l;
  }

  private initialTicketTab(): void {
    document.getElementById("widget-cryptoprices-fix").innerHTML = '';
    configWidgetPriceFix.symbols = JSON.parse(localStorage.getItem('ticket_tab_btc_vn'));
    const pricesFix = {
      id: 'widget-cryptoprices-fix',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js',
      text: JSON.stringify(configWidgetPriceFix)
    }
    this.renderScript(pricesFix);
  }

  private initialTicket(): void {
    document.getElementById("widget-cryptoprices").innerHTML = '';
    configWidgetPrice.symbols = JSON.parse(localStorage.getItem('ticket_btc_vn'));
    const prices = {
      id: 'widget-cryptoprices',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
      text: JSON.stringify(configWidgetPrice)
    }
    this.renderScript(prices);
  }

  // 3. call them in ngOnInit
  private renderScript(obj): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = obj.link;
    s.text = obj.text;
    setTimeout(() => {
      this.renderer2.appendChild(this.document.getElementById(obj.id), s);
    }, 1000);
  }

}
