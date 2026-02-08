const thailandData = {
    visa: {
        summary: '30日以内ビザ不要',
        basic: {
            items: [
                '30日以内の観光はビザ不要',
                'パスポート残存6ヶ月以上必要',
                '往復航空券の提示が必要'
            ]
        },
        detail: {
            visaInfo: {
                title: 'ビザ情報',
                icon: '🛂',
                items: [
                    '観光ビザ：30日以内不要（空路入国）',
                    '陸路入国：15日以内ビザ不要',
                    '延長：イミグレーションで30日延長可能（1,900バーツ）',
                    'ビジネス・長期滞在：事前にビザ申請必要'
                ]
            },
            requirements: {
                title: '入国時に必要なもの',
                icon: '📋',
                items: [
                    'パスポート（残存期間6ヶ月以上）',
                    '往復航空券または第三国への航空券',
                    '滞在先情報（ホテル予約確認書など）',
                    '十分な所持金（現金・クレカ）'
                ]
            },
            notes: {
                title: '注意点',
                icon: '⚠️',
                items: [
                    '陸路入国は暦年で2回まで（空路は制限なし）',
                    '入国審査で滞在目的・期間を聞かれることあり',
                    'オーバーステイは1日500バーツの罰金',
                    '長期滞在予定なら観光ビザ（60日）を事前取得推奨'
                ]
            }
        }
    },

    // SIM・通信
    sim: {
        summary: '空港でSIM購入がおすすめ',
        basic: {
            items: [
                'プリペイドSIM：7日間299バーツ〜',
                'AIS・TrueMove・dtacの3社',
                '空港カウンターで24時間購入可能'
            ]
        },
        detail: {
            carriers: {
                title: 'おすすめキャリア',
                icon: '📱',
                items: [
                    'AIS：カバレッジ最大、通信安定、観光客向けプラン豊富',
                    'TrueMove：観光地で強い、国際ローミング対応',
                    'dtac：料金が最安、都市部メイン'
                ]
            },
            plans: {
                title: '料金プラン（目安）',
                icon: '💰',
                items: [
                    '7日間無制限：299バーツ（約1,200円）',
                    '15日間無制限：599バーツ（約2,400円）',
                    '30日間無制限：899バーツ（約3,600円）',
                    '速度制限後も最大1Mbpsで使い放題（プランによる）'
                ]
            },
            purchase: {
                title: '購入場所',
                icon: '📍',
                items: [
                    'スワンナプーム空港：到着ロビーに各社カウンター（24時間）',
                    'ドンムアン空港：到着ロビー（24時間）',
                    'セブンイレブン・ファミリーマート（全国）',
                    '各キャリアショップ（パスポート必要）'
                ]
            },
            tips: {
                title: '使い方のコツ',
                icon: '💡',
                items: [
                    '空港カウンターなら設定まで全部やってくれる',
                    'eKYC対応で即日開通（パスポート撮影のみ）',
                    'Google Mapsのオフライン地図も併用推奨',
                    'eSIM対応（AIS、TrueMove）もあり'
                ]
            }
        }
    },

    // 通貨
    currency: {
        summary: '1バーツ = 約4円',
        basic: {
            items: [
                '通貨：タイバーツ（THB / ฿）',
                'レート：1バーツ = 約4円',
                '両替：空港・市内の両替所がお得'
            ]
        },
        detail: {
            calculator: {
                title: '通貨計算',
                icon: '💱',
                content: `
                    <div class="currency-calc">
                        <div class="calc-row">
                            <input type="number" id="thb-jpy-input" class="calc-input" placeholder="10000" value="10000">
                            <span class="calc-label">円</span>
                        </div>
                        <div class="calc-arrow">↓</div>
                        <div class="calc-row">
                            <div id="thb-jpy-result" class="calc-result">2,850</div>
                            <span class="calc-label">バーツ</span>
                        </div>
                        <div class="calc-presets">
                            <button class="preset-btn" data-amount="1000">1千円</button>
                            <button class="preset-btn" data-amount="5000">5千円</button>
                            <button class="preset-btn" data-amount="10000">1万円</button>
                            <button class="preset-btn" data-amount="50000">5万円</button>
                        </div>
                        <div class="calc-rate">1円 = 0.285バーツ（参考レート）</div>
                    </div>
                `
            },
            exchange: {
                title: '両替のコツ',
                icon: '💱',
                items: [
                    'レート良い順：市内両替所 > 空港 > ホテル > 日本',
                    'SuperRich（緑・橙）：バンコク市内の人気両替所',
                    'Vasu Exchange：レート良好、各地に支店あり',
                    '空港でも悪くない（少額ならOK）',
                    'ATMキャッシングも選択肢（手数料220バーツ）',
                    '🆕 2025年2月8日18:30追加：新機能テスト成功！'
                ]
            },
            denominations: {
                title: '紙幣・硬貨',
                icon: '💵',
                items: [
                    '紙幣：20฿（緑）、50฿（青）、100฿（赤）、500฿（紫）、1000฿（茶）',
                    '硬貨：1฿、2฿、5฿、10฿',
                    '1000฿札は使いにくいことあり（小銭用意推奨）',
                    '屋台・小店は100฿以下推奨'
                ]
            },
            tips: {
                title: 'お金の管理',
                icon: '📊',
                items: [
                    '現金とカードの併用がベスト',
                    '屋台・タクシー：現金のみ',
                    'デパート・レストラン：カードOK',
                    '小銭は常に用意（チップ、トイレなど）',
                    '大金は持ち歩かない（1日分程度）'
                ]
            }
        }
    },

    // 決済方法
    payment: {
        summary: '現金・クレカ・QRコード',
        basic: {
            items: [
                '現金：屋台・タクシーで必須',
                'クレカ：Visa・Mastercardが主流',
                'QRコード：PromptPay・TrueMoneyが普及'
            ]
        },
        detail: {
            cash: {
                title: '現金',
                icon: '💵',
                items: [
                    '必須シーン：屋台、ローカル食堂、タクシー、市場',
                    '小銭が重要：20฿、50฿、100฿札を常備',
                    'ATM：セブン、ファミマに併設（24時間）',
                    'ATM手数料：220バーツ/回（どの銀行も同じ）'
                ]
            },
            creditCard: {
                title: 'クレジットカード',
                icon: '💳',
                items: [
                    'Visa・Mastercard：ほぼ全店で使える',
                    'JCB：主要店のみ（使えない店も多い）',
                    'AmEx：使える店少ない',
                    'タッチ決済：対応店増加中',
                    '最低利用額：店により異なる（200-500฿程度）'
                ]
            },
            digital: {
                title: 'デジタル決済',
                icon: '📱',
                items: [
                    'PromptPay：タイの国民的QR決済（銀行口座必要）',
                    'TrueMoney Wallet：観光客も登録可能',
                    'Alipay・WeChat Pay：中華街・免税店で使える',
                    'Rabbit LINE Pay：BTS・コンビニで便利'
                ]
            },
            tips: {
                title: '支払いのコツ',
                icon: '💡',
                items: [
                    '現金：1日3,000-5,000฿程度持ち歩く',
                    'クレカ：Visa/Master 2枚あると安心',
                    'チップ：20-50฿（サービス良ければ）',
                    '端数切り上げもチップとして喜ばれる',
                    'デパート・ホテルは免税手続き可能（2,000฿以上）'
                ]
            }
        }
    },

    // 配車・移動
    transport: {
        apps: [
            {
                name: 'Grab',
                description: '東南アジア最大手の配車アプリ',
                note: 'クレカ・現金OK、安全性高い',
                ios: 'https://apps.apple.com/app/grab-app/id647268330',
                android: 'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger',
                web: 'https://www.grab.com/th/'
            },
            {
                name: 'Bolt',
                description: '格安配車アプリ',
                note: 'Grabより10-20%安い',
                ios: 'https://apps.apple.com/app/bolt-request-a-ride/id675033630',
                android: 'https://play.google.com/store/apps/details?id=ee.mtakso.client',
                web: 'https://bolt.eu/th/'
            },
            {
                name: 'InDriver',
                description: '価格交渉型配車アプリ',
                note: '自分で運賃を提示できる',
                ios: 'https://apps.apple.com/app/indriver/id1087318899',
                android: 'https://play.google.com/store/apps/details?id=sinet.startup.inDriver',
                web: 'https://indriver.com/'
            }
        ],
        summary: 'Grab・Boltが便利',
        basic: {
            items: [
                '空港→市内：300-500バーツ',
                '市内移動：50-150バーツ',
                '支払い：現金・カード両方OK'
            ]
        },
        detail: {
            pricing: {
                title: '料金目安',
                icon: '💰',
                items: [
                    '空港→スクンビット：350-450฿（Grab）',
                    '空港→シーロム：400-500฿',
                    '市内移動（3-5km）：80-120฿',
                    'ピーク時：通常の1.5-2倍',
                    '深夜：深夜料金あり（1.2倍程度）'
                ]
            },
            alternatives: {
                title: 'その他の移動手段',
                icon: '🚇',
                items: [
                    'BTS（高架鉄道）：16-59฿、便利だが路線限定',
                    'MRT（地下鉄）：17-43฿、空港アクセスあり',
                    'エアポートリンク：45฿（空港→市内）',
                    'メータータクシー：初乗り35฿（英語通じにくい）',
                    'トゥクトゥク：観光向け、要交渉（割高）'
                ]
            },
            tips: {
                title: '移動のコツ',
                icon: '💡',
                items: [
                    'ラッシュ時（7-9時、17-19時）は電車推奨',
                    'Grabは目的地をタイ語でも表示すると◎',
                    'タクシーはメーター使用を確認',
                    '大通りから配車すると早い',
                    'ボッタクリに注意（観光地周辺）'
                ]
            }
        },
        apps: [
            {
                name: 'Grab',
                description: '東南アジア最大手の配車アプリ',
                note: 'クレカ・現金OK、安全性高い',
                ios: 'https://apps.apple.com/app/grab-app/id647268330',
                android: 'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger',
                web: 'https://www.grab.com/th/'
            },
            {
                name: 'Bolt',
                description: '格安配車アプリ',
                note: 'Grabより10-20%安い',
                ios: 'https://apps.apple.com/app/bolt-request-a-ride/id675033630',
                android: 'https://play.google.com/store/apps/details?id=ee.mtakso.client',
                web: 'https://bolt.eu/th/'
            },
            {
                name: 'InDriver',
                description: '価格交渉型配車アプリ',
                note: '自分で運賃を提示できる',
                ios: 'https://apps.apple.com/app/indriver/id1087318899',
                android: 'https://play.google.com/store/apps/details?id=sinet.startup.inDriver',
                web: 'https://indriver.com/'
            }
        ]
    },

    // デリバリー
    delivery: {
        summary: 'GrabFood・foodpanda・Lineman',
        basic: {
            items: [
                '配達料：15-50バーツ',
                '最低注文額：なし〜100バーツ',
                'プロモーション多数'
            ]
        },
        detail: {
            apps: thailandData?.delivery?.apps ? {
                title: 'おすすめアプリ',
                icon: '📱',
                content: generateAppList(thailandData.delivery.apps)
            } : undefined,
            howTo: {
                title: '使い方',
                icon: '📖',
                items: [
                    '電話番号でアカウント登録',
                    '住所設定（タイ語・英語両方推奨）',
                    'レストラン選択→注文→支払い',
                    '配達時間：20-40分程度',
                    'ドライバーとチャット可能（翻訳アプリ併用）'
                ]
            },
            payment: {
                title: '支払い方法',
                icon: '💳',
                items: [
                    '現金払い：配達員に直接支払い',
                    'クレジットカード：Visa/Master',
                    'PromptPay：タイの銀行口座必要',
                    'アプリ内ウォレット：チャージ式'
                ]
            },
            tips: {
                title: 'お得に使うコツ',
                icon: '💡',
                items: [
                    '初回利用でプロモコード適用',
                    '雨天時は配達料上がる＋時間かかる',
                    'ピーク時（12-13時、18-20時）は混雑',
                    'チップ：20-30฿渡すと喜ばれる',
                    '住所はホテル名＋部屋番号が確実'
                ]
            }
        },
        apps: [
            {
                name: 'GrabFood',
                description: 'Grab系列のフードデリバリー',
                note: '配達エリア広い、選択肢多い',
                ios: 'https://apps.apple.com/app/grab-app/id647268330',
                android: 'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger',
                web: 'https://food.grab.com/th/en/'
            },
            {
                name: 'foodpanda',
                description: '人気フードデリバリー',
                note: 'プロモーション多い',
                ios: 'https://apps.apple.com/app/foodpanda/id758103884',
                android: 'https://play.google.com/store/apps/details?id=com.global.foodpanda.android',
                web: 'https://www.foodpanda.co.th/'
            },
            {
                name: 'Lineman',
                description: 'LINE系列デリバリー',
                note: 'LINE Payで支払い可能',
                ios: 'https://apps.apple.com/app/line-man/id1016678744',
                android: 'https://play.google.com/store/apps/details?id=com.linecorp.lineman',
                web: 'https://lineman.line.me/'
            }
        ]
    },

    // 翻訳・言語
    translation: {
        summary: 'Google翻訳＋カメラ翻訳',
        basic: {
            items: [
                '基本：英語が通じる（観光地）',
                'ローカル：タイ語のみ多い',
                '翻訳アプリ必須'
            ]
        },
        detail: {
            apps: thailandData?.translation?.apps ? {
                title: 'おすすめアプリ',
                icon: '📱',
                content: generateAppList(thailandData.translation.apps)
            } : undefined,
            phrases: {
                title: '便利なタイ語',
                icon: '🗣️',
                items: [
                    'สวัสดี（サワディー）：こんにちは',
                    'ขอบคุณ（コップンカー/カップ）：ありがとう',
                    'เท่าไหร่（タオライ）：いくら？',
                    'ไม่เป็นไร（マイペンライ）：大丈夫・気にしないで',
                    'อร่อย（アロイ）：美味しい',
                    'ช่วยด้วย（チュアイドゥアイ）：助けて'
                ]
            },
            tips: {
                title: '言語のコツ',
                icon: '💡',
                items: [
                    '英語：ホテル・デパート・観光地で通じる',
                    'タイ語：ローカル市場・タクシーで必要',
                    'カメラ翻訳：メニュー・看板に便利',
                    '音声翻訳：タクシーで行き先伝えるのに便利',
                    '数字は覚えると便利（1-10、100、1000）'
                ]
            },
            manners: {
                title: 'コミュニケーションマナー',
                icon: '🙏',
                items: [
                    'ワイ（合掌）：目上の人への挨拶',
                    '語尾：男性カップ、女性カー（丁寧語）',
                    '笑顔：マイペンライ精神で',
                    '大声・怒鳴るのはNG（逆効果）'
                ]
            }
        },
        apps: [
            {
                name: 'Google翻訳',
                description: '定番翻訳アプリ',
                note: 'オフライン翻訳、カメラ翻訳対応',
                ios: 'https://apps.apple.com/app/google-translate/id414706506',
                android: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate',
                web: 'https://translate.google.com/'
            }
        ]
    },

    // 文化・マナー
    culture: {
        summary: '王室尊重・仏教文化を理解',
        basic: {
            items: [
                '王室批判は厳禁（法律で禁止）',
                '寺院では肌露出NG',
                '頭を触らない、足で指さない'
            ]
        },
        detail: {
            royal: {
                title: '王室について',
                icon: '👑',
                items: [
                    '王室批判は不敬罪（最長15年の禁固刑）',
                    '国歌・王室歌斉唱時は起立必須',
                    '映画館：上映前の国王賛歌で全員起立',
                    '紙幣・硬貨を踏まない（国王の肖像）',
                    '王室の話題は避ける'
                ]
            },
            buddhism: {
                title: '仏教マナー',
                icon: '🙏',
                items: [
                    '寺院：肩・膝が隠れる服装',
                    '僧侶：女性は触れない・物を直接渡さない',
                    '仏像：登ったり、背を向けて写真撮影NG',
                    '境内：靴を脱ぐ（土足厳禁）',
                    '寄付：お布施は自由意志'
                ]
            },
            taboos: {
                title: 'タブー・NGマナー',
                icon: '⚠️',
                items: [
                    '頭：神聖な部位、他人の頭を触らない',
                    '足：不浄、足で物を指さない、人をまたがない',
                    '左手：不浄、食事・握手は右手',
                    '人前で怒る・大声：恥ずかしい行為とされる',
                    'カップル：人前でのキスなど過度なスキンシップNG'
                ]
            },
            dining: {
                title: '食事マナー',
                icon: '🍴',
                items: [
                    '箸：麺類のみ、通常はスプーンとフォーク',
                    '食べ方：フォークで寄せてスプーンで食べる',
                    '音：麺をすする音はOK',
                    'シェア：大皿料理が一般的',
                    'チップ：高級店で20-50฿、端数切り上げでOK'
                ]
            }
        }
    },

    // 治安・安全
    safetyInfo: {
        summary: '比較的安全、スリ・ボッタクリ注意',
        basic: {
            items: [
                '治安：東南アジアでは良好',
                '注意：スリ、置き引き、ボッタクリ',
                '夜：女性一人歩きは避ける地域あり'
            ]
        },
        detail: {
            safety: {
                title: '安全情報',
                icon: '🛡️',
                items: [
                    '全般：凶悪犯罪は少ない、スリ・詐欺に注意',
                    '観光地：カオサン、パッポン、ナナ周辺は深夜注意',
                    '交通：バイクタクシー・トゥクトゥクは事故リスク',
                    '薬物：麻薬は厳罰（死刑もあり）、絶対NG',
                    '南部：国境付近は渡航中止勧告エリアあり'
                ]
            },
            scams: {
                title: 'よくある詐欺・トラブル',
                icon: '⚠️',
                items: [
                    '宝石詐欺：「今日だけ安い」に注意',
                    'タクシーボッタクリ：メーター拒否、遠回り',
                    'トゥクトゥク：「10฿ツアー」→土産物店連れ回し',
                    '睡眠薬強盗：親しげに近づく→飲み物に混入',
                    'スリ：満員電車、混雑市場で多発',
                    '両替詐欺：数え間違い、少なく渡す'
                ]
            },
            prevention: {
                title: '対策',
                icon: '🔒',
                items: [
                    '貴重品：ホテル金庫に、最小限だけ持ち歩く',
                    'バッグ：前に抱える、チャック閉める',
                    'タクシー：Grab推奨、メーターなら写真撮影',
                    '親切な声かけ：基本警戒（詐欺の可能性）',
                    'コピー：パスポートコピー携帯',
                    '夜間：人通り少ない場所避ける、一人歩き×'
                ]
            },
            emergency: {
                title: '緊急時の対応',
                icon: '🚨',
                items: [
                    '警察：191（ツーリストポリス：1155）',
                    '救急：1669',
                    '大使館：+66-2-207-8500（在タイ日本国大使館）',
                    '保険会社：出発前に連絡先控える',
                    'スリ被害：警察でポリスレポート取得（保険請求に必要）'
                ]
            }
        }
    },

    // 医療・保険
    medical: {
        summary: '私立病院は高水準、保険必須',
        basic: {
            items: [
                '医療：私立病院は日本語対応あり',
                '費用：高額（保険必須）',
                '薬：薬局で気軽に買える'
            ]
        },
        detail: {
            hospitals: {
                title: '病院情報',
                icon: '🏥',
                items: [
                    'バンコク病院：日本語通訳常駐、カード払い可',
                    'サミティベート病院：日本人専用窓口あり',
                    'BNH病院：老舗、日本語対応',
                    '私立病院：清潔・高水準・高額',
                    '公立病院：安い・待ち時間長い・英語×'
                ]
            },
            costs: {
                title: '医療費目安',
                icon: '💰',
                items: [
                    '診察：3,000-5,000฿（私立病院）',
                    '風邪薬処方：全体で5,000฿前後',
                    '食中毒：10,000-30,000฿',
                    '骨折：50,000-200,000฿',
                    '入院：1日50,000฿〜',
                    '※保険なしだと全額自己負担'
                ]
            },
            insurance: {
                title: '海外旅行保険',
                icon: '📋',
                items: [
                    'クレカ付帯：補償額確認（不足の場合あり）',
                    '別途加入：治療費500万円以上推奨',
                    'キャッシュレス診療：提携病院なら現地支払い不要',
                    '保険会社連絡先：必ず控える',
                    '既往症：補償対象外の場合あり'
                ]
            },
            pharmacy: {
                title: '薬局・常備薬',
                icon: '💊',
                items: [
                    'ブーツ（Boots）：タイ全土にあるドラッグストア',
                    'ワトソンズ：大手チェーン',
                    '処方箋不要：風邪薬、胃腸薬など気軽に買える',
                    '日本の薬：持参推奨（英文処方箋あると◎）',
                    '常備薬：正露丸、ロキソニン、絆創膏など'
                ]
            },
            health: {
                title: '健康管理',
                icon: '🌡️',
                items: [
                    '水：水道水NG、ミネラルウォーター必須',
                    '屋台：衛生状態確認、火が通ったもの推奨',
                    '暑さ対策：こまめに水分、帽子、日焼け止め',
                    '蚊：デング熱対策（虫除けスプレー）',
                    '冷房：効きすぎ注意、羽織もの持参'
                ]
            }
        }
    },

    // 観光・名所
    attractions: {
        summary: '王宮・寺院・水上マーケット',
        basic: {
            items: [
                '王宮・ワットポー：バンコク必見',
                '水上マーケット：早朝がおすすめ',
                'アユタヤ：世界遺産、日帰りOK'
            ]
        },
        detail: {
            bangkok: {
                title: 'バンコク主要観光地',
                icon: '🏛️',
                items: [
                    '王宮（Grand Palace）：入場500฿、服装注意',
                    'ワットポー（涅槃仏）：入場200฿、マッサージも',
                    'ワットアルン（暁の寺）：入場100฿、夕暮れ時◎',
                    'ワットプラケオ（エメラルド寺院）：王宮内',
                    'カオサン通り：バックパッカーの聖地',
                    'チャトチャックウィークエンドマーケット：土日のみ',
                    'アジアティーク：リバーサイド、夜市',
                    'MBKセンター：お土産、ショッピング'
                ]
            },
            outskirts: {
                title: 'バンコク郊外',
                icon: '🚂',
                items: [
                    'アユタヤ：世界遺産、電車で2時間',
                    'ダムヌンサドゥアック水上マーケット：早朝ツアー',
                    'メークロン線路市場：電車通過見学',
                    'カンチャナブリ：戦場にかける橋',
                    'パタヤ：ビーチリゾート、バス2.5時間'
                ]
            },
            tips: {
                title: '観光のコツ',
                icon: '💡',
                items: [
                    '服装：寺院は肩・膝隠す、靴脱ぐ',
                    '時間帯：午前中が涼しい（9-11時）',
                    '所要時間：王宮＋ワットポーで半日',
                    'ツアー：Klook・KKdayで事前予約がお得',
                    '写真：仏像と並んで撮影OK、背を向けるのはNG',
                    '休館日：確認必須（月曜休み多い）'
                ]
            }
        }
    },

    // 持ち物・電源
    items: {
        summary: 'プラグCタイプ、電圧220V',
        basic: {
            items: [
                '電源：Cタイプ、変換プラグ必要',
                '電圧：220V（変圧器確認）',
                '持ち物：暑さ・冷房対策'
            ]
        },
        detail: {
            power: {
                title: '電源・電圧',
                icon: '🔌',
                items: [
                    'プラグ：Cタイプ（2つ穴丸ピン）',
                    '電圧：220V / 50Hz',
                    '変圧器：スマホ・PC充電器は不要（100-240V対応）',
                    'ドライヤー：海外対応必須、ホテルのもの使用推奨',
                    '変換プラグ：マルチタイプがあると便利'
                ]
            },
            essentials: {
                title: '必需品',
                icon: '🎒',
                items: [
                    'パスポート（残存6ヶ月以上）',
                    '航空券（eチケット控え）',
                    'クレジットカード（Visa/Master 2枚）',
                    '現金（日本円、両替用）',
                    '海外旅行保険証',
                    'スマホ＋充電器＋モバイルバッテリー',
                    '変換プラグ',
                    '常備薬（英文処方箋あると◎）'
                ]
            },
            recommended: {
                title: 'あると便利',
                icon: '✨',
                items: [
                    '日焼け止め（SPF50以上）',
                    '虫除けスプレー（DEET配合）',
                    '羽織もの（冷房対策）',
                    '帽子・サングラス',
                    'ウェットティッシュ',
                    '折りたたみ傘',
                    'ビーチサンダル',
                    'エコバッグ（レジ袋有料）',
                    'ジップロック（濡れ物入れ）'
                ]
            },
            clothing: {
                title: '服装',
                icon: '👕',
                items: [
                    '基本：Tシャツ＋短パン＋サンダルでOK',
                    '寺院用：長ズボン＋肩隠れるトップス',
                    '冷房対策：薄手の長袖、ストール',
                    '靴：歩きやすいスニーカー＋サンダル',
                    '高級レストラン：スマートカジュアル',
                    '雨季（6-10月）：レインコートor折りたたみ傘'
                ]
            }
        }
    },

    // 祝日・営業時間
    holidays: {
        summary: '祝日多め、営業は通常通り',
        basic: {
            items: [
                '主要祝日：年15日程度',
                '店舗：祝日でも営業（一部除く）',
                '営業時間：デパート10-22時'
            ]
        },
        detail: {
            majorHolidays: {
                title: '主要祝日（2025年）',
                icon: '📅',
                items: [
                    '1月1日：新年',
                    '2月12-14日：旧正月（春節）',
                    '4月6日：チャクリー王朝記念日',
                    '4月13-15日：ソンクラーン（水かけ祭り）',
                    '5月1日：レイバーデー',
                    '5月5日：国王戴冠記念日',
                    '7月28日：国王誕生日',
                    '8月12日：王妃誕生日',
                    '10月13日：ラーマ9世記念日',
                    '12月5日：父の日',
                    '12月10日：憲法記念日',
                    '12月31日：大晦日'
                ]
            },
            businessHours: {
                title: '営業時間目安',
                icon: '⏰',
                items: [
                    'デパート・モール：10:00-22:00（毎日）',
                    'コンビニ：24時間（セブン、ファミマ）',
                    'レストラン：11:00-22:00（店による）',
                    '屋台：朝7:00〜、夜18:00〜（場所による）',
                    '銀行：月-金 9:30-15:30（両替窓口は長め）',
                    '官公庁：月-金 8:30-16:30',
                    '寺院：8:00-17:00（日没まで）',
                    'マッサージ店：10:00-23:00（店による）'
                ]
            },
            events: {
                title: '主要イベント',
                icon: '🎉',
                items: [
                    'ソンクラーン（4月中旬）：水かけ祭り、街中びしょ濡れ',
                    'ロイクラトン（11月満月）：灯籠流し',
                    'チャイニーズニューイヤー（2月）：中華街盛り上がる',
                    'ベジタリアンフェス（10月）：菜食祭り',
                    'バンコクマラソン（11月）：交通規制注意'
                ]
            },
            tips: {
                title: '祝日・イベント時の注意',
                icon: '💡',
                items: [
                    'ソンクラーン：水かけられる覚悟、電子機器は防水',
                    '祝日：観光地混雑、ホテル値上がり',
                    '禁酒日：仏教関連の祝日は酒類販売停止',
                    '選挙日：お酒販売禁止',
                    '王室行事：一部道路規制、服装注意（黄色推奨）'
                ]
            }
        }
    }
};

// デバッグ：calculatorが存在するか確認
