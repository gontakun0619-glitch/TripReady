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
