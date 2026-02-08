const koreaData = {
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
                calculator: {
                    title: '通貨計算',
                    icon: '💱',
                    rates: {
                        JPY_TO_KRW: 9.0,
                        KRW_TO_JPY: 0.11
                    },
                    presets: {
                        jpy: [1000, 5000, 10000, 20000, 50000],
                        krw: [10000, 50000, 100000, 200000, 500000]
                    },
                    symbols: {
                        from: '円',
                        to: 'ウォン'
                    }
                },
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
};
