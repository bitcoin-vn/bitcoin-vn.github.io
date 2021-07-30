// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
// My app
import { HomeComponent } from "src/app/components/home/home.component";
import { ChartsComponent } from "src/app/components/charts/charts.component";
import { ChatRoomComponent } from "src/app/components/chat-room/chat-room.component";
import { FullLayoutComponent } from "src/app/components/_root/full-layout/full-layout.component";
import { AnalysisComponent } from "src/app/components/analysis/analysis.component";
import { ConvertBtcToAltcoinComponent } from "src/app/components/convert-btc-to-altcoin/convert-btc-to-altcoin.component";
import { ConvertBtcToUsdComponent } from "src/app/components/convert-btc-to-usd/convert-btc-to-usd.component";
import { ConvertUsdToBtcComponent } from "src/app/components/convert-usd-to-btc/convert-usd-to-btc.component";
import { CryptocurrencyComponent } from "src/app/components/cryptocurrency/cryptocurrency.component";
import { GoogleTrendsComponent } from "src/app/components/google-trends/google-trends.component";
import { MyNotesComponent } from "src/app/components/my-notes/my-notes.component";
import { BitcoinAgeDistributionComponent } from "src/app/components/bitcoin-age-distribution/bitcoin-age-distribution.component";
import { BitcoinPaperWalletComponent } from "src/app/components/bitcoin-paper-wallet/bitcoin-paper-wallet.component";
import { ConvertFiatCurrencyComponent } from "src/app/components/convert-fiat-currency/convert-fiat-currency.component";
import { LearnAboutBlockchainComponent } from "src/app/components/learn-about-blockchain/learn-about-blockchain.component";
import { FearAndGreedIndexComponent } from "src/app/components/fear-and-greed-index/fear-and-greed-index.component";
import { BitcoinHalvingComponent } from "src/app/components/bitcoin-halving/bitcoin-halving.component";
import { QRCodeGeneratorComponent } from "src/app/components/qrcode-generator/qrcode-generator.component";

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'analysis',
        component: AnalysisComponent
      }, {
        path: 'charts',
        component: ChartsComponent
      }, {
        path: 'chat-room',
        component: ChatRoomComponent
      }, {
        path: 'btc-to-usd',
        component: ConvertBtcToUsdComponent
      }, {
        path: 'usd-to-btc',
        component: ConvertUsdToBtcComponent
      }, {
        path: 'btc-to-altcoin',
        component: ConvertBtcToAltcoinComponent
      }, {
        path: 'fiat-to-another',
        component: ConvertFiatCurrencyComponent
      }, {
        path: 'cryptocurrency',
        component: CryptocurrencyComponent
      }, {
        path: 'google-trends',
        component: GoogleTrendsComponent
      }, {
        path: 'chat-room',
        component: ChatRoomComponent
      }, {
        path: 'notes',
        component: MyNotesComponent
      }, {
        path: 'bitcoin-halving',
        component: BitcoinHalvingComponent
      }, {
        path: 'bitcoin-halving/:name',
        component: BitcoinHalvingComponent
      }, {
        path: 'fear-and-greed-index',
        component: FearAndGreedIndexComponent
      }, {
        path: 'learn-about-bockchain',
        component: LearnAboutBlockchainComponent
      }, {
        path: 'bitcoin-age-distribution',
        component: BitcoinAgeDistributionComponent
      }, {
        path: 'bitcoin-paper-wallet',
        component: BitcoinPaperWalletComponent
      }, {
        path: 'qrcode-generator',
        component: QRCodeGeneratorComponent
      }
    ]
  }, {
    path: '**',
    redirectTo: ''
  }
];

const routerOptions: ExtraOptions = {
    useHash: true,
    relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutes { }
