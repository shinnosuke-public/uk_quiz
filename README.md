# クイズで旅するイギリス

日本語で遊べる、家族向けのイギリスクイズアプリです。完成品は1つのHTMLファイルなので、保存しておけばオフラインでも遊べます。

## クイズの構成

現在のクイズは大きく3つに分かれています。

### イギリス一般クイズ（レベル別）

- 初級: 国旗、首都、赤いバスなど、はじめてでも答えやすい問題
- 中級: お金、時差、地下鉄など、旅行で役立つ知識
- 上級: 正式な国名やビッグ・ベンの正体など、少しむずかしい問題

### イギリス発祥クイズ（テーマ別）

「次のうち、イギリス発祥のものはどれ？」という形式で、選択肢にいろいろな国のものを並べて、イギリス生まれのものを当てるクイズです。

- 食べ物
- スポーツ
- 乗り物・街
- ファッション
- 文化・物語
- 発明・科学

テーマをまとめて遊ぶ「まとめて挑戦」もあります。

### チャレンジ

- おまかせ10問: 全問題からランダムに10問
- 全問チャレンジ: すべての問題に挑戦

出題順と選択肢の順番は毎回シャッフルされるので、正解の位置を覚えてしまう心配はありません。

## 開発中に動かす

このプロジェクトは外部ランタイム依存を持たない作りです。通常のNode.jsとnpmが使える環境なら、次のコマンドで開発用サーバーを起動できます。

```bash
npm run dev
```

表示されたローカルURLをブラウザで開きます。

## 単一HTMLファイルを作る

```bash
npm run build
```

ビルド後、`dist/uk_quiz.html` が作られます。このファイルにはCSS、JavaScript、クイズデータ、SVG素材が含まれています。

## 配布方法

`dist/uk_quiz.html` だけをコピーして配布できます。サーバー、バックエンド、外部API、CDN、リモート画像は不要です。

## オフラインで試す

1. `dist/uk_quiz.html` を端末に保存します。
2. インターネット接続を切ります。
3. ブラウザでHTMLファイルを直接開き、クイズを開始できるか確認します。

旅行前に一度、実際に使う端末で開けるか確認してください。

## iPhoneで使うときの注意（2つのモード）

iPhoneでは、LINEで受け取ったHTMLファイルや「ファイル」アプリのHTMLは、iOSの「クイックルック（プレビュー）」で表示され、**JavaScriptが動きません**。これはiOSの仕様で、iPhoneのSafariにはローカルファイルを開く機能がないため、回避できません。

そのため、このアプリは1つのファイルに2つのモードを入れています。

- **フル機能版**: パソコン・Androidのブラウザで開いたときのモード。シャッフル出題、答え合わせ、点数の保存ができる。
- **プレビュー版（静的モード）**: iPhoneのプレビューで開いたときに自動で表示されるモード。JavaScriptなしで動き、全問題・選択肢タップでの正誤表示・「答えと解説を見る」が使える。シャッフルと点数保存はない。

iPhoneでフル機能版を遊びたい場合だけ、ローカルHTMLをJavaScriptつきで開ける無料アプリ（例: Readdle社の「Documents」）にファイルを入れる方法があります（必須ではありません）。

飛行機に乗る前など、オフラインで使いたい場面の前に、実際に使う端末で一度テストしてください。

## 新しい問題を追加する

クイズデータは `src/data/questions.ts` にあります。新しい問題を追加するときは、既存の問題と同じ形で `questions` 配列に追加してください。

各問題には、次の情報を入れます。

- `id`
- `type`
- `category`
- `categoryLabel`
- `subcategory`
- `subcategoryLabel`
- `difficulty`
- `title`
- `prompt`
- `choices`
- 正解情報
- 選択肢ごとの解説
- `overallExplanation`

`category` は `"general"` または `"origin"` を使います。

`subcategory` は、一般クイズでは `"easy"`、`"normal"`、`"hard"` を使います。イギリス発祥クイズでは `"food"`、`"sports"`、`"transport"`、`"fashion"`、`"culture"`、`"tech"` を使います。

`difficulty` は `"easy"`、`"normal"`、`"hard"` のどれかです。

## 単一選択の問題を追加する

文字だけの単一選択問題は `type: "single-text-choice"` を使います。

```ts
{
  id: "general-easy-example",
  type: "single-text-choice",
  category: "general",
  categoryLabel: "イギリス一般クイズ",
  subcategory: "easy",
  subcategoryLabel: "初級",
  difficulty: "easy",
  title: "問題タイトル",
  prompt: "問題文",
  choices: [
    { id: "a", label: "選択肢A", explanation: "選択肢Aの解説" },
    { id: "b", label: "選択肢B", explanation: "選択肢Bの解説" }
  ],
  correctChoiceId: "a",
  overallExplanation: "全体解説"
}
```

## 画像選択の問題を追加する

画像選択問題は `type: "single-image-choice"` を使います。選択肢には `imageId` を指定します。

国旗のSVGは `src/assets/flags.ts`、地図シルエットなどのSVGは `src/assets/illustrations.ts` に追加します。外部画像URLは使わないでください。

```ts
{
  id: "general-easy-image-example",
  type: "single-image-choice",
  category: "general",
  categoryLabel: "イギリス一般クイズ",
  subcategory: "easy",
  subcategoryLabel: "初級",
  difficulty: "easy",
  title: "画像を選ぶ問題",
  prompt: "正しい画像はどれ？",
  choices: [
    { id: "uk", label: "イギリス", imageId: "uk", explanation: "解説" },
    { id: "japan", label: "日本", imageId: "japan", explanation: "解説" }
  ],
  correctChoiceId: "uk",
  overallExplanation: "全体解説"
}
```

## 複数選択の問題を追加する

複数選択問題は `type: "multi-select"` を使います。各選択肢に `isCorrect` を入れます。採点では、正しい選択肢のセットと完全に一致したときだけ正解になります。

```ts
{
  id: "origin-sports-example",
  type: "multi-select",
  category: "origin",
  categoryLabel: "イギリス発祥クイズ",
  subcategory: "sports",
  subcategoryLabel: "スポーツ",
  difficulty: "normal",
  title: "複数選択の問題",
  prompt: "正しいものをすべて選ぼう。",
  choices: [
    { id: "a", label: "選択肢A", isCorrect: true, explanation: "正しい理由" },
    { id: "b", label: "選択肢B", isCorrect: false, explanation: "違う理由" }
  ],
  overallExplanation: "全体解説"
}
```
