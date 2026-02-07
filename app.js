// サンプルデータ
const countryData = {
    thailand: {
        name: "タイ / バンコク",
        transport: {
            app: "Grab",
            details: "東南アジアで主流の配車アプリ。空港から市内まで約300-500バーツ（約1,200-2,000円）。",
            note: "Boltも利用可能"
        },
        delivery: {
            app: "GrabFood / Foodpanda",
            details: "どちらも普及。GrabFoodが日本のUber Eats感覚で使える。配達料30-50バーツ程度。",
            note: ""
        },
        payment: {
            app: "現金 / クレジットカード",
            details: "現金がまだ主流。カードは観光地やモール中心で使える。QRコード決済も増加中（PromptPay）。",
            note: "屋台は現金のみが多い"
        },
        translation: {
            app: "Google翻訳",
            details: "タイ語↔日本語に対応。オフライン翻訳も事前ダウンロード可能。",
            note: "英語も観光地では通じる"
        },
        currency: {
            name: "バーツ (THB)",
            rate: "1万円 ≒ 2,300バーツ",
            note: "2026年2月時点の目安"
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
            app: "カカオT（Kakao T）",
            details: "韓国で最もメジャーな配車アプリ。空港から市内までタクシー約50,000-80,000ウォン。",
            note: "地下鉄も便利（T-moneyカード推奨）"
        },
        delivery: {
            app: "배달의민족（ペダルの民族）/ Coupang Eats",
            details: "韓国語必須だが直感的。Coupang Eatsは英語対応あり。配達料2,000-3,000ウォン程度。",
            note: ""
        },
        payment: {
            app: "クレジットカード / Samsung Pay",
            details: "カード社会。ほぼ全店でカード利用可。現金はほとんど不要。",
            note: "市場や屋台は現金推奨"
        },
        translation: {
            app: "Papago / Google翻訳",
            details: "Papagoは韓国語に特化。Google翻訳よりも精度が高い場合も。カメラ翻訳も便利。",
            note: "若者世代は英語も通じやすい"
        },
        currency: {
            name: "ウォン (KRW)",
            rate: "1万円 ≒ 90,000ウォン",
            note: "2026年2月時点の目安"
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
            app: "Uber / Lyft",
            details: "両方が主流。空港から市内まで約$50-80（約7,000-11,000円）。黄色いタクシーも有名。",
            note: "チップ15-20%を忘れずに"
        },
        delivery: {
            app: "Uber Eats / DoorDash",
            details: "Uber Eatsが日本と同じ感覚で使える。DoorDashも人気。配達料$3-8程度＋チップ。",
            note: "チップ文化あり（15-20%）"
        },
        payment: {
            app: "クレジットカード / Apple Pay",
            details: "カードがメイン。現金はほぼ不要。Apple PayやGoogle Payも普及。",
            note: "チップは現金でも可"
        },
        translation: {
            app: "Google翻訳",
            details: "英語圏なので基本的に英語でOK。多言語対応の場所も多い。",
            note: "観光地は日本語対応も一部あり"
        },
        currency: {
            name: "米ドル (USD)",
            rate: "1万円 ≒ $67",
            note: "2026年2月時点の目安"
        },
        emergency: {
            police: "tel:911",
            ambulance: "tel:911",
            embassy: "https://www.us.emb-japan.go.jp/itprtop_ja/index.html"
        }
    }
};

// DOM要素
const countrySelect = document.getElementById('country');
const mainContent = document.getElementById('main-content');
const cardTransport = document.getElementById('card-transport');
const cardDelivery = document.getElementById('card-delivery');
const cardPayment = document.getElementById('card-payment');
const cardTranslation = document.getElementById('card-translation');
const cardCurrency = document.getElementById('card-currency');
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
        // カード情報を更新
        updateCard(cardTransport, data.transport);
        updateCard(cardDelivery, data.delivery);
        updateCard(cardPayment, data.payment);
        updateCard(cardTranslation, data.translation);
        updateCurrencyCard(cardCurrency, data.currency);
        
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

// カード情報を更新する関数
function updateCard(cardElement, data) {
    cardElement.innerHTML = `
        <span class="app-name">${data.app}</span>
        <p class="detail">${data.details}</p>
        ${data.note ? `<p class="detail" style="margin-top: 8px; color: #888; font-size: 13px;">💡 ${data.note}</p>` : ''}
    `;
}

// 通貨カードを更新する関数
function updateCurrencyCard(cardElement, data) {
    cardElement.innerHTML = `
        <span class="app-name">${data.name}</span>
        <div class="highlight">${data.rate}</div>
        <p class="detail" style="margin-top: 8px; color: #888; font-size: 13px;">${data.note}</p>
    `;
}

// 緊急ボタンを更新する関数
function updateEmergencyButtons(emergency) {
    btnPolice.href = emergency.police;
    btnAmbulance.href = emergency.ambulance;
    btnEmbassy.href = emergency.embassy;
    btnEmbassy.target = "_blank";
}

// 初期状態：メインコンテンツを非表示
mainContent.classList.add('hidden');
