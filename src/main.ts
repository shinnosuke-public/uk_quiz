import { crownSvg, heroSceneSvg, getIllustrationSvg } from "./assets/illustrations";
import { getFlagSvg } from "./assets/flags";
import { getMapImageDataUri } from "./assets/generated/mapImages";
import { questions } from "./data/questions";
import { countCorrectAnswers, getCorrectChoiceIds, getResultMessage, isAnswerCorrect } from "./utils/scoring";
import { loadStats, saveCompletedSession } from "./utils/storage";
import { shuffleArray } from "./utils/shuffle";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root not found");
}

const state = {
  screen: "home",
  questionOrder: [],
  choiceOrders: {},
  currentIndex: 0,
  selectedIds: [],
  answers: {},
  statsSaved: false
};

const quizModes = [
  {
    id: "general-easy",
    group: "イギリス一般クイズ",
    title: "初級",
    kicker: "やさしい",
    description: "国旗、首都、赤いバスなど、はじめてでも答えやすい問題。",
    filter: (question) => question.category === "general" && question.subcategory === "easy"
  },
  {
    id: "general-normal",
    group: "イギリス一般クイズ",
    title: "中級",
    kicker: "ふつう",
    description: "お金、時差、地下鉄など、旅行ですぐ役立つ知識に挑戦。",
    filter: (question) => question.category === "general" && question.subcategory === "normal"
  },
  {
    id: "general-hard",
    group: "イギリス一般クイズ",
    title: "上級",
    kicker: "むずかしい",
    description: "正式な国名やビッグ・ベンの正体。大人も間違えるかも？",
    filter: (question) => question.category === "general" && question.subcategory === "hard"
  },
  {
    id: "origin-food",
    group: "イギリス発祥クイズ",
    title: "食べ物",
    kicker: "テーマ別",
    description: "イギリス生まれの食べ物はどれ？ 意外なふるさとの話。",
    filter: (question) => question.category === "origin" && question.subcategory === "food"
  },
  {
    id: "origin-sports",
    group: "イギリス発祥クイズ",
    title: "スポーツ",
    kicker: "テーマ別",
    description: "サッカーもゴルフも卓球も？ イギリス発祥のスポーツを探せ。",
    filter: (question) => question.category === "origin" && question.subcategory === "sports"
  },
  {
    id: "origin-transport",
    group: "イギリス発祥クイズ",
    title: "乗り物・街",
    kicker: "テーマ別",
    description: "地下鉄、鉄道、信号機。世界で最初はぜんぶイギリス？",
    filter: (question) => question.category === "origin" && question.subcategory === "transport"
  },
  {
    id: "origin-fashion",
    group: "イギリス発祥クイズ",
    title: "ファッション",
    kicker: "テーマ別",
    description: "バーバリー、カーディガン、セーラー服。服の中のイギリス。",
    filter: (question) => question.category === "origin" && question.subcategory === "fashion"
  },
  {
    id: "origin-culture",
    group: "イギリス発祥クイズ",
    title: "文化・物語",
    kicker: "テーマ別",
    description: "名探偵、ハリポタ、学校のチャイムまで。イギリス生まれの物語と音楽。",
    filter: (question) => question.category === "origin" && question.subcategory === "culture"
  },
  {
    id: "origin-tech",
    group: "イギリス発祥クイズ",
    title: "発明・科学",
    kicker: "テーマ別",
    description: "テレビ、ATM、ニュートンにダーウィン。世界を変えた発明と科学者。",
    filter: (question) => question.category === "origin" && question.subcategory === "tech"
  },
  {
    id: "origin-all",
    group: "イギリス発祥クイズ",
    title: "まとめて挑戦",
    kicker: "ぜんぶ",
    description: "食べ物からファッション、科学まで。発祥問題を全テーマまとめて出題。",
    filter: (question) => question.category === "origin"
  },
  {
    id: "mix-10",
    group: "チャレンジ",
    title: "おまかせ10問",
    kicker: "ランダム",
    description: "全部の問題からランダムに10問。毎回ちがう問題が出ます。",
    limit: 10,
    filter: () => true
  },
  {
    id: "mix-all",
    group: "チャレンジ",
    title: "全問チャレンジ",
    kicker: "本気モード",
    description: "全部の問題に挑戦する本気モード。満点を目指そう！",
    filter: () => true
  }
];

const choiceKeyLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const setScreen = (screen) => {
  state.screen = screen;
  render();
  window.scrollTo({ top: 0, behavior: "auto" });
};

const currentQuestion = () => state.questionOrder[state.currentIndex];

// シャッフル済みの順番で選択肢を返す
const orderedChoices = (question) => {
  const order = state.choiceOrders[question.id];
  if (!order) {
    return question.choices;
  }
  return order.map((id) => question.choices.find((choice) => choice.id === id));
};

const difficultyLabel = (difficulty) => {
  const labels = {
    easy: "やさしい",
    normal: "ふつう",
    hard: "むずかしい"
  };
  return labels[difficulty];
};

const getChoiceImageMarkup = (choice) => {
  const imageId = choice.imageId;
  const mapImageDataUri = getMapImageDataUri(imageId);

  if (mapImageDataUri) {
    return `<img class="choice-raster-image" src="${mapImageDataUri}" alt="${escapeHtml(choice.label)}">`;
  }

  return getFlagSvg(imageId) || getIllustrationSvg(imageId);
};

const renderShell = (content) => {
  app.innerHTML = `
    <main class="app-shell">
      <header class="top-band" aria-label="アプリ情報">
        <div class="brand-mark">${crownSvg}</div>
        <div class="brand-text">
          <p class="brand-eyebrow">Quiz Trip to the UK</p>
          <h1>クイズで旅するイギリス</h1>
        </div>
      </header>
      ${content}
    </main>
  `;
};

const renderHome = () => {
  const stats = loadStats();
  renderShell(`
    <section class="hero-panel">
      <div class="hero-copy">
        <p class="eyebrow">旅の前に、機内で、ホテルで</p>
        <h2>家族で遊べる<br>イギリス入門クイズ</h2>
        <p>国旗や首都から、ハリー・ポッターの駅まで。旅行がもっと楽しくなる${questions.length}問を集めました。オフラインで遊べます。</p>
        <div class="button-row">
          <button class="primary-button big" data-action="start">クイズを始める</button>
          <button class="ghost-button" data-action="help">使い方</button>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        ${heroSceneSvg}
      </div>
    </section>
    <section class="stats-strip" aria-label="これまでの記録">
      <div><span>${stats.bestScore}<small class="unit">点</small></span><small>ベストスコア</small></div>
      <div><span>${stats.completedSessions}<small class="unit">回</small></span><small>クリア回数</small></div>
      <div><span class="date-value">${stats.lastPlayedDate || "—"}</span><small>前回プレイ</small></div>
    </section>
  `);
};

// 一般クイズ=青、発祥クイズ=赤の色分けに使う
const modeCategory = (mode) => {
  if (mode.id.startsWith("general")) return "general";
  if (mode.id.startsWith("origin")) return "origin";
  return "challenge";
};

const renderSelect = () => {
  const groups = [...new Set(quizModes.map((mode) => mode.group))];
  const modeSections = groups
    .map((group) => {
      const groupModes = quizModes.filter((mode) => mode.group === group);
      const groupCategory = modeCategory(groupModes[0]);
      const modeCards = groupModes
        .map((mode) => {
          const count = questions.filter(mode.filter).length;
          const playCount = mode.limit ? Math.min(mode.limit, count) : count;
          return `
            <button class="mode-card" data-action="play-mode" data-mode-id="${escapeHtml(mode.id)}" ${count > 0 ? "" : "disabled"}>
              <span class="mode-top">
                <span class="mode-kicker cat-${modeCategory(mode)}">${escapeHtml(mode.kicker)}</span>
                <span class="mode-count">${playCount}問</span>
              </span>
              <strong>${escapeHtml(mode.title)}</strong>
              <p>${escapeHtml(mode.description)}</p>
            </button>
          `;
        })
        .join("");

      return `
        <section class="mode-section" aria-label="${escapeHtml(group)}">
          <h3><span class="cat-dot cat-${groupCategory}" aria-hidden="true"></span>${escapeHtml(group)}</h3>
          <div class="mode-grid">${modeCards}</div>
        </section>
      `;
    })
    .join("");

  renderShell(`
    <section class="screen-card">
      <div class="section-heading">
        <p class="eyebrow">モード選択</p>
        <h2>遊ぶクイズを選ぼう</h2>
      </div>
      ${modeSections}
      <div class="button-row">
        <button class="ghost-button" data-action="browse">📖 クイズと答えの一覧を見る</button>
        <button class="ghost-button" data-action="home">← ホームへ戻る</button>
      </div>
    </section>
  `);
};

const renderBrowseItem = (question) => {
  const correctIds = getCorrectChoiceIds(question);
  const correctChoices = question.choices.filter((choice) => correctIds.includes(choice.id));
  const answer =
    question.type === "single-image-choice"
      ? correctChoices
          .map((choice) => `<span class="browse-answer-image">${getChoiceImageMarkup(choice)}</span>`)
          .join("")
      : escapeHtml(correctChoices.map((choice) => choice.label).join("、"));

  return `
    <details class="browse-item">
      <summary>${escapeHtml(question.prompt)}</summary>
      <div class="browse-body">
        <p class="browse-answer"><span class="browse-answer-label">答え</span> ${answer}</p>
        <p class="browse-explanation">${escapeHtml(question.overallExplanation)}</p>
      </div>
    </details>
  `;
};

const renderBrowse = () => {
  const groupedQuestions = new Map();
  questions.forEach((question) => {
    const key = `${question.categoryLabel}：${question.subcategoryLabel}`;
    if (!groupedQuestions.has(key)) {
      groupedQuestions.set(key, []);
    }
    groupedQuestions.get(key).push(question);
  });

  const sections = [...groupedQuestions.entries()]
    .map(
      ([label, items]) => `
        <section class="mode-section browse-section" aria-label="${escapeHtml(label)}">
          <h3><span class="cat-tag cat-${escapeHtml(items[0].category)}">${escapeHtml(items[0].categoryLabel)}</span>${escapeHtml(items[0].subcategoryLabel || "")}<span class="browse-count">${items.length}問</span></h3>
          ${items.map(renderBrowseItem).join("")}
        </section>
      `
    )
    .join("");

  renderShell(`
    <section class="screen-card">
      <div class="section-heading">
        <p class="eyebrow">クイズ一覧</p>
        <h2>ぜんぶで${questions.length}問</h2>
        <p>問題をタップすると、答えと解説が見られます。旅行前の見直しにどうぞ。</p>
      </div>
      ${sections}
      <div class="button-row">
        <button class="primary-button" data-action="start">クイズを選ぶ</button>
        <button class="ghost-button" data-action="home">ホームへ戻る</button>
      </div>
    </section>
  `);
};

const renderProgress = () => {
  const total = state.questionOrder.length;
  const done = state.currentIndex;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  return `
    <div class="quiz-topbar">
      <span class="progress-label">第${state.currentIndex + 1}問 <small>/ 全${total}問</small></span>
      <button class="quiet-button" data-action="quit-quiz">やめる</button>
    </div>
    <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}" aria-label="クイズの進み具合">
      <div class="progress-fill" style="width: ${percent}%"></div>
    </div>
  `;
};

const renderQuestion = () => {
  const question = currentQuestion();
  const canSubmit = state.selectedIds.length > 0;
  const choices = orderedChoices(question);

  const choicesHtml = choices
    .map((choice, index) => {
      const selected = state.selectedIds.includes(choice.id);
      const key = choiceKeyLabels[index];
      if (question.type === "single-image-choice") {
        return `
          <button class="choice-card image-choice${selected ? " is-selected" : ""}" data-action="select-single" data-choice-id="${escapeHtml(choice.id)}" aria-pressed="${selected}">
            <span class="flag-frame">${getChoiceImageMarkup(choice)}</span>
            <span class="choice-bottom">
              <span class="key-chip" aria-hidden="true">${key}</span>
              <span class="choice-label">${escapeHtml(choice.label)}</span>
            </span>
          </button>
        `;
      }

      const action = question.type === "multi-select" ? "toggle-multi" : "select-single";
      return `
        <button class="choice-card text-choice${selected ? " is-selected" : ""}" data-action="${action}" data-choice-id="${escapeHtml(choice.id)}" aria-pressed="${selected}">
          <span class="key-chip" aria-hidden="true">${key}</span>
          <span class="choice-label">${escapeHtml(choice.label)}</span>
          <span class="select-mark" aria-hidden="true">${question.type === "multi-select" ? "✓" : "●"}</span>
        </button>
      `;
    })
    .join("");

  renderShell(`
    <section class="screen-card quiz-card">
      ${renderProgress()}
      <div class="question-meta">
        <span class="meta-chip cat-${escapeHtml(question.category)}">${escapeHtml(question.categoryLabel || "")}</span>
        <span class="meta-chip">${escapeHtml(question.subcategoryLabel || "")}</span>
        <span class="meta-chip soft">${escapeHtml(difficultyLabel(question.difficulty) || "")}</span>
        ${question.type === "multi-select" ? '<span class="meta-chip multi">複数選択</span>' : ""}
      </div>
      <h2 class="prompt">${escapeHtml(question.prompt)}</h2>
      <div class="${question.type === "single-image-choice" ? "choices-grid image-grid" : "choices-grid text-grid"}">
        ${choicesHtml}
      </div>
      <p class="assist-text">${question.type === "multi-select" ? "正しいと思うものをすべて選んでから「答え合わせ」を押そう。" : "正しいと思う答えを1つ選ぼう。"}</p>
      <div class="button-row">
        <button class="primary-button big grow-button" data-action="submit-answer" ${canSubmit ? "" : "disabled"}>答え合わせ</button>
      </div>
    </section>
  `);
};

const updateChoiceSelectionUi = () => {
  const choiceButtons = app.querySelectorAll("button[data-choice-id]");
  choiceButtons.forEach((button) => {
    const choiceId = button.dataset.choiceId || "";
    const selected = state.selectedIds.includes(choiceId);
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  const submitButton = app.querySelector('button[data-action="submit-answer"]');
  if (submitButton) {
    submitButton.disabled = state.selectedIds.length === 0;
  }
};

const renderReview = () => {
  const question = currentQuestion();
  const selectedIds = state.answers[question.id] || [];
  const correct = isAnswerCorrect(question, selectedIds);
  const correctIds = getCorrectChoiceIds(question);
  const choices = orderedChoices(question);

  const choiceRows = choices
    .map((choice, index) => {
      const selected = selectedIds.includes(choice.id);
      const choiceCorrect = correctIds.includes(choice.id);
      const rowClass = [
        "explanation-row",
        choiceCorrect ? "is-correct-choice" : "",
        selected && !choiceCorrect ? "is-wrong-selected" : ""
      ]
        .filter(Boolean)
        .join(" ");
      const badges = [
        choiceCorrect ? '<span class="badge correct-badge">正解</span>' : "",
        selected ? '<span class="badge selected-badge">あなたの答え</span>' : ""
      ].join("");

      const visual =
        question.type === "single-image-choice"
          ? `<span class="mini-flag">${getChoiceImageMarkup(choice)}</span>`
          : `<span class="verdict-dot ${choiceCorrect ? "ok" : "ng"}" aria-hidden="true">${choiceCorrect ? "○" : "×"}</span>`;

      return `
        <li class="${rowClass}">
          ${visual}
          <div class="row-body">
            <div class="row-title">
              <span class="key-chip small" aria-hidden="true">${choiceKeyLabels[index]}</span>
              <strong>${escapeHtml(choice.label)}</strong>
              ${badges}
            </div>
            <p>${escapeHtml(choice.explanation)}</p>
          </div>
        </li>
      `;
    })
    .join("");

  const isLast = state.currentIndex + 1 === state.questionOrder.length;

  renderShell(`
    <section class="screen-card quiz-card">
      ${renderProgress()}
      <div class="result-banner ${correct ? "correct" : "incorrect"}" role="status" aria-live="polite">
        <span class="banner-icon" aria-hidden="true">${correct ? "○" : "×"}</span>
        <div>
          <span class="banner-title">${correct ? "正解！" : "ざんねん！"}</span>
          <span class="banner-sub">${correct ? "ナイス！その調子。" : "解説を読めば、もう忘れない。"}</span>
        </div>
      </div>
      <h2 class="prompt review-prompt">${escapeHtml(question.prompt)}</h2>
      <p class="overall">${escapeHtml(question.overallExplanation)}</p>
      <ul class="explanation-list" aria-label="すべての選択肢の解説">
        ${choiceRows}
      </ul>
      <div class="button-row">
        <button class="primary-button big grow-button" data-action="next-question">${isLast ? "結果を見る" : "次の問題へ →"}</button>
      </div>
    </section>
  `);
};

const renderResult = () => {
  const correctCount = countCorrectAnswers(state.questionOrder, state.answers);
  const totalCount = state.questionOrder.length;
  const score = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const stats = state.statsSaved ? loadStats() : saveCompletedSession(score);
  state.statsSaved = true;
  const perfect = correctCount === totalCount && totalCount > 0;

  const breakdown = state.questionOrder
    .map((question) => {
      const ok = isAnswerCorrect(question, state.answers[question.id] || []);
      return `
        <li class="breakdown-row">
          <span class="verdict-dot ${ok ? "ok" : "ng"}" aria-hidden="true">${ok ? "○" : "×"}</span>
          <span class="breakdown-title">${escapeHtml(question.title)}</span>
        </li>
      `;
    })
    .join("");

  renderShell(`
    <section class="screen-card result-card${perfect ? " is-perfect" : ""}">
      <p class="eyebrow">けっか発表</p>
      <p class="score-display"><span class="score-number">${score}</span><span class="score-unit">点</span></p>
      <p class="score-line">${correctCount}問正解 / 全${totalCount}問</p>
      <p class="result-message">${escapeHtml(getResultMessage(correctCount, totalCount))}</p>
      <div class="stats-strip compact" aria-label="保存された記録">
        <div><span>${stats.bestScore}<small class="unit">点</small></span><small>ベストスコア</small></div>
        <div><span>${stats.completedSessions}<small class="unit">回</small></span><small>クリア回数</small></div>
        <div><span class="date-value">${stats.lastPlayedDate || "—"}</span><small>前回プレイ</small></div>
      </div>
      <details class="breakdown">
        <summary>問題ごとの結果を見る</summary>
        <ul class="breakdown-list">${breakdown}</ul>
      </details>
      <div class="button-row centered">
        <button class="primary-button big" data-action="restart">もう一度遊ぶ</button>
        <button class="ghost-button" data-action="home">ホームへ戻る</button>
      </div>
    </section>
  `);
};

const renderHelp = () => {
  renderShell(`
    <section class="screen-card help-card">
      <p class="eyebrow">使い方</p>
      <h2>オフラインで遊べます</h2>
      <div class="help-list">
        <p>このクイズは1つのHTMLファイルだけで動きます。一度開ければ、インターネットは必要ありません。</p>
        <p><strong>パソコン・Androidの人:</strong> ファイルをChromeやSafariなどのブラウザで開くと、今のこの画面（フル機能版）で遊べます。</p>
        <p><strong>iPhone・iPadの人:</strong> LINEや「ファイル」アプリから開くと、自動的に「プレビュー版」になります。見た目が少しちがいますが、全部の問題・答え・解説で遊べます（シャッフル出題と点数の保存はありません）。</p>
        <p>飛行機の中で遊びたい人は、乗る前に一度開いて、動くことを確認しておいてね。</p>
        <p>フル機能版では選択肢の順番が毎回シャッフルされ、ベストスコアはこの端末に保存されます。</p>
      </div>
      <div class="button-row">
        <button class="primary-button big" data-action="start">クイズを始める</button>
        <button class="ghost-button" data-action="home">ホームへ戻る</button>
      </div>
    </section>
  `);
};

const startQuiz = (selectedQuestions, limit) => {
  let order = shuffleArray(selectedQuestions);
  if (limit) {
    order = order.slice(0, limit);
  }

  state.questionOrder = order;
  state.choiceOrders = {};
  order.forEach((question) => {
    state.choiceOrders[question.id] = shuffleArray(question.choices.map((choice) => choice.id));
  });
  state.currentIndex = 0;
  state.selectedIds = [];
  state.answers = {};
  state.statsSaved = false;
  setScreen("question");
};

const selectSingle = (choiceId) => {
  state.selectedIds = [choiceId];
  updateChoiceSelectionUi();
};

const toggleMulti = (choiceId) => {
  state.selectedIds = state.selectedIds.includes(choiceId)
    ? state.selectedIds.filter((id) => id !== choiceId)
    : [...state.selectedIds, choiceId];
  updateChoiceSelectionUi();
};

const submitAnswer = () => {
  const question = currentQuestion();
  if (state.selectedIds.length === 0) {
    return;
  }
  state.answers[question.id] = [...state.selectedIds];
  setScreen("review");
};

const nextQuestion = () => {
  if (state.currentIndex + 1 >= state.questionOrder.length) {
    setScreen("result");
    return;
  }

  state.currentIndex += 1;
  state.selectedIds = [];
  setScreen("question");
};

const quitQuiz = () => {
  state.questionOrder = [];
  state.currentIndex = 0;
  state.selectedIds = [];
  state.answers = {};
  state.statsSaved = false;
  setScreen("home");
};

const playMode = (modeId) => {
  const mode = quizModes.find((item) => item.id === modeId);
  if (!mode) {
    return;
  }

  startQuiz(questions.filter(mode.filter), mode.limit);
};

const handleClick = (event) => {
  const target = event.target;
  const actionElement = target.closest("[data-action]");
  if (!actionElement) {
    return;
  }

  const action = actionElement.dataset.action;
  const choiceId = actionElement.dataset.choiceId;
  const modeId = actionElement.dataset.modeId;

  if (action === "home") setScreen("home");
  if (action === "help") setScreen("help");
  if (action === "browse") setScreen("browse");
  if (action === "start" || action === "restart") setScreen("select");
  if (action === "play-mode" && modeId) playMode(modeId);
  if (action === "select-single" && choiceId) selectSingle(choiceId);
  if (action === "toggle-multi" && choiceId) toggleMulti(choiceId);
  if (action === "submit-answer") submitAnswer();
  if (action === "next-question") nextQuestion();
  if (action === "quit-quiz") quitQuiz();
};

// キーボード操作: 数字キーで選択、Enterで答え合わせ・次へ
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    // ボタンにフォーカスがある場合はネイティブのクリックに任せる
    if (event.target instanceof Element && event.target.closest("button")) {
      return;
    }
    if (state.screen === "question") submitAnswer();
    if (state.screen === "review") nextQuestion();
    return;
  }

  if (state.screen !== "question") {
    return;
  }

  const index = Number.parseInt(event.key, 10) - 1;
  if (Number.isNaN(index)) {
    return;
  }

  const question = currentQuestion();
  const choices = orderedChoices(question);
  const choice = choices[index];
  if (!choice) {
    return;
  }

  if (question.type === "multi-select") {
    toggleMulti(choice.id);
  } else {
    selectSingle(choice.id);
  }
};

const render = () => {
  if (state.screen === "home") renderHome();
  if (state.screen === "select") renderSelect();
  if (state.screen === "question") renderQuestion();
  if (state.screen === "review") renderReview();
  if (state.screen === "result") renderResult();
  if (state.screen === "help") renderHelp();
  if (state.screen === "browse") renderBrowse();
};

// 予期しないエラーで真っ暗な画面のまま止まらないように、エラーを画面に出す
let errorBannerShown = false;
window.addEventListener("error", (event) => {
  if (errorBannerShown) {
    return;
  }
  errorBannerShown = true;
  const banner = document.createElement("div");
  banner.className = "error-banner";
  banner.textContent = `エラーが起きました: ${event.message || "不明なエラー"}`;
  document.body.prepend(banner);
});

app.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);
render();
