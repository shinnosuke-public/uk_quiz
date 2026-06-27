export const questions = [
  // ===== イギリス一般クイズ: 初級 =====
  {
    id: "general-easy-flag",
    type: "single-image-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "easy",
    subcategoryLabel: "初級",
    difficulty: "easy",
    title: "イギリスの国旗",
    prompt: "イギリスの国旗はどれ？",
    choices: [
      {
        id: "uk",
        label: "これ！",
        imageId: "uk",
        explanation:
          "イギリスの国旗「ユニオンジャック」です。3つの旗を重ねたデザインで、世界でも有名な国旗のひとつです。"
      },
      {
        id: "usa",
        label: "これ！",
        imageId: "usa",
        explanation:
          "これはアメリカの国旗「星条旗」です。星の数は州の数と同じ50個あります。"
      },
      {
        id: "australia",
        label: "これ！",
        imageId: "australia-flag",
        explanation:
          "これはオーストラリアの国旗。左上にユニオンジャックが入っているのは、昔イギリスと深い関係があった証拠です。ひっかけ注意！"
      },
      {
        id: "france",
        label: "これ！",
        imageId: "france",
        explanation: "これはフランスの国旗「トリコロール」。青・白・赤の三色旗です。"
      }
    ],
    correctChoiceId: "uk",
    overallExplanation:
      "ユニオンジャックは、イングランド・スコットランド・アイルランドの3つの旗を重ねてできています。オーストラリアやニュージーランドの国旗の中にも入っているので、見つけたらイギリスとのつながりを思い出してみよう。"
  },
  {
    id: "general-easy-map-shape",
    type: "single-image-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "easy",
    subcategoryLabel: "初級",
    difficulty: "easy",
    title: "イギリスの形",
    prompt: "地図で見たとき、イギリスの形はどれ？",
    choices: [
      {
        id: "uk-map",
        label: "これ！",
        imageId: "map-uk",
        explanation:
          "大きなグレートブリテン島と、左どなりの北アイルランドを合わせた形です。北のスコットランドはギザギザの海岸線が特徴です。"
      },
      {
        id: "niigata-map",
        label: "これ！",
        imageId: "map-niigata",
        explanation:
          "これは新潟県の形です。日本海に沿って長くのびた、日本の地域です。"
      },
      {
        id: "australia-map",
        label: "これ！",
        imageId: "map-australia",
        explanation:
          "どっしり大きなオーストラリアです。右下の小さな島はタスマニア島です。"
      },
      {
        id: "chile-map",
        label: "これ！",
        imageId: "map-chile",
        explanation:
          "南北に細なが〜く続くチリです。長さは約4300kmで、世界一細長い国と言われます。"
      }
    ],
    correctChoiceId: "uk-map",
    overallExplanation:
      "イギリスはヨーロッパの北西にうかぶ島国です。飛行機が着陸する前に、窓からこの形が見えるかさがしてみよう！"
  },
  {
    id: "general-easy-capital",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "easy",
    subcategoryLabel: "初級",
    difficulty: "easy",
    title: "イギリスの首都",
    prompt: "イギリスの首都はどこ？",
    choices: [
      {
        id: "london",
        label: "ロンドン",
        explanation:
          "ロンドンはイギリスの首都で、人口は約900万人。東京23区とだいたい同じくらいの人が住んでいます。"
      },
      {
        id: "paris",
        label: "パリ",
        explanation: "パリはフランスの首都。エッフェル塔やルーブル美術館で有名です。"
      },
      {
        id: "manchester",
        label: "マンチェスター",
        explanation:
          "マンチェスターはイギリスの大きな都市ですが、首都ではありません。サッカーの強豪チームがあることで有名です。"
      },
      {
        id: "new-york",
        label: "ニューヨーク",
        explanation:
          "ニューヨークはアメリカ最大の都市。ちなみにアメリカの首都もニューヨークではなくワシントンD.C.です。"
      }
    ],
    correctChoiceId: "london",
    overallExplanation:
      "ロンドンにはバッキンガム宮殿、大英博物館、タワーブリッジなど見どころがいっぱい。約2000年前にローマ人がつくった「ロンディニウム」という街が始まりです。"
  },
  {
    id: "general-easy-language",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "easy",
    subcategoryLabel: "初級",
    difficulty: "easy",
    title: "イギリスの言葉",
    prompt: "イギリスで一番話されている言葉はどれ？",
    choices: [
      {
        id: "english",
        label: "英語",
        explanation:
          "英語はもともとイギリス・イングランドの言葉。「English」という名前自体が「イングランドの言葉」という意味です。"
      },
      {
        id: "french",
        label: "フランス語",
        explanation:
          "フランス語はおとなりフランスの言葉。でも昔のイギリス王室ではフランス語が使われていた時代もありました。"
      },
      {
        id: "german",
        label: "ドイツ語",
        explanation: "ドイツ語はドイツやオーストリアなどで話されている言葉です。"
      },
      {
        id: "apple",
        label: "リンゴ🍎",
        explanation:
          "リンゴは果物！おいしいけれど、話すことはできません。ちなみに英語ではアップル（apple）です。"
      }
    ],
    correctChoiceId: "english",
    overallExplanation:
      "英語はイングランド生まれの言葉で、今では世界中で使われています。ウェールズに行くと、道路標識が英語とウェールズ語の2か国語で書かれているのが見られます。"
  },
  {
    id: "general-easy-red-bus",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "easy",
    subcategoryLabel: "初級",
    difficulty: "easy",
    title: "ロンドンの赤い乗り物",
    prompt: "ロンドンの街を走る、有名な赤い乗り物は？",
    choices: [
      {
        id: "double-decker",
        label: "2階建てバス",
        explanation:
          "赤い2階建てバス「ダブルデッカー」はロンドンのシンボル。2階の一番前の席が特等席です！"
      },
      {
        id: "tram",
        label: "路面電車",
        explanation:
          "路面電車もロンドンの一部にありますが、赤いシンボルといえばバスです。"
      },
      {
        id: "rickshaw",
        label: "人力車",
        explanation: "人力車は日本の浅草などで観光用に見られる乗り物です。"
      },
      {
        id: "gondola",
        label: "ゴンドラ",
        explanation: "ゴンドラはイタリアのベネチアで有名な小さな舟です。"
      }
    ],
    correctChoiceId: "double-decker",
    overallExplanation:
      "ロンドンの「赤」は2階建てバスだけじゃありません。赤い電話ボックス、赤いポストも街のシンボル。見つけたら写真を撮ってみよう！"
  },
  {
    id: "general-easy-black-cab",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "ロンドンのタクシー",
    prompt: "ロンドンの伝統的なタクシーは、何と呼ばれている？",
    choices: [
      {
        id: "black-cab",
        label: "ブラックキャブ",
        explanation:
          "丸っこい形の黒いタクシー「ブラックキャブ」はロンドン名物。運転手になるには、街中の道を覚える超難関テストに合格する必要があります。"
      },
      {
        id: "yellow-cab",
        label: "イエローキャブ",
        explanation: "黄色いイエローキャブはニューヨークのタクシーです。"
      },
      {
        id: "red-cab",
        label: "レッドキャブ",
        explanation:
          "ロンドンで赤いのはバスや電話ボックス。タクシーは黒が伝統です。"
      },
      {
        id: "royal-taxi",
        label: "ロイヤルタクシー",
        explanation: "王室っぽい名前ですが、正しい呼び名はブラックキャブです。"
      }
    ],
    correctChoiceId: "black-cab",
    overallExplanation:
      "ブラックキャブの運転手テストは「ナレッジ（知識）」と呼ばれ、2万5000本もの道を覚えるのに何年もかかると言われています。乗ったら運転手さんに話しかけてみよう。"
  },

  // ===== イギリス一般クイズ: 中級 =====
  {
    id: "general-normal-currency",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "イギリスのお金",
    prompt: "イギリスで使われているお金はどれ？",
    choices: [
      {
        id: "pound",
        label: "ポンド",
        explanation:
          "イギリスのお金はポンド（記号は£）。1ポンドは100ペンスです。お札にはチャールズ国王の顔が描かれています。"
      },
      {
        id: "euro",
        label: "ユーロ",
        explanation:
          "ユーロはフランスやドイツなど多くのヨーロッパの国のお金。でもイギリスはずっと自分の国のポンドを使い続けています。"
      },
      {
        id: "dollar",
        label: "ドル",
        explanation: "ドルはアメリカやオーストラリアなどで使われるお金です。"
      },
      {
        id: "franc",
        label: "フラン",
        explanation: "フランは昔のフランスのお金。今はスイスなどで使われています。"
      }
    ],
    correctChoiceId: "pound",
    overallExplanation:
      "お店の値札には「£5.50」のように書かれています。買い物のとき「これは日本円でいくらかな？」と計算してみると楽しいよ。"
  },
  {
    id: "general-normal-thames",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "ロンドンを流れる川",
    prompt: "ロンドンの真ん中を流れる有名な川は？",
    choices: [
      {
        id: "thames",
        label: "テムズ川",
        explanation:
          "テムズ川はロンドンの中心を流れる川。タワーブリッジやロンドン・アイ、国会議事堂はみんなこの川のほとりにあります。"
      },
      {
        id: "seine",
        label: "セーヌ川",
        explanation: "セーヌ川はフランスのパリを流れる川です。"
      },
      {
        id: "rhine",
        label: "ライン川",
        explanation: "ライン川はドイツなどを流れるヨーロッパの大きな川です。"
      },
      {
        id: "danube",
        label: "ドナウ川",
        explanation:
          "ドナウ川はオーストリアのウィーンやハンガリーのブダペストを流れる川です。"
      }
    ],
    correctChoiceId: "thames",
    overallExplanation:
      "テムズ川クルーズに乗ると、船の上からビッグ・ベンやタワーブリッジを一度に見られます。橋が船を通すためにパカッと開くタワーブリッジの瞬間に出会えたらラッキー！"
  },
  {
    id: "general-normal-tube",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "ロンドン地下鉄のあだ名",
    prompt: "ロンドンの地下鉄は、地元の人から何と呼ばれている？",
    choices: [
      {
        id: "tube",
        label: "チューブ（Tube）",
        explanation:
          "トンネルが筒（チューブ）のようにまん丸な形をしていることから、「Tube」と呼ばれるようになりました。"
      },
      {
        id: "metro",
        label: "メトロ（Metro）",
        explanation:
          "メトロはパリなど多くの都市での地下鉄の呼び名。ロンドンでは使いません。"
      },
      {
        id: "subway",
        label: "サブウェイ（Subway）",
        explanation:
          "サブウェイはアメリカでの地下鉄の呼び名。イギリスで「subway」と言うと「地下の歩道」のことを指します。"
      },
      {
        id: "pipe",
        label: "パイプ（Pipe）",
        explanation: "おしい？ 筒は筒でも、正しいあだ名はチューブです。"
      }
    ],
    correctChoiceId: "tube",
    overallExplanation:
      "駅やニュースでも普通に「the Tube」と言います。電車に乗るときは「Mind the gap!（すき間に注意！）」というアナウンスにも耳をすませてみよう。"
  },
  {
    id: "general-normal-escalator-side",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "エスカレーターの立ち位置",
    prompt:
      "東京では左側、関西では右側に立つことが多いエスカレーター。イギリスでは、立ち止まる人はどちら側に立つ？",
    choices: [
      {
        id: "right",
        label: "右側",
        explanation:
          "正解！ ロンドン地下鉄などでは、立ち止まる人は右側、歩く人は左側を通るのが基本です。"
      },
      {
        id: "left",
        label: "左側",
        explanation:
          "東京では左側に立つことが多いですが、イギリスでは逆に右側に立つのが基本です。"
      },
      {
        id: "middle",
        label: "真ん中",
        explanation:
          "真ん中に立つと、後ろから来る人が通りにくくなります。イギリスでは右側に寄るのが基本です。"
      },
      {
        id: "no-rule",
        label: "決まったルールはない",
        explanation:
          "地域や場所で違いはありますが、ロンドン地下鉄などでは「右側に立つ」という案内がよく見られます。"
      }
    ],
    correctChoiceId: "right",
    overallExplanation:
      "イギリスではエスカレーターで右側に立ち、左側を空けておくことが多いです。東京とは逆なので、ロンドンの駅でうっかり左側に立つと後ろの人が通りにくいことも。もちろん混んでいる時や小さな子どもと一緒の時は、安全を最優先にしよう。"
  },
  {
    id: "general-normal-lift-floor",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "エレベーターの階数表示",
    prompt: "日本とイギリスでは、エレベーターにどんな違いがあるでしょう？",
    choices: [
      {
        id: "ground-floor",
        label: "地上が1階じゃなくて、0階から始まる",
        explanation:
          "正解！ イギリスでは、地上階を「Ground Floor」や「0」と表示することがよくあります。"
      },
      {
        id: "sideways",
        label: "上下だけじゃなくて、横にも移動できる",
        explanation:
          "未来っぽいですが、普通のエレベーターは上下に動きます。イギリスならではの違いは階数表示です。"
      },
      {
        id: "up-down-only",
        label: "上昇専用、下降専用のエレベーターがある",
        explanation:
          "混雑対策として乗り場が分かれることはあっても、上昇専用・下降専用が普通というわけではありません。"
      },
      {
        id: "paid",
        label: "お金をいれないと動かないものがおおい",
        explanation:
          "ホテルや駅、デパートのエレベーターで毎回お金を入れることは普通ありません。"
      }
    ],
    correctChoiceId: "ground-floor",
    overallExplanation:
      "ヨーロッパでは、地上階を「0階」または「Ground Floor」として、その上を1階、2階…と数えることがよくあります。日本の感覚で「1階」を押すと、地上ではなく1つ上の階に行ってしまうことがあるので注意！ ちなみに「エレベーター」はアメリカ英語で、イギリスではふつう「lift」と言います。"
  },
  {
    id: "general-normal-taxi-hailing",
    type: "single-image-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "タクシーの止め方",
    prompt: "イギリスでタクシーを止めるとき、手はどのように挙げるのが自然？",
    choices: [
      {
        id: "hand-up",
        label: "手を上に挙げる",
        imageId: "taxi-hand-up",
        explanation:
          "これは日本式のタクシーの止め方です。イギリスでは、高く手を挙げるよりも横に手を出す方が自然です。"
      },
      {
        id: "hand-side",
        label: "横に手を出す",
        imageId: "taxi-hand-side",
        explanation:
          "正解！ 道路の方に向かって、腕を横に軽く出して合図します。大きく振り回さなくても大丈夫です。"
      },
      {
        id: "hand-circle",
        label: "両手で大きな丸",
        imageId: "taxi-hand-circle",
        explanation:
          "これはタクシーを止める合図としては大げさすぎます。イギリスでは横に手を出すくらいで伝わります。"
      },
      {
        id: "hand-cross",
        label: "両手を上に挙げて手のひらでクロス",
        imageId: "taxi-hand-cross",
        explanation:
          "こんな謎のポーズをしていたら、周りの人が不審がるのでやめましょう。タクシーには横に手を出して合図します。"
      }
    ],
    correctChoiceId: "hand-side",
    overallExplanation:
      "イギリスでタクシーを止めるときは、道路の方に向かって片手を横に出すのが自然です。日本のように高く手を挙げるよりも、少し控えめな合図。ロンドンの黒いタクシーは、屋根の「TAXI」ライトがついていれば空車のサインです。"
  },
  {
    id: "general-normal-british-sky",
    type: "single-image-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "イギリスでよく見る空",
    prompt: "イギリスでよく見かける天気や空は、どんな感じ？",
    choices: [
      {
        id: "cumulonimbus",
        label: "入道雲",
        imageId: "cloud-cumulonimbus",
        explanation:
          "入道雲は積乱雲のこと。イギリスでも発生しますが、高温多湿な日本の真夏ほど頻繁には見かけません。"
      },
      {
        id: "clear-sky",
        label: "快晴",
        imageId: "cloud-clear",
        explanation:
          "イギリスにも気持ちのよい快晴の日はあります。ただし、雲ひとつない青空が長く続く日は、日本の晴れた季節ほど多くありません。"
      },
      {
        id: "grey-clouds",
        label: "灰色の雲",
        imageId: "cloud-grey",
        explanation:
          "正解！ 大西洋から湿った空気や前線がやって来るため、空を覆う灰色の雲をよく見かけます。"
      },
      {
        id: "lightning-sky",
        label: "雷の空",
        imageId: "cloud-lightning",
        explanation:
          "イギリスでも雷雨は起こり、特に夏のイングランド南東部などで見られますが、いつもの空というわけではありません。"
      }
    ],
    correctChoiceId: "grey-clouds",
    overallExplanation:
      "イギリスは大西洋から湿った空気が運ばれやすく、前線が通ると灰色の雲が広がり、細かな雨が長く続くことがあります。もちろん青空の日もありますが、天気が変わりやすいのがイギリスらしさ。日本の夏を象徴するような大きな入道雲は比較的少なく、同じ季節でも国が変わると空の表情も変わります。"
  },
  {
    id: "general-normal-palace",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "国王の宮殿",
    prompt: "ロンドンにある、イギリス国王の宮殿として有名なのは？",
    choices: [
      {
        id: "buckingham",
        label: "バッキンガム宮殿",
        explanation:
          "バッキンガム宮殿はイギリス国王のロンドンの公式な住まい。部屋の数はなんと775室もあります。"
      },
      {
        id: "windsor",
        label: "ウィンザー城",
        explanation:
          "ウィンザー城も実際に王室のお城ですが、ロンドンの中心ではなく郊外にあります。世界最古の「人が住み続けているお城」です。"
      },
      {
        id: "versailles",
        label: "ベルサイユ宮殿",
        explanation: "ベルサイユ宮殿はフランスの宮殿。昔のフランス国王の住まいでした。"
      },
      {
        id: "edinburgh-castle",
        label: "エディンバラ城",
        explanation:
          "エディンバラ城はスコットランドの首都エディンバラにある、岩山の上のお城です。"
      }
    ],
    correctChoiceId: "buckingham",
    overallExplanation:
      "宮殿の前では、黒くて高い帽子をかぶった衛兵の交代式が見られます。屋根に王室の旗が上がっていたら「国王が今いる」というサインです。"
  },
  {
    id: "general-normal-time-difference",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "日本との時差",
    prompt: "いま（夏）のイギリスと日本の時差は、どれくらい？",
    choices: [
      {
        id: "eight-hours",
        label: "約8時間（日本が先に進んでいる）",
        explanation:
          "夏の時差は8時間で、日本の方が進んでいます。日本がお昼の12時のとき、イギリスはまだ朝の4時です。"
      },
      {
        id: "three-hours",
        label: "約3時間",
        explanation: "3時間だと、もっと近い国との時差です。イギリスはもっと遠い！"
      },
      {
        id: "twelve-hours",
        label: "約12時間（昼と夜が反対）",
        explanation:
          "昼夜がちょうど反対になるのは、地球の裏側のブラジルのあたりです。"
      },
      {
        id: "no-difference",
        label: "ほとんど同じ",
        explanation: "地球は丸いので、これだけ離れた国と同じ時刻にはなりません。"
      }
    ],
    correctChoiceId: "eight-hours",
    overallExplanation:
      "イギリスには3月末から10月末まで、時計を1時間早める「サマータイム」があります。夏は日が長いので、その分時間を有効に使おうという仕組みです。だから時差は夏が8時間、冬（11月〜3月）は9時間。日本に電話するときは「今、日本は何時かな？」と考えてみよう。"
  },

  {
    id: "general-normal-four-nations",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "イギリスを作る国の数",
    prompt: "イギリス（UK）は、いくつの「国」が集まってできている？",
    choices: [
      {
        id: "four",
        label: "4つ",
        explanation:
          "イングランド、スコットランド、ウェールズ、北アイルランドの4つの国が集まってUKになっています。"
      },
      {
        id: "one",
        label: "1つ",
        explanation:
          "イギリスはひとつの国ですが、その中がさらに4つの国に分かれている、ちょっと珍しい作りです。"
      },
      {
        id: "two",
        label: "2つ",
        explanation: "2つではありません。大きな島と小さな島の数でもないよ。"
      },
      {
        id: "six",
        label: "6つ",
        explanation: "6つは多すぎ。正解は4つです。"
      }
    ],
    correctChoiceId: "four",
    overallExplanation:
      "4つの国はそれぞれ自分の旗、伝統、そしてサッカー代表チームまで持っています。ラグビーやサッカーの国際試合では「イングランド対スコットランド」のような、国内なのに国対抗の試合が見られます。"
  },
  {
    id: "general-normal-pence",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "ポンドより小さいお金",
    prompt: "1ポンドより小さい、イギリスのお金の単位は？",
    choices: [
      {
        id: "pence",
        label: "ペンス",
        explanation:
          "100ペンスで1ポンドです。値札では「50p」のように書かれていて、「フィフティー・ピー」と読みます。"
      },
      {
        id: "cent",
        label: "セント",
        explanation: "セントはドルやユーロの下の単位です。"
      },
      {
        id: "sen",
        label: "銭（せん）",
        explanation: "銭は昔の日本で使われていた、円の下の単位です。"
      },
      {
        id: "rupee",
        label: "ルピー",
        explanation: "ルピーはインドなどで使われているお金の単位です。"
      }
    ],
    correctChoiceId: "pence",
    overallExplanation:
      "1枚だけのときは「ペニー」、2枚以上だと「ペンス」と呼び方が変わります。お店で「99p」を見つけたら、それは約1ポンド。小銭の数え方も旅の楽しみのひとつです。"
  },

  {
    id: "general-normal-borough-market",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "バラ・マーケットの歴史",
    prompt: "ロンドンで一番古い食べ物市場「バラ・マーケット」。いつごろからあると言われている？",
    choices: [
      {
        id: "thousand-years",
        label: "約1000年前から（日本は平安時代）",
        explanation:
          "バラ・マーケットの記録は1014年ごろまでさかのぼります。紫式部が『源氏物語』を書いていたころから、ロンドンの人はここで買い物をしていたんです。"
      },
      {
        id: "four-hundred-years",
        label: "約400年前から（日本は江戸時代）",
        explanation:
          "江戸時代どころではありません。実はもっとずっと古いんです。"
      },
      {
        id: "hundred-fifty-years",
        label: "約150年前から（日本は明治時代）",
        explanation: "明治時代よりはるか昔からありました。"
      },
      {
        id: "sixty-years",
        label: "約60年前から（日本は昭和時代）",
        explanation: "おしゃれな見た目から新しそうに見えますが、大はずれ！"
      }
    ],
    correctChoiceId: "thousand-years",
    overallExplanation:
      "1000年以上続くバラ・マーケットには、チーズ、パン、フルーツ、世界中の屋台グルメがぎっしり。テムズ川の南、ロンドン橋のたもとにあります。お腹をすかせて行くのがおすすめ！"
  },
  {
    id: "general-normal-british-museum",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "大英博物館のひみつ",
    prompt: "世界一有名な博物館のひとつ「大英博物館」。入場料はいくら？",
    choices: [
      {
        id: "free",
        label: "無料",
        explanation:
          "大英博物館はなんと無料！「知識はみんなのもの」という考えで、約270年前の開館からずっと原則無料です。"
      },
      {
        id: "thousand-yen",
        label: "約1000円",
        explanation: "1000円でも安いくらいですが、実はもっと安い…？"
      },
      {
        id: "three-thousand-yen",
        label: "約3000円",
        explanation: "有名テーマパークなみの値段はしません。"
      },
      {
        id: "ten-thousand-yen",
        label: "約10000円",
        explanation: "そんなに高かったら世界中の人が困ってしまいます。"
      }
    ],
    correctChoiceId: "free",
    overallExplanation:
      "エジプトの象形文字を解くカギになった「ロゼッタ・ストーン」や本物のミイラも、無料で見られます。絵画の殿堂ナショナル・ギャラリーなど、イギリスの国立博物館・美術館はほとんど無料。何度でも入れるので、好きな展示だけ見る回り方もできます。"
  },
  {
    id: "general-normal-city-of-london",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "normal",
    subcategoryLabel: "中級",
    difficulty: "normal",
    title: "「シティ」って何の街？",
    prompt: "ロンドンの中に「シティ」と呼ばれる特別な地区があります。世界中から会社が集まる、何の街？",
    choices: [
      {
        id: "finance",
        label: "銀行・金融の街",
        explanation:
          "シティはわずか1平方マイル（皇居くらいの広さ）に銀行や金融の会社がぎっしりつまった、世界有数の金融街です。"
      },
      {
        id: "fashion",
        label: "ファッションの街",
        explanation: "ファッションの都といえば、パリやミラノが有名です。"
      },
      {
        id: "movie",
        label: "映画の街",
        explanation: "映画の街といえば、アメリカのハリウッドです。"
      },
      {
        id: "cars",
        label: "自動車の街",
        explanation: "自動車の街といえば、アメリカのデトロイトなどが有名です。"
      }
    ],
    correctChoiceId: "finance",
    overallExplanation:
      "シティは約2000年前のローマ時代のロンドンとほぼ同じ範囲で、いわば「最初のロンドン」。その中心には約330年前にできたイングランド銀行があり、近代の中央銀行のしくみはこの銀行がお手本になったと言われています。あだ名は「スレッドニードル通りの老婦人」。スーツ姿の人たちが行き交う平日のシティは、世界のお金が動く現場です。"
  },

  // ===== イギリス一般クイズ: 上級 =====
  {
    id: "general-hard-latitude",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "ロンドンはどれくらい北？",
    prompt: "ロンドンは地球のどれくらい北にある？ 日本の地図と横にならべて比べてみると…",
    choices: [
      {
        id: "further-north",
        label: "北海道よりもっと北！",
        explanation:
          "ロンドンは北緯51度。北海道のてっぺん（北緯45度）よりはるか北で、北海道の上にあるサハリン（樺太）の真ん中と同じくらいの北さです。"
      },
      {
        id: "tokyo",
        label: "東京と同じくらい",
        explanation:
          "東京（北緯36度）と同じ北さをヨーロッパで探すと、地中海のマルタ島あたり。ロンドンはずっと北です。"
      },
      {
        id: "fukushima",
        label: "福島と同じくらい",
        explanation: "福島（北緯37度）でもまだまだ南。もっと北です。"
      },
      {
        id: "hokkaido",
        label: "北海道のてっぺんと同じくらい",
        explanation:
          "北海道の一番北の稚内（北緯45度）でも、まだロンドンに届きません。"
      }
    ],
    correctChoiceId: "further-north",
    overallExplanation:
      "そんなに北なのに冬が東京より少し寒いくらいなのは、あたたかい海流と風のおかげ。そのかわり夏は涼しくて、30℃を超える日はめずらしいほどです。チェスターはロンドンよりさらに約200km北にあるので、もう少し涼しいよ。夏は夜10時ごろまで明るいので、時間の感覚がふしぎになるかも！"
  },
  {
    id: "general-hard-london-summer-sunset",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "ロンドンの夏の日の入り",
    prompt: "7月中旬、ロンドンで太陽が沈むのは何時ごろ？（同じ時期の東京は午後7時ごろ）",
    choices: [
      {
        id: "seven-pm",
        label: "午後7時",
        explanation:
          "これは同じ時期の東京の日の入りに近い時刻。ロンドンの夏の夕方は、まだまだ明るいです。"
      },
      {
        id: "eight-pm",
        label: "午後8時",
        explanation:
          "午後8時でも太陽はまだ空にあります。日中のような明るさが残っていることもあります。"
      },
      {
        id: "nine-pm",
        label: "午後9時",
        explanation:
          "正解！ 7月15日のロンドンの日の入りは、年によって数分変わりますが、午後9時10分すぎです。"
      },
      {
        id: "ten-pm",
        label: "午後10時",
        explanation:
          "日の入りは午後9時すぎですが、その後も薄明るい時間が続くため、午後10時ごろまで明るく感じることがあります。"
      }
    ],
    correctChoiceId: "nine-pm",
    overallExplanation:
      "7月15日ごろの昼の長さは、東京が約14時間20分なのに対して、ロンドンは約16時間10分。ロンドンは東京よりずっと北にあり、さらに夏時間で時計を1時間進めているため、日の入りが午後9時すぎになります。夏は夜まで観光を楽しめますが、冬は反対に昼が短く、冬至ごろのロンドンは8時間足らず。東京の約9時間45分よりも早く暗くなります。"
  },
  {
    id: "general-hard-anthem",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "国歌に起きた大事件",
    prompt: "イギリス国歌「ゴッド・セイブ・ザ・キング（神よ国王を守りたまえ）」。2022年、この国歌にあることが起きました。何でしょう？",
    choices: [
      {
        id: "lyrics-changed",
        label: "タイトルと歌詞が変わった",
        explanation:
          "エリザベス女王の時代は「ゴッド・セイブ・ザ・クイーン」でした。2022年にチャールズ国王が即位して、「クイーン」が「キング」に変わったのです。"
      },
      {
        id: "new-song",
        label: "新しい曲に作りかえられた",
        explanation: "曲は昔のまま。変わったのは言葉の方です。"
      },
      {
        id: "first-olympics",
        label: "オリンピックで初めて歌われた",
        explanation: "オリンピックではずっと前から歌われています。"
      },
      {
        id: "second-verse",
        label: "2番が追加された",
        explanation: "歌詞はもともと何番もあります。追加ではありません。"
      }
    ],
    correctChoiceId: "lyrics-changed",
    overallExplanation:
      "国歌の「キング/クイーン」は、そのときの国王・女王に合わせて変わります。エリザベス女王の70年間はずっと「クイーン」だったので、ほとんどのイギリス人は2022年に人生で初めて「キング」と歌いました。サッカーの国際試合などで聞くチャンスがあるかも。"
  },
  {
    id: "general-hard-formal-name",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "イギリスの正式名称",
    prompt: "イギリスの正式な国名はどれ？",
    choices: [
      {
        id: "uk-formal",
        label: "グレートブリテン及び北アイルランド連合王国",
        explanation:
          "正式名称は「United Kingdom of Great Britain and Northern Ireland」。長いので普段は「UK」と省略されます。"
      },
      {
        id: "great-britain-kingdom",
        label: "グレートブリテン王国",
        explanation:
          "実は約300年前に実在した国名！ でも今は北アイルランドも加わっているので、これだけでは足りません。"
      },
      {
        id: "england-united",
        label: "イングランド連合国",
        explanation: "イングランドはUKの一部の名前。国全体の正式名称ではありません。"
      },
      {
        id: "britannia-empire",
        label: "ブリタニア帝国",
        explanation:
          "「ブリタニア」は古代ローマ人がこの島を呼んだ名前ですが、今の正式国名ではありません。"
      }
    ],
    correctChoiceId: "uk-formal",
    overallExplanation:
      "「イギリス」という呼び方は実は日本独特で、ポルトガル語の「イングレス（イングランドの）」がなまったものと言われています。英語では「the UK」と言いましょう。"
  },
  {
    id: "general-hard-big-ben",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "ビッグ・ベンの正体",
    prompt: "「ビッグ・ベン」とは、本当は何の名前？",
    choices: [
      {
        id: "bell",
        label: "時計塔の中にある大きな鐘",
        explanation:
          "ビッグ・ベンは塔の中にある重さ13.7トンの大きな鐘の名前。象2頭分以上の重さです！"
      },
      {
        id: "clock-tower",
        label: "時計塔そのもの",
        explanation:
          "多くの人が塔のことをビッグ・ベンと呼びますが、塔の正式名称は「エリザベス・タワー」です。"
      },
      {
        id: "clock-face",
        label: "時計の文字盤",
        explanation:
          "文字盤は直径7mもある大きさですが、ビッグ・ベンの名前は文字盤ではありません。"
      },
      {
        id: "architect",
        label: "塔を設計した建築家",
        explanation:
          "名前の由来は工事責任者のベンジャミン・ホールさんという説がありますが、ビッグ・ベンが指すのは人ではありません。"
      }
    ],
    correctChoiceId: "bell",
    overallExplanation:
      "塔は2012年から「エリザベス・タワー」が正式名称。15分ごとに鐘の音が鳴るので、近くを通ったら耳をすませてみよう。"
  },
  {
    id: "general-hard-same-as-japan",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "easy",
    subcategoryLabel: "初級",
    difficulty: "easy",
    title: "日本と同じなのはどれ？",
    prompt: "次のうち、イギリスと日本で「同じ」なのはどれ？",
    choices: [
      {
        id: "left-traffic",
        label: "車が走る側（左側通行）",
        explanation:
          "イギリスは日本と同じ左側通行。世界では右側通行の国の方が多いので、実は少数派の仲間どうしです。"
      },
      {
        id: "power-plug",
        label: "コンセントの形",
        explanation:
          "イギリスのコンセントは大きな3つ穴（BFタイプ）で、日本のプラグはそのまま挿せません。旅行には変換プラグを忘れずに！"
      },
      {
        id: "currency-same",
        label: "お金の単位",
        explanation: "イギリスはポンド、日本は円。単位はちがいます。"
      },
      {
        id: "clock-time",
        label: "時計の時刻",
        explanation: "時差が約9時間あるので、時刻は大きくずれています。"
      }
    ],
    correctChoiceId: "left-traffic",
    overallExplanation:
      "日本が左側通行なのは、明治時代にイギリスをお手本に鉄道や交通の仕組みを作ったことが理由のひとつと言われています。道を渡るとき車が来る方向が日本と同じなのは、旅行者にはちょっと安心。ただしロンドンの横断歩道には、油断しないように「LOOK RIGHT（右を見て）」と書いてあります。"
  },
  {
    id: "general-hard-population",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "イギリスの人口",
    prompt: "イギリスの人口はどれくらい？（日本は約1億2000万人）",
    choices: [
      {
        id: "about-70m",
        label: "約7000万人",
        explanation:
          "イギリスの人口は約6900万人で、日本のおよそ半分。面積も日本の3分の2くらいです。"
      },
      {
        id: "about-30m",
        label: "約3000万人",
        explanation: "3000万人はオーストラリアより少し多いくらいの人口です。"
      },
      {
        id: "about-120m",
        label: "約1億2000万人",
        explanation: "それはだいたい日本の人口です。イギリスはその半分くらい。"
      },
      {
        id: "about-300m",
        label: "約3億人",
        explanation: "3億人を超えているのはアメリカです。"
      }
    ],
    correctChoiceId: "about-70m",
    overallExplanation:
      "イギリスの人口は日本の約半分ですが、ロンドンには世界中から人が集まっていて、300以上の言語が話されていると言われています。"
  },
  {
    id: "general-hard-pub-count",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "イギリスのパブの数",
    prompt: "2025年時点で、イギリスにはパブが何軒ある？",
    choices: [
      {
        id: "about-600",
        label: "約600軒（日本の映画館の数）",
        explanation:
          "約600軒では少なすぎます。これは日本全国の映画館の数に近い数字です。"
      },
      {
        id: "about-3000",
        label: "約3,000軒（日本のマクドナルドの数）",
        explanation:
          "約3,000軒でもまだ少なめ。これは日本のマクドナルドの店舗数に近い数字です。"
      },
      {
        id: "about-23000",
        label: "約23,000軒（日本のスーパーの数）",
        explanation:
          "約23,000軒は日本のスーパーの数に近い数字ですが、イギリスのパブはその約2倍あります。"
      },
      {
        id: "about-45000",
        label: "約45,000軒（日本の保育園と幼稚園の合計数）",
        explanation:
          "正解！ 日本の保育園と幼稚園を合わせた数に近い数字です。"
      }
    ],
    correctChoiceId: "about-45000",
    overallExplanation:
      "日本のコンビニは約5万6,000軒で、パブより多く見えます。でも人口は日本が約1億2,300万人、イギリスが約7,000万人。人口で割ると、日本のコンビニは約2,200人に1軒、イギリスのパブは約1,600人に1軒です。つまり1人あたりでは、イギリスのパブの方が多いのです。パブはお酒を飲むだけでなく、食事や会話を楽しみ、地域の人が集まる場所。イギリスの暮らしと文化に深く根付いています。"
  },
  {
    id: "general-hard-green-number-plate",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "ナンバープレートの緑の印",
    prompt: "イギリスでは、ナンバープレートの数字の左に緑色の印がある車があります。これは何を表している？",
    questionImageId: "uk-green-reg-num",
    questionImageAlt: "左端に緑色の印が付いたイギリスのナンバープレート",
    choices: [
      {
        id: "taxi",
        label: "タクシー",
        explanation:
          "タクシー専用の印ではありません。電気自動車のタクシーなら、この緑色の印が付くことがあります。"
      },
      {
        id: "electric-vehicle",
        label: "電気自動車",
        explanation:
          "正解！ 緑色の印は、走行中に排気ガスを出さないゼロエミッション車の目印です。"
      },
      {
        id: "royal-car",
        label: "王室関係者の車",
        explanation:
          "王室とは関係ありません。環境にやさしい車だと見分けるための印です。"
      },
      {
        id: "rental-car",
        label: "レンタカー",
        explanation:
          "レンタカー専用の印ではありません。車の所有者ではなく、動力の種類を表しています。"
      }
    ],
    correctChoiceId: "electric-vehicle",
    overallExplanation:
      "この緑色の帯は「グリーン・フラッシュ」と呼ばれ、電気自動車など、走行中に排気ガスを出さない車に付けられます。2025年に新しく登録された乗用車のうち、純電気自動車の割合は日本では約1.4％、イギリスでは約23％。イギリスでは、ほぼ4台に1台が電気自動車です。テスラの累計販売・納車台数の目安も、日本の約3万5,000台に対してイギリスは25万台以上。街で電気自動車を見かける機会は、イギリスの方がずっと多いのです。"
  },
  {
    id: "general-hard-home-air-conditioning",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "家庭のエアコン普及率",
    prompt: "イギリスの一般家庭で、エアコンがある家の割合は？",
    choices: [
      {
        id: "about-5-percent",
        label: "約5％",
        explanation:
          "正解！ 調査によって差がありますが、エアコンがある家は約2〜5％と推計されています。"
      },
      {
        id: "about-15-percent",
        label: "約15％",
        explanation:
          "実際はもっと少なく、エアコンがある家は20軒に1軒あるかどうかです。"
      },
      {
        id: "about-50-percent",
        label: "約50％",
        explanation:
          "半分もの家庭にはありません。暑い日も扇風機や窓からの風でしのぐ家が多いです。"
      },
      {
        id: "about-80-percent",
        label: "約80％",
        explanation:
          "日本では当たり前に見えるエアコンですが、イギリスの家庭ではまだ珍しい設備です。"
      }
    ],
    correctChoiceId: "about-5-percent",
    overallExplanation:
      "イギリスは本来、夏でも比較的涼しく、エアコンが必要になる時期が短いため、家庭にはあまり普及してきませんでした。日本では90％以上の家庭にエアコンがあります。ところが近年は地球温暖化の影響で、イギリスでも熱波や記録的な暑さが増えています。エアコンがなく、冬の寒さを防ぐため熱を逃がしにくく造られた家も多いので、暑い日が続くと室内までかなり暑くなり、眠れないなど大変なことがあります。"
  },

  {
    id: "general-hard-greenwich",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "世界の時間の中心",
    prompt: "地球の経度0度。世界の時間の基準になる「本初子午線」が通っているロンドンの場所は？",
    choices: [
      {
        id: "greenwich",
        label: "グリニッジ天文台",
        explanation:
          "経度0度の線はグリニッジ天文台を通っています。世界中の時間は、ここを基準に「グリニッジより何時間ずれているか」で決められてきました。"
      },
      {
        id: "buckingham",
        label: "バッキンガム宮殿",
        explanation: "国王の宮殿ですが、経度0度は通っていません。"
      },
      {
        id: "british-museum",
        label: "大英博物館",
        explanation: "世界の宝物は集まっていますが、世界の時間の基準ではありません。"
      },
      {
        id: "st-pauls",
        label: "セントポール大聖堂",
        explanation:
          "ロンドンを代表する大聖堂ですが、経度0度はここではありません。"
      }
    ],
    correctChoiceId: "greenwich",
    overallExplanation:
      "グリニッジ天文台では、地面に引かれた本初子午線をまたいで「右足は東半球、左足は西半球」という写真が撮れます。日本の時間は「グリニッジより9時間先」と決められているので、時差クイズの答えもここにつながっています。"
  },
  {
    id: "general-hard-chester",
    type: "single-text-choice",
    category: "general",
    categoryLabel: "イギリス一般クイズ",
    subcategory: "hard",
    subcategoryLabel: "上級",
    difficulty: "hard",
    title: "城壁の街チェスター",
    prompt: "イングランドの古い街チェスター。街をぐるりと囲んでいるものは？",
    choices: [
      {
        id: "city-walls",
        label: "城壁",
        explanation:
          "チェスターは約2000年前に古代ローマ人が作った要塞の街。街を囲む城壁はイギリスで一番完全な形で残っていて、上をぐるりと一周歩けます。"
      },
      {
        id: "moat",
        label: "お堀",
        explanation: "日本のお城はお堀ですが、チェスターは壁で囲まれています。"
      },
      {
        id: "canal",
        label: "運河",
        explanation:
          "チェスターには運河もありますが、街を一周囲んでいるのは城壁です。"
      },
      {
        id: "forest",
        label: "深い森",
        explanation: "森ではなく、人が作った壁が街を守っていました。"
      }
    ],
    correctChoiceId: "city-walls",
    overallExplanation:
      "城壁一周は約3km、歩いて1時間ほど。街の中心には「ロウズ」と呼ばれる白黒しましまの木組みの建物が並び、2階部分が連続した通路になっている世界でも珍しい商店街です。ローマ時代と中世が同居した、歩くだけで楽しい街です。"
  },

  // ===== イギリス発祥クイズ: 食べ物 =====
  {
    id: "origin-food-sandwich",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "food",
    subcategoryLabel: "食べ物",
    difficulty: "easy",
    title: "イギリス発祥の食べ物",
    prompt: "次のうち、イギリス発祥の食べ物はどれ？",
    choices: [
      {
        id: "sandwich",
        label: "サンドイッチ",
        explanation:
          "サンドイッチはイギリス発祥。サンドイッチ伯爵がカードゲームをしながら片手で食べられるように、パンに肉をはさませたという伝説があります。"
      },
      {
        id: "pizza",
        label: "ピザ",
        explanation: "ピザはイタリアのナポリ発祥です。"
      },
      {
        id: "croissant",
        label: "クロワッサン",
        explanation:
          "クロワッサンはオーストリア生まれで、フランスで広まったパンです。"
      },
      {
        id: "hamburger",
        label: "ハンバーガー",
        explanation:
          "今の形のハンバーガーはアメリカ発祥。名前はドイツの都市ハンブルクに由来します。"
      }
    ],
    correctChoiceId: "sandwich",
    overallExplanation:
      "サンドイッチは約250年前のイギリス生まれ。「サンドイッチ」はもともとイングランドの町の名前で、そこの伯爵にちなんでいます。ちなみにハワイ諸島も昔は同じ伯爵にちなんで「サンドイッチ諸島」と呼ばれていました。"
  },
  {
    id: "origin-food-worcestershire",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "food",
    subcategoryLabel: "食べ物",
    difficulty: "normal",
    title: "イギリス発祥の調味料",
    prompt: "日本の食卓でもおなじみ。イギリス発祥の調味料はどれ？",
    choices: [
      {
        id: "worcestershire",
        label: "ウスターソース",
        explanation:
          "ウスターソースはイギリス生まれ。「ウスター」は味の名前ではなく、イングランドの街の名前です。薬屋のリーさんとペリンズさんが作ったと言われています。"
      },
      {
        id: "mayonnaise",
        label: "マヨネーズ",
        explanation:
          "マヨネーズはスペインのメノルカ島が発祥と言われ、フランスで広まりました。"
      },
      {
        id: "ketchup",
        label: "ケチャップ",
        explanation:
          "トマトケチャップはアメリカで生まれた調味料。名前のルーツはアジアの魚のソース「ケチャップ」と言われています。"
      },
      {
        id: "soy-sauce",
        label: "醤油",
        explanation:
          "醤油は日本の調味料。ルーツは中国の「醤（ジャン）」と言われています。"
      }
    ],
    correctChoiceId: "worcestershire",
    overallExplanation:
      "「ウスター」は英語で書くとWorcester。イギリス人でも読み方をよく間違える難しい地名です。日本のとんかつソースやお好み焼きソースも、もとをたどればこのウスターソースの仲間なんです。"
  },
  {
    id: "origin-food-afternoon-tea",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "food",
    subcategoryLabel: "食べ物",
    difficulty: "normal",
    title: "イギリス発祥の食文化",
    prompt: "次のうち、イギリス発祥の習慣はどれ？",
    choices: [
      {
        id: "afternoon-tea",
        label: "アフタヌーンティー",
        explanation:
          "午後に紅茶とお菓子を楽しむアフタヌーンティーは、約180年前にイギリスの公爵夫人が始めたとされる習慣です。"
      },
      {
        id: "espresso",
        label: "エスプレッソ",
        explanation: "濃いコーヒーのエスプレッソはイタリアの文化です。"
      },
      {
        id: "yumcha",
        label: "飲茶",
        explanation: "お茶と点心を楽しむ飲茶は中国（広東地方）の文化です。"
      },
      {
        id: "tapioca",
        label: "タピオカミルクティー",
        explanation: "タピオカミルクティーは台湾生まれのドリンクです。"
      }
    ],
    correctChoiceId: "afternoon-tea",
    overallExplanation:
      "アフタヌーンティーでは3段のスタンドにサンドイッチ、スコーン、ケーキが並びます。下の段から順番に食べるのがマナーと言われています。"
  },

  {
    id: "origin-food-cheddar",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "food",
    subcategoryLabel: "食べ物",
    difficulty: "normal",
    title: "イギリス発祥のチーズ",
    prompt: "次のチーズのうち、イギリス発祥はどれ？",
    choices: [
      {
        id: "cheddar",
        label: "チェダーチーズ",
        explanation:
          "チェダーチーズはイングランドのチェダー村が発祥。村にあるチェダー渓谷のほら穴でチーズを熟成させていました。"
      },
      {
        id: "camembert",
        label: "カマンベール",
        explanation: "カマンベールはフランスのカマンベール村生まれのチーズです。"
      },
      {
        id: "gouda",
        label: "ゴーダチーズ",
        explanation: "ゴーダはオランダのゴーダという街生まれのチーズです。"
      },
      {
        id: "mozzarella",
        label: "モッツァレラ",
        explanation: "モッツァレラはイタリア生まれ。ピザに欠かせないチーズです。"
      }
    ],
    correctChoiceId: "cheddar",
    overallExplanation:
      "実は世界で一番たくさん作られているチーズがチェダー。ウスターソースと同じく、イギリスの小さな村の名前が世界中に広まったんです。チーズの名前はどれも「生まれた場所の名前」というのがおもしろいところ。"
  },
  {
    id: "origin-food-roast-beef",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "food",
    subcategoryLabel: "食べ物",
    difficulty: "normal",
    title: "イギリス発祥の肉料理",
    prompt: "次の肉料理のうち、イギリス発祥はどれ？",
    choices: [
      {
        id: "roast-beef",
        label: "ローストビーフ",
        explanation:
          "ローストビーフはイギリスの伝統料理。日曜日に家族で食べる「サンデーロースト」という習慣があるほど、国民的な料理です。"
      },
      {
        id: "hamburg-steak",
        label: "ハンバーグ",
        explanation:
          "ハンバーグの名前はドイツの都市ハンブルクに由来します。今の形は日本で独自に発展しました。"
      },
      {
        id: "beef-stroganoff",
        label: "ビーフストロガノフ",
        explanation: "ビーフストロガノフはロシアの貴族の家で生まれた料理です。"
      },
      {
        id: "bulgogi",
        label: "プルコギ",
        explanation: "プルコギは韓国の焼肉料理です。"
      }
    ],
    correctChoiceId: "roast-beef",
    overallExplanation:
      "イギリスのレストランでは、日曜日に「サンデーロースト」を出すお店がたくさんあります。ローストビーフに「ヨークシャー・プディング」というふわふわの付け合わせがつくのが本場流。プリンじゃないのにプディングと呼ぶのもおもしろいポイントです。"
  },
  {
    id: "origin-food-scone",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "food",
    subcategoryLabel: "食べ物",
    difficulty: "easy",
    title: "イギリス発祥のお菓子",
    prompt: "次のお菓子のうち、イギリス発祥はどれ？",
    choices: [
      {
        id: "scone",
        label: "スコーン",
        explanation:
          "スコーンはイギリス（スコットランド）生まれの焼き菓子。アフタヌーンティーに欠かせません。"
      },
      {
        id: "macaron",
        label: "マカロン",
        explanation: "マカロンはフランスで有名になったお菓子です。"
      },
      {
        id: "tiramisu",
        label: "ティラミス",
        explanation: "ティラミスはイタリア生まれのデザートです。"
      },
      {
        id: "waffle",
        label: "ワッフル",
        explanation: "ワッフルはベルギーで有名なお菓子です。"
      }
    ],
    correctChoiceId: "scone",
    overallExplanation:
      "本場の食べ方は、スコーンを横半分に割って、クロテッドクリームといちごジャムをたっぷりのせる「クリームティー」。クリームとジャムどちらを先に塗るかで、地方同士が本気で言い争う名物論争もあります。"
  },

  // ===== イギリス発祥クイズ: スポーツ =====
  {
    id: "origin-sports-modern-rules",
    type: "multi-select",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "sports",
    subcategoryLabel: "スポーツ",
    difficulty: "normal",
    title: "イギリス発祥のスポーツ",
    prompt: "イギリス発祥のスポーツを、すべて選ぼう。",
    choices: [
      {
        id: "football",
        label: "サッカー",
        isCorrect: true,
        explanation:
          "今のサッカーのルールは1863年にイングランドで決められました。世界最古のサッカー協会「FA」もイングランドにあります。"
      },
      {
        id: "rugby",
        label: "ラグビー",
        isCorrect: true,
        explanation:
          "ラグビーはイングランドのラグビー校で、サッカーの試合中に少年がボールを抱えて走り出したのが始まり、という伝説があります。"
      },
      {
        id: "tennis",
        label: "テニス",
        isCorrect: true,
        explanation:
          "今の芝生のテニス（ローンテニス）はイギリスで形が整いました。ロンドン郊外のウィンブルドンは世界最古のテニス大会です。"
      },
      {
        id: "golf",
        label: "ゴルフ",
        isCorrect: true,
        explanation:
          "ゴルフはスコットランド生まれ。「ゴルフの聖地」セント・アンドリュースもスコットランドにあります。"
      },
      {
        id: "baseball",
        label: "野球",
        isCorrect: false,
        explanation: "野球はアメリカで発展したスポーツです。"
      },
      {
        id: "basketball",
        label: "バスケットボール",
        isCorrect: false,
        explanation:
          "バスケットボールは1891年にアメリカの体育の先生が考えたスポーツです。"
      },
      {
        id: "judo",
        label: "柔道",
        isCorrect: false,
        explanation: "柔道は日本の嘉納治五郎が作った、日本生まれの武道です。"
      }
    ],
    overallExplanation:
      "サッカー、ラグビー、テニス、ゴルフはぜんぶイギリス発祥。イギリスは「近代スポーツのふるさと」と呼ばれています。クリケットやバドミントンもイギリスで生まれました。"
  },
  {
    id: "origin-sports-badminton",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "sports",
    subcategoryLabel: "スポーツ",
    difficulty: "normal",
    title: "イギリス発祥のスポーツ その2",
    prompt: "次のうち、イギリス発祥のスポーツはどれ？",
    choices: [
      {
        id: "badminton",
        label: "バドミントン",
        explanation:
          "バドミントンはイギリス発祥。貴族のお屋敷「バドミントン・ハウス」で遊ばれたことが名前の由来と言われています。"
      },
      {
        id: "karate",
        label: "空手",
        explanation: "空手は日本の沖縄で生まれた武道です。"
      },
      {
        id: "american-football",
        label: "アメリカンフットボール",
        explanation:
          "アメフトはその名の通りアメリカ生まれ。ただし、もとをたどればイギリスのラグビーから生まれたスポーツです。"
      },
      {
        id: "ski-jump",
        label: "スキージャンプ",
        explanation: "スキージャンプはノルウェー発祥のスポーツです。"
      }
    ],
    correctChoiceId: "badminton",
    overallExplanation:
      "「バドミントン」は競技の名前である前に、イギリスのお屋敷の名前。スポーツの名前には、こんなふうにイギリスの地名や建物名がかくれていることがあります。"
  },
  {
    id: "origin-sports-table-tennis",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "sports",
    subcategoryLabel: "スポーツ",
    difficulty: "hard",
    title: "意外なイギリス発祥スポーツ",
    prompt: "意外かも？ 次のうち、イギリス発祥のスポーツはどれ？",
    choices: [
      {
        id: "table-tennis",
        label: "卓球",
        explanation:
          "卓球は中国がとても強いので意外ですが、実はイギリス発祥。食事のあとにテーブルで遊んだ室内遊びが始まりと言われています。"
      },
      {
        id: "kendo",
        label: "剣道",
        explanation: "剣道は日本の武道。侍の剣術から生まれました。"
      },
      {
        id: "ice-hockey",
        label: "アイスホッケー",
        explanation: "アイスホッケーはカナダで発展したスポーツです。"
      },
      {
        id: "surfing",
        label: "サーフィン",
        explanation:
          "サーフィンはハワイなどポリネシアの島々で生まれたスポーツです。"
      }
    ],
    correctChoiceId: "table-tennis",
    overallExplanation:
      "卓球は19世紀末のイギリスで、雨の日にテーブルの上でテニスのまねをして遊んだのが始まりという説が有名。本の表紙をラケットに、シャンパンのコルクをボールにしていたそうです。"
  },

  {
    id: "origin-sports-darts",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "sports",
    subcategoryLabel: "スポーツ",
    difficulty: "normal",
    title: "パブ生まれの遊び",
    prompt: "イギリスのパブ（大衆酒場）で生まれた遊びはどれ？",
    choices: [
      {
        id: "darts",
        label: "ダーツ",
        explanation:
          "ダーツはイギリスのパブで育った遊び。もともとは兵士が弓矢の練習として、たるの底に矢を投げたのが始まりと言われています。"
      },
      {
        id: "karaoke",
        label: "カラオケ",
        explanation: "カラオケは日本生まれ。今では英語でも「karaoke」で通じます。"
      },
      {
        id: "pinball",
        label: "ピンボール",
        explanation: "ピンボールはアメリカで発展したゲームです。"
      },
      {
        id: "bowling",
        label: "ボウリング",
        explanation:
          "今の10本ピンのボウリングはアメリカで発展した遊びです。"
      }
    ],
    correctChoiceId: "darts",
    overallExplanation:
      "パブはイギリスの社交場。ダーツの世界大会は今でもイギリスで開かれていて、選手が投げるたびに観客が大合唱する、お祭りみたいな雰囲気です。ちなみにビリヤードの発祥はフランスなど諸説ありますが、その仲間の「スヌーカー」はイギリス生まれの競技です。"
  },
  {
    id: "origin-sports-cricket",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "sports",
    subcategoryLabel: "スポーツ",
    difficulty: "hard",
    title: "イギリスの国民的スポーツ",
    prompt: "イギリス発祥で、世界で2番目にファンが多いとも言われるスポーツはどれ？",
    choices: [
      {
        id: "cricket",
        label: "クリケット",
        explanation:
          "クリケットはイングランド発祥。インドなど昔イギリスと関係が深かった国々で大人気で、ファンの数はサッカーに次ぐとも言われます。"
      },
      {
        id: "baseball",
        label: "野球",
        explanation:
          "野球はアメリカで発展したスポーツ。実はクリケットと同じく、バットとボールを使う遊びの親せきです。"
      },
      {
        id: "handball",
        label: "ハンドボール",
        explanation: "ハンドボールはドイツやデンマークで発展したスポーツです。"
      },
      {
        id: "sepak-takraw",
        label: "セパタクロー",
        explanation:
          "セパタクローは東南アジア生まれの、足で行うバレーボールのような競技です。"
      }
    ],
    correctChoiceId: "cricket",
    overallExplanation:
      "クリケットの試合は長いものだと数日がかり！ 途中にはティータイムの休憩もあります。夏にイギリスへ行くと、公園で白いユニフォームでクリケットをする人たちが見られるかも。"
  },
  {
    id: "origin-sports-boxing",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "sports",
    subcategoryLabel: "スポーツ",
    difficulty: "hard",
    title: "今のルールはイギリス生まれ",
    prompt: "グローブをつける今のルールがイギリスで決められた格闘技はどれ？",
    choices: [
      {
        id: "boxing",
        label: "ボクシング",
        explanation:
          "今のボクシングの基本ルール「クイーンズベリー・ルール」は、1867年にイギリスで作られました。グローブをつけるのもこのルールからです。"
      },
      {
        id: "sumo",
        label: "相撲",
        explanation: "相撲は日本の伝統的な競技です。"
      },
      {
        id: "taekwondo",
        label: "テコンドー",
        explanation: "テコンドーは韓国生まれの格闘技です。"
      },
      {
        id: "wrestling",
        label: "レスリング",
        explanation:
          "レスリングはとても古い競技で、古代ギリシャのオリンピックでも行われていました。"
      }
    ],
    correctChoiceId: "boxing",
    overallExplanation:
      "イギリスは「ルールを作る国」。ボクシングのほかにも、競馬（サラブレッドという馬の種類もイギリス生まれ）や乗馬競技など、たくさんのスポーツの形をイギリスが整えました。"
  },

  // ===== イギリス発祥クイズ: 乗り物・街 =====
  {
    id: "origin-transport-underground",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "transport",
    subcategoryLabel: "乗り物・街",
    difficulty: "normal",
    title: "イギリス発祥の乗り物",
    prompt: "次のうち、イギリス発祥（世界で最初に作った）のものはどれ？",
    choices: [
      {
        id: "underground",
        label: "地下鉄",
        explanation:
          "世界初の地下鉄は1863年のロンドン。最初はなんと蒸気機関車で、トンネルの中は煙だらけだったそうです。"
      },
      {
        id: "shinkansen",
        label: "高速鉄道（新幹線）",
        explanation:
          "時速200kmを超える高速鉄道を世界で初めて走らせたのは日本の新幹線（1964年）です。"
      },
      {
        id: "airplane",
        label: "飛行機",
        explanation:
          "動力つきの飛行機で世界初の飛行に成功したのは、アメリカのライト兄弟（1903年）です。"
      },
      {
        id: "car",
        label: "ガソリン自動車",
        explanation:
          "ガソリンで走る自動車を発明したのは、ドイツのカール・ベンツ（1886年）です。"
      }
    ],
    correctChoiceId: "underground",
    overallExplanation:
      "ロンドン地下鉄は日本初の地下鉄（東京・銀座線、1927年）より60年以上も先輩。今は11路線・270以上の駅があります。乗ったら「世界最古の地下鉄だ！」と思い出してみよう。"
  },
  {
    id: "origin-transport-railway",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "transport",
    subcategoryLabel: "乗り物・街",
    difficulty: "normal",
    title: "鉄道が走ったころの日本",
    prompt: "世界で初めて鉄道が走ったのはイギリス（1825年）。そのとき、日本は何時代だった？",
    choices: [
      {
        id: "edo",
        label: "江戸時代",
        explanation:
          "1825年の日本はまだ江戸時代。ペリーの黒船が来る約30年も前に、イギリスでは蒸気機関車がお客さんを乗せて走っていました。"
      },
      {
        id: "meiji",
        label: "明治時代",
        explanation:
          "日本初の鉄道（新橋〜横浜）が走ったのが明治時代の1872年。イギリスはそれより約50年も早かったんです。"
      },
      {
        id: "sengoku",
        label: "戦国時代",
        explanation:
          "戦国時代は1825年より250年以上前。さすがにまだ世界のどこにも鉄道はありません。"
      },
      {
        id: "heian",
        label: "平安時代",
        explanation: "平安時代は1000年ほど前。紫式部や清少納言の時代です。"
      }
    ],
    correctChoiceId: "edo",
    overallExplanation:
      "日本初の鉄道（新橋〜横浜）は、イギリスから機関車と技術者を招いて作られました。日本の鉄道のご先祖さまはイギリスなんです。新幹線で「速さ世界一」をお返ししたと考えるとおもしろいですね。"
  },
  {
    id: "origin-transport-traffic-light",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "transport",
    subcategoryLabel: "乗り物・街",
    difficulty: "hard",
    title: "街の中のイギリス発祥",
    prompt: "毎日の生活で見かけるもの。イギリス発祥なのはどれ？",
    choices: [
      {
        id: "traffic-light",
        label: "信号機",
        explanation:
          "世界初の信号機は1868年、ロンドンの国会議事堂前に立てられました。電気ではなくガス灯で光る信号でした。"
      },
      {
        id: "elevator",
        label: "エレベーター",
        explanation:
          "安全なエレベーターを発明したのはアメリカのオーチスさん。今もエレベーターに「OTIS」のロゴがあるか探してみよう。"
      },
      {
        id: "escalator",
        label: "エスカレーター",
        explanation: "エスカレーターはアメリカ生まれの発明です。"
      },
      {
        id: "ferris-wheel",
        label: "観覧車",
        explanation:
          "観覧車は1893年のシカゴ万博（アメリカ）で生まれました。ロンドンの「ロンドン・アイ」は有名ですが、観覧車そのものの発祥はアメリカです。"
      }
    ],
    correctChoiceId: "traffic-light",
    overallExplanation:
      "世界初の信号機は馬車のための信号で、警察官が手で動かしていました。ちなみにロンドンの巨大観覧車「ロンドン・アイ」は高さ135m。乗ると街全体が見わたせます。"
  },

  {
    id: "origin-transport-zebra-crossing",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "transport",
    subcategoryLabel: "乗り物・街",
    difficulty: "normal",
    title: "道路の中のイギリス発祥",
    prompt: "次のうち、イギリス発祥のものはどれ？",
    choices: [
      {
        id: "zebra-crossing",
        label: "シマシマ模様の横断歩道",
        explanation:
          "白いシマシマの横断歩道は1951年にイギリスで生まれました。シマウマみたいなので「ゼブラ・クロッシング」と呼ばれます。"
      },
      {
        id: "scramble-crossing",
        label: "スクランブル交差点",
        explanation:
          "全方向いっせいに渡るスクランブル交差点はアメリカで始まったと言われています。渋谷のものが世界一有名です。"
      },
      {
        id: "moving-walkway",
        label: "動く歩道",
        explanation: "動く歩道は1893年のシカゴ万博（アメリカ）で登場しました。"
      },
      {
        id: "michi-no-eki",
        label: "道の駅",
        explanation: "道の駅は日本生まれの仕組みです。"
      }
    ],
    correctChoiceId: "zebra-crossing",
    overallExplanation:
      "ビートルズのアルバム「アビイ・ロード」の表紙で4人が渡っているのも、このゼブラ・クロッシング。イギリスでは歩行者が渡ろうとしたら車は必ず止まるルールです。"
  },

  // ===== イギリス発祥クイズ: ファッション =====
  {
    id: "origin-fashion-brand",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "fashion",
    subcategoryLabel: "ファッション",
    difficulty: "normal",
    title: "イギリス生まれのブランド",
    prompt: "次のうち、イギリス生まれのブランドはどれ？",
    choices: [
      {
        id: "burberry",
        label: "バーバリー",
        explanation:
          "バーバリーは1856年にイギリスで生まれたブランド。チェック柄と、丈夫で雨に強い「ギャバジン」という生地の発明で有名です。"
      },
      {
        id: "chanel",
        label: "シャネル",
        explanation: "シャネルはフランスのパリで生まれたブランドです。"
      },
      {
        id: "gucci",
        label: "グッチ",
        explanation: "グッチはイタリアのフィレンツェで生まれたブランドです。"
      },
      {
        id: "nike",
        label: "ナイキ",
        explanation: "ナイキはアメリカ生まれのスポーツブランドです。"
      }
    ],
    correctChoiceId: "burberry",
    overallExplanation:
      "イギリス生まれのブランドはほかにも、カラフルなストライプのポール・スミス、靴のドクターマーチンなどたくさん。雨の多いイギリスでは「雨に強い服作り」が発達したと言われています。"
  },
  {
    id: "origin-fashion-cardigan",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "fashion",
    subcategoryLabel: "ファッション",
    difficulty: "normal",
    title: "イギリス生まれの服",
    prompt: "次のうち、イギリス生まれの服はどれ？",
    choices: [
      {
        id: "cardigan",
        label: "カーディガン",
        explanation:
          "カーディガンはイギリスのカーディガン伯爵の名前から。戦争でけがをした兵士が着やすいように、前開きのセーターを広めたと言われています。"
      },
      {
        id: "jeans",
        label: "ジーンズ",
        explanation:
          "ジーンズはアメリカ生まれ。金鉱で働く人のための丈夫なズボンとして作られました。"
      },
      {
        id: "beret",
        label: "ベレー帽",
        explanation: "ベレー帽はフランスとスペインの国境のバスク地方の帽子です。"
      },
      {
        id: "aloha-shirt",
        label: "アロハシャツ",
        explanation:
          "アロハシャツはハワイ生まれ。日本からの移民が着物の生地で作ったのが始まりという説もあります。"
      }
    ],
    correctChoiceId: "cardigan",
    overallExplanation:
      "カーディガン伯爵は約170年前の軍人。人の名前がそのまま服の名前になりました。サンドイッチ伯爵といい、イギリスの貴族は名前の残し方が上手です。"
  },
  {
    id: "origin-fashion-trench",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "fashion",
    subcategoryLabel: "ファッション",
    difficulty: "hard",
    title: "イギリス生まれのコート",
    prompt: "次のうち、イギリス生まれのコートはどれ？",
    choices: [
      {
        id: "trench-coat",
        label: "トレンチコート",
        explanation:
          "トレンチコートはイギリス軍のために作られたコート。「トレンチ」は戦場の「ざんごう（溝）」という意味で、雨や寒さを防ぐ工夫がつまっています。"
      },
      {
        id: "down-jacket",
        label: "ダウンジャケット",
        explanation: "ダウンジャケットはアメリカで生まれた防寒着です。"
      },
      {
        id: "poncho",
        label: "ポンチョ",
        explanation: "ポンチョは南アメリカの先住民の伝統的な衣服です。"
      },
      {
        id: "anorak",
        label: "アノラック",
        explanation:
          "アノラックは北極圏に住むイヌイットの防寒着がもとになっています。"
      }
    ],
    correctChoiceId: "trench-coat",
    overallExplanation:
      "トレンチコートを作ったのはバーバリーなどのイギリスのブランド。肩のベルトや背中の布など、デザインのひとつひとつに軍隊時代の役割がありました。イギリスは雨が多いから、コートの本場になったんです。"
  },
  {
    id: "origin-fashion-duffle",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "fashion",
    subcategoryLabel: "ファッション",
    difficulty: "normal",
    title: "海軍が広めたコート",
    prompt: "イギリス海軍の兵士たちが着て広まったコートはどれ？",
    choices: [
      {
        id: "duffle-coat",
        label: "ダッフルコート",
        explanation:
          "棒型のボタン「トグル」が特徴のダッフルコートは、イギリス海軍が着て広まりました。寒い海の上で、手袋をしたままでも留め外しできるようにした工夫です。"
      },
      {
        id: "pea-coat",
        label: "ピーコート",
        explanation:
          "ピーコートも海軍のコートですが、オランダなどヨーロッパ大陸の海軍から広まったと言われています。"
      },
      {
        id: "mods-coat",
        label: "モッズコート",
        explanation:
          "モッズコートの正体はアメリカ軍のパーカ。ただし1960年代にイギリスの若者「モッズ」が愛用したことでこの名前がつきました。おしい！"
      },
      {
        id: "riders-jacket",
        label: "ライダースジャケット",
        explanation:
          "ライダースジャケットはアメリカ生まれ。バイク乗りのための革ジャンです。"
      }
    ],
    correctChoiceId: "duffle-coat",
    overallExplanation:
      "戦争が終わって大量にあまった海軍のダッフルコートが安く売り出されると、学生や登山家に大人気に。日本でも学生コートの定番になりました。生地の名前はベルギーの町デュッフェルからきています。"
  },
  {
    id: "origin-fashion-sailor",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "fashion",
    subcategoryLabel: "ファッション",
    difficulty: "hard",
    title: "制服のルーツ",
    prompt: "イギリス海軍の服がルーツになっている、日本の学校でおなじみの制服はどれ？",
    choices: [
      {
        id: "sailor-uniform",
        label: "セーラー服",
        explanation:
          "セーラー服はもともとイギリス海軍の水兵（セーラー）の制服。大きなえりは、海の上で音を聞き取りやすくするためだったという説があります。"
      },
      {
        id: "gakuran",
        label: "学ラン",
        explanation:
          "学ランの詰めえりは、ドイツ（プロイセン）の軍服がもとになったと言われています。"
      },
      {
        id: "kappogi",
        label: "割烹着",
        explanation: "割烹着は日本生まれ。着物を汚さないためのエプロンです。"
      },
      {
        id: "t-shirt",
        label: "Tシャツ",
        explanation:
          "Tシャツはアメリカ海軍の下着から広まったと言われています。"
      }
    ],
    correctChoiceId: "sailor-uniform",
    overallExplanation:
      "約180年前、イギリスの王子さま（後のエドワード7世）が子どものころにセーラー服を着た絵が大人気になり、世界中の子ども服に広まりました。それが日本では学校の制服になったんです。"
  },

  // ===== イギリス発祥クイズ: 文化・物語 =====
  {
    id: "origin-culture-postage-stamp",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "hard",
    title: "郵便のイギリス発祥",
    prompt: "次のうち、イギリス発祥のものはどれ？",
    choices: [
      {
        id: "postage-stamp",
        label: "郵便切手",
        explanation:
          "世界初の切手は1840年にイギリスで生まれた「ペニー・ブラック」。ビクトリア女王の横顔が描かれた黒い切手です。"
      },
      {
        id: "postcard",
        label: "はがき",
        explanation: "はがきは1869年にオーストリアで生まれました。"
      },
      {
        id: "nengajo",
        label: "年賀状",
        explanation: "年賀状は日本の文化。お正月にあいさつを送る習慣です。"
      },
      {
        id: "takkyubin",
        label: "宅配便",
        explanation:
          "今のような宅配便のサービスは、日本で生まれて発展した仕組みです。"
      }
    ],
    correctChoiceId: "postage-stamp",
    overallExplanation:
      "「切手を貼って手紙を送る」仕組み自体がイギリスの発明。だからイギリスの切手には今でも世界で唯一、国名が書かれていません（国王の横顔が国名の代わり）。最初の切手ペニー・ブラックは、切手収集家のあこがれの的です。"
  },
  {
    id: "origin-culture-detective",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "イギリス生まれの名探偵",
    prompt: "次の名探偵・怪盗のうち、イギリス生まれのキャラクターはどれ？",
    choices: [
      {
        id: "sherlock",
        label: "シャーロック・ホームズ",
        explanation:
          "ホームズはイギリスの作家コナン・ドイルが生んだ名探偵。『名探偵コナン』の「コナン」は、この作家の名前からとられています。"
      },
      {
        id: "akechi",
        label: "明智小五郎",
        explanation:
          "明智小五郎は日本の作家・江戸川乱歩が生んだ名探偵です。"
      },
      {
        id: "lupin",
        label: "アルセーヌ・ルパン",
        explanation:
          "怪盗ルパンはフランスの作家ルブランが生んだキャラクターです。"
      },
      {
        id: "kindaichi",
        label: "金田一耕助",
        explanation: "金田一耕助は日本の作家・横溝正史が生んだ名探偵です。"
      }
    ],
    correctChoiceId: "sherlock",
    overallExplanation:
      "ホームズの住所は「ロンドン ベーカー街221B」。実際にベーカー・ストリート駅の近くにシャーロック・ホームズ博物館があり、観光名所になっています。"
  },
  {
    id: "origin-culture-story",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "イギリス生まれの物語",
    prompt: "次のうち、イギリス生まれの物語はどれ？",
    choices: [
      {
        id: "harry-potter",
        label: "ハリー・ポッター",
        explanation:
          "『ハリー・ポッター』はイギリスの作家J.K.ローリングの作品。物語の舞台もイギリスです。"
      },
      {
        id: "frozen",
        label: "アナと雪の女王",
        explanation:
          "『アナと雪の女王』はアメリカのディズニー映画。原作はデンマークのアンデルセン童話です。"
      },
      {
        id: "pinocchio",
        label: "ピノキオ",
        explanation: "『ピノキオ』はイタリアの童話が原作です。"
      },
      {
        id: "moomin",
        label: "ムーミン",
        explanation: "『ムーミン』はフィンランドの作家トーベ・ヤンソンの作品です。"
      }
    ],
    correctChoiceId: "harry-potter",
    overallExplanation:
      "ロンドンのキングス・クロス駅には、ホグワーツ特急が出発する「9と4分の3番線」の撮影スポットがあります。『くまのパディントン』『ピーターラビット』『くまのプーさん』もイギリス生まれの物語です。"
  },
  {
    id: "origin-culture-band",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "イギリス出身の音楽",
    prompt: "次のうち、イギリス出身のミュージシャンはどれ？",
    choices: [
      {
        id: "beatles",
        label: "ビートルズ",
        explanation:
          "ビートルズの4人は、イングランド北部の港町リバプール出身。世界で一番売れたバンドと言われています。"
      },
      {
        id: "michael-jackson",
        label: "マイケル・ジャクソン",
        explanation: "「キング・オブ・ポップ」マイケル・ジャクソンはアメリカ出身です。"
      },
      {
        id: "niziu",
        label: "NiziU",
        explanation:
          "NiziUは日本のガールズグループ。日本と韓国の共同プロジェクトのオーディションから生まれました。"
      },
      {
        id: "mrs-green-apple",
        label: "Mrs. GREEN APPLE",
        explanation:
          "Mrs. GREEN APPLEは日本のバンド。名前は英語ですが、東京で結成されました。"
      }
    ],
    correctChoiceId: "beatles",
    overallExplanation:
      "ロンドンのアビイ・ロードには、ビートルズがアルバムの表紙で渡った有名な横断歩道があります。同じポーズで写真を撮る観光客が世界中から集まります。"
  },
  {
    id: "origin-culture-school-chime",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "学校チャイムのひみつ",
    prompt: "学校のチャイム「キーンコーンカーンコーン」。あのメロディーは、もともと何の音？",
    choices: [
      {
        id: "big-ben-bells",
        label: "ロンドンのビッグ・ベンの鐘",
        explanation:
          "あのメロディーは「ウェストミンスターの鐘」と呼ばれ、ビッグ・ベンが15分ごとに鳴らす鐘の音。日本の学校のチャイムは、これをまねて作られました。"
      },
      {
        id: "paris-church",
        label: "パリの教会の鐘",
        explanation: "パリの教会も鐘を鳴らしますが、あのメロディーではありません。"
      },
      {
        id: "ny-clock",
        label: "ニューヨークの時計台の鐘",
        explanation: "ニューヨーク由来ではありません。正解はロンドンです。"
      },
      {
        id: "kyoto-temple",
        label: "京都のお寺の鐘",
        explanation:
          "お寺の鐘は「ゴーン」という1つの音。メロディーにはなっていません。"
      }
    ],
    correctChoiceId: "big-ben-bells",
    overallExplanation:
      "毎日聞いているチャイムが、実はロンドンの鐘の音だったとは！ ビッグ・ベンの近くに行ったら、15分ごとに鳴る「本物のキーンコーンカーンコーン」をぜひ聞いてみてね。メロディーのそのまた元祖は、ケンブリッジの教会の鐘と言われています。"
  },
  {
    id: "origin-culture-auld-lang-syne",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "卒業式ソングのひみつ",
    prompt: "卒業式で歌われる次の曲のうち、イギリス（スコットランド）生まれの曲はどれ？",
    choices: [
      {
        id: "hotaru-no-hikari",
        label: "蛍の光",
        explanation:
          "「蛍の光」のメロディーはスコットランド民謡「オールド・ラング・サイン」。スコットランドの詩人ロバート・バーンズの詩で歌われる名曲で、日本語の歌詞は明治時代につけられました。"
      },
      {
        id: "tsubasa-wo-kudasai",
        label: "翼をください",
        explanation: "「翼をください」は1971年に日本で生まれた曲です。"
      },
      {
        id: "aogeba-totoshi",
        label: "仰げば尊し",
        explanation:
          "昔ながらの日本の歌に聞こえますが、実は原曲はアメリカの歌だったことが近年の研究でわかりました。これもびっくりですが、スコットランドではありません。"
      },
      {
        id: "tabidachi-no-hi-ni",
        label: "旅立ちの日に",
        explanation:
          "「旅立ちの日に」は、埼玉県の中学校の校長先生と音楽の先生が作った、正真正銘の日本生まれの曲です。"
      }
    ],
    correctChoiceId: "hotaru-no-hikari",
    overallExplanation:
      "本場スコットランドでは、「オールド・ラング・サイン」は年越しやお別れの場面でみんなで手をつないで歌う特別な歌。お店の閉店時間によく流れるのは、同じ曲を3拍子にアレンジした「別れのワルツ」です。"
  },
  {
    id: "origin-culture-elgar",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "hard",
    title: "イギリス生まれのクラシック",
    prompt: "次のクラシックの名曲のうち、イギリス人の作曲家が作ったのはどれ？",
    choices: [
      {
        id: "pomp",
        label: "威風堂々",
        explanation:
          "卒業式の入退場でおなじみの「威風堂々」は、イギリスの作曲家エルガーの曲。イギリスでは「第2の国歌」と呼ばれるほど愛されています。"
      },
      {
        id: "fate",
        label: "運命（ジャジャジャジャーン）",
        explanation: "「運命」はドイツの作曲家ベートーベンの曲です。"
      },
      {
        id: "turkish-march",
        label: "トルコ行進曲",
        explanation:
          "トルコ行進曲はオーストリアの作曲家モーツァルトの曲です（名前はトルコ風という意味）。"
      },
      {
        id: "four-seasons",
        label: "四季（春）",
        explanation: "「四季」はイタリアの作曲家ビバルディの曲です。"
      }
    ],
    correctChoiceId: "pomp",
    overallExplanation:
      "毎年夏にロンドンで開かれる国民的クラシックの祭典「プロムス」では、最終夜にこの曲を観客全員が大合唱するのが伝統。日本では卒業式、イギリスではお祭りのクライマックスの曲なんです。"
  },
  {
    id: "origin-culture-disney",
    type: "multi-select",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "ディズニーの中のイギリス",
    prompt: "ディズニー映画のもとになった物語のうち、イギリス生まれのものをすべて選ぼう。",
    choices: [
      {
        id: "winnie-the-pooh",
        label: "くまのプーさん",
        isCorrect: true,
        explanation:
          "プーさんはイギリスの作家A.A.ミルンの物語。モデルになった森（アッシュダウンの森）はロンドンの南に実際にあります。"
      },
      {
        id: "peter-pan",
        label: "ピーターパン",
        isCorrect: true,
        explanation:
          "ピーターパンはスコットランド生まれの作家J.M.バリーの物語。ロンドンのケンジントン公園にはピーターパンの銅像があります。"
      },
      {
        id: "alice",
        label: "ふしぎの国のアリス",
        isCorrect: true,
        explanation:
          "アリスはイギリスの作家ルイス・キャロルの物語。オックスフォード大学の先生が、知り合いの女の子のために作ったお話が始まりです。"
      },
      {
        id: "dalmatians",
        label: "101匹わんちゃん",
        isCorrect: true,
        explanation:
          "101匹わんちゃんの原作はイギリスの作家ドディー・スミス。物語の舞台もロンドンです。"
      },
      {
        id: "snow-white",
        label: "白雪姫",
        isCorrect: false,
        explanation: "白雪姫はドイツのグリム童話です。"
      },
      {
        id: "cinderella",
        label: "シンデレラ",
        isCorrect: false,
        explanation:
          "ディズニー映画のシンデレラは、フランスのペローの童話がもとになっています。"
      },
      {
        id: "aladdin",
        label: "アラジン",
        isCorrect: false,
        explanation:
          "アラジンは中東の物語集「アラビアン・ナイト（千夜一夜物語）」のお話です。"
      }
    ],
    overallExplanation:
      "プーさん、ピーターパン、アリス、101匹わんちゃんは、ぜんぶイギリス生まれ。ロンドンの街には物語ゆかりの場所がたくさんあるので、探しながら歩いてみよう。"
  },
  {
    id: "origin-culture-mary-poppins",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "空からくる家庭教師",
    prompt: "傘をさして空から降りてくる魔法の家庭教師『メリー・ポピンズ』。物語の舞台はどの街？",
    choices: [
      {
        id: "london",
        label: "ロンドン",
        explanation:
          "メリー・ポピンズが東風に乗ってやってくるのは、ロンドンの桜通り17番地にあるバンクス家です。"
      },
      {
        id: "new-york",
        label: "ニューヨーク",
        explanation: "ニューヨークではありません。霧の似合うあの街です。"
      },
      {
        id: "paris",
        label: "パリ",
        explanation: "パリが舞台の有名な物語は『ノートルダムの鐘』などです。"
      },
      {
        id: "sydney",
        label: "シドニー",
        explanation:
          "実は作者P.L.トラバースはオーストラリア生まれ。でも物語を書いたのはイギリスに移り住んでからで、舞台もロンドンです。"
      }
    ],
    correctChoiceId: "london",
    overallExplanation:
      "映画の名曲「鳩にエサを（Feed the Birds）」でおばあさんが座っているのは、セントポール大聖堂の階段です。大聖堂に行ったら、映画のワンシーンを思い出してみてね。"
  },
  {
    id: "origin-culture-bears",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "easy",
    title: "イギリス生まれのクマ",
    prompt: "次のクマのキャラクターのうち、イギリス生まれはどれ？",
    choices: [
      {
        id: "paddington",
        label: "パディントン・ベア",
        explanation:
          "ペルーからやって来て、ロンドンのパディントン駅で見つかったクマだから名前がパディントン。イギリスの作家マイケル・ボンドの物語です。"
      },
      {
        id: "rilakkuma",
        label: "リラックマ",
        explanation: "リラックマは日本（サンエックス）のキャラクターです。"
      },
      {
        id: "kumamon",
        label: "くまモン",
        explanation: "くまモンは熊本県のPRキャラクターです。"
      },
      {
        id: "duffy",
        label: "ダッフィー",
        explanation:
          "ダッフィーはアメリカのディズニーのキャラクター。実は東京ディズニーシーで大人気になって世界に広まりました。"
      }
    ],
    correctChoiceId: "paddington",
    overallExplanation:
      "パディントンの大好物はマーマレードサンド。ロンドンのパディントン駅には銅像もあります。くまのプーさんもイギリス生まれなので、イギリスは名物グマの国なんです。"
  },
  {
    id: "origin-culture-peter-rabbit",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "easy",
    title: "イギリス生まれのうさぎ",
    prompt: "次のうさぎのキャラクターのうち、イギリス生まれはどれ？",
    choices: [
      {
        id: "peter-rabbit",
        label: "ピーターラビット",
        explanation:
          "ピーターラビットは、イギリスの作家ビアトリクス・ポターが生んだいたずらうさぎ。青い上着がトレードマークです。"
      },
      {
        id: "miffy",
        label: "ミッフィー",
        explanation: "ミッフィーはオランダの絵本作家ディック・ブルーナの作品です。"
      },
      {
        id: "bugs-bunny",
        label: "バッグス・バニー",
        explanation: "バッグス・バニーはアメリカのアニメのキャラクターです。"
      },
      {
        id: "my-melody",
        label: "マイメロディ",
        explanation: "マイメロディは日本のサンリオのキャラクターです。"
      }
    ],
    correctChoiceId: "peter-rabbit",
    overallExplanation:
      "ピーターラビットのふるさとは、イングランド北部の「湖水地方」。作者のポターは絵本で得たお金でこの地方の土地を買い、美しい風景を守りました。今も物語のままの景色が残っています。"
  },
  {
    id: "origin-culture-lotr",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "culture",
    subcategoryLabel: "文化・物語",
    difficulty: "normal",
    title: "イギリス生まれのファンタジー",
    prompt: "次のうち、イギリス生まれの物語はどれ？",
    choices: [
      {
        id: "lotr",
        label: "ロード・オブ・ザ・リング（指輪物語）",
        explanation:
          "「指輪物語」を書いたトールキンは、オックスフォード大学の先生。映画のロケ地はニュージーランドですが、物語はイギリス生まれです。"
      },
      {
        id: "star-wars",
        label: "スター・ウォーズ",
        explanation: "スター・ウォーズはアメリカのジョージ・ルーカスが生んだ映画です。"
      },
      {
        id: "dragon-ball",
        label: "ドラゴンボール",
        explanation: "ドラゴンボールは日本の鳥山明のまんがです。"
      },
      {
        id: "pippi",
        label: "長くつ下のピッピ",
        explanation:
          "ピッピはスウェーデンの作家リンドグレーンの物語です。"
      }
    ],
    correctChoiceId: "lotr",
    overallExplanation:
      "「ナルニア国物語」のC.S.ルイスもイギリスの作家で、トールキンとは大学の同僚で友だちでした。ハリー・ポッターといい、イギリスは世界的ファンタジーのふるさとです。"
  },

  // ===== イギリス発祥クイズ: 発明・科学 =====
  {
    id: "origin-tech-tv",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "tech",
    subcategoryLabel: "発明・科学",
    difficulty: "normal",
    title: "イギリス発祥の家電",
    prompt: "次のうち、イギリス人が発明したものはどれ？",
    choices: [
      {
        id: "television",
        label: "テレビ",
        explanation:
          "世界で初めてテレビの公開実験に成功したのは、スコットランド人のジョン・ロジー・ベアード（1926年）です。"
      },
      {
        id: "microwave",
        label: "電子レンジ",
        explanation:
          "電子レンジはアメリカ生まれ。レーダーの研究中に、ポケットのチョコが溶けたことから発明されました。"
      },
      {
        id: "air-conditioner",
        label: "エアコン",
        explanation: "エアコンはアメリカのキャリアという技師が発明しました。"
      },
      {
        id: "rice-cooker",
        label: "炊飯器",
        explanation: "自動で炊ける電気炊飯器は日本生まれの発明です。"
      }
    ],
    correctChoiceId: "television",
    overallExplanation:
      "ベアードの最初のテレビは、なんと人形の顔をぼんやり映すのがやっと。そこから100年たたずに、今のきれいな画面になりました。ちなみに同じころ、日本の高柳健次郎も「イ」の字を映す実験に成功しています。"
  },
  {
    id: "origin-tech-telephone",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "tech",
    subcategoryLabel: "発明・科学",
    difficulty: "normal",
    title: "イギリス人が発明したもの その2",
    prompt: "次のうち、イギリス人が発明したものはどれ？",
    choices: [
      {
        id: "telephone",
        label: "電話",
        explanation:
          "電話を発明したグラハム・ベルは、スコットランドのエディンバラ生まれ。発明したのはアメリカに移住してからでした。"
      },
      {
        id: "phonograph",
        label: "蓄音機（レコード）",
        explanation:
          "音を記録する蓄音機は、アメリカの発明王エジソンが発明しました。"
      },
      {
        id: "radio",
        label: "ラジオ",
        explanation:
          "電波で音を届ける無線通信を実用化したのは、イタリアのマルコーニです。"
      },
      {
        id: "dynamite",
        label: "ダイナマイト",
        explanation:
          "ダイナマイトはスウェーデンのノーベルの発明。ノーベル賞のもとになりました。"
      }
    ],
    correctChoiceId: "telephone",
    overallExplanation:
      "ベルはスコットランドで生まれ育ち、アメリカに渡って電話を発明しました。彼の名前は、後にトランジスタなど数々の大発明を生んだアメリカの「ベル研究所」にも受けつがれています。世界を変えた発明家のふるさとがイギリスにある、というわけです。"
  },
  {
    id: "origin-tech-atm",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "tech",
    subcategoryLabel: "発明・科学",
    difficulty: "hard",
    title: "街の中のイギリス発祥",
    prompt: "次のうち、世界で初めてイギリスに登場したものはどれ？",
    choices: [
      {
        id: "atm",
        label: "ATM（現金自動預け払い機）",
        explanation:
          "世界初のATMは1967年、ロンドン郊外の銀行に設置されました。カードではなく専用の紙を入れる方式でした。"
      },
      {
        id: "qr-code",
        label: "QRコード",
        explanation: "QRコードは日本のデンソーの技術者が発明しました。"
      },
      {
        id: "convenience-store",
        label: "コンビニ",
        explanation:
          "コンビニはアメリカ生まれ。そのあと日本で独自に大発展しました。"
      },
      {
        id: "kaiten-sushi",
        label: "回転寿司",
        explanation:
          "回転寿司は日本生まれ。ビール工場のベルトコンベアがヒントになりました。"
      }
    ],
    correctChoiceId: "atm",
    overallExplanation:
      "世界初のATMが置かれた銀行には、誕生50周年を記念して金色のATMが設置されたこともあります。今ではどこの国にもあるATMが、ロンドン生まれというのはちょっと意外ですね。"
  },
  {
    id: "origin-tech-police",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "tech",
    subcategoryLabel: "発明・科学",
    difficulty: "hard",
    title: "ロンドン生まれの職業",
    prompt: "次の職業のうち、世界初の本格的な組織がロンドンで生まれたのはどれ？",
    choices: [
      {
        id: "police",
        label: "警察官",
        explanation:
          "1829年、ロバート・ピールがロンドンに世界初の近代警察「ロンドン警視庁」を作りました。制服を着て街をパトロールする警察官は、ここから世界に広まりました。"
      },
      {
        id: "firefighter",
        label: "消防士",
        explanation:
          "火を消す仕事はとても古く、約2000年前の古代ローマにすでに消防隊がありました。"
      },
      {
        id: "doctor",
        label: "お医者さん",
        explanation:
          "お医者さんの歴史は大昔から。「医学の父」と呼ばれるヒポクラテスは古代ギリシャの人です。"
      },
      {
        id: "lawyer",
        label: "弁護士",
        explanation:
          "人の代わりに裁判で話す仕事は、古代ローマのころからありました。"
      }
    ],
    correctChoiceId: "police",
    overallExplanation:
      "ロンドン警視庁の愛称は「スコットランドヤード」。最初の本部があった通りの名前からきています。警察官の愛称「ボビー」は創設者ロバート・ピールの名前から。シャーロック・ホームズと競い合うのもこの警視庁の刑事たちで、日本の警視庁もここをお手本に作られました。"
  },
  {
    id: "origin-tech-jigsaw",
    type: "single-text-choice",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "tech",
    subcategoryLabel: "発明・科学",
    difficulty: "normal",
    title: "イギリス生まれの遊び",
    prompt: "次のうち、イギリス生まれの遊びはどれ？",
    choices: [
      {
        id: "jigsaw-puzzle",
        label: "ジグソーパズル",
        explanation:
          "ジグソーパズルは約260年前、ロンドンの地図職人スピルズベリーが、地理の勉強のために地図を切り分けたのが始まりです。"
      },
      {
        id: "rubiks-cube",
        label: "ルービックキューブ",
        explanation:
          "ルービックキューブはハンガリーの建築の先生ルビクさんの発明です。"
      },
      {
        id: "video-game",
        label: "テレビゲーム",
        explanation: "テレビゲームはアメリカで生まれて発展しました。"
      },
      {
        id: "origami",
        label: "折り紙",
        explanation: "折り紙は日本の伝統的な遊びです。"
      }
    ],
    correctChoiceId: "jigsaw-puzzle",
    overallExplanation:
      "世界初のジグソーパズルは「ヨーロッパの地図」。国ごとに切り分けて、組み立てながら地理を覚える教材でした。みんなが今このクイズでイギリスを勉強しているのと同じですね。"
  },
  {
    id: "origin-tech-science",
    type: "multi-select",
    category: "origin",
    categoryLabel: "イギリス発祥クイズ",
    subcategory: "tech",
    subcategoryLabel: "発明・科学",
    difficulty: "hard",
    title: "イギリスの科学者たち",
    prompt: "次の発明・発見のうち、イギリス人によるものをすべて選ぼう。",
    choices: [
      {
        id: "www",
        label: "ウェブ（WWW）のしくみ",
        isCorrect: true,
        explanation:
          "インターネットでページを見るしくみ「ワールド・ワイド・ウェブ」は、イギリス人のティム・バーナーズ＝リーの発明。特許を取らず、世界に無料で公開しました。"
      },
      {
        id: "computer-theory",
        label: "コンピュータの基礎理論",
        isCorrect: true,
        explanation:
          "今のコンピュータの基礎を考えたのは、イギリスの数学者アラン・チューリング。戦争中に暗号を解いた天才です。"
      },
      {
        id: "evolution",
        label: "進化論",
        isCorrect: true,
        explanation:
          "生き物が長い時間をかけて変化するという進化論は、イギリスのダーウィンが唱えました。ガラパゴス諸島での観察が有名です。"
      },
      {
        id: "gravity",
        label: "万有引力の法則",
        isCorrect: true,
        explanation:
          "リンゴが落ちるのを見て引力を考えたという伝説で有名なニュートンは、イギリスの科学者です。"
      },
      {
        id: "vaccine",
        label: "世界初のワクチン",
        isCorrect: true,
        explanation:
          "世界初のワクチン（天然痘の予防接種）を作ったのは、イギリスの医師ジェンナーです。"
      },
      {
        id: "relativity",
        label: "相対性理論",
        isCorrect: false,
        explanation: "相対性理論はドイツ生まれのアインシュタインの理論です。"
      },
      {
        id: "airplane-invention",
        label: "飛行機の発明",
        isCorrect: false,
        explanation:
          "動力つきの飛行機で世界初の飛行に成功したのは、アメリカのライト兄弟です。"
      },
      {
        id: "nobel-prize",
        label: "ノーベル賞",
        isCorrect: false,
        explanation:
          "ノーベル賞は、ダイナマイトを発明したスウェーデンのノーベルが作った賞です。"
      }
    ],
    overallExplanation:
      "イギリスは科学の超大国。電話のグラハム・ベル（スコットランド生まれ）も入れると、世界を変えた発明・発見だらけです。ダーウィンが集めた標本は、ロンドンの自然史博物館にあるよ！"
  }
];
