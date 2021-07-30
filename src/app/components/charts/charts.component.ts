// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetChart, configWidgetPriceFix } from "../../components/config-chart/data-display";
declare const TradingView: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterViewInit {

  public flags: any = {
    showTicketTab: true,
    showTicket: true,
    heightChart: 245
  };

  public onChangeLocale(e): void {
    this.ngAfterViewInit();
  }

  public onChangeSymbol(e): void {
    this.initialChart();
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

  public onChangeIndicator(e): void {
    this.initialChart();
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
    this.initialChart();
    this.initialTicketTab();
    this.initialTicket();
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

  private initialChart(): void {
    configWidgetChart.config.studies = JSON.parse(localStorage.getItem('indicator_btc_vn'));
    configWidgetChart.config.symbol = `BINANCE:${localStorage.getItem('symbol_btc_vn').replace('/', '')}`;
    new TradingView.widget(configWidgetChart.config);
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

  private setupLocale(e: string = null): void {
    const l = localStorage.getItem('locale_btc_vn');
    configWidgetChart.config.locale = e ? e : l;
    configWidgetPrice.locale = e ? e : l;
  }

}
