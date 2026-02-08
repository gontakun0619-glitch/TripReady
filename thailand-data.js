const thailandData = {
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
                calculator: {
                    title: '通貨計算',
                    icon: '💱',
                    rates: {
                        JPY_TO_THB: 0.25,
                        THB_TO_JPY: 4.0
                    },
                    presets: {
                        jpy: [1000, 5000, 10000, 20000, 50000],
                        thb: [100, 500, 1000, 5000, 10000]
                    },
                    symbols: {
                        from: '円',
                        to: 'バーツ'
                    }
                },
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
};
