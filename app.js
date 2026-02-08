// デバイス判定関数は app-link-helper.js で定義済み

// アプリストアリンクデータベース
const appLinks = {
    grab: {
        ios: 'https://apps.apple.com/app/grab/id647268330',
        android: 'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger',
        web: 'https://www.grab.com/th/download/'
    },
    grabfood: {
        ios: 'https://apps.apple.com/app/grabfood/id1445719088',
        android: 'https://play.google.com/store/apps/details?id=com.grab.grabfood',
        web: 'https://food.grab.com/th/en/'
    },
    foodpanda: {
        ios: 'https://apps.apple.com/app/foodpanda/id758103884',
        android: 'https://play.google.com/store/apps/details?id=com.global.foodpanda.android',
        web: 'https://www.foodpanda.co.th/'
    },
    googletranslate: {
        ios: 'https://apps.apple.com/app/google-translate/id414706506',
        android: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate',
        web: 'https://translate.google.com/'
    },
    kakaot: {
        ios: 'https://apps.apple.com/app/kakao-t/id981110422',
        android: 'https://play.google.com/store/apps/details?id=com.kakao.taxi',
        web: 'https://t.kakao.com/'
    },
    baemin: {
        ios: 'https://apps.apple.com/app/baemin/id482697530',
        android: 'https://play.google.com/store/apps/details?id=com.sampleapp',
        web: 'https://www.baemin.com/'
    },
    coupangeats: {
        ios: 'https://apps.apple.com/app/coupang-eats/id1470128528',
        android: 'https://play.google.com/store/apps/details?id=com.coupang.mobile.eats',
        web: 'https://www.coupangeats.com/'
    },
    papago: {
        ios: 'https://apps.apple.com/app/papago/id1147874819',
        android: 'https://play.google.com/store/apps/details?id=com.naver.labs.translator',
        web: 'https://papago.naver.com/'
    }
};

// スマートダウンロードリンク生成
function getAppDownloadLink(appKey) {
    const device = getDeviceType();
    const app = appLinks[appKey];
    if (!app) return '';
    
    const url = app[device] || app.web;
    const buttonText = device === 'ios' ? 'App Storeで入手' : 
                       device === 'android' ? 'Google Playで入手' : 
                       'アプリを入手';
    
    return `<a href="${url}" target="_blank" class="app-download-btn">📱 ${buttonText}</a>`;
}

// 国データ
console.log('  - thailand-data.js loaded? ' + (typeof thailandData !== 'undefined'));
console.log('  - korea-data.js loaded? ' + (typeof koreaData !== 'undefined'));

if (typeof thailandData === 'undefined') {
    }
if (typeof koreaData === 'undefined') {
    }

const countryData = {
    thailand: typeof thailandData !== 'undefined' ? thailandData : null,
    korea: typeof koreaData !== 'undefined' ? koreaData : null
};

// 以下、既存のUIロジック
const openingScreen = document.getElementById("opening-screen");
console.log('  - openingScreen: ' + (openingScreen ? '✅ OK' : '❌ null'));
const countrySelection = document.getElementById("country-selection");
console.log('  - countrySelection: ' + (countrySelection ? '✅ OK' : '❌ null'));
const mainContainer = document.getElementById("main-container");
const categoryButtons = document.querySelectorAll(".category-btn");
const categoryContents = document.querySelectorAll(".category-content");
const backButtons = document.querySelectorAll(".back-to-categories");
const accordionCards = document.querySelectorAll(".accordion-card");
const btnPolice = document.getElementById("btn-police");
const btnAmbulance = document.getElementById("btn-ambulance");
const btnEmbassy = document.getElementById("btn-embassy");

let currentCountryData = null;

// オープニングアニメーション
setTimeout(() => {
        openingScreen.classList.add("slide-up");
        setTimeout(() => {
        openingScreen.style.display = "none";
                countrySelection.classList.remove("hidden");
        countrySelection.classList.add("show");
                            }, 600);
}, 1500);

// 国選択
const countryCards = document.querySelectorAll(".country-card");
countryCards.forEach(card => {
    card.addEventListener("click", function() {
        const country = this.dataset.country;
        const data = countryData[country];
        if (data) {
            currentCountryData = data;
            window.currentCountry = country;
            countrySelection.style.opacity = "0";
            setTimeout(() => {
                countrySelection.style.display = "none";
                mainContainer.classList.remove("hidden");
            }, 400);
        }
    });
});

// カテゴリー選択
categoryButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        const category = this.dataset.category;
        document.getElementById("category-buttons").style.display = "none";
        categoryContents.forEach(content => content.classList.add("hidden"));
        const targetContent = document.getElementById(`category-${category}`);
        if (targetContent) {
            targetContent.classList.remove("hidden");
            loadCategoryData(category);
            if (category === "safety") {
                updateEmergencyButtons(currentCountryData.emergency);
            }
        }
    });
});

// カテゴリーに戻る
backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryContents.forEach(content => content.classList.add("hidden"));
        document.getElementById("category-buttons").style.display = "grid";
    });
});

const cardTypesMap = {
    basic: ["visa", "sim", "currency", "payment"],
    life: ["transport", "delivery", "translation", "culture"],
    safety: ["safety-info", "medical"],
    tourism: ["attractions", "items", "holidays"]
};

function loadCategoryData(category) {
    if (!currentCountryData) return;
    accordionCards.forEach(card => card.classList.remove("active"));
    const cardTypes = cardTypesMap[category] || [];
    cardTypes.forEach(type => {
        if (currentCountryData[type]) {
            updateDetailCard(type, currentCountryData[type]);
        }
    });
}

function updateDetailCard(cardType, data) {
    const summaryEl = document.getElementById(`summary-${cardType}`);
    const basicInfoEl = document.getElementById(`basic-${cardType}`);
    const detailedInfoEl = document.getElementById(`detailed-${cardType}`);
    
    if (!summaryEl || !basicInfoEl || !detailedInfoEl) return;
    
    summaryEl.textContent = data.summary;
    
    let basicHtml = "";
    data.basic.items.forEach(item => {
        basicHtml += `<div class="info-item">${item}</div>`;
    });
    basicHtml += `<button class="more-detail-btn" onclick="showDetailedInfo('${cardType}')">もっと詳しく <span class="arrow">→</span></button>`;
    basicInfoEl.innerHTML = basicHtml;
    
    let detailHtml = "";
    for (const [key, section] of Object.entries(data.detail)) {
        // 通貨計算機の特別処理
        if (key === 'calculator') {
            detailHtml += `<div class="detail-section">`;
            detailHtml += `<div class="section-title"><span class="icon">${section.icon}</span>${section.title}</div>`;
            detailHtml += `<div class="section-content">`;
            detailHtml += generateCurrencyCalculator(section);
            detailHtml += `</div></div>`;
            continue;
        }
        
        detailHtml += `<div class="detail-section">`;
        detailHtml += `<div class="section-title"><span class="icon">${section.icon}</span>${section.title}</div>`;
        detailHtml += `<div class="section-content">`;
        
        if (section.content) {
            detailHtml += section.content;
        }
        
        if (section.items) {
            detailHtml += "<ul>";
            for (const item of section.items) {
                detailHtml += `<li>${item}</li>`;
            }
            detailHtml += "</ul>";
        }
        
        detailHtml += `</div></div>`;
    }
    detailHtml += `<button class="back-btn" onclick="showBasicInfo('${cardType}')"><span class="arrow">←</span> 基本情報に戻る</button>`;
    detailedInfoEl.innerHTML = detailHtml;
}

function showDetailedInfo(cardType) {
    const basicEl = document.getElementById(`basic-${cardType}`);
    const detailedEl = document.getElementById(`detailed-${cardType}`);
    const card = basicEl.closest(".card");
    
    if (basicEl && detailedEl) {
        basicEl.classList.add("fade-out");
        setTimeout(() => {
            basicEl.style.display = "none";
            detailedEl.classList.remove("hidden");
            detailedEl.classList.add("fade-in");
            
            // 通貨カードの場合、計算機をセットアップ
            if (cardType === 'currency' && currentCountryData && currentCountryData.currency && currentCountryData.currency.detail && currentCountryData.currency.detail.calculator) {
                setTimeout(() => {
                    setupCurrencyCalculator(detailedEl, currentCountryData.currency.detail.calculator);
                }, 100);
            }
            
            setTimeout(() => {
                card.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }, 200);
    }
}

function showBasicInfo(cardType) {
    const basicEl = document.getElementById(`basic-${cardType}`);
    const detailedEl = document.getElementById(`detailed-${cardType}`);
    const card = basicEl.closest(".card");
    
    if (basicEl && detailedEl) {
        detailedEl.classList.remove("fade-in");
        detailedEl.classList.add("hidden");
        setTimeout(() => {
            basicEl.style.display = "block";
            basicEl.classList.remove("fade-out");
            setTimeout(() => {
                card.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }, 200);
    }
}

function updateEmergencyButtons(emergency) {
    if (btnPolice) btnPolice.href = emergency.police;
    if (btnAmbulance) btnAmbulance.href = emergency.ambulance;
    if (btnEmbassy) {
        btnEmbassy.href = emergency.embassy;
        btnEmbassy.target = "_blank";
    }
}

// アコーディオン
accordionCards.forEach(card => {
    card.addEventListener("click", function(e) {
        // リンク、ボタン、入力フィールド、通貨計算機内のクリックは無視
        if (e.target.tagName === "A" || 
            e.target.tagName === "BUTTON" || 
            e.target.tagName === "INPUT" ||
            e.target.closest('.currency-calculator')) return;
        const isActive = this.classList.contains("active");
        const parentContent = this.closest(".category-content");
        if (parentContent) {
            parentContent.querySelectorAll(".accordion-card").forEach(c => c.classList.remove("active"));
        }
        if (!isActive) {
            this.classList.add("active");
        }
    });
});

// アプリリスト表示機能追加
function addAppListToDetailedInfo(cardType) {
    const detailedInfoEl = document.getElementById(`detailed-${cardType}`);
    if (!detailedInfoEl) return;
    
    // 既にアプリリストがある場合はスキップ
    if (detailedInfoEl.querySelector('.app-list')) return;
    
    const country = window.currentCountry || 'thailand';
    let appData = null;
    let categoryData = null;
    
    // 国データ取得
    if (country === 'thailand' && typeof thailandData !== 'undefined') {
        appData = thailandData;
    } else if (country === 'korea' && typeof koreaData !== 'undefined') {
        appData = koreaData;
    }
    
    if (!appData) return;
    
    // カテゴリーデータ取得
    if (cardType === 'transport') categoryData = appData.transport;
    else if (cardType === 'delivery') categoryData = appData.delivery;
    else if (cardType === 'translation') categoryData = appData.translation;
    
    if (!categoryData || !categoryData.apps) return;
    
    // アプリリストHTML生成
    if (typeof generateAppList === 'function') {
        const appsHTML = generateAppList(categoryData.apps);
        
        // "基本情報に戻る"ボタンの前に挿入
        const backBtn = detailedInfoEl.querySelector('.back-btn');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = appsHTML;
        
        if (backBtn) {
            backBtn.before(tempDiv.firstElementChild);
        } else {
            detailedInfoEl.appendChild(tempDiv.firstElementChild);
        }
    }
}

// 既存のshowDetailedInfo関数を拡張
const originalShowDetailedInfo = showDetailedInfo;
showDetailedInfo = function(cardType) {
    originalShowDetailedInfo(cardType);
    // アプリリストを追加
    setTimeout(() => {
        addAppListToDetailedInfo(cardType);
    }, 300);
};

// スケルトンローディング生成関数
function generateSkeletonHTML() {
    return `
        <div class="skeleton-card skeleton">
            <div class="skeleton-header">
                <div class="skeleton-icon skeleton"></div>
                <div class="skeleton-title" style="flex: 1;">
                    <div class="skeleton-text medium skeleton"></div>
                </div>
            </div>
            <div class="skeleton-content">
                <div class="skeleton-line skeleton"></div>
                <div class="skeleton-line skeleton"></div>
                <div class="skeleton-line short skeleton"></div>
            </div>
        </div>
        <div class="skeleton-card skeleton">
            <div class="skeleton-header">
                <div class="skeleton-icon skeleton"></div>
                <div class="skeleton-title" style="flex: 1;">
                    <div class="skeleton-text medium skeleton"></div>
                </div>
            </div>
            <div class="skeleton-content">
                <div class="skeleton-line skeleton"></div>
                <div class="skeleton-line skeleton"></div>
            </div>
        </div>
        <div class="skeleton-card skeleton">
            <div class="skeleton-header">
                <div class="skeleton-icon skeleton"></div>
                <div class="skeleton-title" style="flex: 1;">
                    <div class="skeleton-text long skeleton"></div>
                </div>
            </div>
            <div class="skeleton-content">
                <div class="skeleton-line skeleton"></div>
                <div class="skeleton-line medium skeleton"></div>
            </div>
        </div>
    `;
}

// 基本情報エリア用のミニスケルトン
function generateMiniSkeletonHTML() {
    return `
        <div class="skeleton-content">
            <div class="skeleton-text long skeleton"></div>
            <div class="skeleton-text medium skeleton"></div>
            <div class="skeleton-text short skeleton"></div>
        </div>
    `;
}

// スケルトン表示を実データに置き換える（既存のupdateDetailCardを拡張）
const originalUpdateDetailCardForSkeleton = updateDetailCard;
updateDetailCard = function(cardType, data) {
    const basicInfoEl = document.getElementById(`basic-${cardType}`);
    const detailedInfoEl = document.getElementById(`detailed-${cardType}`);
    
    // 基本情報エリアのスケルトンを一時表示
    if (basicInfoEl) {
        basicInfoEl.innerHTML = generateMiniSkeletonHTML();
    }
    
    // 詳細情報エリアのスケルトンを一時表示
    if (detailedInfoEl) {
        detailedInfoEl.innerHTML = generateSkeletonHTML();
    }
    
    // 少し遅延させて実データを表示（スケルトンが見えるように）
    setTimeout(() => {
        originalUpdateDetailCardForSkeleton(cardType, data);
        
        // 実データ表示後にアプリリストを追加
        setTimeout(() => {
            addAppListToDetailedInfo(cardType);
        }, 100);
    }, 3000); // 3秒間スケルトン表示
};

// カード初期表示時のアニメーション追加
document.addEventListener('DOMContentLoaded', function() {
    // カテゴリー表示時にカードにアニメーションクラスを追加
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('category-content') && !target.classList.contains('hidden')) {
                    // カテゴリーが表示されたら、カードにアニメーションを追加
                    const cards = target.querySelectorAll('.card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('initial-load');
                        }, index * 50);
                    });
                }
            }
        });
    });

    // 全カテゴリーコンテンツを監視
    document.querySelectorAll('.category-content').forEach((content) => {
        observer.observe(content, { attributes: true });
    });
});

function generateCurrencyCalculator(calculatorData) {
    if (!calculatorData) return '';
    
    const { rates, presets, symbols } = calculatorData;
    
    return `
        <div class="currency-calculator">
            <div class="calculator-header">
                <div class="calculator-direction" id="calc-direction">
                    <span class="from-currency">${symbols.from}</span>
                    <button class="switch-btn" id="switch-btn">⇄</button>
                    <span class="to-currency">${symbols.to}</span>
                </div>
            </div>
            
            <div class="calculator-input-section">
                <label class="calc-label">金額を入力：</label>
                <div class="calc-input-wrapper">
                    <input type="number" class="calc-input" id="calc-input" placeholder="10000" value="10000">
                    <span class="calc-currency-symbol" id="input-symbol">${symbols.from}</span>
                </div>
            </div>
            
            <div class="calculator-result-section">
                <label class="calc-label">計算結果：</label>
                <div class="calc-result-wrapper">
                    <div class="calc-result" id="calc-result">2,500</div>
                    <span class="calc-currency-symbol" id="result-symbol">${symbols.to}</span>
                </div>
            </div>
            
            <div class="calculator-reference">
                <div class="ref-title">📊 参考レート</div>
                <div class="ref-list" id="ref-list"></div>
            </div>
        </div>
    `;
}

function setupCurrencyCalculator(detailedEl, calculatorData) {
    if (!calculatorData) return;
    
    const { rates, presets, symbols } = calculatorData;
    let isReversed = false;
    
    const switchBtn = detailedEl.querySelector('#switch-btn');
    const calcInput = detailedEl.querySelector('#calc-input');
    const calcResult = detailedEl.querySelector('#calc-result');
    const inputSymbol = detailedEl.querySelector('#input-symbol');
    const resultSymbol = detailedEl.querySelector('#result-symbol');
    const fromCurrency = detailedEl.querySelector('.from-currency');
    const toCurrency = detailedEl.querySelector('.to-currency');
    const refList = detailedEl.querySelector('#ref-list');
    
    const formatNumber = (num) => {
        return new Intl.NumberFormat('ja-JP').format(Math.round(num));
    };
    
    const calculate = () => {
        const amount = parseFloat(calcInput.value) || 0;
        let result;
        
        if (isReversed) {
            result = amount * (rates.THB_TO_JPY || rates.KRW_TO_JPY);
        } else {
            result = amount * (rates.JPY_TO_THB || rates.JPY_TO_KRW);
        }
        
        calcResult.textContent = formatNumber(result);
    };
    
    const updateReferenceRates = () => {
        const amounts = isReversed ? (presets.thb || presets.krw) : presets.jpy;
        const fromSym = isReversed ? symbols.to : symbols.from;
        const toSym = isReversed ? symbols.from : symbols.to;
        
        let html = '';
        amounts.forEach(amount => {
            let result;
            if (isReversed) {
                result = amount * (rates.THB_TO_JPY || rates.KRW_TO_JPY);
            } else {
                result = amount * (rates.JPY_TO_THB || rates.JPY_TO_KRW);
            }
            html += `<div class="ref-item">${formatNumber(amount)}${fromSym} = ${formatNumber(result)}${toSym}</div>`;
        });
        
        refList.innerHTML = html;
    };
    
    const switchDirection = () => {
        isReversed = !isReversed;
        
        if (isReversed) {
            fromCurrency.textContent = symbols.to;
            toCurrency.textContent = symbols.from;
            inputSymbol.textContent = symbols.to;
            resultSymbol.textContent = symbols.from;
        } else {
            fromCurrency.textContent = symbols.from;
            toCurrency.textContent = symbols.to;
            inputSymbol.textContent = symbols.from;
            resultSymbol.textContent = symbols.to;
        }
        
        calculate();
        updateReferenceRates();
    };
    
    switchBtn.addEventListener('click', switchDirection);
    calcInput.addEventListener('input', calculate);
    
    calculate();
    updateReferenceRates();
}
