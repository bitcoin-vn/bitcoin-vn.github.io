export const configWidgetPriceFix = {
    "symbols": [
        {
            "description": "BTC/USDT",
            "proName": "BINANCE:BTCUSDT"
        },
        {
            "description": "ETH/USDT",
            "proName": "BINANCE:ETHUSDT"
        },
        {
            "description": "BCH/USDT",
            "proName": "BINANCE:BCHUSDT"
        },
        {
            "description": "TRX/USDT",
            "proName": "BINANCE:TRXUSDT"
        },
        {
            "description": "WRX/USDT",
            "proName": "BINANCE:WRXUSDT"
        }
    ],
    "colorTheme": "dark",
    "isTransparent": false,
    "locale": navigator.language
};

export const configWidgetPrice = {
    "symbols": [
        {
            "title": "XRP/USDT",
            "proName": "BINANCE:XRPUSDT"
        },
        {
            "title": "EOS/USDT",
            "proName": "BINANCE:EOSUSDT"
        },
        {
            "title": "XLM/USDT",
            "proName": "BINANCE:XLMUSDT"
        },
        {
            "title": "ETC/USDT",
            "proName": "BINANCE:ETCUSDT"
        },
        {
            "title": "USD/VND",
            "proName": "FX_IDC:USDVND"
        }
    ],
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": navigator.language
};

export const configWidgetChart = {
    config: {
        'autosize': true,
        'symbol': 'BINANCE:BTCUSDT',
        'interval': 'D',
        'timezone': 'Asia/Bangkok',
        'theme': 'Dark',
        'style': '1',
        'locale': navigator.language,
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'hide_side_toolbar': false,
        'allow_symbol_change': true,
        'details': true,
        'show_popup_button': true,
        'container_id': 'widget-chart',
        "studies": [ // https://www.tradingview.com/wiki/Widget:TradingView_Widget
            {
                "id": "MASimple@tv-basicstudies",
                "inputs": {
                    "length": 50
                }
            },
            {
                "id": "MASimple@tv-basicstudies",
                "inputs": {
                    "length": 200
                }
            },
            {
                "id": "MAExp@tv-basicstudies",
                "inputs": {
                    "length": 21
                }
            },
            {
                "id": "RSI@tv-basicstudies",
                "inputs": {
                    "length": 14
                }
            },
            {
                "id": "BB@tv-basicstudies",
                "inputs": {
                    "length": 20
                }
            }
        ]
    },
    type: [{
        'code': 'BINANCE:BTCUSDT',
        'name': 'BTC/USD'
    }, {
        'code': 'BINANCE:ETHUSDT',
        'name': 'ETH/USD'
    }, {
        'code': 'COINBASE:BCHUS',
        'name': 'BCH/USD'
    }, {
        'code': 'BINANCE:ETCUSDT',
        'name': 'ETC/USD'
    }, {
        'code': 'COINBASE:XLMUSD',
        'name': 'XLM/USD'
    }, {
        'code': 'BINANCE:BNBUSDT',
        'name': 'BNB/USD'
    }, {
        'code': 'BINANCE:XRPUSDT',
        'name': 'XRP/USD'
    }, {
        'code': 'BINANCE:TRXUSDT',
        'name': 'TRX/USD'
    }, {
        'code': 'BINANCE:TRXXRP',
        'name': 'TRX/XRP'
    }]
};

export const configWidgetCryptocurrency = {
    "height": "100%",
    "width": "100%",
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "dark",
    "transparency": false,
    "locale": navigator.language
}

export const configWidgetAnalysis = {
    config: {
        "showIntervalTabs": true,
        "height": "100%",
        "width": "100%",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": navigator.language,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "1m"
    },
    type: [{
        'code': 'BINANCE:BTCUSDT',
        'name': 'BTC/USD'
    }, {
        'code': 'BINANCE:ETHUSDT',
        'name': 'ETH/USD'
    }, {
        'code': 'COINBASE:BCHUS',
        'name': 'BCH/USD'
    }, {
        'code': 'BINANCE:ETCUSDT',
        'name': 'ETC/USD'
    }, {
        'code': 'COINBASE:XLMUSD',
        'name': 'XLM/USD'
    }, {
        'code': 'BINANCE:BNBUSDT',
        'name': 'BNB/USD'
    }, {
        'code': 'BINANCE:XRPUSDT',
        'name': 'XRP/USD'
    }, {
        'code': 'BINANCE:TRXUSDT',
        'name': 'TRX/USD'
    }, {
        'code': 'BINANCE:TRXXRP',
        'name': 'TRX/XRP'
    }]

}

export const configWidgetChatRoom = {
    "height": "100%",
    "width": "100%",
    "theme": "dark",
    "colorTheme": "dark",
    "container_id": "widget-chatroom",
    "room": "bitcoin_vi_VN",
    "locale": navigator.language
}

export const FullLocales: any[] = [
    {
        value: "ar_BH",
        label: "Arabic – Bahrain"
    },
    {
        value: "ar_DZ",
        label: "Arabic – Algeria"
    },
    {
        value: "ar_EG",
        label: "Arabic – Egypt"
    },
    {
        value: "ar_IN",
        label: "Arabic – India"
    },
    {
        value: "ar_IQ",
        label: "Arabic – Iraq"
    },
    {
        value: "ar_JO",
        label: "Arabic – Jordan"
    },
    {
        value: "ar_KW",
        label: "Arabic – Kuwait"
    },
    {
        value: "ar_LB",
        label: "Arabic – Lebanon"
    },
    {
        value: "ar_LY",
        label: "Arabic – Libya"
    },
    {
        value: "ar_MA",
        label: "Arabic – Morocco"
    },
    {
        value: "ar_OM",
        label: "Arabic – Oman"
    },
    {
        value: "ar_QA",
        label: "Arabic – Qatar"
    },
    {
        value: "ar_SA",
        label: "Arabic – Saudi Arabia"
    },
    {
        value: "ar_SD",
        label: "Arabic – Sudan"
    },
    {
        value: "ar_SY",
        label: "Arabic – Syria"
    },
    {
        value: "ar_TN",
        label: "Arabic – Tunisia"
    },
    {
        value: "ar_YE",
        label: "Arabic – Yemen"
    },
    {
        value: "be_BY",
        label: "Belarusian – Belarus"
    },
    {
        value: "bg_BG",
        label: "Bulgarian – Bulgaria"
    },
    {
        value: "ca_ES",
        label: "Catalan – Spain"
    },
    {
        value: "cs_CZ",
        label: "Czech – Czech Republic"
    },
    {
        value: "da_DK",
        label: "Danish – Denmark"
    },
    {
        value: "de_AT",
        label: "German – Austria"
    },
    {
        value: "de_BE",
        label: "German – Belgium"
    },
    {
        value: "de_CH",
        label: "German – Switzerland"
    },
    {
        value: "de_DE",
        label: "German – Germany"
    },
    {
        value: "de_LU",
        label: "German – Luxembourg"
    },
    {
        value: "el_GR",
        label: "Greek – Greece"
    },
    {
        value: "en_AU",
        label: "English – Australia"
    },
    {
        value: "en_CA",
        label: "English – Canada"
    },
    {
        value: "en_GB",
        label: "English – United Kingdom"
    },
    {
        value: "en_IN",
        label: "English – India"
    },
    {
        value: "en_NZ",
        label: "English – New Zealand"
    },
    {
        value: "en_PH",
        label: "English – Philippines"
    },
    {
        value: "en_US",
        label: "English – United States"
    },
    {
        value: "en_ZA",
        label: "English – South Africa"
    },
    {
        value: "en_ZW",
        label: "English – Zimbabwe"
    },
    {
        value: "es_AR",
        label: "Spanish – Argentina"
    },
    {
        value: "es_BO",
        label: "Spanish – Bolivia"
    },
    {
        value: "es_CL",
        label: "Spanish – Chile"
    },
    {
        value: "es_CO",
        label: "Spanish – Colombia"
    },
    {
        value: "es_CR",
        label: "Spanish – Costa Rica"
    },
    {
        value: "es_DO",
        label: "Spanish – Dominican Republic"
    },
    {
        value: "es_EC",
        label: "Spanish – Ecuador"
    },
    {
        value: "es_ES",
        label: "Spanish – Spain"
    },
    {
        value: "es_GT",
        label: "Spanish – Guatemala"
    },
    {
        value: "es_HN",
        label: "Spanish – Honduras"
    },
    {
        value: "es_MX",
        label: "Spanish – Mexico"
    },
    {
        value: "es_NI",
        label: "Spanish – Nicaragua"
    },
    {
        value: "es_PA",
        label: "Spanish – Panama"
    },
    {
        value: "es_PE",
        label: "Spanish – Peru"
    },
    {
        value: "es_PR",
        label: "Spanish – Puerto Rico"
    },
    {
        value: "es_PY",
        label: "Spanish – Paraguay"
    },
    {
        value: "es_SV",
        label: "Spanish – El Salvador"
    },
    {
        value: "es_US",
        label: "Spanish – United States"
    },
    {
        value: "es_UY",
        label: "Spanish – Uruguay"
    },
    {
        value: "es_VE",
        label: "Spanish – Venezuela"
    },
    {
        value: "et_EE",
        label: "Estonian – Estonia"
    },
    {
        value: "eu_ES",
        label: "Basque – Basque"
    },
    {
        value: "fi_FI",
        label: "Finnish – Finland"
    },
    {
        value: "fo_FO",
        label: "Faroese – Faroe Islands"
    },
    {
        value: "fr_BE",
        label: "French – Belgium"
    },
    {
        value: "fr_CA",
        label: "French – Canada"
    },
    {
        value: "fr_CH",
        label: "French – Switzerland"
    },
    {
        value: "fr_FR",
        label: "French – France"
    },
    {
        value: "fr_LU",
        label: "French – Luxembourg"
    },
    {
        value: "gl_ES",
        label: "Galician – Spain"
    },
    {
        value: "gu_IN",
        label: "Gujarati – India"
    },
    {
        value: "he_IL",
        label: "Hebrew – Israel"
    },
    {
        value: "hi_IN",
        label: "Hindi – India"
    },
    {
        value: "hr_HR",
        label: "Croatian – Croatia"
    },
    {
        value: "hu_HU",
        label: "Hungarian – Hungary"
    },
    {
        value: "id_ID",
        label: "Indonesian – Indonesia"
    },
    {
        value: "is_IS",
        label: "Icelandic – Iceland"
    },
    {
        value: "it_CH",
        label: "Italian – Switzerland"
    },
    {
        value: "it_IT",
        label: "Italian – Italy"
    },
    {
        value: "ja_JP",
        label: "Japanese – Japan"
    },
    {
        value: "ko_KR",
        label: "Korean – Republic of Korea"
    },
    {
        value: "lt_LT",
        label: "Lithuanian – Lithuania"
    },
    {
        value: "lv_LV",
        label: "Latvian – Latvia"
    },
    {
        value: "mk_MK",
        label: "Macedonian – FYROM"
    },
    {
        value: "mn_MN",
        label: "Mongolia – Mongolian"
    },
    {
        value: "ms_MY",
        label: "Malay – Malaysia"
    },
    {
        value: "nb_NO",
        label: "Norwegian(Bokmål) – Norway"
    },
    {
        value: "nl_BE",
        label: "Dutch – Belgium"
    },
    {
        value: "nl_NL",
        label: "Dutch – The Netherlands"
    },
    {
        value: "no_NO",
        label: "Norwegian – Norway"
    },
    {
        value: "pl_PL",
        label: "Polish – Poland"
    },
    {
        value: "pt_BR",
        label: "Portugese – Brazil"
    },
    {
        value: "pt_PT",
        label: "Portugese – Portugal"
    },
    {
        value: "rm_CH",
        label: "Romansh – Switzerland"
    },
    {
        value: "ro_RO",
        label: "Romanian – Romania"
    },
    {
        value: "ru_RU",
        label: "Russian – Russia"
    },
    {
        value: "ru_UA",
        label: "Russian – Ukraine"
    },
    {
        value: "sk_SK",
        label: "Slovak – Slovakia"
    },
    {
        value: "sl_SI",
        label: "Slovenian – Slovenia"
    },
    {
        value: "sq_AL",
        label: "Albanian – Albania"
    },
    {
        value: "sr_RS",
        label: "Serbian – Yugoslavia"
    },
    {
        value: "sv_FI",
        label: "Swedish – Finland"
    },
    {
        value: "sv_SE",
        label: "Swedish – Sweden"
    },
    {
        value: "ta_IN",
        label: "Tamil – India"
    },
    {
        value: "te_IN",
        label: "Telugu – India"
    },
    {
        value: "th_TH",
        label: "Thai – Thailand"
    },
    {
        value: "tr_TR",
        label: "Turkish – Turkey"
    },
    {
        value: "uk_UA",
        label: "Ukrainian – Ukraine"
    },
    {
        value: "ur_PK",
        label: "Urdu – Pakistan"
    },
    {
        value: "vi_VN",
        label: "Vietnamese – Viet Nam"
    },
    {
        value: "zh_CN",
        label: "Chinese – China"
    },
    {
        value: "zh_HK",
        label: "Chinese – Hong Kong"
    },
    {
        value: "zh_TW",
        label: "Chinese – Taiwan Province"
    }
]

export const Cryptos: any[] = [
    {
        label: "Bitcoin",
        value: "BTC/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/USDT"
    },
    {
        label: "XRP",
        value: "XRP/USDT"
    },
    {
        label: "TRON",
        value: "TRX/USDT"
    },
    {
        label: "WazirX",
        value: "WRX/USDT"
    },
    {
        label: "Stellar",
        value: "XLM/USDT"
    },
    {
        label: "Monero",
        value: "XMR/USDT"
    },
    {
        label: "EOS",
        value: "EOS/USDT"
    },
    {
        label: "Cardano",
        value: "ADA/USDT"
    },
    {
        label: "Dash",
        value: "DASH/USDT"
    },
    {
        label: "Binance Coin",
        value: "BNB/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/USDT"
    },
    {
        label: "Bitcoin",
        value: "BTC/USDB"
    },
    {
        label: "Chainlink",
        value: "LINK/USDT"
    },
    {
        label: "Binance USD",
        value: "BUSD/USDT"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/USDT"
    },
    {
        label: "Bitcoin",
        value: "BTC/USDC"
    },
    {
        label: "Tezos",
        value: "XTZ/USDT"
    },
    {
        label: "USD Coin",
        value: "USDC/USDT"
    },
    {
        label: "TrueUSD",
        value: "TUSD/USDT"
    },
    {
        label: "VeChain",
        value: "VET/USDT"
    },
    {
        label: "Paxos Standard",
        value: "PAX/USDT"
    },
    {
        label: "Zcash",
        value: "ZEC/USDT"
    },
    {
        label: "Neo",
        value: "NEO/USDT"
    },
    {
        label: "Matic Network",
        value: "MATIC/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/USDC"
    },
    {
        label: "Cosmos",
        value: "ATOM/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/BUSD"
    },
    {
        label: "Ethereum",
        value: "ETH/TUSD"
    },
    {
        label: "Cortex",
        value: "CTXC/USDT"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/BTC"
    },
    {
        label: "Algorand",
        value: "ALGO/USDT"
    },
    {
        label: "Qtum",
        value: "QTUM/USDT"
    },
    {
        label: "Elrond",
        value: "ERD/USDT"
    },
    {
        label: "Metal",
        value: "MTL/USDT"
    },
    {
        label: "IOST",
        value: "IOST/USDT"
    },
    {
        label: "Hedera Hashgraph",
        value: "HBAR/USDT"
    },
    {
        label: "BitTorrent",
        value: "BTT/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/USDC"
    },
    {
        label: "Ontology",
        value: "ONT/USDT"
    },
    {
        label: "ICON",
        value: "ICX/USDT"
    },

    {
        label: "Origin Protocol",
        value: "OGN/USDT"
    },

    {
        label: "IOTA",
        value: "IOTA/USDT"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/TUSD"
    },
    {
        label: "Fetch.ai",
        value: "FET/USDT"
    },

    {
        label: "iExec RLC",
        value: "RLC/USDT"
    },

    {
        label: "XRP",
        value: "XRP/BUSD"
    },
    {
        label: "Bitcoin",
        value: "BTC/EUR"
    },
    {
        label: "WINk",
        value: "WIN/USDT"
    },

    {
        label: "Dogecoin",
        value: "DOGE/USDT"
    },

    {
        label: "Enjin Coin",
        value: "ENJ/USDT"
    },

    {
        label: "Litecoin",
        value: "LTC/TUSD"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/USDC"
    },

    {
        label: "Binance Coin",
        value: "BNB/BUSD"
    },

    {
        label: "XRP",
        value: "XRP/USDC"
    },

    {
        label: "Waves",
        value: "WAVES/USDT"
    },
    {
        label: "MovieBloc",
        value: "MBL/USDT"
    },
    {
        label: "Chainlink",
        value: "LINK/ETH"
    },
    {
        label: "Band Protocol",
        value: "BAND/USDT"
    },
    {
        label: "Ravencoin",
        value: "RVN/USDT"
    },

    {
        label: "TomoChain",
        value: "TOMO/USDT"
    },

    {
        label: "Dusk Network",
        value: "DUSK/USDT"
    },

    {
        label: "NULS",
        value: "NULS/USDT"
    },

    {
        label: "Aion",
        value: "AION/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/BUSD"
    },
    {
        label: "XRP",
        value: "XRP/TUSD"
    },

    {
        label: "COTI",
        value: "COTI/USDT"
    },
    {
        label: "XRP",
        value: "XRP/BNB"
    },
    {
        label: "Ankr",
        value: "ANKR/USDT"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/BNB"
    },

    {
        label: "Zilliqa",
        value: "ZIL/USDT"
    },

    {
        label: "Chiliz",
        value: "CHZ/USDT"
    },


    {
        label: "Nano",
        value: "NANO/USDT"
    },

    {
        label: "EOS",
        value: "EOS/USDC"
    },

    {
        label: "Blockstack",
        value: "STX/USDT"
    },

    {
        label: "0x",
        value: "ZRX/USDT"
    },
    {
        label: "Perlin",
        value: "PERL/USDT"
    },

    {
        label: "Litecoin",
        value: "LTC/BUSD"
    },

    {
        label: "Kava",
        value: "KAVA/USDT"
    },

    {
        label: "Harmony",
        value: "ONE/USDT"
    },
    {
        label: "Standard Tokenization Protocol",
        value: "STPT/USDT"
    },

    {
        label: "THETA",
        value: "THETA/USDT"
    },

    {
        label: "TRON",
        value: "TRX/USDC"
    },

    {
        label: "Chainlink",
        value: "LINK/USDC"
    },

    {
        label: "Holo",
        value: "HOT/USDT"
    },
    {
        label: "Litecoin",
        value: "LTC/BNB"
    },
    {
        label: "Beam",
        value: "BEAM/USDT"
    },

    {
        label: "Ren",
        value: "REN/USDT"
    },
    {
        label: "TRON",
        value: "TRX/BUSD"
    },

    {
        label: "EOS",
        value: "EOS/BUSD"
    },

    {
        label: "OmiseGO",
        value: "OMG/USDT"
    },

    {
        label: "Binance Coin",
        value: "BNB/TUSD"
    },
    {
        label: "Fantom",
        value: "FTM/USDT"
    },

    {
        label: "FTX Token",
        value: "FTT/USDT"
    },

    {
        label: "Chainlink",
        value: "LINK/BUSD"
    },
    {
        label: "Zcoin",
        value: "XZC/BTC"
    },
    {
        label: "Nexus",
        value: "NXS/BTC"
    },
    {
        label: "GXChain",
        value: "GXS/BTC"
    },
    {
        label: "ARPA Chain",
        value: "ARPA/BTC"
    },
    {
        label: "Monero",
        value: "XMR/ETH"
    },
    {
        label: "LTO Network",
        value: "LTO/USDT"
    },
    {
        label: "Chainlink",
        value: "LINK/TUSD"
    },
    {
        label: "TRON",
        value: "TRX/TUSD"
    },
    {
        label: "Holo",
        value: "HOT/ETH"
    },
    {
        label: "Wanchain",
        value: "WAN/BTC"
    },
    {
        label: "Dock",
        value: "DOCK/BTC"
    },
    {
        label: "ARPA Chain",
        value: "ARPA/USDT"
    },
    {
        label: "Tether",
        value: "USDT/RUB"
    },
    {
        label: "Genesis Vision",
        value: "GVT/BTC"
    },
    {
        label: "Bitcoin Diamond",
        value: "BCD/BTC"
    },
    {
        label: "Ontology Gas",
        value: "ONG/BTC"
    },
    {
        label: "Ethereum",
        value: "ETH/TRY"
    },
    {
        label: "Binance Coin",
        value: "BNB/USDC"
    },
    {
        label: "Ardor",
        value: "ARDR/BTC"
    },
    {
        label: "Tezos",
        value: "XTZ/BUSD"
    },
    {
        label: "Komodo",
        value: "KMD/BTC"
    },
    {
        label: "Dash",
        value: "DASH/BNB"
    },
    {
        label: "POA",
        value: "POA/BTC"
    },
    {
        label: "Aave",
        value: "LEND/ETH"
    },
    {
        label: "XRP",
        value: "XRP/TRY"
    },
    {
        label: "TROY",
        value: "TROY/USDT"
    },
    {
        label: "USD Coin",
        value: "USDC/PAX"
    },
    {
        label: "Celer Network",
        value: "CELR/USDT"
    },
    {
        label: "Agrello",
        value: "DLT/ETH"
    },
    {
        label: "Polymath",
        value: "POLY/BTC"
    },
    {
        label: "Harmony",
        value: "ONE/USDC"
    },
    {
        label: "EOS",
        value: "EOS/TUSD"
    },
    {
        label: "Siacoin",
        value: "SC/BTC"
    },
    {
        label: "Lisk",
        value: "LSK/USDT"
    },
    {
        label: "Ambrosus",
        value: "AMB/BTC"
    },
    {
        label: "Status",
        value: "SNT/ETH"
    },
    {
        label: "Binance USD",
        value: "BUSD/NGN"
    },
    {
        label: "Contentos",
        value: "COS/BTC"
    },
    {
        label: "WINk",
        value: "WIN/TRX"
    },
    {
        label: "Neo",
        value: "NEO/ETH"
    },
    {
        label: "Waves",
        value: "WAVES/ETH"
    },
    {
        label: "CyberMiles",
        value: "CMT/BTC"
    },
    {
        label: "Augur",
        value: "REP/ETH"
    },
    {
        label: "MCO",
        value: "MCO/USDT"
    },
    {
        label: "Selfkey",
        value: "KEY/BTC"
    },
    {
        label: "MovieBloc",
        value: "MBL/BTC"
    },
    {
        label: "Fetch.ai",
        value: "FET/BNB"
    },
    {
        label: "Pundi X",
        value: "NPXS/ETH"
    },
    {
        label: "Dent",
        value: "DENT/ETH"
    },
    {
        label: "Tierion",
        value: "TNT/BTC"
    },
    {
        label: "BitTorrent",
        value: "BTT/TRX"
    },
    {
        label: "QuarkChain",
        value: "QKC/BTC"
    },
    {
        label: "Red Pulse Phoenix",
        value: "PHB/BTC"
    },
    {
        label: "Stellar",
        value: "XLM/ETH"
    },
    {
        label: "Ethereum Classic",
        value: "ETC/ETH"
    },
    {
        label: "USD Coin",
        value: "USDC/TUSD"
    },
    {
        label: "Viacoin",
        value: "VIA/BTC"
    },
    {
        label: "Dash",
        value: "DASH/BUSD"
    },
    {
        label: "Nebulas",
        value: "NAS/ETH"
    },
    {
        label: "NKN",
        value: "NKN/BTC"
    },
    {
        label: "Matic Network",
        value: "MATIC/BNB"
    },
    {
        label: "Ontology Gas",
        value: "ONG/USDT"
    },
    {
        label: "Bluzelle",
        value: "BLZ/BTC"
    },
    {
        label: "Ethereum",
        value: "ETH/EUR"
    },
    {
        label: "Streamr DATAcoin",
        value: "DATA/ETH"
    },
    {
        label: "Enjin Coin",
        value: "ENJ/ETH"
    },
    {
        label: "Algorand",
        value: "ALGO/TUSD"
    },
    {
        label: "Civic",
        value: "CVC/BTC"
    },
    {
        label: "Cindicator",
        value: "CND/BTC"
    },
    {
        label: "SONM",
        value: "SNM/BTC"
    },
    {
        label: "AdEx",
        value: "ADX/BTC"
    },
    {
        label: "Stratis",
        value: "STRAT/USDT"
    },
    {
        label: "Skycoin",
        value: "SKY/BTC"
    },
    {
        label: "Theta Fuel",
        value: "TFUEL/BTC"
    },
    {
        label: "Tezos",
        value: "XTZ/BNB"
    },
    {
        label: "SingularDTV",
        value: "SNGLS/BTC"
    },
    {
        label: "Qtum",
        value: "QTUM/ETH"
    },
    {
        label: "AirSwap",
        value: "AST/BTC"
    },
    {
        label: "Holo",
        value: "HOT/BTC"
    },
    {
        label: "WINk",
        value: "WIN/USDC"
    },
    {
        label: "Harmony",
        value: "ONE/BNB"
    },
    {
        label: "Loopring",
        value: "LRC/ETH"
    },
    {
        label: "WINk",
        value: "WIN/BNB"
    },
    {
        label: "Celer Network",
        value: "CELR/BTC"
    },
    {
        label: "IOTA",
        value: "IOTA/ETH"
    },
    {
        label: "NULS",
        value: "NULS/ETH"
    },
    {
        label: "Neo",
        value: "NEO/TUSD"
    },
    {
        label: "Pundi X",
        value: "NPXS/USDT"
    },
    {
        label: "Ripio Credit Network",
        value: "RCN/BTC"
    },
    {
        label: "Monetha",
        value: "MTH/BTC"
    },
    {
        label: "NavCoin",
        value: "NAV/BTC"
    },
    {
        label: "Request",
        value: "REQ/BTC"
    },
    {
        label: "Zcash",
        value: "ZEC/ETH"
    },
    {
        label: "EOS",
        value: "EOS/PAX"
    },
    {
        label: "Wanchain",
        value: "WAN/USDT"
    },
    {
        label: "HyperCash",
        value: "HC/USDT"
    },
    {
        label: "Quantstamp",
        value: "QSP/BTC"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/ETH"
    },
    {
        label: "Groestlcoin",
        value: "GRS/BTC"
    },
    {
        label: "Horizen",
        value: "ZEN/BTC"
    },
    {
        label: "DREP",
        value: "DREP/BTC"
    },
    {
        label: "XRP",
        value: "XRP/EUR"
    },
    {
        label: "Civic",
        value: "CVC/USDT"
    },
    {
        label: "Gifto",
        value: "GTO/USDT"
    },
    {
        label: "Zilliqa",
        value: "ZIL/ETH"
    },
    {
        label: "Gifto",
        value: "GTO/BTC"
    },
    {
        label: "WazirX",
        value: "WRX/BNB"
    },
    {
        label: "Gas",
        value: "GAS/BTC"
    },
    {
        label: "BitShares",
        value: "BTS/BTC"
    },
    {
        label: "iExec RLC",
        value: "RLC/BNB"
    },
    {
        label: "Binance USD",
        value: "BUSD/RUB"
    },
    {
        label: "OST",
        value: "OST/BTC"
    },
    {
        label: "NKN",
        value: "NKN/USDT"
    },
    {
        label: "Cardano",
        value: "ADA/TUSD"
    },
    {
        label: "TokenClub",
        value: "TCT/BTC"
    },
    {
        label: "Viberate",
        value: "VIB/ETH"
    },
    {
        label: "Mithril",
        value: "MITH/BTC"
    },
    {
        label: "Band Protocol",
        value: "BAND/BNB"
    },
    {
        label: "Everex",
        value: "EVX/ETH"
    },
    {
        label: "Decentraland",
        value: "MANA/ETH"
    },
    {
        label: "Steem",
        value: "STEEM/ETH"
    },
    {
        label: "BitTorrent",
        value: "BTT/USDC"
    },
    {
        label: "BitTorrent",
        value: "BTT/BNB"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/USDC"
    },
    {
        label: "Zcash",
        value: "ZEC/TUSD"
    },
    {
        label: "Dent",
        value: "DENT/USDT"
    },
    {
        label: "Storm",
        value: "STORM/USDT"
    },
    {
        label: "Aeron",
        value: "ARN/ETH"
    },
    {
        label: "Paxos Standard",
        value: "PAX/TUSD"
    },
    {
        label: "Hedera Hashgraph",
        value: "HBAR/BNB"
    },
    {
        label: "Cocos-BCX",
        value: "COCOS/USDT"
    },
    {
        label: "Ethereum",
        value: "ETH/BTC"
    }, {
        label: "XRP",
        value: "XRP/BTC"
    }, {
        label: "Binance Coin",
        value: "BNB/BTC"
    }, {
        label: "Bitcoin Cash",
        value: "BCH/BTC"
    }, {
        label: "EOS",
        value: "EOS/BTC"
    },
    {
        label: "Bitcoin",
        value: "BTC/PAX"
    },
    {
        label: "Litecoin",
        value: "LTC/BTC"
    },
    {
        label: "Chainlink",
        value: "LINK/BTC"
    }, {
        label: "Etherparty",
        value: "FUEL/BTC"
    }, {
        label: "Dash",
        value: "DASH/BTC"
    }, {
        label: "Cortex",
        value: "CTXC/BTC"
    },
    {
        label: "Monero",
        value: "XMR/BTC"
    }, {
        label: "Metal",
        value: "MTL/BTC"
    },
    {
        label: "Tezos",
        value: "XTZ/BTC"
    }, {
        label: "iExec RLC",
        value: "RLC/BTC"
    }, {
        label: "Agrello",
        value: "DLT/BTC"
    }, {
        label: "WazirX",
        value: "WRX/BTC"
    },
    {
        label: "Enigma",
        value: "ENG/BTC"
    },
    {
        label: "Matic Network",
        value: "MATIC/BTC"
    }, {
        label: "Streamr DATAcoin",
        value: "DATA/BTC"
    }, {
        label: "Hedera Hashgraph",
        value: "HBAR/BTC"
    }, {
        label: "Cardano",
        value: "ADA/BTC"
    }, {
        label: "Stellar",
        value: "XLM/BTC"
    }, {
        label: "Kyber Network",
        value: "KNC/BTC"
    }, {
        label: "Dusk Network",
        value: "DUSK/BTC"
    }, {
        label: "Cosmos",
        value: "ATOM/BTC"
    },
    {
        label: "Enjin Coin",
        value: "ENJ/BTC"
    },
    {
        label: "Zcash",
        value: "ZEC/BTC"
    },
    {
        label: "TRON",
        value: "TRX/BTC"
    },
    {
        label: "Fetch.ai",
        value: "FET/BTC"
    },
    {
        label: "Ethereum",
        value: "ETH/PAX"
    }, {
        label: "Chiliz",
        value: "CHZ/BTC"
    },
    {
        label: "Neo",
        value: "NEO/BTC"
    },
    {
        label: "Augur",
        value: "REP/BTC"
    },
    {
        label: "XRP",
        value: "XRP/ETH"
    }, {
        label: "Algorand",
        value: "ALGO/BTC"
    },
    {
        label: "Origin Protocol",
        value: "OGN/BTC"
    },
    {
        label: "AppCoins",
        value: "APPC/BTC"
    },
    {
        label: "Binance Coin",
        value: "BNB/ETH"
    },
    {
        label: "Basic Attention Token",
        value: "BAT/BTC"
    }, {
        label: "VeChain",
        value: "VET/BTC"
    }, {
        label: "COTI",
        value: "COTI/BTC"
    },
    {
        label: "Everex",
        value: "EVX/BTC"
    }, {
        label: "Steem",
        value: "STEEM/BTC"
    }, {
        label: "Bitcoin",
        value: "BTC/NGN"
    }, {
        label: "Standard Tokenization Protocol",
        value: "STPT/BTC"
    },
    {
        label: "TRON",
        value: "TRX/ETH"
    }, {
        label: "Ravencoin",
        value: "RVN/BTC"
    },
    {
        label: "EOS",
        value: "EOS/ETH"
    }, {
        label: "WePower",
        value: "WPR/BTC"
    },
    {
        label: "Status",
        value: "SNT/BTC"
    },
    {
        label: "Bitcoin Cash",
        value: "BCH/PAX"
    },
    {
        label: "NULS",
        value: "NULS/BTC"
    },
    {
        label: "Elrond",
        value: "ERD/BTC"
    }, {
        label: "ICON",
        value: "ICX/BTC"
    }, {
        label: "Waves",
        value: "WAVES/BTC"
    },
    {
        label: "Syscoin",
        value: "SYS/BTC"
    },
    {
        label: "Blockstack",
        value: "STX/BTC"
    },
    {
        label: "MCO",
        value: "MCO/BTC"
    },
    {
        label: "THETA",
        value: "THETA/BTC"
    },
    {
        label: "TomoChain",
        value: "TOMO/BTC"
    }, {
        label: "Loopring",
        value: "LRC/BTC"
    },
    {
        label: "Qtum",
        value: "QTUM/BTC"
    },
    {
        label: "Harmony",
        value: "ONE/BTC"
    },
    {
        label: "Perlin",
        value: "PERL/BTC"
    },
    {
        label: "Band Protocol",
        value: "BAND/BTC"
    },
    {
        label: "Blockmason Credit Protocol",
        value: "BCPT/BTC"
    }, {
        label: "Ontology",
        value: "ONT/BTC"
    },
    {
        label: "Viberate",
        value: "VIB/BTC"
    }, {
        label: "Ankr",
        value: "ANKR/BTC"
    }, {
        label: "IOTA",
        value: "IOTA/BTC"
    }, {
        label: "NEM",
        value: "XEM/BTC"
    }, {
        label: "Waltonchain",
        value: "WTC/BTC"
    },
    {
        label: "Ren",
        value: "REN/BTC"
    },
    {
        label: "Aion",
        value: "AION/BTC"
    },
    {
        label: "Dogecoin",
        value: "DOGE/BTC"
    },
    {
        label: "Eidoo",
        value: "EDO/BTC"
    },
    {
        label: "Nebulas",
        value: "NAS/BTC"
    }, {
        label: "0x",
        value: "ZRX/BTC"
    },
    {
        label: "Nano",
        value: "NANO/BTC"
    },
    {
        label: "FTX Token",
        value: "FTT/BTC"
    }, {
        label: "Bitcoin Gold",
        value: "BTG/BTC"
    },
    {
        label: "GoChain",
        value: "GO/BTC"
    }, {
        label: "Aeron",
        value: "ARN/BTC"
    }, {
        label: "LTO Network",
        value: "LTO/BTC"
    }, {
        label: "Metal",
        value: "MTL/ETH"
    },
    {
        label: "Litecoin",
        value: "LTC/PAX"
    },
    {
        label: "Power Ledger",
        value: "POWR/BTC"
    }, {
        label: "EOS",
        value: "EOS/BNB"
    },
    {
        label: "aelf",
        value: "ELF/BTC"
    }, {
        label: "PIVX",
        value: "PIVX/BTC"
    }, {
        label: "Litecoin",
        value: "LTC/ETH"
    }, {
        label: "Lisk",
        value: "LSK/BTC"
    },
    {
        label: "HyperCash",
        value: "HC/BTC"
    },
    {
        label: "Bitcoin",
        value: "BTC/TRY"
    },
    {
        label: "Tether",
        value: "USDT/TRY"
    },
    {
        label: "Blox",
        value: "CDT/BTC"
    },
    {
        label: "Aave",
        value: "LEND/BTC"
    },
    {
        label: "Bread",
        value: "BRD/BTC"
    },
    {
        label: "Beam",
        value: "BEAM/BTC"
    },
    {
        label: "Verge",
        value: "XVG/BTC"
    },
    {
        label: "Stratis",
        value: "STRAT/BTC"
    }, {
        label: "OmiseGO",
        value: "OMG/BTC"
    },
    {
        label: "Decentraland",
        value: "MANA/BTC"
    },
    {
        label: "iExec RLC",
        value: "RLC/ETH"
    },
    {
        label: "YOYOW",
        value: "YOYO/BTC"
    },
    {
        label: "SingularityNET",
        value: "AGI/BTC"
    }, {
        label: "VIBE",
        value: "VIBE/BTC"
    }, {
        label: "Storj",
        value: "STORJ/BTC"
    }, {
        label: "Aeternity",
        value: "AE/BTC"
    },
    {
        label: "Fantom",
        value: "FTM/BTC"
    }, {
        label: "Dash",
        value: "DASH/ETH"
    },
    {
        label: "Zilliqa",
        value: "ZIL/BTC"
    },
    {
        label: "TROY",
        value: "TROY/BTC"
    },
    {
        label: "TRON",
        value: "TRX/BNB"
    },
    {
        label: "TRON",
        value: "TRX/XRP"
    },
    {
        label: "Raiden Network Token",
        value: "RDN/BTC"
    }, {
        label: "Tael",
        value: "WABI/BTC"
    },
    {
        label: "Bitcoin",
        value: "BTC/RUB"
    },
    {
        label: "Kava",
        value: "KAVA/BTC"
    },
    {
        label: "Enigma",
        value: "ENG/ETH"
    },
    {
        label: "VeChain",
        value: "VET/ETH"
    }, {
        label: "Moeda Loyalty Points",
        value: "MDA/BTC"
    },
    {
        label: "XRP",
        value: "XRP/PAX"
    },
    {
        label: "Kyber Network",
        value: "KNC/ETH"
    },
    {
        label: "IOST",
        value: "IOST/BTC"
    },
    {
        label: "Voyager Token",
        value: "BQX/BTC"
    }, {
        label: "Lunyr",
        value: "LUN/BTC"
    },
    {
        label: "OAX",
        value: "OAX/BTC"
    },
    {
        label: "Cardano",
        value: "ADA/ETH"
    },
    {
        label: "Ark",
        value: "ARK/BTC"
    }, {
        label: "Neblio",
        value: "NEBL/BTC"
    },
    {
        label: "Loom Network",
        value: "LOOM/BTC"
    },
    {
        label: "Decred",
        value: "DCR/BTC"
    },
    {
        label: "Populous",
        value: "PPT/BTC"
    },
    {
        label: "Storm",
        value: "STORM/BTC"
    },
    {
        label: "Po.et",
        value: "POE/BTC"
    },
    {
        label: "TRON",
        value: "TRX/PAX"
    }
];

export const CrytoStandard = [
    {
        "value": "BTC",
        "label": "Bitcoin"
    },
    {
        "value": "ETH",
        "label": "Ethereum"
    },
    {
        "value": "BCH",
        "label": "Bitcoin Cash"
    },
    {
        "value": "XRP",
        "label": "XRP"
    },
    {
        "value": "TRX",
        "label": "TRON"
    },
    {
        "value": "WRX",
        "label": "WazirX"
    },
    {
        "value": "XLM",
        "label": "Stellar"
    },
    {
        "value": "XMR",
        "label": "Monero"
    },
    {
        "value": "EOS",
        "label": "EOS"
    },
    {
        "value": "ADA",
        "label": "Cardano"
    },
    {
        "value": "DASH",
        "label": "Dash"
    },
    {
        "value": "BNB",
        "label": "Binance Coin"
    },
    {
        "value": "LTC",
        "label": "Litecoin"
    },
    {
        "value": "LINK",
        "label": "Chainlink"
    },
    {
        "value": "BUSD",
        "label": "Binance USD"
    },
    {
        "value": "ETC",
        "label": "Ethereum Classic"
    },
    {
        "value": "XTZ",
        "label": "Tezos"
    },
    {
        "value": "USDC",
        "label": "USD Coin"
    },
    {
        "value": "TUSD",
        "label": "TrueUSD"
    },
    {
        "value": "VET",
        "label": "VeChain"
    },
    {
        "value": "PAX",
        "label": "Paxos Standard"
    },
    {
        "value": "ZEC",
        "label": "Zcash"
    },
    {
        "value": "NEO",
        "label": "Neo"
    },
    {
        "value": "MATIC",
        "label": "Matic Network"
    },
    {
        "value": "ATOM",
        "label": "Cosmos"
    },
    {
        "value": "CTXC",
        "label": "Cortex"
    },
    {
        "value": "ALGO",
        "label": "Algorand"
    },
    {
        "value": "QTUM",
        "label": "Qtum"
    },
    {
        "value": "ERD",
        "label": "Elrond"
    },
    {
        "value": "MTL",
        "label": "Metal"
    },
    {
        "value": "IOST",
        "label": "IOST"
    },
    {
        "value": "HBAR",
        "label": "Hedera Hashgraph"
    },
    {
        "value": "BTT",
        "label": "BitTorrent"
    },
    {
        "value": "ONT",
        "label": "Ontology"
    },
    {
        "value": "ICX",
        "label": "ICON"
    },
    {
        "value": "OGN",
        "label": "Origin Protocol"
    },
    {
        "value": "IOTA",
        "label": "IOTA"
    },
    {
        "value": "BAT",
        "label": "Basic Attention Token"
    },
    {
        "value": "FET",
        "label": "Fetch.ai"
    },
    {
        "value": "RLC",
        "label": "iExec RLC"
    },
    {
        "value": "WIN",
        "label": "WINk"
    },
    {
        "value": "DOGE",
        "label": "Dogecoin"
    },
    {
        "value": "ENJ",
        "label": "Enjin Coin"
    },
    {
        "value": "WAVES",
        "label": "Waves"
    },
    {
        "value": "MBL",
        "label": "MovieBloc"
    },
    {
        "value": "BAND",
        "label": "Band Protocol"
    },
    {
        "value": "RVN",
        "label": "Ravencoin"
    },
    {
        "value": "TOMO",
        "label": "TomoChain"
    },
    {
        "value": "DUSK",
        "label": "Dusk Network"
    },
    {
        "value": "NULS",
        "label": "NULS"
    },
    {
        "value": "AION",
        "label": "Aion"
    },
    {
        "value": "COTI",
        "label": "COTI"
    },
    {
        "value": "ANKR",
        "label": "Ankr"
    },
    {
        "value": "ZIL",
        "label": "Zilliqa"
    },
    {
        "value": "CHZ",
        "label": "Chiliz"
    },
    {
        "value": "NANO",
        "label": "Nano"
    },
    {
        "value": "STX",
        "label": "Blockstack"
    },
    {
        "value": "ZRX",
        "label": "0x"
    },
    {
        "value": "PERL",
        "label": "Perlin"
    },
    {
        "value": "KAVA",
        "label": "Kava"
    },
    {
        "value": "ONE",
        "label": "Harmony"
    },
    {
        "value": "STPT",
        "label": "Standard Tokenization Protocol"
    },
    {
        "value": "THETA",
        "label": "THETA"
    },
    {
        "value": "HOT",
        "label": "Holo"
    },
    {
        "value": "BEAM",
        "label": "Beam"
    },
    {
        "value": "REN",
        "label": "Ren"
    },
    {
        "value": "OMG",
        "label": "OmiseGO"
    },
    {
        "value": "FTM",
        "label": "Fantom"
    },
    {
        "value": "FTT",
        "label": "FTX Token"
    },
    {
        "value": "XZC",
        "label": "Zcoin"
    },
    {
        "value": "NXS",
        "label": "Nexus"
    },
    {
        "value": "GXS",
        "label": "GXChain"
    },
    {
        "value": "ARPA",
        "label": "ARPA Chain"
    },
    {
        "value": "LTO",
        "label": "LTO Network"
    },
    {
        "value": "WAN",
        "label": "Wanchain"
    },
    {
        "value": "DOCK",
        "label": "Dock"
    },
    {
        "value": "USDT",
        "label": "Tether"
    },
    {
        "value": "GVT",
        "label": "Genesis Vision"
    },
    {
        "value": "BCD",
        "label": "Bitcoin Diamond"
    },
    {
        "value": "ONG",
        "label": "Ontology Gas"
    },
    {
        "value": "ARDR",
        "label": "Ardor"
    },
    {
        "value": "KMD",
        "label": "Komodo"
    },
    {
        "value": "POA",
        "label": "POA"
    },
    {
        "value": "LEND",
        "label": "Aave"
    },
    {
        "value": "TROY",
        "label": "TROY"
    },
    {
        "value": "CELR",
        "label": "Celer Network"
    },
    {
        "value": "DLT",
        "label": "Agrello"
    },
    {
        "value": "POLY",
        "label": "Polymath"
    },
    {
        "value": "SC",
        "label": "Siacoin"
    },
    {
        "value": "LSK",
        "label": "Lisk"
    },
    {
        "value": "AMB",
        "label": "Ambrosus"
    },
    {
        "value": "SNT",
        "label": "Status"
    },
    {
        "value": "COS",
        "label": "Contentos"
    },
    {
        "value": "CMT",
        "label": "CyberMiles"
    },
    {
        "value": "REP",
        "label": "Augur"
    },
    {
        "value": "MCO",
        "label": "MCO"
    },
    {
        "value": "KEY",
        "label": "Selfkey"
    },
    {
        "value": "NPXS",
        "label": "Pundi X"
    },
    {
        "value": "DENT",
        "label": "Dent"
    },
    {
        "value": "TNT",
        "label": "Tierion"
    },
    {
        "value": "QKC",
        "label": "QuarkChain"
    },
    {
        "value": "PHB",
        "label": "Red Pulse Phoenix"
    },
    {
        "value": "VIA",
        "label": "Viacoin"
    },
    {
        "value": "NAS",
        "label": "Nebulas"
    },
    {
        "value": "NKN",
        "label": "NKN"
    },
    {
        "value": "BLZ",
        "label": "Bluzelle"
    },
    {
        "value": "DATA",
        "label": "Streamr DATAcoin"
    },
    {
        "value": "CVC",
        "label": "Civic"
    },
    {
        "value": "CND",
        "label": "Cindicator"
    },
    {
        "value": "SNM",
        "label": "SONM"
    },
    {
        "value": "ADX",
        "label": "AdEx"
    },
    {
        "value": "STRAT",
        "label": "Stratis"
    },
    {
        "value": "SKY",
        "label": "Skycoin"
    },
    {
        "value": "TFUEL",
        "label": "Theta Fuel"
    },
    {
        "value": "SNGLS",
        "label": "SingularDTV"
    },
    {
        "value": "AST",
        "label": "AirSwap"
    },
    {
        "value": "LRC",
        "label": "Loopring"
    },
    {
        "value": "RCN",
        "label": "Ripio Credit Network"
    },
    {
        "value": "MTH",
        "label": "Monetha"
    },
    {
        "value": "NAV",
        "label": "NavCoin"
    },
    {
        "value": "REQ",
        "label": "Request"
    },
    {
        "value": "HC",
        "label": "HyperCash"
    },
    {
        "value": "QSP",
        "label": "Quantstamp"
    },
    {
        "value": "GRS",
        "label": "Groestlcoin"
    },
    {
        "value": "ZEN",
        "label": "Horizen"
    },
    {
        "value": "DREP",
        "label": "DREP"
    },
    {
        "value": "GTO",
        "label": "Gifto"
    },
    {
        "value": "GAS",
        "label": "Gas"
    },
    {
        "value": "BTS",
        "label": "BitShares"
    },
    {
        "value": "OST",
        "label": "OST"
    },
    {
        "value": "TCT",
        "label": "TokenClub"
    },
    {
        "value": "VIB",
        "label": "Viberate"
    },
    {
        "value": "MITH",
        "label": "Mithril"
    },
    {
        "value": "EVX",
        "label": "Everex"
    },
    {
        "value": "MANA",
        "label": "Decentraland"
    },
    {
        "value": "STEEM",
        "label": "Steem"
    },
    {
        "value": "STORM",
        "label": "Storm"
    },
    {
        "value": "ARN",
        "label": "Aeron"
    },
    {
        "value": "COCOS",
        "label": "Cocos-BCX"
    },
    {
        "value": "FUEL",
        "label": "Etherparty"
    },
    {
        "value": "ENG",
        "label": "Enigma"
    },
    {
        "value": "KNC",
        "label": "Kyber Network"
    },
    {
        "value": "APPC",
        "label": "AppCoins"
    },
    {
        "value": "WPR",
        "label": "WePower"
    },
    {
        "value": "SYS",
        "label": "Syscoin"
    },
    {
        "value": "BCPT",
        "label": "Blockmason Credit Protocol"
    },
    {
        "value": "XEM",
        "label": "NEM"
    },
    {
        "value": "WTC",
        "label": "Waltonchain"
    },
    {
        "value": "EDO",
        "label": "Eidoo"
    },
    {
        "value": "BTG",
        "label": "Bitcoin Gold"
    },
    {
        "value": "GO",
        "label": "GoChain"
    },
    {
        "value": "POWR",
        "label": "Power Ledger"
    },
    {
        "value": "ELF",
        "label": "aelf"
    },
    {
        "value": "PIVX",
        "label": "PIVX"
    },
    {
        "value": "CDT",
        "label": "Blox"
    },
    {
        "value": "BRD",
        "label": "Bread"
    },
    {
        "value": "XVG",
        "label": "Verge"
    },
    {
        "value": "YOYO",
        "label": "YOYOW"
    },
    {
        "value": "AGI",
        "label": "SingularityNET"
    },
    {
        "value": "VIBE",
        "label": "VIBE"
    },
    {
        "value": "STORJ",
        "label": "Storj"
    },
    {
        "value": "AE",
        "label": "Aeternity"
    },
    {
        "value": "RDN",
        "label": "Raiden Network Token"
    },
    {
        "value": "WABI",
        "label": "Tael"
    },
    {
        "value": "MDA",
        "label": "Moeda Loyalty Points"
    },
    {
        "value": "BQX",
        "label": "Voyager Token"
    },
    {
        "value": "LUN",
        "label": "Lunyr"
    },
    {
        "value": "OAX",
        "label": "OAX"
    },
    {
        "value": "ARK",
        "label": "Ark"
    },
    {
        "value": "NEBL",
        "label": "Neblio"
    },
    {
        "value": "LOOM",
        "label": "Loom Network"
    },
    {
        "value": "DCR",
        "label": "Decred"
    },
    {
        "value": "PPT",
        "label": "Populous"
    },
    {
        "value": "POE",
        "label": "Po.et"
    }
];

export const Indicators = [
    {
        "value": "ACCD@tv-basicstudies",
        "label": "Accumulation/Distribution"
    },
    {
        "value": "studyADR@tv-basicstudies",
        "label": "ADR"
    },
    {
        "value": "AROON@tv-basicstudies",
        "label": "Aroon"
    },
    {
        "value": "ATR@tv-basicstudies",
        "label": "Average True Range"
    },
    {
        "value": "AwesomeOscillator@tv-basicstudies",
        "label": "Awesome Oscillator"
    },
    {
        "value": "BB@tv-basicstudies",
        "label": "Bollinger Bands"
    },
    {
        "value": "BollingerBandsR@tv-basicstudies",
        "label": "Bollinger Bands %B"
    },
    {
        "value": "BollingerBandsWidth@tv-basicstudies",
        "label": "Bollinger Bands Width"
    },
    {
        "value": "CMF@tv-basicstudies",
        "label": "Chaikin Money Flow"
    },
    {
        "value": "ChaikinOscillator@tv-basicstudies",
        "label": "Chaikin Oscillator"
    },
    {
        "value": "chandeMO@tv-basicstudies",
        "label": "Chande Momentum Oscillator"
    },
    {
        "value": "ChoppinessIndex@tv-basicstudies",
        "label": "Choppiness Index"
    },
    {
        "value": "CCI@tv-basicstudies",
        "label": "Commodity Channel Index"
    },
    {
        "value": "CRSI@tv-basicstudies",
        "label": "ConnorsRSI"
    },
    {
        "value": "CorrelationCoefficient@tv-basicstudies",
        "label": "Correlation Coefficient"
    },
    {
        "value": "DetrendedPriceOscillator@tv-basicstudies",
        "label": "Detrended Price Oscillator"
    },
    {
        "value": "DM@tv-basicstudies",
        "label": "Directional Movement"
    },
    {
        "value": "DONCH@tv-basicstudies",
        "label": "Donchian Channels"
    },
    {
        "value": "DoubleEMA@tv-basicstudies",
        "label": "Double EMA"
    },
    {
        "value": "EaseOfMovement@tv-basicstudies",
        "label": "Ease Of Movement"
    },
    {
        "value": "EFI@tv-basicstudies",
        "label": "Elder's Force Index"
    },
    {
        "value": "ElliottWave@tv-basicstudies",
        "label": "Elliott Wave"
    },
    {
        "value": "ENV@tv-basicstudies",
        "label": "Envelope"
    },
    {
        "value": "FisherTransform@tv-basicstudies",
        "label": "Fisher Transform"
    },
    {
        "value": "HV@tv-basicstudies",
        "label": "Historical Volatility"
    },
    {
        "value": "hullMA@tv-basicstudies",
        "label": "Hull Moving Average"
    },
    {
        "value": "IchimokuCloud@tv-basicstudies",
        "label": "Ichimoku Cloud"
    },
    {
        "value": "KLTNR@tv-basicstudies",
        "label": "Keltner Channels"
    },
    {
        "value": "KST@tv-basicstudies",
        "label": "Know Sure Thing"
    },
    {
        "value": "LinearRegression@tv-basicstudies",
        "label": "Linear Regression"
    },
    {
        "value": "MACD@tv-basicstudies",
        "label": "MACD"
    },
    {
        "value": "MOM@tv-basicstudies",
        "label": "Momentum"
    },
    {
        "value": "MF@tv-basicstudies",
        "label": "Money Flow"
    },
    {
        "value": "MoonPhases@tv-basicstudies",
        "label": "Moon Phases"
    },
    {
        "value": "MASimple@tv-basicstudies",
        "label": "Moving Average"
    },
    {
        "value": "MAExp@tv-basicstudies",
        "label": "Moving Average Exponentional"
    },
    {
        "value": "MAWeighted@tv-basicstudies",
        "label": "Moving Average Weighted"
    },
    {
        "value": "OBV@tv-basicstudies",
        "label": "On Balance Volume"
    },
    {
        "value": "PSAR@tv-basicstudies",
        "label": "Parabolic SAR"
    },
    {
        "value": "PivotPointsHighLow@tv-basicstudies",
        "label": "Pivot Points High Low"
    },
    {
        "value": "PivotPointsStandard@tv-basicstudies",
        "label": "Pivot Points Standard"
    },
    {
        "value": "PriceOsc@tv-basicstudies",
        "label": "Price Oscillator"
    },
    {
        "value": "PriceVolumeTrend@tv-basicstudies",
        "label": "Price Volume Trend"
    },
    {
        "value": "ROC@tv-basicstudies",
        "label": "Rate Of Change"
    },
    {
        "value": "RSI@tv-basicstudies",
        "label": "Relative Strength Index"
    },
    {
        "value": "VigorIndex@tv-basicstudies",
        "label": "Relative Vigor Index"
    },
    {
        "value": "VolatilityIndex@tv-basicstudies",
        "label": "Relative Volatility Index"
    },
    {
        "value": "SMIErgodicIndicator@tv-basicstudies",
        "label": "SMI Ergodic Indicator"
    },
    {
        "value": "SMIErgodicOscillator@tv-basicstudies",
        "label": "SMI Ergodic Oscillator"
    },
    {
        "value": "Stochastic@tv-basicstudies",
        "label": "Stochastic"
    },
    {
        "value": "StochasticRSI@tv-basicstudies",
        "label": "Stochastic RSI"
    },
    {
        "value": "TripleEMA@tv-basicstudies",
        "label": "Triple EMA"
    },
    {
        "value": "Trix@tv-basicstudies",
        "label": "TRIX"
    },
    {
        "value": "UltimateOsc@tv-basicstudies",
        "label": "Ultimate Oscillator"
    },
    {
        "value": "VSTOP@tv-basicstudies",
        "label": "Volatility Stop"
    },
    {
        "value": "Volume@tv-basicstudies",
        "label": "Volume"
    },
    {
        "value": "VWAP@tv-basicstudies",
        "label": "VWAP"
    },
    {
        "value": "MAVolumeWeighted@tv-basicstudies",
        "label": "VWMA"
    },
    {
        "value": "WilliamR@tv-basicstudies",
        "label": "Williams %R"
    },
    {
        "value": "WilliamsAlligator@tv-basicstudies",
        "label": "Williams Alligator"
    },
    {
        "value": "WilliamsFractal@tv-basicstudies",
        "label": "Williams Fractal"
    },
    {
        "value": "ZigZag@tv-basicstudies",
        "label": "Zig Zag"
    }
];

export const Fiats = [
    {
        "label": "United States dollar",
        "value": "USD"
    },
    {
        "label": "Russian ruble",
        "value": "RUB"
    },
    {
        "label": "Afghan afghani",
        "value": "AFN"
    },
    {
        "label": "Euro",
        "value": "EUR"
    },
    {
        "label": "Albanian lek",
        "value": "ALL"
    },
    {
        "label": "British pound[F]",
        "value": "GBP"
    },
    {
        "label": "Algerian dinar",
        "value": "DZD"
    },
    {
        "label": "Angolan kwanza",
        "value": "AOA"
    },
    {
        "label": "Eastern Caribbean dollar",
        "value": "XCD"
    },
    {
        "label": "Argentine peso",
        "value": "ARS"
    },
    {
        "label": "Armenian dram",
        "value": "AMD"
    },
    {
        "label": "Aruban florin",
        "value": "AWG"
    },
    {
        "label": "Saint Helena pound",
        "value": "SHP"
    },
    {
        "label": "Australian dollar",
        "value": "AUD"
    },
    {
        "label": "Azerbaijani manat",
        "value": "AZN"
    },
    {
        "label": "Bahamian dollar",
        "value": "BSD"
    },
    {
        "label": "Bahraini dinar",
        "value": "BHD"
    },
    {
        "label": "Bangladeshi taka",
        "value": "BDT"
    },
    {
        "label": "Barbadian dollar",
        "value": "BBD"
    },
    {
        "label": "Belarusian ruble",
        "value": "BYN"
    },
    {
        "label": "Belize dollar",
        "value": "BZD"
    },
    {
        "label": "West African CFA franc",
        "value": "XOF"
    },
    {
        "label": "Bermudian dollar",
        "value": "BMD"
    },
    {
        "label": "Bhutanese ngultrum",
        "value": "BTN"
    },
    {
        "label": "Indian rupee",
        "value": "INR"
    },
    {
        "label": "Bolivian boliviano",
        "value": "BOB"
    },
    {
        "label": "Bosnia and Herzegovina convertible mark",
        "value": "BAM"
    },
    {
        "label": "Botswana pula",
        "value": "BWP"
    },
    {
        "label": "Brazilian real",
        "value": "BRL"
    },
    {
        "label": "Brunei dollar",
        "value": "BND"
    },
    {
        "label": "Singapore dollar",
        "value": "SGD"
    },
    {
        "label": "Bulgarian lev",
        "value": "BGN"
    },
    {
        "label": "Burundian franc",
        "value": "BIF"
    },
    {
        "label": "Cambodian riel",
        "value": "KHR"
    },
    {
        "label": "Central African CFA franc",
        "value": "XAF"
    },
    {
        "label": "Canadian dollar",
        "value": "CAD"
    },
    {
        "label": "Cape Verdean escudo",
        "value": "CVE"
    },
    {
        "label": "Cayman Islands dollar",
        "value": "KYD"
    },
    {
        "label": "Chilean peso",
        "value": "CLP"
    },
    {
        "label": "Chinese yuan",
        "value": "CNY"
    },
    {
        "label": "Colombian peso",
        "value": "COP"
    },
    {
        "label": "Comorian franc",
        "value": "KMF"
    },
    {
        "label": "Congolese franc",
        "value": "CDF"
    },
    {
        "label": "New Zealand dollar",
        "value": "NZD"
    },
    {
        "label": "Costa Rican colón",
        "value": "CRC"
    },
    {
        "label": "Croatian kuna",
        "value": "HRK"
    },
    {
        "label": "Cuban peso",
        "value": "CUP"
    },
    {
        "label": "Cuban convertible peso",
        "value": "CUC"
    },
    {
        "label": "Netherlands Antillean guilder",
        "value": "ANG"
    },
    {
        "label": "Czech koruna",
        "value": "CZK"
    },
    {
        "label": "Danish krone",
        "value": "DKK"
    },
    {
        "label": "Djiboutian franc",
        "value": "DJF"
    },
    {
        "label": "Dominican peso",
        "value": "DOP"
    },
    {
        "label": "Egyptian pound",
        "value": "EGP"
    },
    {
        "label": "Eritrean nakfa",
        "value": "ERN"
    },
    {
        "label": "Swazi lilangeni",
        "value": "SZL"
    },
    {
        "label": "South African rand",
        "value": "ZAR"
    },
    {
        "label": "Ethiopian birr",
        "value": "ETB"
    },
    {
        "label": "Falkland Islands pound",
        "value": "FKP"
    },
    {
        "label": "Fijian dollar",
        "value": "FJD"
    },
    {
        "label": "CFP franc",
        "value": "XPF"
    },
    {
        "label": "Gambian dalasi",
        "value": "GMD"
    },
    {
        "label": "Georgian lari",
        "value": "GEL"
    },
    {
        "label": "Ghanaian cedi",
        "value": "GHS"
    },
    {
        "label": "Gibraltar pound",
        "value": "GIP"
    },
    {
        "label": "Guatemalan quetzal",
        "value": "GTQ"
    },
    {
        "label": "Guinean franc",
        "value": "GNF"
    },
    {
        "label": "Guyanese dollar",
        "value": "GYD"
    },
    {
        "label": "Haitian gourde",
        "value": "HTG"
    },
    {
        "label": "Honduran lempira",
        "value": "HNL"
    },
    {
        "label": "Hong Kong dollar",
        "value": "HKD"
    },
    {
        "label": "Hungarian forint",
        "value": "HUF"
    },
    {
        "label": "Icelandic króna",
        "value": "ISK"
    },
    {
        "label": "Indonesian rupiah",
        "value": "IDR"
    },
    {
        "label": "Iranian rial",
        "value": "IRR"
    },
    {
        "label": "Iraqi dinar",
        "value": "IQD"
    },
    {
        "label": "Israeli new shekel",
        "value": "ILS"
    },
    {
        "label": "Jamaican dollar",
        "value": "JMD"
    },
    {
        "label": "Japanese yen",
        "value": "JPY"
    },
    {
        "label": "Jordanian dinar",
        "value": "JOD"
    },
    {
        "label": "Kazakhstani tenge",
        "value": "KZT"
    },
    {
        "label": "Kenyan shilling",
        "value": "KES"
    },
    {
        "label": "North Korean won",
        "value": "KPW"
    },
    {
        "label": "South Korean won",
        "value": "KRW"
    },
    {
        "label": "Kuwaiti dinar",
        "value": "KWD"
    },
    {
        "label": "Kyrgyzstani som",
        "value": "KGS"
    },
    {
        "label": "Lao kip",
        "value": "LAK"
    },
    {
        "label": "Lebanese pound",
        "value": "LBP"
    },
    {
        "label": "Lesotho loti",
        "value": "LSL"
    },
    {
        "label": "Liberian dollar",
        "value": "LRD"
    },
    {
        "label": "Libyan dinar",
        "value": "LYD"
    },
    {
        "label": "Swiss franc",
        "value": "CHF"
    },
    {
        "label": "Macanese pataca",
        "value": "MOP"
    },
    {
        "label": "Malagasy ariary",
        "value": "MGA"
    },
    {
        "label": "Malawian kwacha",
        "value": "MWK"
    },
    {
        "label": "Malaysian ringgit",
        "value": "MYR"
    },
    {
        "label": "Maldivian rufiyaa",
        "value": "MVR"
    },
    {
        "label": "Mauritanian ouguiya",
        "value": "MRU"
    },
    {
        "label": "Mauritian rupee",
        "value": "MUR"
    },
    {
        "label": "Mexican peso",
        "value": "MXN"
    },
    {
        "label": "Moldovan leu",
        "value": "MDL"
    },
    {
        "label": "Mongolian tögrög",
        "value": "MNT"
    },
    {
        "label": "Moroccan dirham",
        "value": "MAD"
    },
    {
        "label": "Mozambican metical",
        "value": "MZN"
    },
    {
        "label": "Burmese kyat",
        "value": "MMK"
    },
    {
        "label": "Namibian dollar",
        "value": "NAD"
    },
    {
        "label": "Nepalese rupee",
        "value": "NPR"
    },
    {
        "label": "Nicaraguan córdoba",
        "value": "NIO"
    },
    {
        "label": "Nigerian naira",
        "value": "NGN"
    },
    {
        "label": "Macedonian denar",
        "value": "MKD"
    },
    {
        "label": "Turkish lira",
        "value": "TRY"
    },
    {
        "label": "Norwegian krone",
        "value": "NOK"
    },
    {
        "label": "Omani rial",
        "value": "OMR"
    },
    {
        "label": "Pakistani rupee",
        "value": "PKR"
    },
    {
        "label": "Panamanian balboa",
        "value": "PAB"
    },
    {
        "label": "Papua New Guinean kina",
        "value": "PGK"
    },
    {
        "label": "Paraguayan guaraní",
        "value": "PYG"
    },
    {
        "label": "Peruvian sol",
        "value": "PEN"
    },
    {
        "label": "Philippine peso",
        "value": "PHP"
    },
    {
        "label": "Polish złoty",
        "value": "PLN"
    },
    {
        "label": "Qatari riyal",
        "value": "QAR"
    },
    {
        "label": "Romanian leu",
        "value": "RON"
    },
    {
        "label": "Rwandan franc",
        "value": "RWF"
    },
    {
        "label": "Samoan tālā",
        "value": "WST"
    },
    {
        "label": "São Tomé and Príncipe dobra",
        "value": "STN"
    },
    {
        "label": "Saudi riyal",
        "value": "SAR"
    },
    {
        "label": "Serbian dinar",
        "value": "RSD"
    },
    {
        "label": "Seychellois rupee",
        "value": "SCR"
    },
    {
        "label": "Sierra Leonean leone",
        "value": "SLL"
    },
    {
        "label": "Solomon Islands dollar",
        "value": "SBD"
    },
    {
        "label": "Somali shilling",
        "value": "SOS"
    },
    {
        "label": "South Sudanese pound",
        "value": "SSP"
    },
    {
        "label": "Sri Lankan rupee",
        "value": "LKR"
    },
    {
        "label": "Sudanese pound",
        "value": "SDG"
    },
    {
        "label": "Surinamese dollar",
        "value": "SRD"
    },
    {
        "label": "Swedish krona",
        "value": "SEK"
    },
    {
        "label": "Syrian pound",
        "value": "SYP"
    },
    {
        "label": "New Taiwan dollar",
        "value": "TWD"
    },
    {
        "label": "Tajikistani somoni",
        "value": "TJS"
    },
    {
        "label": "Tanzanian shilling",
        "value": "TZS"
    },
    {
        "label": "Thai baht",
        "value": "THB"
    },
    {
        "label": "Tongan paʻanga[P]",
        "value": "TOP"
    },
    {
        "label": "Trinidad and Tobago dollar",
        "value": "TTD"
    },
    {
        "label": "Tunisian dinar",
        "value": "TND"
    },
    {
        "label": "Turkmenistan manat",
        "value": "TMT"
    },
    {
        "label": "Ugandan shilling",
        "value": "UGX"
    },
    {
        "label": "Ukrainian hryvnia",
        "value": "UAH"
    },
    {
        "label": "United Arab Emirates dirham",
        "value": "AED"
    },
    {
        "label": "Uruguayan peso",
        "value": "UYU"
    },
    {
        "label": "Uzbekistani soʻm",
        "value": "UZS"
    },
    {
        "label": "Vanuatu vatu",
        "value": "VUV"
    },
    {
        "label": "Venezuelan bolívar soberano",
        "value": "VES"
    },
    {
        "label": "Vietnamese đồng",
        "value": "VND"
    },
    {
        "label": "Yemeni rial",
        "value": "YER"
    },
    {
        "label": "Zambian kwacha",
        "value": "ZMW"
    }
]


// console.log(Fiats)
// const test = Fiats.map(e => e['value'])
//     // store the keys of the unique objects
//     .map((e, i, final) => final.indexOf(e) === i && i)
//     // eliminate the dead keys & store unique objects
//     .filter(e => Fiats[e]).map(e => Fiats[e]);
// console.log(test);
// localStorage.setItem('test', JSON.stringify(test));
