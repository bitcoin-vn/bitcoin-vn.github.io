// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetCryptocurrency, configWidgetPriceFix } from "../../components/config-chart/data-display";

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit, AfterViewInit {

  public flags: any = {
    showTicketTab: true,
    showTicket: true,
    heightChart: 245
  };

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
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setupLocale();
    this.initialTicketTab();
    this.initialTicket();
    this.initialCryptoCurrency();
  }

  private setupLocale(e: string = null): void {
    const l = localStorage.getItem('locale_btc_vn');
    configWidgetPrice.locale = e ? e : l;
    configWidgetCryptocurrency.locale = e ? e : l;
  }

  private initialCryptoCurrency(): void {
    document.getElementById("widget-cryptocurrency").innerHTML = '';
    const currency = {
      id: 'widget-cryptocurrency',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
      text: JSON.stringify(configWidgetCryptocurrency)
    }
    this.renderScript(currency);
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
