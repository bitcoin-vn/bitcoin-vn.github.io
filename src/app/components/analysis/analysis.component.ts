// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetAnalysis, configWidgetPriceFix } from "../../components/config-chart/data-display";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

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

  public onChangeAnalysis(e): void {
    this.initialAnalysis(e[1]);
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
    this.initialAnalysis(1);
    this.initialAnalysis(2);
    this.initialAnalysis(3);
  }

  private setupLocale(e: string = null): void {
    const l = localStorage.getItem('locale_btc_vn');
    configWidgetPrice.locale = e ? e : l;
    configWidgetAnalysis.config.locale = e ? e : l;
  }

  public initialAnalysis(id): void {
    const store = JSON.parse(localStorage.getItem('analysis_btc_vn'));
    switch (id) {
      case 1:
        configWidgetAnalysis.config.symbol = 'BINANCE:' + store[0].replace('/', '');
        break;
      case 2:
        configWidgetAnalysis.config.symbol = 'BINANCE:' + store[1].replace('/', '');
        break;
      case 3:
        configWidgetAnalysis.config.symbol = 'BINANCE:' + store[2].replace('/', '');
        break;
      default:
        break;
    }
    document.getElementById("widget-analysis" + id).innerHTML = '';
    const analysis = {
      id: 'widget-analysis' + id,
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js',
      text: JSON.stringify(configWidgetAnalysis.config)
    }
    this.renderScript(analysis);
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
