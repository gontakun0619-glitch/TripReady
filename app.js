const countryData = {
thailand: {
name: "タイ / バンコク",
transport: {
summary: "Grab",
basic: { items: ["空港→市内：300-500バーツ", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Grab（iPhone/Android対応）<br>東南アジアで最も普及している配車アプリ" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内：300-500バーツ（約1,200-2,000円）", "市内移動：50-150バーツ（約200-600円）", "ピーク時：通常料金の1.5倍程度"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（バーツ）", "クレジットカード", "Grabウォレット（アプリ内決済）"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地を入力", "ドライバーとマッチング", "ピックアップ場所で待機", "乗車して目的地へ"] },
notes: { title: "注意点", icon: "⚠️", items: ["渋滞時は予想より時間がかかる", "チップは基本的に不要", "空港は3階のピックアップエリアで待機", "ドライバーに電話がかかってくる場合あり（タイ語）"] }
}
},
delivery: {
summary: "GrabFood / Foodpanda",
basic: { items: ["配達料：30-50バーツ", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "GrabFood / Foodpanda<br>どちらも日本のUber Eats感覚で使える" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：30-50バーツ（約130-220円）", "最低注文金額：100-200バーツ程度", "サービス料：注文金額の5-10%"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（配達時に支払い）", "クレジットカード", "アプリ内ウォレット"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理を選択", "配達先住所を入力", "注文確定", "配達を待つ（30-60分程度）"] },
notes: { title: "注意点", icon: "⚠️", items: ["ピーク時（12-13時、18-20時）は配達遅延あり", "チップ不要だが感謝の気持ちで渡してもOK", "住所は英語/タイ語で正確に入力", "ホテル名+部屋番号で指定が確実"] }
}
},
payment: {
summary: "現金 / クレジットカード",
basic: { items: ["現金が主流", "カード：観光地・モールでOK", "ATM：手数料220バーツ"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["現金：まだ主流、屋台や小店は現金のみ", "クレジットカード：観光地・ショッピングモール中心", "QRコード決済：PromptPayが普及中（タイ人向け）"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：1回220バーツ（約960円）", "引き出し限度：1回20,000-30,000バーツ", "空港両替：レート悪い、手数料高い", "市内両替所：Super Richなどレート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["レストラン：不要（高級店は10%程度）", "マッサージ：50-100バーツ", "ホテル：20-50バーツ（ベッドメイキング）", "タクシー・Grab：基本不要"] },
notes: { title: "注意点", icon: "⚠️", items: ["ATMは複数回より1回で多めに引き出す方が得", "クレジットカードはVISA/Masterが安心", "偽札は少ないが1000バーツ札は注意", "小銭・小額紙幣を常に持ち歩く"] }
}
},
translation: {
summary: "Google翻訳",
basic: { items: ["アプリ：Google翻訳", "オフライン：事前DL可能", "英語：観光地で通じる"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳（タイ語↔日本語対応）<br>オフライン翻訳を事前ダウンロード推奨" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：サワディー・カー/クラップ", "ありがとう：コップンカー/クラップ", "いくら？：タオライ？", "辛くしないで：マイ・ペッ", "助けて：チュアイ・ドゥアイ"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["英語：観光地・ホテル・ショッピングモールで通じる", "日本語：一部の観光地で通じる程度", "タイ語：ローカルエリアは必須", "ジェスチャー：数字は指で示せばOK"] },
notes: { title: "注意点", icon: "⚠️", items: ["カメラ翻訳機能が便利（メニュー・看板）", "音声翻訳は騒がしい場所では使いづらい", "住所は英語とタイ語両方用意", "数字の読み方を覚えておくと便利"] }
}
},
currency: {
summary: "バーツ (THB)",
basic: { items: ["1万円 ≒ 2,300バーツ", "ランチ：50-150バーツ", "タクシー：50-150バーツ"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "バーツ (THB / ฿)<br>硬貨：1, 2, 5, 10バーツ<br>紙幣：20, 50, 100, 500, 1000バーツ" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ローカル）：50-100バーツ（約220-440円）", "ランチ（レストラン）：150-300バーツ（約660-1,300円）", "カフェ（コーヒー）：60-120バーツ（約260-520円）", "タクシー10分：50-150バーツ（約220-660円）", "水500ml：10-20バーツ（約44-88円）", "ビール：60-150バーツ（約260-660円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート悪い、手数料高い（緊急時のみ）", "市内両替所：Super Rich等、レート良好", "ATM：手数料220バーツ、限度額あり", "ホテル：レート最悪、避けるべき"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["3-5日なら1-2万円分を両替", "ATMは1回で多めに（手数料節約）", "小銭・20/50バーツ札は常備", "余ったバーツは空港で使い切るか再両替"] }
}
},
sim: {
summary: "AIS / TrueMove（現地SIM）",
basic: { items: ["7日間15GB：299バーツ", "購入：空港カウンター", "設定：即開通、簡単"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "AIS / TrueMove<br>どちらも品質良好、観光客向けプランあり" },
plans: { title: "料金プラン", icon: "💰", items: ["7日間 15GB：299バーツ（約1,300円）", "15日間 30GB：599バーツ（約2,600円）", "30日間 50GB：899バーツ（約3,900円）", "eSIMも対応（事前購入可能）"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり（24時間）", "コンビニ：セブンイレブン等で購入可", "事前購入：eSIMをネットで購入（Airalo等）", "必要なもの：パスポート"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：カウンターで設定してくれる", "eSIM：QRコード読み取り→アクティベート", "設定は5分程度で完了", "テストで通話・データ通信確認"] },
notes: { title: "注意点", icon: "⚠️", items: ["空港カウンターが最も確実で簡単", "eSIMは事前設定が必要（到着前に準備）", "データ容量は地図・SNS中心なら十分", "テザリングも可能"] }
}
},
emergency: { police: "tel:191", ambulance: "tel:1669", embassy: "https://www.th.emb-japan.go.jp/itprtop_ja/index.html" }
},
korea: {
name: "韓国 / ソウル",
transport: {
summary: "カカオT（Kakao T）",
basic: { items: ["空港→市内：50,000-80,000ウォン", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "カカオT（Kakao T）<br>韓国で最もメジャーな配車アプリ" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内：50,000-80,000ウォン（約5,500-9,000円）", "市内移動：5,000-15,000ウォン（約550-1,650円）", "深夜割増：20-40%追加"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（ウォン）", "クレジットカード", "カカオペイ"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地を入力", "ドライバーとマッチング", "乗車", "支払い"] },
notes: { title: "注意点", icon: "⚠️", items: ["アプリは韓国語がメインだが直感的", "地下鉄（T-moneyカード）も便利", "チップ不要", "深夜は割増料金"] }
}
},
delivery: {
summary: "배달의민족 / Coupang Eats",
basic: { items: ["配達料：2,000-3,000ウォン", "支払い：カード推奨", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "배달의민족（ペダルの民族）/ Coupang Eats<br>Coupang Eatsは英語対応あり" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：2,000-3,000ウォン（約220-330円）", "最低注文金額：10,000-15,000ウォン", "サービス料：含まれる場合が多い"] },
payment: { title: "支払い方法", icon: "💳", items: ["クレジットカード（推奨）", "カカオペイ", "現金（一部対応）"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理を選択", "配達先住所を入力", "注文確定", "配達を待つ（30-50分程度）"] },
notes: { title: "注意点", icon: "⚠️", items: ["배달의민족は韓国語必須だが直感的", "Coupang Eatsは英語対応で使いやすい", "チップ不要", "住所は韓国語表記が確実"] }
}
},
payment: {
summary: "クレジットカード / Samsung Pay",
basic: { items: ["完全なカード社会", "現金ほぼ不要", "チップ不要"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["クレジットカード：ほぼすべての店で使用可", "現金：ほとんど不要", "Samsung Pay/Apple Pay：非接触決済も普及", "T-moneyカード：交通・コンビニで便利"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：無料〜数百円程度", "引き出し限度：1回700,000ウォン程度", "空港両替：レート普通", "市内両替所：明洞などレート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["チップ文化なし", "レストラン：不要", "タクシー：不要", "ホテル：不要"] },
notes: { title: "注意点", icon: "⚠️", items: ["現金は最小限でOK", "カードブランドはVISA/Masterが確実", "伝統市場や一部屋台は現金のみ", "T-moneyカードは便利（コンビニで購入）"] }
}
},
translation: {
summary: "Papago / Google翻訳",
basic: { items: ["アプリ：Papago推奨", "英語：若者世代は通じる", "日本語：観光地で一部通じる"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Papago（韓国語特化）<br>Google翻訳よりも精度が高い場合も" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：アンニョンハセヨ", "ありがとう：カムサハムニダ", "いくら？：オルマエヨ？", "辛くしないで：メプチ アンケ ヘジュセヨ", "助けて：サラム サルリョ ジュセヨ"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["英語：若者世代・観光地で比較的通じる", "日本語：観光地・一部店舗で通じる", "韓国語：基本フレーズを覚えると便利", "漢字：ほぼ使われていない"] },
notes: { title: "注意点", icon: "⚠️", items: ["Papagoはカメラ翻訳・音声翻訳が優秀", "メニューは写真付きが多く選びやすい", "住所は韓国語表記を用意", "数字は指で示せばOK"] }
}
},
currency: {
summary: "ウォン (KRW)",
basic: { items: ["1万円 ≒ 90,000ウォン", "ランチ：8,000-15,000ウォン", "タクシー：5,000-15,000ウォン"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "ウォン (KRW / ₩)<br>硬貨：10, 50, 100, 500ウォン<br>紙幣：1,000, 5,000, 10,000, 50,000ウォン" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ローカル）：8,000-12,000ウォン（約880-1,320円）", "ランチ（レストラン）：15,000-30,000ウォン（約1,650-3,300円）", "カフェ（コーヒー）：4,000-6,000ウォン（約440-660円）", "タクシー10分：5,000-10,000ウォン（約550-1,100円）", "水500ml：1,000-1,500ウォン（約110-165円）", "ビール：3,000-8,000ウォン（約330-880円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート普通、手数料あり", "市内両替所：明洞などレート良好", "ATM：手数料安い、便利", "ホテル：レート悪い"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["カード中心なので現金は最小限", "3-5日なら1万円分の両替で十分", "小銭は交通カードチャージに使う", "余ったウォンは空港で使い切る"] }
}
},
sim: {
summary: "KT / SK Telecom（現地SIM / eSIM）",
basic: { items: ["5日間10GB：30,000ウォン", "購入：空港/コンビニ", "eSIM：事前購入推奨"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "KT / SK Telecom<br>どちらも品質良好、eSIM対応" },
plans: { title: "料金プラン", icon: "💰", items: ["5日間 10GB：30,000ウォン（約3,300円）", "10日間 20GB：50,000ウォン（約5,500円）", "30日間 無制限：100,000ウォン（約11,000円）", "eSIM：事前購入で少し安い"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり", "コンビニ：一部店舗で購入可", "事前購入：eSIMをネットで購入推奨", "必要なもの：パスポート"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：カウンターで設定してくれる", "eSIM：QRコード読み取り→アクティベート", "設定は簡単（5-10分）", "日本語サポートあり（一部）"] },
notes: { title: "注意点", icon: "⚠️", items: ["eSIMが便利（事前設定可能）", "空港カウンターは混雑することあり", "データ容量は十分（地図・SNS中心）", "テザリング可能"] }
}
},
emergency: { police: "tel:112", ambulance: "tel:119", embassy: "https://www.kr.emb-japan.go.jp/itprtop_ja/index.html" }
},
usa: {
name: "アメリカ / ニューヨーク",
transport: {
summary: "Uber / Lyft",
basic: { items: ["空港→市内：$50-80", "支払い：カード推奨", "チップ：15-20%"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Uber / Lyft（両方が主流）<br>アメリカで最も使われている配車アプリ" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内：$50-80（約7,000-11,000円）", "市内移動：$10-25（約1,400-3,500円）", "※チップ別途15-20%"] },
payment: { title: "支払い方法", icon: "💳", items: ["クレジットカード（推奨）", "Apple Pay / Google Pay", "現金（一部対応）"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地を入力", "車種を選択（UberX、Lyft等）", "ドライバーとマッチング", "乗車"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ15-20%を忘れずに", "黄色いタクシーもあるがアプリが便利", "ピーク時は料金が高くなる（サージプライシング）"] }
}
},
delivery: {
summary: "Uber Eats / DoorDash",
basic: { items: ["配達料：$3-8", "支払い：カード", "チップ：15-20%"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Uber Eats / DoorDash<br>Uber Eatsが日本と同じ感覚で使える" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：$3-8（約420-1,100円）", "サービス料：注文金額の10-15%", "※チップ別途15-20%"] },
payment: { title: "支払い方法", icon: "💳", items: ["クレジットカード", "Apple Pay / Google Pay", "現金（一部対応）"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理を選択", "配達先住所を入力", "チップ額を選択", "注文確定"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ15-20%が必須", "ピーク時は配達遅延あり", "住所は正確に入力", "部屋番号も忘れずに"] }
}
},
payment: {
summary: "クレジットカード / Apple Pay",
basic: { items: ["カードがメイン", "現金ほぼ不要", "チップ文化あり"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["クレジットカード：ほぼすべての店で使用可", "現金：ほぼ不要", "Apple Pay/Google Pay：広く普及", "非接触決済が主流"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：$3-5程度", "引き出し限度：$200-500程度", "空港両替：レート悪い", "ATMが便利"] },
tips: { title: "チップ文化", icon: "💵", items: ["レストラン：15-20%（必須）", "タクシー・Uber：15-20%", "ホテル：$1-2/荷物、$2-5/日（清掃）", "バー：$1-2/杯"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップは必須（文化）", "カードブランドはVISA/Masterが確実", "チップは現金でも可", "サービス料が含まれている場合もあり"] }
}
},
translation: {
summary: "Google翻訳",
basic: { items: ["英語が公用語", "翻訳アプリ基本不要", "多言語対応店も多い"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳<br>英語圏なので基本的に不要" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：Hello / Hi", "ありがとう：Thank you", "いくら？：How much?", "助けて：Help!", "すみません：Excuse me"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["英語：公用語なので問題なし", "日本語：主要観光地で一部通じる", "スペイン語：ニューヨークでは多く話される", "多言語：観光地は多言語対応"] },
notes: { title: "注意点", icon: "⚠️", items: ["英語が話せれば問題なし", "観光地では日本語対応も一部あり", "翻訳アプリは念のため準備", "カメラ翻訳は便利"] }
}
},
currency: {
summary: "米ドル (USD)",
basic: { items: ["1万円 ≒ $67", "ランチ：$15-30", "タクシー：$10-25"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "米ドル (USD / $)<br>硬貨：1¢, 5¢, 10¢, 25¢<br>紙幣：$1, $5, $10, $20, $50, $100" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ファスト）：$10-15（約1,400-2,100円）", "ランチ（レストラン）：$20-40（約2,800-5,600円）", "カフェ（コーヒー）：$3-6（約420-840円）", "タクシー10分：$10-20（約1,400-2,800円）", "水500ml：$1-2（約140-280円）", "ビール：$6-12（約840-1,680円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート悪い", "市内両替所：少ない", "ATM：最も便利（推奨）", "クレジットカード：メイン"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["現金はチップ用に少額だけ", "カードメインで問題なし", "$1札は多めに（チップ用）", "物価が高いので予算多めに"] }
}
},
sim: {
summary: "T-Mobile / AT&T（eSIM推奨）",
basic: { items: ["7日間無制限：$20-30", "購入：eSIM推奨", "設定：簡単"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "T-Mobile / AT&T<br>eSIMを事前購入がおすすめ" },
plans: { title: "料金プラン", icon: "💰", items: ["7日間 無制限：$20-30（約2,800-4,200円）", "15日間 無制限：$40-50（約5,600-7,000円）", "30日間 無制限：$60-80（約8,400-11,200円）", "eSIM：事前購入が主流"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：カウンターあり（割高）", "事前購入：eSIMをネットで購入（推奨）", "現地店舗：T-Mobile/AT&T店舗", "必要なもの：パスポート（店舗のみ）"] },
setup: { title: "設定方法", icon: "⚙️", items: ["eSIM：QRコード読み取り→アクティベート", "事前に日本で設定可能", "設定は簡単（10分程度）", "物理SIM：店舗で設定"] },
notes: { title: "注意点", icon: "⚠️", items: ["eSIMが圧倒的に便利", "事前購入で到着後すぐ使える", "データ容量無制限プランが多い", "テザリング可能"] }
}
},
emergency: { police: "tel:911", ambulance: "tel:911", embassy: "https://www.us.emb-japan.go.jp/itprtop_ja/index.html" }
},
taiwan: {
name: "台湾 / 台北",
transport: {
summary: "台湾大車隊 / Uber",
basic: { items: ["空港→市内：150-160台湾ドル（電車）", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "台湾大車隊 / Uber<br>MRT（地下鉄）も便利で安い" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内（電車）：150-160台湾ドル（約700円）", "タクシー：400-600台湾ドル（約1,900-2,800円）", "市内移動：100-300台湾ドル"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金", "クレジットカード", "悠遊カード（交通IC）"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地入力", "ドライバーマッチング", "乗車", "支払い"] },
notes: { title: "注意点", icon: "⚠️", items: ["悠遊カード（EasyCard）があると便利", "MRTが安くて速い", "チップ不要", "タクシーは深夜割増あり"] }
}
},
delivery: {
summary: "Foodpanda / Uber Eats",
basic: { items: ["配達料：50-80台湾ドル", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Foodpanda / Uber Eats<br>どちらも広く普及" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：50-80台湾ドル（約230-370円）", "最低注文金額：店舗による", "サービス料：注文金額の5-10%"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金", "クレジットカード", "LINE Pay"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理選択", "配達先住所入力", "注文確定", "配達を待つ"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ不要", "ピーク時は遅延あり", "住所は中国語（繁体字）が確実", "ホテル名で指定もOK"] }
}
},
payment: {
summary: "現金 / クレジットカード",
basic: { items: ["現金とカード併用", "カード：観光地・モールでOK", "夜市：現金のみ"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["現金：まだ主流", "クレジットカード：観光地・大手で使える", "QRコード決済：LINE Pay、街口支付が普及", "悠遊カード：交通・コンビニで便利"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：100台湾ドル程度", "引き出し限度：20,000台湾ドル程度", "空港両替：レート普通", "市内両替所：レート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["チップ文化なし", "レストラン：不要", "タクシー：不要", "ホテル：不要"] },
notes: { title: "注意点", icon: "⚠️", items: ["夜市や小店は現金のみ", "カードブランドはVISA/Masterが確実", "現金は適度に用意", "悠遊カードは便利"] }
}
},
translation: {
summary: "Google翻訳",
basic: { items: ["中国語（繁体字）", "漢字が読める", "英語：若者世代は通じる"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳<br>中国語（繁体字）↔日本語対応" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：ニーハオ", "ありがとう：シエシエ", "いくら？：ドゥオシャオチエン？", "辛くしないで：ブーヤオラー", "助けて：ジウミン"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["中国語（繁体字）：公用語", "日本語：観光地で意外と通じる", "英語：若者世代・観光地で通じる", "漢字：読めると何となく分かる"] },
notes: { title: "注意点", icon: "⚠️", items: ["漢字が読めるので何となく分かることも", "カメラ翻訳が便利", "日本語が通じる店も多い", "英語も比較的通じる"] }
}
},
currency: {
summary: "台湾ドル (TWD)",
basic: { items: ["1万円 ≒ 2,100台湾ドル", "ランチ：100-200台湾ドル", "タクシー：100-300台湾ドル"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "台湾ドル (TWD / NT$)<br>硬貨：1, 5, 10, 50元<br>紙幣：100, 200, 500, 1000, 2000元" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ローカル）：80-150台湾ドル（約370-700円）", "ランチ（レストラン）：200-400台湾ドル（約930-1,860円）", "カフェ（コーヒー）：100-150台湾ドル（約460-700円）", "タクシー10分：100-200台湾ドル（約460-930円）", "水500ml：20-30台湾ドル（約93-140円）", "ビール：80-150台湾ドル（約370-700円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート普通", "市内両替所：レート良好", "ATM：手数料あり", "ホテル：レート悪い"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["3-5日なら1万円分程度", "現金とカード併用", "夜市用に現金は多めに", "余った台湾ドルは空港で使い切る"] }
}
},
sim: {
summary: "中華電信 / 台湾大哥大（現地SIM）",
basic: { items: ["5日間無制限：300台湾ドル", "購入：空港", "設定：不要"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "中華電信 / 台湾大哥大<br>どちらも品質良好" },
plans: { title: "料金プラン", icon: "💰", items: ["5日間 無制限：300台湾ドル（約1,400円）", "7日間 無制限：500台湾ドル（約2,300円）", "15日間 無制限：900台湾ドル（約4,200円）", "eSIM：一部対応"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり（24時間）", "コンビニ：一部で購入可", "事前購入：eSIMをネットで購入", "必要なもの：パスポート"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：カウンターで設定してくれる", "設定不要で使える", "eSIM：QRコード読み取り", "即開通"] },
notes: { title: "注意点", icon: "⚠️", items: ["空港カウンターが確実", "設定不要で簡単", "データ容量無制限が多い", "テザリング可能"] }
}
},
emergency: { police: "tel:110", ambulance: "tel:119", embassy: "https://www.tw.emb-japan.go.jp/itprtop_ja/index.html" }
},
vietnam: {
name: "ベトナム / ホーチミン",
transport: {
summary: "Grab",
basic: { items: ["空港→市内：150,000-200,000ドン", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Grab（東南アジアで最も普及）<br>バイクタクシーも選択可能" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内：150,000-200,000ドン（約900-1,200円）", "市内移動：30,000-80,000ドン（約180-480円）", "Grabバイク：さらに安い"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（ドン）", "クレジットカード", "Grabウォレット"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地入力", "車種選択（車/バイク）", "ドライバーマッチング", "乗車"] },
notes: { title: "注意点", icon: "⚠️", items: ["Grabバイクは渋滞時に便利", "チップ不要", "現金が確実", "渋滞が激しい"] }
}
},
delivery: {
summary: "GrabFood / ShopeeFood",
basic: { items: ["配達料：15,000-30,000ドン", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "GrabFood / ShopeeFood<br>どちらも人気" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：15,000-30,000ドン（約90-180円）", "最低注文金額：店舗による", "サービス料：含まれる場合が多い"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（推奨）", "クレジットカード", "アプリ内ウォレット"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理選択", "配達先住所入力", "注文確定", "配達を待つ"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ不要", "現金が確実", "ピーク時は遅延あり", "住所はベトナム語が確実"] }
}
},
payment: {
summary: "現金 / クレジットカード",
basic: { items: ["現金が主流", "カード：高級店のみ", "ATM：手数料あり"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["現金：主流、ローカル店は現金のみ", "クレジットカード：高級店・ホテル・モール", "QRコード決済：MoMo、ZaloPayが普及中", "現金が確実"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：50,000ドン程度", "引き出し限度：2,000,000-5,000,000ドン", "空港両替：レート悪い", "市内両替所：レート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["チップ文化なし", "レストラン：不要", "タクシー：不要", "ホテル：不要（感謝の気持ちで渡してもOK）"] },
notes: { title: "注意点", icon: "⚠️", items: ["現金メインで準備", "カードは高級店のみ", "ATMは複数回より1回で多めに", "小額紙幣を多めに"] }
}
},
translation: {
summary: "Google翻訳",
basic: { items: ["ベトナム語", "英語：観光地で通じる", "翻訳アプリ必須"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳<br>ベトナム語↔日本語対応" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：シンチャオ", "ありがとう：カムオン", "いくら？：バオニウティエン？", "辛くしないで：ドゥン チョー オット", "助けて：クー トイ"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["ベトナム語：公用語", "英語：観光地・ホテルで通じる", "日本語：ほぼ通じない", "翻訳アプリは必須"] },
notes: { title: "注意点", icon: "⚠️", items: ["翻訳アプリは必須", "カメラ翻訳が便利", "英語は観光地のみ", "ジェスチャーも活用"] }
}
},
currency: {
summary: "ドン (VND)",
basic: { items: ["1万円 ≒ 1,650,000ドン", "ランチ：50,000-150,000ドン", "タクシー：30,000-80,000ドン"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "ドン (VND / ₫)<br>硬貨：ほぼ使われない<br>紙幣：1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000ドン" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ローカル）：50,000-100,000ドン（約300-600円）", "ランチ（レストラン）：150,000-300,000ドン（約900-1,800円）", "カフェ（コーヒー）：30,000-60,000ドン（約180-360円）", "タクシー10分：30,000-60,000ドン（約180-360円）", "水500ml：10,000ドン（約60円）", "ビール：20,000-50,000ドン（約120-300円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート悪い", "市内両替所：レート良好", "ATM：手数料あり", "ホテル：レート最悪"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["桁数が多いので注意（0の数）", "3-5日なら1-2万円分", "現金メインで準備", "小額紙幣を多めに"] }
}
},
sim: {
summary: "Viettel / Vinaphone（現地SIM）",
basic: { items: ["7日間6GB：100,000ドン", "購入：空港/コンビニ", "設定：簡単"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "Viettel / Vinaphone<br>どちらも品質良好" },
plans: { title: "料金プラン", icon: "💰", items: ["7日間 6GB：100,000ドン（約600円）", "15日間 12GB：150,000ドン（約900円）", "30日間 30GB：250,000ドン（約1,500円）", "格安が魅力"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり", "コンビニ：購入可（市内の方が安い）", "事前購入：eSIMも一部対応", "必要なもの：パスポート不要"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：即使える", "設定は簡単", "SMS指示に従う", "5分程度で完了"] },
notes: { title: "注意点", icon: "⚠️", items: ["空港よりも市内の方が安い", "パスポート不要で購入可", "格安でコスパ良好", "テザリング可能"] }
}
},
emergency: { police: "tel:113", ambulance: "tel:115", embassy: "https://www.vn.emb-japan.go.jp/itprtop_ja/index.html" }
},
singapore: {
name: "シンガポール",
transport: {
summary: "Grab / Gojek",
basic: { items: ["空港→市内：2-3シンガポールドル（電車）", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Grab / Gojek<br>MRT（地下鉄）が便利で清潔" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内（電車）：2-3シンガポールドル（約220-330円）", "タクシー：20-30シンガポールドル（約2,200-3,300円）", "市内移動：8-15シンガポールドル"] },
payment: { title: "支払い方法", icon: "💳", items: ["クレジットカード", "現金", "EZ-Linkカード（交通IC）"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地入力", "ドライバーマッチング", "乗車", "支払い"] },
notes: { title: "注意点", icon: "⚠️", items: ["EZ-Linkカードがあると便利", "MRTが清潔で安全", "チップ不要", "電車が最も安い"] }
}
},
delivery: {
summary: "GrabFood / Foodpanda",
basic: { items: ["配達料：3-5シンガポールドル", "支払い：カード推奨", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "GrabFood / Foodpanda<br>どちらも広く普及" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：3-5シンガポールドル（約330-550円）", "最低注文金額：店舗による", "サービス料：含まれる場合が多い"] },
payment: { title: "支払い方法", icon: "💳", items: ["クレジットカード（推奨）", "現金", "PayNow"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理選択", "配達先住所入力", "注文確定", "配達を待つ"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ不要", "ピーク時は遅延あり", "英語で問題なし", "住所は正確に"] }
}
},
payment: {
summary: "クレジットカード / PayNow",
basic: { items: ["カード社会", "現金もOK", "チップ不要"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["クレジットカード：ほぼすべての店で使用可", "現金：まだ使われる", "QRコード決済：PayNowが普及", "EZ-Linkカード：交通・コンビニで便利"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：$3-5程度", "引き出し限度：$800程度", "空港両替：レート普通", "市内両替所：レート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["チップ文化なし", "レストラン：不要（サービス料含まれる）", "タクシー：不要", "ホテル：不要"] },
notes: { title: "注意点", icon: "⚠️", items: ["カードメインで問題なし", "ホーカー（屋台街）は現金のみの場合あり", "サービス料10%が含まれる場合が多い", "カードブランドはVISA/Masterが確実"] }
}
},
translation: {
summary: "英語でOK",
basic: { items: ["英語が公用語", "翻訳アプリ不要", "多言語国家"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳<br>英語が公用語なので基本不要" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：Hello", "ありがとう：Thank you", "いくら？：How much?", "助けて：Help!", "すみません：Excuse me"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["英語：公用語（問題なし）", "中国語（簡体字）：公用語", "マレー語：公用語", "タミル語：公用語"] },
notes: { title: "注意点", icon: "⚠️", items: ["英語が話せれば全く問題なし", "観光地では日本語対応も一部あり", "多言語国家で言語の壁は低い", "シングリッシュ（シンガポール英語）は独特"] }
}
},
currency: {
summary: "シンガポールドル (SGD)",
basic: { items: ["1万円 ≒ 90シンガポールドル", "ランチ：8-15シンガポールドル", "タクシー：10-20シンガポールドル"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "シンガポールドル (SGD / S$)<br>硬貨：5¢, 10¢, 20¢, 50¢, $1<br>紙幣：$2, $5, $10, $50, $100" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ホーカー）：5-10シンガポールドル（約550-1,100円）", "ランチ（レストラン）：15-30シンガポールドル（約1,650-3,300円）", "カフェ（コーヒー）：4-6シンガポールドル（約440-660円）", "タクシー10分：10-15シンガポールドル（約1,100-1,650円）", "水500ml：1-2シンガポールドル（約110-220円）", "ビール：10-15シンガポールドル（約1,100-1,650円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート普通", "市内両替所：レート良好", "ATM：手数料あり", "カードメイン"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["カードメインで問題なし", "ホーカー用に現金少額準備", "物価は東京と同程度", "余ったドルは空港で使い切る"] }
}
},
sim: {
summary: "Singtel / StarHub（現地SIM / eSIM）",
basic: { items: ["7日間100GB：15シンガポールドル", "購入：空港", "設定：簡単"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "Singtel / StarHub<br>どちらも品質良好、eSIM対応" },
plans: { title: "料金プラン", icon: "💰", items: ["7日間 100GB：15シンガポールドル（約1,650円）", "15日間 100GB：25シンガポールドル（約2,750円）", "30日間 100GB：40シンガポールドル（約4,400円）", "大容量が特徴"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり（24時間）", "コンビニ：一部で購入可", "事前購入：eSIMをネットで購入", "必要なもの：パスポート"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：カウンターで設定してくれる", "eSIM：QRコード読み取り", "設定は簡単", "即開通"] },
notes: { title: "注意点", icon: "⚠️", items: ["空港カウンターが確実", "大容量プランが魅力", "eSIM対応", "テザリング可能"] }
}
},
emergency: { police: "tel:999", ambulance: "tel:995", embassy: "https://www.sg.emb-japan.go.jp/itprtop_ja/index.html" }
},
philippines: {
name: "フィリピン / マニラ",
transport: {
summary: "Grab",
basic: { items: ["空港→市内：300-500ペソ", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Grab（配車アプリ主流）<br>MRT（電車）も選択肢" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内：300-500ペソ（約900-1,500円）", "市内移動：100-250ペソ（約300-750円）", "渋滞が激しく時間かかる"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（ペソ）", "クレジットカード", "GCash / PayMaya"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地入力", "ドライバーマッチング", "乗車", "支払い"] },
notes: { title: "注意点", icon: "⚠️", items: ["渋滞が激しいので時間に余裕を", "チップ不要", "英語が通じる", "現金が確実"] }
}
},
delivery: {
summary: "GrabFood / Foodpanda",
basic: { items: ["配達料：50-100ペソ", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "GrabFood / Foodpanda<br>どちらも普及" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：50-100ペソ（約150-300円）", "最低注文金額：店舗による", "サービス料：注文金額の5-10%"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金（推奨）", "クレジットカード", "GCash / PayMaya"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理選択", "配達先住所入力", "注文確定", "配達を待つ"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ不要", "渋滞で遅延あり", "英語で問題なし", "現金が確実"] }
}
},
payment: {
summary: "現金 / クレジットカード",
basic: { items: ["現金が主流", "カード：大手・モールでOK", "電子決済：普及中"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["現金：主流、ローカル店は現金のみ", "クレジットカード：大手チェーン・モール", "電子決済：GCash、PayMayaが普及中", "現金が確実"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：200ペソ程度", "引き出し限度：10,000-20,000ペソ", "空港両替：レート普通", "市内両替所：レート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["チップ文化あり（軽め）", "レストラン：不要（サービス料含まれる）", "ホテル：20-50ペソ", "タクシー・Grab：不要"] },
notes: { title: "注意点", icon: "⚠️", items: ["現金メインで準備", "カードは大手のみ", "ローカル店や市場は現金のみ", "小額紙幣を多めに"] }
}
},
translation: {
summary: "英語でOK",
basic: { items: ["英語が公用語", "翻訳アプリ不要", "日本語：一部通じる"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳<br>英語が公用語なので基本不要" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：Hello / Hi", "ありがとう：Thank you / Salamat", "いくら？：How much?", "助けて：Help!", "すみません：Excuse me"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["英語：公用語（問題なし）", "タガログ語：公用語", "日本語：観光地で一部通じる", "英語が通じるので困らない"] },
notes: { title: "注意点", icon: "⚠️", items: ["英語が話せれば全く問題なし", "観光地では日本語が通じる場所も", "タガログ語は覚えなくてOK", "フィリピン英語は訛りあり"] }
}
},
currency: {
summary: "ペソ (PHP)",
basic: { items: ["1万円 ≒ 3,300ペソ", "ランチ：100-300ペソ", "タクシー：100-250ペソ"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "ペソ (PHP / ₱)<br>硬貨：1, 5, 10, 20ペソ<br>紙幣：20, 50, 100, 200, 500, 1000ペソ" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ローカル）：100-200ペソ（約300-600円）", "ランチ（レストラン）：300-600ペソ（約900-1,800円）", "カフェ（コーヒー）：100-150ペソ（約300-450円）", "タクシー10分：100-200ペソ（約300-600円）", "水500ml：20-30ペソ（約60-90円）", "ビール：60-150ペソ（約180-450円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート普通", "市内両替所：レート良好", "ATM：手数料高い", "ホテル：レート悪い"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["3-5日なら1-2万円分", "現金メインで準備", "ATMは手数料高い", "小額紙幣を多めに"] }
}
},
sim: {
summary: "Globe / Smart（現地SIM）",
basic: { items: ["7日間8GB：300ペソ", "購入：空港/コンビニ", "設定：SMS"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "Globe / Smart<br>どちらも品質良好" },
plans: { title: "料金プラン", icon: "💰", items: ["7日間 8GB：300ペソ（約900円）", "15日間 15GB：500ペソ（約1,500円）", "30日間 30GB：1000ペソ（約3,000円）", "格安が魅力"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり", "コンビニ：7-Elevenで購入可", "事前購入：eSIMも一部対応", "必要なもの：パスポート不要"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：即使える", "SMS指示に従う", "設定は簡単", "5分程度で完了"] },
notes: { title: "注意点", icon: "⚠️", items: ["コンビニで購入可", "パスポート不要", "格安でコスパ良好", "テザリング可能"] }
}
},
emergency: { police: "tel:117", ambulance: "tel:911", embassy: "https://www.ph.emb-japan.go.jp/itprtop_ja/index.html" }
},
malaysia: {
name: "マレーシア / クアラルンプール",
transport: {
summary: "Grab",
basic: { items: ["空港→市内：55リンギット（電車）", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "Grab（主流）<br>電車（LRT/MRT）も便利で安い" },
pricing: { title: "料金目安", icon: "💰", items: ["空港→市内（KLIAエクスプレス）：55リンギット（約1,800円）", "タクシー：80-120リンギット（約2,600-3,900円）", "市内移動：20-50リンギット"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金", "クレジットカード", "Touch 'n Go eWallet"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで目的地入力", "ドライバーマッチング", "乗車", "支払い"] },
notes: { title: "注意点", icon: "⚠️", items: ["Touch 'n Goカードがあると便利", "電車が安くて速い", "チップ不要", "渋滞あり"] }
}
},
delivery: {
summary: "GrabFood / Foodpanda",
basic: { items: ["配達料：5-10リンギット", "支払い：現金/カード", "チップ：不要"] },
detail: {
appInfo: { title: "アプリ情報", icon: "📱", content: "GrabFood / Foodpanda<br>どちらも広く普及" },
pricing: { title: "料金目安", icon: "💰", items: ["配達料：5-10リンギット（約160-330円）", "最低注文金額：店舗による", "サービス料：含まれる場合が多い"] },
payment: { title: "支払い方法", icon: "💳", items: ["現金", "クレジットカード", "Touch 'n Go eWallet"] },
howTo: { title: "使い方", icon: "📍", items: ["アプリで料理選択", "配達先住所入力", "注文確定", "配達を待つ"] },
notes: { title: "注意点", icon: "⚠️", items: ["チップ不要", "ピーク時は遅延あり", "英語で問題なし", "住所は正確に"] }
}
},
payment: {
summary: "現金 / クレジットカード",
basic: { items: ["現金とカード併用", "カード：大手・モールでOK", "QR決済：普及中"] },
detail: {
cashCard: { title: "主流の支払い方法", icon: "💳", items: ["現金：まだ主流", "クレジットカード：大手チェーン・モール", "QRコード決済：Touch 'n Go eWalletが普及", "Touch 'n Goカード：交通・コンビニで便利"] },
atm: { title: "ATM・両替", icon: "🏧", items: ["ATM手数料：12リンギット程度", "引き出し限度：1,500リンギット程度", "空港両替：レート普通", "市内両替所：レート良好"] },
tips: { title: "チップ文化", icon: "💵", items: ["チップ文化なし", "レストラン：不要（サービス料含まれる）", "タクシー：不要", "ホテル：不要"] },
notes: { title: "注意点", icon: "⚠️", items: ["現金とカード併用", "屋台やローカル店は現金のみ", "カードブランドはVISA/Masterが確実", "Touch 'n Goカードは便利"] }
}
},
translation: {
summary: "英語でOK",
basic: { items: ["英語が広く通じる", "マレー語が公用語", "中国語も一部通じる"] },
detail: {
appInfo: { title: "おすすめアプリ", icon: "📱", content: "Google翻訳<br>英語が通じるので基本不要" },
phrases: { title: "よく使うフレーズ", icon: "💬", items: ["こんにちは：Hello / Selamat pagi", "ありがとう：Thank you / Terima kasih", "いくら？：How much? / Berapa?", "助けて：Help! / Tolong!", "すみません：Excuse me / Maaf"] },
language: { title: "言語の通じやすさ", icon: "🗣️", items: ["英語：広く通じる（問題なし）", "マレー語：公用語", "中国語：一部で通じる", "日本語：観光地で一部通じる"] },
notes: { title: "注意点", icon: "⚠️", items: ["英語が話せれば問題なし", "観光地では日本語が通じる場所も", "マレー語は覚えなくてOK", "多民族国家で言語の壁は低い"] }
}
},
currency: {
summary: "リンギット (MYR)",
basic: { items: ["1万円 ≒ 300リンギット", "ランチ：15-30リンギット", "タクシー：20-50リンギット"] },
detail: {
info: { title: "通貨情報", icon: "💰", content: "リンギット (MYR / RM)<br>硬貨：5, 10, 20, 50セン<br>紙幣：1, 5, 10, 20, 50, 100リンギット" },
rate: { title: "体感レート", icon: "💵", items: ["ランチ（ローカル）：10-20リンギット（約330-660円）", "ランチ（レストラン）：25-50リンギット（約820-1,650円）", "カフェ（コーヒー）：10-15リンギット（約330-490円）", "タクシー10分：15-30リンギット（約490-990円）", "水500ml：2-3リンギット（約66-99円）", "ビール：15-30リンギット（約490-990円）"] },
exchange: { title: "両替場所", icon: "🏦", items: ["空港：レート普通", "市内両替所：レート良好", "ATM：手数料あり", "ホテル：レート悪い"] },
notes: { title: "お金の管理", icon: "⚠️", items: ["3-5日なら1万円分程度", "現金とカード併用", "屋台用に現金は準備", "余ったリンギットは空港で使い切る"] }
}
},
sim: {
summary: "Maxis / Celcom（現地SIM）",
basic: { items: ["7日間20GB：30リンギット", "購入：空港", "設定：簡単"] },
detail: {
carrier: { title: "おすすめキャリア", icon: "📱", content: "Maxis / Celcom<br>どちらも品質良好" },
plans: { title: "料金プラン", icon: "💰", items: ["7日間 20GB：30リンギット（約1,000円）", "15日間 40GB：50リンギット（約1,650円）", "30日間 80GB：80リンギット（約2,640円）", "大容量が魅力"] },
purchase: { title: "購入場所", icon: "🏪", items: ["空港：到着ロビーにカウンターあり", "コンビニ：一部で購入可", "事前購入：eSIMも一部対応", "必要なもの：パスポート"] },
setup: { title: "設定方法", icon: "⚙️", items: ["物理SIM：カウンターで設定してくれる", "設定不要", "即開通", "簡単"] },
notes: { title: "注意点", icon: "⚠️", items: ["空港カウンターが確実", "大容量でコスパ良好", "設定不要で簡単", "テザリング可能"] }
}
},
emergency: { police: "tel:999", ambulance: "tel:999", embassy: "https://www.my.emb-japan.go.jp/itprtop_ja/index.html" }
}
};

const countrySelect = document.getElementById('country');
const mainContent = document.getElementById('main-content');
const accordionCards = document.querySelectorAll('.accordion-card');
const btnPolice = document.getElementById('btn-police');
const btnAmbulance = document.getElementById('btn-ambulance');
const btnEmbassy = document.getElementById('btn-embassy');

countrySelect.addEventListener('change', function() {
const selectedCountry = this.value;
if (selectedCountry === '') {
mainContent.classList.add('hidden');
return;
}
const data = countryData[selectedCountry];
if (data) {
accordionCards.forEach(card => card.classList.remove('active'));
updateDetailCard('transport', data.transport);
updateDetailCard('delivery', data.delivery);
updateDetailCard('payment', data.payment);
updateDetailCard('translation', data.translation);
updateDetailCard('currency', data.currency);
updateDetailCard('sim', data.sim);
updateEmergencyButtons(data.emergency);
mainContent.classList.remove('hidden');
setTimeout(() => {
mainContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}, 100);
}
});

function updateDetailCard(cardType, data) {
const summaryEl = document.getElementById(`summary-${cardType}`);
const basicEl = document.getElementById(`basic-${cardType}`);
const detailedEl = document.getElementById(`detailed-${cardType}`);
summaryEl.textContent = data.summary;
let basicHTML = '';
data.basic.items.forEach(item => {
basicHTML += `<div class="info-item">${item}</div>`;
});
basicHTML += `<button class="more-detail-btn" onclick="showDetailedInfo('${cardType}')">もっと詳しく <span class="arrow">→</span></button>`;
basicEl.innerHTML = basicHTML;
let detailHTML = '';
for (const [key, section] of Object.entries(data.detail)) {
detailHTML += `<div class="detail-section"><div class="section-title"><span class="icon">${section.icon}</span>${section.title}</div><div class="section-content">`;
if (section.content) detailHTML += section.content;
if (section.items) {
detailHTML += '<ul>';
section.items.forEach(item => { detailHTML += `<li>${item}</li>`; });
detailHTML += '</ul>';
}
detailHTML += `</div></div>`;
}
detailHTML += `<button class="back-btn" onclick="showBasicInfo('${cardType}')"><span class="arrow">←</span> 基本情報に戻る</button>`;
detailedEl.innerHTML = detailHTML;
}

function showDetailedInfo(cardType) {
const basicEl = document.getElementById(`basic-${cardType}`);
const detailedEl = document.getElementById(`detailed-${cardType}`);
basicEl.classList.add('fade-out');
setTimeout(() => {
basicEl.style.display = 'none';
detailedEl.classList.remove('hidden');
detailedEl.classList.add('fade-in');
}, 200);
}

function showBasicInfo(cardType) {
const basicEl = document.getElementById(`basic-${cardType}`);
const detailedEl = document.getElementById(`detailed-${cardType}`);
detailedEl.classList.remove('fade-in');
detailedEl.classList.add('hidden');
setTimeout(() => {
basicEl.style.display = 'block';
basicEl.classList.remove('fade-out');
}, 200);
}

function updateEmergencyButtons(emergency) {
btnPolice.href = emergency.police;
btnAmbulance.href = emergency.ambulance;
btnEmbassy.href = emergency.embassy;
btnEmbassy.target = "_blank";
}

accordionCards.forEach(card => {
card.addEventListener('click', function(e) {
if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
const isActive = this.classList.contains('active');
accordionCards.forEach(c => c.classList.remove('active'));
if (!isActive) {
this.classList.add('active');
}
});
});

mainContent.classList.add('hidden');
