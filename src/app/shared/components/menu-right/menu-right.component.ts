import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FullLocales, Cryptos, configWidgetPrice, configWidgetPriceFix, Indicators, configWidgetChart } from "../../../components/config-chart/data-display";
interface Locale {
  label: string,
  value: string
}
declare const Intl: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('800ms ease-in'))
    ])
  ]
})
export class MenuRightComponent implements OnInit {
  @Output() public onChangeLocale = new EventEmitter();
  @Output() public onChangeTicket = new EventEmitter();
  @Output() public onChangeTicketTab = new EventEmitter();
  @Output() public onChangeIndicator = new EventEmitter();

  public showHide = false;
  public piSpinner = 'default';

  public selectedLocale: string;
  public locales: any[] = FullLocales;
  public indicators: any[] = Indicators;
  public selectedIndicators: any;

  public selectedTickets: any[];
  public tickets: any[] = [];
  public selectedTicketsTab: any[];
  public ticketsTab: any[] = [];

  public onShowHide() {
    this.showHide = !this.showHide;
    this.piSpinner = (this.piSpinner === 'default' ? 'rotated' : 'default');
  }

  public onLocale(e) {
    const locale: Locale = this.locales.filter((f: Locale) => f.value === e.value)[0];
    localStorage.setItem('locale_btc_vn', locale.value);
    this.onChangeLocale.emit(locale.value);
  }

  public onTicket(e) {
    this.selectedTickets = e.value;
    const data = JSON.stringify(e.value.map(m => ({ title: m, proName: `BINANCE:${m.replace('/', '')}` })));
    localStorage.setItem('ticket_btc_vn', data);
    this.onChangeTicket.emit(e);
  }

  public onTicketTab(e) {
    this.selectedTicketsTab = e.value;
    const data = JSON.stringify(e.value.map(m => ({ description: m, proName: `BINANCE:${m.replace('/', '')}` })));
    localStorage.setItem('ticket_tab_btc_vn', data);
    this.onChangeTicketTab.emit(e);
  }

  public onIndicator(e): void {
    this.selectedIndicators = e.value;
    const data = JSON.stringify(e.value.map(m => ({ id: m })));
    localStorage.setItem('indicator_btc_vn', data);
    this.onChangeIndicator.emit(e.checked);
  }

  public onReset(): void {
    localStorage.clear();
  }

  constructor() {
  }

  ngOnInit() {
    this.initialLocale();
    this.initialTicket();
    this.initialTicketTab();
    this.initialIndiactor();
  }

  private initialLocale(): void {
    const localeActive = localStorage.getItem('locale_btc_vn');
    if (localeActive === undefined || localeActive === null) {
      const locale: Locale = this.locales.filter((f: Locale) => f.value.split("_")[0] === new Intl.NumberFormat().resolvedOptions().locale)[0];
      this.selectedLocale = locale && locale.value;
      localStorage.setItem('locale_btc_vn', locale && locale.value);
    } else {
      this.selectedLocale = localeActive;
    }
  }

  private initialTicket(): void {
    const ticketActive = localStorage.getItem('ticket_btc_vn');
    if (ticketActive === undefined || ticketActive === null) {
      this.selectedTickets = configWidgetPrice.symbols.map(e => (e.title))
      localStorage.setItem('ticket_btc_vn', JSON.stringify(configWidgetPrice.symbols));
    } else {
      this.selectedTickets = JSON.parse(ticketActive).map(e => (e.title));
    }
    this.tickets = Cryptos.map(f => ({ 'label': f.value, 'value': f.value }));
  }

  private initialTicketTab(): void {
    const ticketActive = localStorage.getItem('ticket_tab_btc_vn');
    if (ticketActive === undefined || ticketActive === null) {
      this.selectedTicketsTab = configWidgetPriceFix.symbols.map(e => (e.description))
      localStorage.setItem('ticket_tab_btc_vn', JSON.stringify(configWidgetPriceFix.symbols));
    } else {
      this.selectedTicketsTab = JSON.parse(ticketActive).map(e => (e.description));
    }
    this.ticketsTab = Cryptos.map(f => ({ 'label': f.value, 'value': f.value }));
  }

  private initialIndiactor(): void {
    const indicatorActive = localStorage.getItem('indicator_btc_vn');
    if (indicatorActive === undefined || indicatorActive === null) {
      this.selectedIndicators = configWidgetChart.config.studies.map(m => (m.id));
      localStorage.setItem('indicator_btc_vn', JSON.stringify(configWidgetChart.config.studies));
    } else {
      this.selectedIndicators = JSON.parse(indicatorActive).map(e => (e.id));
    }
  }
}
