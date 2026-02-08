// デバイス判定関数
function getDeviceType() {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    return 'web';
}

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

// thailand-data.js と korea-data.js から読み込んだデータを使用
const countryData = {
    get thailand() {
        return typeof thailandData !== 'undefined' ? thailandData : null;
    },
    get korea() {
        return typeof koreaData !== 'undefined' ? koreaData : null;
    }
};

// 以下、既存のUIロジック
const openingScreen = document.getElementById("opening-screen");
const countrySelection = document.getElementById("country-selection");
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
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;
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

// 通貨換算機能
function generateCurrencyConverter(converterData) {
    if (!converterData) return '';
    
    const { rates, presets, symbols } = converterData;
    let isReversed = false;  // JPY→外貨 or 外貨→JPY
    
    const formatNumber = (num) => {
        return new Intl.NumberFormat('ja-JP').format(Math.round(num));
    };
    
    const calculate = (amount, reversed) => {
        if (!amount || isNaN(amount)) return 0;
        const rate = reversed ? rates.THB_TO_JPY || rates.KRW_TO_JPY : rates.JPY_TO_THB || rates.JPY_TO_KRW;
        return amount * rate;
    };
    
    const getPresetHTML = (reversed) => {
        const amounts = reversed ? presets.thb || presets.krw : presets.jpy;
        const fromSymbol = reversed ? symbols.to : symbols.from;
        const toSymbol = reversed ? symbols.from : symbols.to;
        
        return amounts.map(amount => {
            const result = calculate(amount, reversed);
            return `
                <button class="converter-preset-btn" data-amount="${amount}">
                    <div class="preset-amount">${formatNumber(amount)}${fromSymbol}</div>
                    <div class="preset-result">${formatNumber(result)}${toSymbol}</div>
                </button>
            `;
        }).join('');
    };
    
    const converterHTML = `
        <div class="currency-converter" data-converter-active="true">
            <div class="converter-header">
                <div class="converter-title">
                    <span>${converterData.icon}</span>
                    <span>${converterData.title}</span>
                </div>
                <button class="converter-switch">
                    <span class="switch-text">${symbols.fromFlag} ${symbols.fromCode} → ${symbols.toFlag} ${symbols.toCode}</span>
                    <span class="switch-icon">⇄</span>
                </button>
            </div>
            
            <div class="converter-input-area">
                <div class="converter-input-label">換算する金額</div>
                <div class="converter-input-wrapper">
                    <input 
                        type="number" 
                        class="converter-input" 
                        placeholder="10000"
                        inputmode="numeric"
                    >
                    <div class="converter-currency converter-from-currency">${symbols.from}</div>
                </div>
            </div>
            
            <div class="converter-arrow">↓</div>
            
            <div class="converter-result-area">
                <div class="converter-result-label">換算結果</div>
                <div class="converter-result-wrapper">
                    <div class="converter-result">0</div>
                    <div class="converter-result-currency converter-to-currency">${symbols.to}</div>
                </div>
            </div>
            
            <div class="converter-presets">
                <div class="converter-presets-label">クイック換算</div>
                <div class="converter-preset-buttons">
                    ${getPresetHTML(false)}
                </div>
            </div>
            
            <div class="converter-rate">
                <span class="converter-rate-main">1 ${symbols.fromCode} = ${rates.JPY_TO_THB || rates.JPY_TO_KRW} ${symbols.toCode}</span>
                <br>
                <span style="font-size: 11px;">※参考レート</span>
            </div>
        </div>
    `;
    
    return converterHTML;
}

// 通貨換算機能のイベントリスナー設定
function setupCurrencyConverter(container, converterData) {
    if (!container || !converterData) return;
    
    const { rates, presets, symbols } = converterData;
    let isReversed = false;
    
    const input = container.querySelector('.converter-input');
    const result = container.querySelector('.converter-result');
    const switchBtn = container.querySelector('.converter-switch');
    const presetButtons = container.querySelectorAll('.converter-preset-btn');
    const fromCurrency = container.querySelector('.converter-from-currency');
    const toCurrency = container.querySelector('.converter-to-currency');
    const switchText = container.querySelector('.switch-text');
    const rateText = container.querySelector('.converter-rate-main');
    const switchIcon = container.querySelector('.switch-icon');
    
    const formatNumber = (num) => {
        return new Intl.NumberFormat('ja-JP').format(Math.round(num));
    };
    
    const calculate = (amount) => {
        if (!amount || isNaN(amount)) return 0;
        const rate = isReversed ? (rates.THB_TO_JPY || rates.KRW_TO_JPY) : (rates.JPY_TO_THB || rates.JPY_TO_KRW);
        return amount * rate;
    };
    
    const updateResult = () => {
        const amount = parseFloat(input.value) || 0;
        const calculated = calculate(amount);
        result.textContent = formatNumber(calculated);
        result.classList.add('updating');
        setTimeout(() => result.classList.remove('updating'), 300);
    };
    
    const updatePresets = () => {
        const amounts = isReversed ? (presets.thb || presets.krw) : presets.jpy;
        const fromSymbol = isReversed ? symbols.to : symbols.from;
        const toSymbol = isReversed ? symbols.from : symbols.to;
        
        presetButtons.forEach((btn, index) => {
            const amount = amounts[index];
            const calculated = calculate(amount);
            btn.dataset.amount = amount;
            btn.querySelector('.preset-amount').textContent = `${formatNumber(amount)}${fromSymbol}`;
            btn.querySelector('.preset-result').textContent = `${formatNumber(calculated)}${toSymbol}`;
        });
    };
    
    // 入力時の計算
    input.addEventListener('input', updateResult);
    
    // 通貨切り替え
    switchBtn.addEventListener('click', () => {
        isReversed = !isReversed;
        
        // アニメーション
        switchIcon.parentElement.classList.add('switching');
        setTimeout(() => switchIcon.parentElement.classList.remove('switching'), 300);
        
        // 通貨表示更新
        if (isReversed) {
            fromCurrency.textContent = symbols.to;
            toCurrency.textContent = symbols.from;
            switchText.textContent = `${symbols.toFlag} ${symbols.toCode} → ${symbols.fromFlag} ${symbols.fromCode}`;
            rateText.textContent = `1 ${symbols.toCode} = ${rates.THB_TO_JPY || rates.KRW_TO_JPY} ${symbols.fromCode}`;
        } else {
            fromCurrency.textContent = symbols.from;
            toCurrency.textContent = symbols.to;
            switchText.textContent = `${symbols.fromFlag} ${symbols.fromCode} → ${symbols.toFlag} ${symbols.toCode}`;
            rateText.textContent = `1 ${symbols.fromCode} = ${rates.JPY_TO_THB || rates.JPY_TO_KRW} ${symbols.toCode}`;
        }
        
        // 結果更新
        updateResult();
        updatePresets();
    });
    
    // プリセットボタン
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = btn.dataset.amount;
            input.value = amount;
            updateResult();
            
            // フィードバックアニメーション
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = '', 100);
        });
    });
}

// 既存のupdateDetailCard関数を拡張（converter対応）
const originalUpdateDetailCardForConverter = updateDetailCard;
updateDetailCard = function(cardType, data) {
    // スケルトン表示
    const basicInfoEl = document.getElementById(`basic-${cardType}`);
    const detailedInfoEl = document.getElementById(`detailed-${cardType}`);
    
    if (basicInfoEl) {
        basicInfoEl.innerHTML = generateMiniSkeletonHTML();
    }
    
    if (detailedInfoEl) {
        detailedInfoEl.innerHTML = generateSkeletonHTML();
    }
    
    setTimeout(() => {
        // 元の処理実行
        originalUpdateDetailCardForConverter(cardType, data);
        
        // 通貨カードの場合、converter追加
        if (cardType === 'currency' && data.detail && data.detail.converter) {
            const converterHTML = generateCurrencyConverter(data.detail.converter);
            
            // 詳細情報の最初に挿入
            if (detailedInfoEl) {
                const firstSection = detailedInfoEl.querySelector('.detail-section');
                if (firstSection) {
                    firstSection.insertAdjacentHTML('beforebegin', converterHTML);
                    
                    // イベントリスナー設定
                    const converterContainer = detailedInfoEl.querySelector('.currency-converter');
                    setupCurrencyConverter(converterContainer, data.detail.converter);
                }
            }
        }
        
        // アプリリスト追加
        setTimeout(() => {
            addAppListToDetailedInfo(cardType);
        }, 100);
    }, 3000);
};

// 通貨計算機能（シンプル版）
document.addEventListener('DOMContentLoaded', function() {
    // タイバーツ計算
    function setupThailandCalc() {
        const input = document.getElementById('thb-jpy-input');
        const result = document.getElementById('thb-jpy-result');
        const presets = document.querySelectorAll('#detailed-currency .preset-btn');
        
        if (!input || !result) return;
        
        const calculate = () => {
            const jpy = parseFloat(input.value) || 0;
            const thb = Math.round(jpy * 0.285);
            result.textContent = new Intl.NumberFormat('ja-JP').format(thb);
        };
        
        input.addEventListener('input', calculate);
        
        presets.forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.dataset.amount;
                calculate();
            });
        });
        
        calculate();
    }
    
    // 韓国ウォン計算
    function setupKoreaCalc() {
        const input = document.getElementById('krw-jpy-input');
        const result = document.getElementById('krw-jpy-result');
        const presets = document.querySelectorAll('#detailed-currency .preset-btn');
        
        if (!input || !result) return;
        
        const calculate = () => {
            const jpy = parseFloat(input.value) || 0;
            const krw = Math.round(jpy * 11.5);
            result.textContent = new Intl.NumberFormat('ja-JP').format(krw);
        };
        
        input.addEventListener('input', calculate);
        
        presets.forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.dataset.amount;
                calculate();
            });
        });
        
        calculate();
    }
    
    // 詳細情報が表示されたときにセットアップ
    const observer = new MutationObserver(() => {
        setupThailandCalc();
        setupKoreaCalc();
    });
    
    const detailEl = document.getElementById('detailed-currency');
    if (detailEl) {
        observer.observe(detailEl, { childList: true, subtree: true });
    }
    
    // 初回セットアップ
    setTimeout(() => {
        setupThailandCalc();
        setupKoreaCalc();
    }, 500);
});
