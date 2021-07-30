import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
// Project
import { AppRoutes } from './app.routes';
import { AppComponent } from './components/_root';
import { FullLayoutComponent } from './components/_root/full-layout/full-layout.component';
import { HeaderComponent } from './components/_common/header/header.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { GoogleTrendsComponent } from './components/google-trends/google-trends.component';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component';
import { MyNotesComponent } from './components/my-notes/my-notes.component';
import { ConvertBtcToUsdComponent } from './components/convert-btc-to-usd/convert-btc-to-usd.component';
import { ConvertUsdToBtcComponent } from './components/convert-usd-to-btc/convert-usd-to-btc.component';
import { ConvertBtcToAltcoinComponent } from './components/convert-btc-to-altcoin/convert-btc-to-altcoin.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/_common/music/music.component';
import { NavigationComponent } from './components/_common/navigation/navigation.component';
import { FooterComponent } from './components/_common/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { BitcoinPaperWalletComponent } from './components/bitcoin-paper-wallet/bitcoin-paper-wallet.component';
import { BitcoinAgeDistributionComponent } from './components/bitcoin-age-distribution/bitcoin-age-distribution.component';
import { ConvertFiatCurrencyComponent } from './components/convert-fiat-currency/convert-fiat-currency.component';
// ngx-bootstrap v4
import { ModalModule } from 'ngx-bootstrap/modal';
// angularx-qrcode
import { QRCodeModule } from 'angularx-qrcode';
// primeng
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
// ngx-currency
import { NgxCurrencyModule } from "ngx-currency";
import { LearnAboutBlockchainComponent } from './components/learn-about-blockchain/learn-about-blockchain.component';
import { BitcoinHalvingComponent } from './components/bitcoin-halving/bitcoin-halving.component';
import { FearAndGreedIndexComponent } from './components/fear-and-greed-index/fear-and-greed-index.component';
import { QRCodeGeneratorComponent } from './components/qrcode-generator/qrcode-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HeaderComponent,
    ChartsComponent,
    AnalysisComponent,
    ChatRoomComponent,
    GoogleTrendsComponent,
    CryptocurrencyComponent,
    MyNotesComponent,
    ConvertBtcToUsdComponent,
    ConvertUsdToBtcComponent,
    ConvertBtcToAltcoinComponent,
    HomeComponent,
    MusicComponent,
    NavigationComponent,
    FooterComponent,
    BitcoinPaperWalletComponent,
    BitcoinAgeDistributionComponent,
    ConvertFiatCurrencyComponent,
    LearnAboutBlockchainComponent,
    BitcoinHalvingComponent,
    FearAndGreedIndexComponent,
    QRCodeGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutes,
    QRCodeModule,
    SharedModule,
    HttpClientModule,
    ModalModule.forRoot(),
    // ngprime
    MultiSelectModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    MenubarModule,
    ContextMenuModule,
    RippleModule,
    InputNumberModule,
    // ngx-currency
    NgxCurrencyModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
