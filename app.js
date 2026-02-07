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
const countryData = {
    thailand: {
        name: "タイ / バンコク",
        visa: {
            summary: "ビザ不要（30日以内）",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "ビザ情報",
                    icon: "🛂",
                    content: "API化後にデータを追加します"
                }
            }
        },
        transport: {
            summary: "Grab",
            basic: {
                items: [
                    "空港→市内：300-500バーツ",
                    "支払い：現金/カード",
                    "チップ：不要"
                ]
            },
            detail: {
                appInfo: {
                    title: "アプリ情報",
                    icon: "📱",
                    content: `Grab（iPhone/Android対応）<br>東南アジアで最も普及している配車アプリ<br><br>${getAppDownloadLink('grab')}`
                },
                pricing: {
                    title: "料金目安",
                    icon: "💰",
                    items: [
                        "空港→市内：300-500バーツ（約1,200-2,000円）",
                        "市内移動：50-150バーツ（約200-600円）",
                        "ピーク時：通常料金の1.5倍程度"
                    ]
                },
                payment: {
                    title: "支払い方法",
                    icon: "💳",
                    items: [
                        "現金（バーツ）",
                        "クレジットカード",
                        "Grabウォレット（アプリ内決済）"
                    ]
                },
                howTo: {
                    title: "使い方",
                    icon: "📍",
                    items: [
                        "アプリで目的地を入力",
                        "ドライバーとマッチング",
                        "ピックアップ場所で待機",
                        "乗車して目的地へ"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "渋滞時は予想より時間がかかる",
                        "チップは基本的に不要",
                        "空港は3階のピックアップエリアで待機",
                        "ドライバーに電話がかかってくる場合あり（タイ語）"
                    ]
                }
            }
        },
        delivery: {
            summary: "GrabFood / Foodpanda",
            basic: {
                items: [
                    "配達料：30-50バーツ",
                    "支払い：現金/カード",
                    "チップ：不要"
                ]
            },
            detail: {
                appInfo: {
                    title: "アプリ情報",
                    icon: "📱",
                    content: `<strong>GrabFood</strong><br>${getAppDownloadLink('grabfood')}<br><br><strong>Foodpanda</strong><br>${getAppDownloadLink('foodpanda')}<br><br>どちらも日本のUber Eats感覚で使える`
                },
                pricing: {
                    title: "料金目安",
                    icon: "💰",
                    items: [
                        "配達料：30-50バーツ（約130-220円）",
                        "最低注文金額：100-200バーツ程度",
                        "サービス料：注文金額の5-10%"
                    ]
                },
                payment: {
                    title: "支払い方法",
                    icon: "💳",
                    items: [
                        "現金（配達時に支払い）",
                        "クレジットカード",
                        "アプリ内ウォレット"
                    ]
                },
                howTo: {
                    title: "使い方",
                    icon: "📍",
                    items: [
                        "アプリで料理を選択",
                        "配達先住所を入力",
                        "注文確定",
                        "配達を待つ（30-60分程度）"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "ピーク時（12-13時、18-20時）は配達遅延あり",
                        "チップ不要だが感謝の気持ちで渡してもOK",
                        "住所は英語/タイ語で正確に入力",
                        "ホテル名+部屋番号で指定が確実"
                    ]
                }
            }
        },
        payment: {
            summary: "現金 / クレジットカード",
            basic: {
                items: [
                    "現金が主流",
                    "カード：観光地・モールでOK",
                    "ATM：手数料220バーツ"
                ]
            },
            detail: {
                cashCard: {
                    title: "主流の支払い方法",
                    icon: "💳",
                    items: [
                        "現金：まだ主流、屋台や小店は現金のみ",
                        "クレジットカード：観光地・ショッピングモール中心",
                        "QRコード決済：PromptPayが普及中（タイ人向け）"
                    ]
                },
                atm: {
                    title: "ATM・両替",
                    icon: "🏧",
                    items: [
                        "ATM手数料：1回220バーツ（約960円）",
                        "引き出し限度：1回20,000-30,000バーツ",
                        "空港両替：レート悪い、手数料高い",
                        "市内両替所：Super Richなどレート良好"
                    ]
                },
                tips: {
                    title: "チップ文化",
                    icon: "💵",
                    items: [
                        "レストラン：不要（高級店は10%程度）",
                        "マッサージ：50-100バーツ",
                        "ホテル：20-50バーツ（ベッドメイキング）",
                        "タクシー・Grab：基本不要"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "ATMは複数回より1回で多めに引き出す方が得",
                        "クレジットカードはVISA/Masterが安心",
                        "偽札は少ないが1000バーツ札は注意",
                        "小銭・小額紙幣を常に持ち歩く"
                    ]
                }
            }
        },
        translation: {
            summary: "Google翻訳",
            basic: {
                items: [
                    "アプリ：Google翻訳",
                    "オフライン：事前DL可能",
                    "英語：観光地で通じる"
                ]
            },
            detail: {
                appInfo: {
                    title: "おすすめアプリ",
                    icon: "📱",
                    content: `Google翻訳（タイ語↔日本語対応）<br>オフライン翻訳を事前ダウンロード推奨<br><br>${getAppDownloadLink('googletranslate')}`
                },
                phrases: {
                    title: "よく使うフレーズ",
                    icon: "💬",
                    items: [
                        "こんにちは：サワディー・カー/クラップ",
                        "ありがとう：コップンカー/クラップ",
                        "いくら？：タオライ？",
                        "辛くしないで：マイ・ペッ",
                        "助けて：チュアイ・ドゥアイ"
                    ]
                },
                language: {
                    title: "言語の通じやすさ",
                    icon: "🗣️",
                    items: [
                        "英語：観光地・ホテル・ショッピングモールで通じる",
                        "日本語：一部の観光地で通じる程度",
                        "タイ語：ローカルエリアは必須",
                        "ジェスチャー：数字は指で示せばOK"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "カメラ翻訳機能が便利（メニュー・看板）",
                        "音声翻訳は騒がしい場所では使いづらい",
                        "住所は英語とタイ語両方用意",
                        "数字の読み方を覚えておくと便利"
                    ]
                }
            }
        },
        currency: {
            summary: "バーツ (THB)",
            basic: {
                items: [
                    "1万円 ≒ 2,300バーツ",
                    "ランチ：50-150バーツ",
                    "タクシー：50-150バーツ"
                ]
            },
            detail: {
                info: {
                    title: "通貨情報",
                    icon: "💰",
                    content: "バーツ (THB / ฿)<br>硬貨：1, 2, 5, 10バーツ<br>紙幣：20, 50, 100, 500, 1000バーツ"
                },
                rate: {
                    title: "体感レート",
                    icon: "💵",
                    items: [
                        "ランチ（ローカル）：50-100バーツ（約220-440円）",
                        "ランチ（レストラン）：150-300バーツ（約660-1,300円）",
                        "カフェ（コーヒー）：60-120バーツ（約260-520円）",
                        "タクシー10分：50-150バーツ（約220-660円）",
                        "水500ml：10-20バーツ（約44-88円）",
                        "ビール：60-150バーツ（約260-660円）"
                    ]
                },
                exchange: {
                    title: "両替場所",
                    icon: "🏦",
                    items: [
                        "空港：レート悪い、手数料高い（緊急時のみ）",
                        "市内両替所：Super Rich等、レート良好",
                        "ATM：手数料220バーツ、限度額あり",
                        "ホテル：レート最悪、避けるべき"
                    ]
                },
                notes: {
                    title: "お金の管理",
                    icon: "⚠️",
                    items: [
                        "3-5日なら1-2万円分を両替",
                        "ATMは1回で多めに（手数料節約）",
                        "小銭・20/50バーツ札は常備",
                        "余ったバーツは空港で使い切るか再両替"
                    ]
                }
            }
        },
        sim: {
            summary: "AIS / TrueMove（現地SIM）",
            basic: {
                items: [
                    "7日間15GB：299バーツ",
                    "購入：空港カウンター",
                    "設定：即開通、簡単"
                ]
            },
            detail: {
                carrier: {
                    title: "おすすめキャリア",
                    icon: "📱",
                    content: "AIS / TrueMove<br>どちらも品質良好、観光客向けプランあり"
                },
                plans: {
                    title: "料金プラン",
                    icon: "💰",
                    items: [
                        "7日間 15GB：299バーツ（約1,300円）",
                        "15日間 30GB：599バーツ（約2,600円）",
                        "30日間 50GB：899バーツ（約3,900円）",
                        "eSIMも対応（事前購入可能）"
                    ]
                },
                purchase: {
                    title: "購入場所",
                    icon: "🏪",
                    items: [
                        "空港：到着ロビーにカウンターあり（24時間）",
                        "コンビニ：セブンイレブン等で購入可",
                        "事前購入：eSIMをネットで購入（Airalo等）",
                        "必要なもの：パスポート"
                    ]
                },
                setup: {
                    title: "設定方法",
                    icon: "⚙️",
                    items: [
                        "物理SIM：カウンターで設定してくれる",
                        "eSIM：QRコード読み取り→アクティベート",
                        "設定は5分程度で完了",
                        "テストで通話・データ通信確認"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "空港カウンターが最も確実で簡単",
                        "eSIMは事前設定が必要（到着前に準備）",
                        "データ容量は地図・SNS中心なら十分",
                        "テザリングも可能"
                    ]
                }
            }
        },
        "safety-info": {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "治安情報",
                    icon: "⚠️",
                    content: "API化後にデータを追加します"
                }
            }
        },
        medical: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "医療情報",
                    icon: "🏥",
                    content: "API化後にデータを追加します"
                }
            }
        },
        culture: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "文化・マナー",
                    icon: "🙏",
                    content: "API化後にデータを追加します"
                }
            }
        },
        attractions: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "観光情報",
                    icon: "📍",
                    content: "API化後にデータを追加します"
                }
            }
        },
        items: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "持ち物情報",
                    icon: "🎒",
                    content: "API化後にデータを追加します"
                }
            }
        },
        holidays: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "祝日情報",
                    icon: "📅",
                    content: "API化後にデータを追加します"
                }
            }
        },
        emergency: {
            police: "tel:191",
            ambulance: "tel:1669",
            embassy: "https://www.th.emb-japan.go.jp/itprtop_ja/index.html"
        }
    },
    korea: {
        name: "韓国 / ソウル",
        visa: {
            summary: "ビザ不要（90日以内）",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "ビザ情報",
                    icon: "🛂",
                    content: "API化後にデータを追加します"
                }
            }
        },
        transport: {
            summary: "カカオT（Kakao T）",
            basic: {
                items: [
                    "空港→市内：50,000-80,000ウォン",
                    "支払い：現金/カード",
                    "チップ：不要"
                ]
            },
            detail: {
                appInfo: {
                    title: "アプリ情報",
                    icon: "📱",
                    content: `カカオT（Kakao T）<br>韓国で最もメジャーな配車アプリ<br><br>${getAppDownloadLink('kakaot')}`
                },
                pricing: {
                    title: "料金目安",
                    icon: "💰",
                    items: [
                        "空港→市内：50,000-80,000ウォン（約5,500-9,000円）",
                        "市内移動：5,000-15,000ウォン（約550-1,650円）",
                        "深夜割増：20-40%追加"
                    ]
                },
                payment: {
                    title: "支払い方法",
                    icon: "💳",
                    items: [
                        "現金（ウォン）",
                        "クレジットカード",
                        "カカオペイ"
                    ]
                },
                howTo: {
                    title: "使い方",
                    icon: "📍",
                    items: [
                        "アプリで目的地を入力",
                        "ドライバーとマッチング",
                        "乗車",
                        "支払い"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "アプリは韓国語がメインだが直感的",
                        "地下鉄（T-moneyカード）も便利",
                        "チップ不要",
                        "深夜は割増料金"
                    ]
                }
            }
        },
        delivery: {
            summary: "배달의민족 / Coupang Eats",
            basic: {
                items: [
                    "配達料：2,000-3,000ウォン",
                    "支払い：カード推奨",
                    "チップ：不要"
                ]
            },
            detail: {
                appInfo: {
                    title: "アプリ情報",
                    icon: "📱",
                    content: `<strong>배달의민족（ペダルの民族）</strong><br>${getAppDownloadLink('baemin')}<br><br><strong>Coupang Eats</strong><br>${getAppDownloadLink('coupangeats')}<br><br>Coupang Eatsは英語対応あり`
                },
                pricing: {
                    title: "料金目安",
                    icon: "💰",
                    items: [
                        "配達料：2,000-3,000ウォン（約220-330円）",
                        "最低注文金額：10,000-15,000ウォン",
                        "サービス料：含まれる場合が多い"
                    ]
                },
                payment: {
                    title: "支払い方法",
                    icon: "💳",
                    items: [
                        "クレジットカード（推奨）",
                        "カカオペイ",
                        "現金（一部対応）"
                    ]
                },
                howTo: {
                    title: "使い方",
                    icon: "📍",
                    items: [
                        "アプリで料理を選択",
                        "配達先住所を入力",
                        "注文確定",
                        "配達を待つ（30-50分程度）"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "배달의민족は韓国語必須だが直感的",
                        "Coupang Eatsは英語対応で使いやすい",
                        "チップ不要",
                        "住所は韓国語表記が確実"
                    ]
                }
            }
        },
        payment: {
            summary: "クレジットカード / Samsung Pay",
            basic: {
                items: [
                    "完全なカード社会",
                    "現金ほぼ不要",
                    "チップ不要"
                ]
            },
            detail: {
                cashCard: {
                    title: "主流の支払い方法",
                    icon: "💳",
                    items: [
                        "クレジットカード：ほぼすべての店で使用可",
                        "現金：ほとんど不要",
                        "Samsung Pay/Apple Pay：非接触決済も普及",
                        "T-moneyカード：交通・コンビニで便利"
                    ]
                },
                atm: {
                    title: "ATM・両替",
                    icon: "🏧",
                    items: [
                        "ATM手数料：無料〜数百円程度",
                        "引き出し限度：1回700,000ウォン程度",
                        "空港両替：レート普通",
                        "市内両替所：明洞などレート良好"
                    ]
                },
                tips: {
                    title: "チップ文化",
                    icon: "💵",
                    items: [
                        "チップ文化なし",
                        "レストラン：不要",
                        "タクシー：不要",
                        "ホテル：不要"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "現金は最小限でOK",
                        "カードブランドはVISA/Masterが確実",
                        "伝統市場や一部屋台は現金のみ",
                        "T-moneyカードは便利（コンビニで購入）"
                    ]
                }
            }
        },
        translation: {
            summary: "Papago / Google翻訳",
            basic: {
                items: [
                    "アプリ：Papago推奨",
                    "英語：若者世代は通じる",
                    "日本語：観光地で一部通じる"
                ]
            },
            detail: {
                appInfo: {
                    title: "おすすめアプリ",
                    icon: "📱",
                    content: `<strong>Papago（韓国語特化）</strong><br>${getAppDownloadLink('papago')}<br><br><strong>Google翻訳</strong><br>${getAppDownloadLink('googletranslate')}<br><br>Papagoの方が精度が高い場合も`
                },
                phrases: {
                    title: "よく使うフレーズ",
                    icon: "💬",
                    items: [
                        "こんにちは：アンニョンハセヨ",
                        "ありがとう：カムサハムニダ",
                        "いくら？：オルマエヨ？",
                        "辛くしないで：メプチ アンケ ヘジュセヨ",
                        "助けて：サラム サルリョ ジュセヨ"
                    ]
                },
                language: {
                    title: "言語の通じやすさ",
                    icon: "🗣️",
                    items: [
                        "英語：若者世代・観光地で比較的通じる",
                        "日本語：観光地・一部店舗で通じる",
                        "韓国語：基本フレーズを覚えると便利",
                        "漢字：ほぼ使われていない"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "Papagoはカメラ翻訳・音声翻訳が優秀",
                        "メニューは写真付きが多く選びやすい",
                        "住所は韓国語表記を用意",
                        "数字は指で示せばOK"
                    ]
                }
            }
        },
        currency: {
            summary: "ウォン (KRW)",
            basic: {
                items: [
                    "1万円 ≒ 90,000ウォン",
                    "ランチ：8,000-15,000ウォン",
                    "タクシー：5,000-15,000ウォン"
                ]
            },
            detail: {
                info: {
                    title: "通貨情報",
                    icon: "💰",
                    content: "ウォン (KRW / ₩)<br>硬貨：10, 50, 100, 500ウォン<br>紙幣：1,000, 5,000, 10,000, 50,000ウォン"
                },
                rate: {
                    title: "体感レート",
                    icon: "💵",
                    items: [
                        "ランチ（ローカル）：8,000-12,000ウォン（約880-1,320円）",
                        "ランチ（レストラン）：15,000-30,000ウォン（約1,650-3,300円）",
                        "カフェ（コーヒー）：4,000-6,000ウォン（約440-660円）",
                        "タクシー10分：5,000-10,000ウォン（約550-1,100円）",
                        "水500ml：1,000-1,500ウォン（約110-165円）",
                        "ビール：3,000-8,000ウォン（約330-880円）"
                    ]
                },
                exchange: {
                    title: "両替場所",
                    icon: "🏦",
                    items: [
                        "空港：レート普通、手数料あり",
                        "市内両替所：明洞などレート良好",
                        "ATM：手数料安い、便利",
                        "ホテル：レート悪い"
                    ]
                },
                notes: {
                    title: "お金の管理",
                    icon: "⚠️",
                    items: [
                        "カード中心なので現金は最小限",
                        "3-5日なら1万円分の両替で十分",
                        "小銭は交通カードチャージに使う",
                        "余ったウォンは空港で使い切る"
                    ]
                }
            }
        },
        sim: {
            summary: "KT / SK Telecom（現地SIM / eSIM）",
            basic: {
                items: [
                    "5日間10GB：30,000ウォン",
                    "購入：空港/コンビニ",
                    "eSIM：事前購入推奨"
                ]
            },
            detail: {
                carrier: {
                    title: "おすすめキャリア",
                    icon: "📱",
                    content: "KT / SK Telecom<br>どちらも品質良好、eSIM対応"
                },
                plans: {
                    title: "料金プラン",
                    icon: "💰",
                    items: [
                        "5日間 10GB：30,000ウォン（約3,300円）",
                        "10日間 20GB：50,000ウォン（約5,500円）",
                        "30日間 無制限：100,000ウォン（約11,000円）",
                        "eSIM：事前購入で少し安い"
                    ]
                },
                purchase: {
                    title: "購入場所",
                    icon: "🏪",
                    items: [
                        "空港：到着ロビーにカウンターあり",
                        "コンビニ：一部店舗で購入可",
                        "事前購入：eSIMをネットで購入推奨",
                        "必要なもの：パスポート"
                    ]
                },
                setup: {
                    title: "設定方法",
                    icon: "⚙️",
                    items: [
                        "物理SIM：カウンターで設定してくれる",
                        "eSIM：QRコード読み取り→アクティベート",
                        "設定は簡単（5-10分）",
                        "日本語サポートあり（一部）"
                    ]
                },
                notes: {
                    title: "注意点",
                    icon: "⚠️",
                    items: [
                        "eSIMが便利（事前設定可能）",
                        "空港カウンターは混雑することあり",
                        "データ容量は十分（地図・SNS中心）",
                        "テザリング可能"
                    ]
                }
            }
        },
        "safety-info": {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "治安情報",
                    icon: "⚠️",
                    content: "API化後にデータを追加します"
                }
            }
        },
        medical: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "医療情報",
                    icon: "🏥",
                    content: "API化後にデータを追加します"
                }
            }
        },
        culture: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "文化・マナー",
                    icon: "🙏",
                    content: "API化後にデータを追加します"
                }
            }
        },
        attractions: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "観光情報",
                    icon: "📍",
                    content: "API化後にデータを追加します"
                }
            }
        },
        items: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "持ち物情報",
                    icon: "🎒",
                    content: "API化後にデータを追加します"
                }
            }
        },
        holidays: {
            summary: "準備中",
            basic: { items: ["API化後にデータ追加予定"] },
            detail: {
                info: {
                    title: "祝日情報",
                    icon: "📅",
                    content: "API化後にデータを追加します"
                }
            }
        },
        emergency: {
            police: "tel:112",
            ambulance: "tel:119",
            embassy: "https://www.kr.emb-japan.go.jp/itprtop_ja/index.html"
        }
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
