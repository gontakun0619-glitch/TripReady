// アプリリンク表示用ヘルパー関数

// デバイス判定
function getDeviceType() {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    return 'web';
}

// アプリカードHTML生成
function generateAppCard(app) {
    const device = getDeviceType();
    const link = app[device] || app.web;
    const buttonText = device === 'ios' ? '📱 App Storeで入手' : 
                       device === 'android' ? '📱 Google Playで入手' : 
                       '📱 アプリを入手';
    
    return `
        <div class="app-card">
            <div class="app-info">
                <h4 class="app-name">${app.name}</h4>
                <p class="app-description">${app.description}</p>
                ${app.note ? `<p class="app-note">💡 ${app.note}</p>` : ''}
            </div>
            <a href="${link}" target="_blank" rel="noopener noreferrer" class="app-download-btn">
                ${buttonText}
            </a>
        </div>
    `;
}

// カテゴリーのアプリリスト生成
function generateAppList(apps) {
    if (!apps || apps.length === 0) return '';
    
    return `
        <div class="app-list">
            ${apps.map(app => generateAppCard(app)).join('')}
        </div>
    `;
}

// 国データにアプリ情報を追加
function enrichCountryDataWithApps(countryKey, appData) {
    // transport
    if (appData.transport && appData.transport.apps) {
        const appsHTML = generateAppList(appData.transport.apps);
        // countryDataに追加する処理は後で実装
    }
    
    // delivery
    if (appData.delivery && appData.delivery.apps) {
        const appsHTML = generateAppList(appData.delivery.apps);
        // countryDataに追加する処理は後で実装
    }
    
    // translation
    if (appData.translation && appData.translation.apps) {
        const appsHTML = generateAppList(appData.translation.apps);
        // countryDataに追加する処理は後で実装
    }
}
