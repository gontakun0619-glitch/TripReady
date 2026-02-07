// アプリデータ統合スクリプト

// ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', function() {
    console.log('アプリデータ統合開始');
    
    // 現在選択されている国を取得
    function getCurrentCountry() {
        // app.jsのcurrentCountry変数を参照
        return window.currentCountry || 'thailand';
    }
    
    // アプリリストを挿入する関数
    function injectAppLinks() {
        const country = getCurrentCountry();
        let appData = null;
        
        if (country === 'thailand' && typeof thailandData !== 'undefined') {
            appData = thailandData;
        } else if (country === 'korea' && typeof koreaData !== 'undefined') {
            appData = koreaData;
        }
        
        if (!appData) {
            console.log('アプリデータが見つかりません:', country);
            return;
        }
        
        // transport（配車・移動）
        const transportDetail = document.querySelector('#detail-transport .basic-info');
        if (transportDetail && appData.transport) {
            const appsHTML = generateAppList(appData.transport.apps);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = appsHTML;
            transportDetail.appendChild(tempDiv.firstElementChild);
        }
        
        // delivery（デリバリー）
        const deliveryDetail = document.querySelector('#detail-delivery .basic-info');
        if (deliveryDetail && appData.delivery) {
            const appsHTML = generateAppList(appData.delivery.apps);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = appsHTML;
            deliveryDetail.appendChild(tempDiv.firstElementChild);
        }
        
        // translation（翻訳・言語）
        const translationDetail = document.querySelector('#detail-translation .basic-info');
        if (translationDetail && appData.translation) {
            const appsHTML = generateAppList(appData.translation.apps);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = appsHTML;
            translationDetail.appendChild(tempDiv.firstElementChild);
        }
    }
    
    // 国選択時にアプリリンクを再挿入
    document.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('click', function() {
            setTimeout(injectAppLinks, 500); // データロード後に実行
        });
    });
    
    // 初回実行
    setTimeout(injectAppLinks, 1000);
});
