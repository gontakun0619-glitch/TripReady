// サンプルデータ
const countryData = {
    thailand: {
        name: "タイ / バンコク",
        transport: {
            summary: "Grab",
            details: "東南アジアで主流の配車アプリ。空港から市内まで約300-500バーツ（約1,200-2,000円）。タクシーよりも料金が明確で安心。",
            note: "Boltも利用可能です"
        },
        delivery: {
            summary: "GrabFood / Foodpanda",
            details: "どちらも普及していて使いやすい。GrabFoodが日本のUber Eats感覚で利用できます。配達料は30-50バーツ程度。",
            note: ""
        },
        payment: {
            summary: "現金 / クレジットカード",
            details: "現金がまだ主流。クレジットカードは観光地やショッピングモール中心で使えます。QRコード決済（PromptPay）も増加中。",
            note: "屋台やローカル店は現金のみが多いです"
        },
        translation: {
            summary: "Google翻訳",
            details: "タイ語↔日本語に対応。オフライン翻訳も事前ダウンロード可能で便利。カメラ翻訳機能も使えます。",
            note: "観光地では英語も比較的通じます"
        },
        currency: {
            name: "バーツ (THB)",
            rate: "1万円 ≒ 2,300バーツ",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "AIS / TrueMove（現地SIM）",
            details: "空港で簡単に購入可能。7日間15GBで約299バーツ（約1,300円）。パスポート提示で即開通。eSIMも対応（事前購入可）。",
            note: "空港の到着ロビーにカウンターあり"
        },
        emergency: {
            police: "tel:191",
            ambulance: "tel:1669",
            embassy: "https://www.th.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    korea: {
        name: "韓国 / ソウル",
        transport: {
            summary: "カカオT（Kakao T）",
            details: "韓国で最もメジャーな配車アプリ。空港から市内までタクシー約50,000-80,000ウォン。アプリは韓国語がメインですが直感的に使えます。",
            note: "地下鉄も便利です（T-moneyカード推奨）"
        },
        delivery: {
            summary: "배달의민족 / Coupang Eats",
            details: "배달의민족（ペダルの民族）は韓国語必須ですが直感的。Coupang Eatsは英語対応あり。配達料2,000-3,000ウォン程度。",
            note: ""
        },
        payment: {
            summary: "クレジットカード / Samsung Pay",
            details: "完全なカード社会。ほぼすべての店舗でカード利用可能。現金はほとんど不要です。非接触決済も普及。",
            note: "伝統市場や一部の屋台は現金推奨"
        },
        translation: {
            summary: "Papago / Google翻訳",
            details: "Papagoは韓国語に特化しており、Google翻訳よりも精度が高い場合も。カメラ翻訳や音声翻訳も便利です。",
            note: "若者世代は英語も比較的通じやすいです"
        },
        currency: {
            name: "ウォン (KRW)",
            rate: "1万円 ≒ 90,000ウォン",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "KT / SK Telecom（現地SIM / eSIM）",
            details: "空港で購入可能。5日間10GBで約30,000ウォン（約3,300円）。eSIMも普及しており事前購入がおすすめ。設定は簡単。",
            note: "コンビニでもSIM購入可（一部店舗）"
        },
        emergency: {
            police: "tel:112",
            ambulance: "tel:119",
            embassy: "https://www.kr.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    usa: {
        name: "アメリカ / ニューヨーク",
        transport: {
            summary: "Uber / Lyft",
            details: "両方が主流で使いやすい。空港から市内まで約$50-80（約7,000-11,000円）。黄色いタクシーも有名ですが、アプリの方が料金が明確。",
            note: "チップ15-20%を忘れずに"
        },
        delivery: {
            summary: "Uber Eats / DoorDash",
            details: "Uber Eatsが日本と同じ感覚で使えます。DoorDashも人気。配達料$3-8程度に加えてチップが必要です。",
            note: "チップ文化あり（15-20%が目安）"
        },
        payment: {
            summary: "クレジットカード / Apple Pay",
            details: "カードがメイン。現金はほぼ不要。Apple PayやGoogle Payなど非接触決済も広く普及しています。",
            note: "チップは現金でも支払い可能です"
        },
        translation: {
            summary: "Google翻訳",
            details: "英語圏なので基本的に英語でOK。観光地や大都市では多言語対応の場所も多いです。",
            note: "主要観光地では日本語対応も一部あり"
        },
        currency: {
            name: "米ドル (USD)",
            rate: "1万円 ≒ $67",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "T-Mobile / AT&T（eSIM推奨）",
            details: "eSIMを事前購入がおすすめ。7日間無制限で約$20-30。空港でも購入可能だが割高。設定は簡単（QRコード読み取り）。",
            note: "日本からAiraloなどで事前購入が便利"
        },
        emergency: {
            police: "tel:911",
            ambulance: "tel:911",
            embassy: "https://www.us.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    taiwan: {
        name: "台湾 / 台北",
        transport: {
            summary: "台湾大車隊 / Uber",
            details: "台湾大車隊（タクシー配車）とUberが主流。MRT（地下鉄）が便利で安い。空港から市内まで電車で約150-160台湾ドル（約700円）。",
            note: "悠遊カード（EasyCard）があると便利"
        },
        delivery: {
            summary: "Foodpanda / Uber Eats",
            details: "どちらも広く普及。日本と同じ感覚で使えます。配達料は50-80台湾ドル程度。",
            note: ""
        },
        payment: {
            summary: "現金 / クレジットカード",
            details: "現金とカードの併用。カードは大手チェーンや観光地で使えます。QRコード決済（LINE Pay、街口支付）も増加中。",
            note: "夜市や小さな店は現金のみが多い"
        },
        translation: {
            summary: "Google翻訳",
            details: "中国語（繁体字）↔日本語に対応。漢字が読めるので何となく分かることも。英語も若い世代には通じます。",
            note: "日本語が通じる店も意外と多い"
        },
        currency: {
            name: "台湾ドル (TWD)",
            rate: "1万円 ≒ 2,100台湾ドル",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "中華電信 / 台湾大哥大（現地SIM）",
            details: "空港で簡単に購入。5日間無制限で約300台湾ドル（約1,400円）。パスポート提示で即開通。設定不要で使える。",
            note: "空港カウンターは24時間営業"
        },
        emergency: {
            police: "tel:110",
            ambulance: "tel:119",
            embassy: "https://www.tw.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    vietnam: {
        name: "ベトナム / ホーチミン",
        transport: {
            summary: "Grab",
            details: "東南アジアで最も普及している配車アプリ。空港から市内まで約150,000-200,000ドン（約900-1,200円）。バイクタクシーもあり。",
            note: "Grabバイクは渋滞時に便利"
        },
        delivery: {
            summary: "GrabFood / ShopeeFood",
            details: "GrabFoodが主流。ShopeeFoodも人気。配達料は15,000-30,000ドン程度と格安。",
            note: ""
        },
        payment: {
            summary: "現金 / クレジットカード",
            details: "現金が主流。カードは高級店やホテル、ショッピングモール中心。QRコード決済（MoMo、ZaloPay）も増加中。",
            note: "ローカル店や屋台は現金のみ"
        },
        translation: {
            summary: "Google翻訳",
            details: "ベトナム語↔日本語に対応。英語は観光地やホテルでは通じますが、ローカルエリアでは通じにくい。",
            note: "翻訳アプリは必須です"
        },
        currency: {
            name: "ドン (VND)",
            rate: "1万円 ≒ 1,650,000ドン",
            note: "2026年2月時点の目安レート（桁数に注意）"
        },
        sim: {
            summary: "Viettel / Vinaphone（現地SIM）",
            details: "空港やコンビニで購入可。7日間6GBで約100,000ドン（約600円）と格安。パスポート不要で即使える。",
            note: "空港よりも市内の方が安い場合あり"
        },
        emergency: {
            police: "tel:113",
            ambulance: "tel:115",
            embassy: "https://www.vn.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    singapore: {
        name: "シンガポール",
        transport: {
            summary: "Grab / Gojek",
            details: "GrabとGojekが主流。MRT（地下鉄）が非常に便利で清潔。空港から市内まで電車で約2-3シンガポールドル（約220-330円）。",
            note: "EZ-Linkカードがあると便利"
        },
        delivery: {
            summary: "GrabFood / Foodpanda",
            details: "どちらも広く普及。日本と同じ感覚で使えます。配達料は3-5シンガポールドル程度。",
            note: ""
        },
        payment: {
            summary: "クレジットカード / PayNow",
            details: "カード社会。ほぼすべての店でカード利用可。現金もまだ使われます。QRコード決済（PayNow）も普及。",
            note: "ホーカー（屋台街）は現金のみの場合あり"
        },
        translation: {
            summary: "英語でOK",
            details: "公用語が英語なので翻訳アプリは不要。中国語（簡体字）、マレー語、タミル語も公用語。",
            note: "観光地では日本語対応も一部あり"
        },
        currency: {
            name: "シンガポールドル (SGD)",
            rate: "1万円 ≒ 90シンガポールドル",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "Singtel / StarHub（現地SIM / eSIM）",
            details: "空港で購入可。7日間100GBで約15シンガポールドル（約1,650円）。eSIMも対応。設定は簡単。",
            note: "空港カウンターは24時間営業"
        },
        emergency: {
            police: "tel:999",
            ambulance: "tel:995",
            embassy: "https://www.sg.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    philippines: {
        name: "フィリピン / マニラ",
        transport: {
            summary: "Grab",
            details: "配車アプリはGrabが主流。渋滞が激しいのでMRT（電車）も選択肢。空港から市内までGrabで約300-500ペソ（約900-1,500円）。",
            note: "渋滞が激しいので時間に余裕を"
        },
        delivery: {
            summary: "GrabFood / Foodpanda",
            details: "どちらも普及。GrabFoodが日本のUber Eats感覚で使えます。配達料は50-100ペソ程度。",
            note: ""
        },
        payment: {
            summary: "現金 / クレジットカード",
            details: "現金が主流。カードは大手チェーンやモールで使えます。電子決済（GCash、PayMaya）も普及中。",
            note: "ローカル店や市場は現金のみ"
        },
        translation: {
            summary: "英語でOK",
            details: "公用語が英語なので翻訳アプリは基本不要。タガログ語も話されますが、英語が広く通じます。",
            note: "観光地では日本語が通じる場所も"
        },
        currency: {
            name: "ペソ (PHP)",
            rate: "1万円 ≒ 3,300ペソ",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "Globe / Smart（現地SIM）",
            details: "空港やコンビニで購入可。7日間8GBで約300ペソ（約900円）。パスポート不要。設定はSMSで簡単。",
            note: "コンビニ（7-Eleven）でも購入可"
        },
        emergency: {
            police: "tel:117",
            ambulance: "tel:911",
            embassy: "https://www.ph.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    malaysia: {
        name: "マレーシア / クアラルンプール",
        transport: {
            summary: "Grab",
            details: "Grabが主流。電車（LRT/MRT）も便利で安い。空港から市内までKLIAエクスプレスで約55リンギット（約1,800円）。",
            note: "Touch 'n Goカードがあると便利"
        },
        delivery: {
            summary: "GrabFood / Foodpanda",
            details: "どちらも広く普及。日本と同じ感覚で使えます。配達料は5-10リンギット程度。",
            note: ""
        },
        payment: {
            summary: "現金 / クレジットカード",
            details: "現金とカードの併用。カードは大手チェーンやモールで使えます。QRコード決済（Touch 'n Go eWallet）も普及。",
            note: "屋台やローカル店は現金のみが多い"
        },
        translation: {
            summary: "英語でOK",
            details: "公用語はマレー語ですが、英語が広く通じます。中国語も一部で通じます。",
            note: "観光地では日本語が通じる場所も"
        },
        currency: {
            name: "リンギット (MYR)",
            rate: "1万円 ≒ 300リンギット",
            note: "2026年2月時点の目安レート"
        },
        sim: {
            summary: "Maxis / Celcom（現地SIM）",
            details: "空港で購入可。7日間20GBで約30リンギット（約1,000円）。パスポート提示で即開通。設定不要。",
            note: "空港到着ロビーにカウンターあり"
        },
        emergency: {
            police: "tel:999",
            ambulance: "tel:999",
            embassy: "https://www.my.emb-japan.go.jp/itprtop_ja/index.html"
        }
    }
};

// DOM要素
const countrySelect = document.getElementById('country');
const mainContent = document.getElementById('main-content');
const accordionCards = document.querySelectorAll('.accordion-card');
const btnPolice = document.getElementById('btn-police');
const btnAmbulance = document.getElementById('btn-ambulance');
const btnEmbassy = document.getElementById('btn-embassy');

// 国選択イベント
countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    
    if (selectedCountry === '') {
        mainContent.classList.add('hidden');
        return;
    }
    
    // データを取得
    const data = countryData[selectedCountry];
    
    if (data) {
        // すべてのアコーディオンを閉じる
        accordionCards.forEach(card => card.classList.remove('active'));
        
        // カード情報を更新
        updateAccordionCard('transport', data.transport);
        updateAccordionCard('delivery', data.delivery);
        updateAccordionCard('payment', data.payment);
        updateAccordionCard('translation', data.translation);
        updateAccordionCard('sim', data.sim);
        updateCurrencyCard(data.currency);
        
        // 緊急ボタンを更新
        updateEmergencyButtons(data.emergency);
        
        // メインコンテンツを表示
        mainContent.classList.remove('hidden');
        
        // スムーズにスクロール
        setTimeout(() => {
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
});

// アコーディオンカードを更新する関数
function updateAccordionCard(cardType, data) {
    const summaryEl = document.getElementById(`summary-${cardType}`);
    const detailEl = document.getElementById(`detail-${cardType}`);
    
    summaryEl.textContent = data.summary;
    
    detailEl.innerHTML = `
        <p class="detail-text">${data.details}</p>
        ${data.note ? `<p class="detail-note">${data.note}</p>` : ''}
    `;
}

// 通貨カードを更新する関数
function updateCurrencyCard(data) {
    const summaryEl = document.getElementById('summary-currency');
    const detailEl = document.getElementById('detail-currency');
    
    summaryEl.textContent = data.name;
    
    detailEl.innerHTML = `
        <div class="highlight">${data.rate}</div>
        <p class="currency-note">${data.note}</p>
    `;
}

// 緊急ボタンを更新する関数
function updateEmergencyButtons(emergency) {
    btnPolice.href = emergency.police;
    btnAmbulance.href = emergency.ambulance;
    btnEmbassy.href = emergency.embassy;
    btnEmbassy.target = "_blank";
}

// アコーディオン開閉イベント
accordionCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // リンククリックの場合は無視
        if (e.target.tagName === 'A') return;
        
        const isActive = this.classList.contains('active');
        
        // 他のカードを閉じる
        accordionCards.forEach(c => c.classList.remove('active'));
        
        // クリックしたカードをトグル
        if (!isActive) {
            this.classList.add('active');
        }
    });
});

// 初期状態：メインコンテンツを非表示
mainContent.classList.add('hidden');
