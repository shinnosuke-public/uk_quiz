import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const entry = resolve(root, "src", "main.ts");
const distPath = resolve(root, "dist", "uk_quiz.html");

const importPattern = /^\s*import\s+(?:[^"']+\s+from\s+)?["'](.+)["'];\s*$/gm;

const resolveModule = (fromFile, specifier) => {
  if (!specifier.startsWith(".")) {
    throw new Error(`External import is not allowed: ${specifier}`);
  }

  const basePath = resolve(dirname(fromFile), specifier);
  return extname(basePath) ? basePath : `${basePath}.ts`;
};

const readModuleGraph = async (filePath, seen = new Set(), ordered = []) => {
  if (seen.has(filePath)) {
    return ordered;
  }
  seen.add(filePath);

  const source = await readFile(filePath, "utf8");
  const dependencies = [...source.matchAll(importPattern)].map((match) =>
    resolveModule(filePath, match[1])
  );

  for (const dependency of dependencies) {
    await readModuleGraph(dependency, seen, ordered);
  }

  ordered.push({ filePath, source });
  return ordered;
};

const stripModuleSyntax = (source) =>
  source
    .replace(importPattern, "")
    .replace(/^\s*export\s+\{[^}]+\};?\s*$/gm, "")
    .replace(/\bexport\s+(const|let|var|function|class)\s+/g, "$1 ");

const assertNoRuntimeNetworkHints = (html) => {
  const forbiddenPatterns = [
    /\b(?:src|href|action)\s*=\s*["']https?:\/\//i,
    /\bfetch\s*\(\s*["']https?:\/\//i,
    /\bXMLHttpRequest\b/i,
    /\bmanifest\b/i,
    /serviceWorker/i,
    /navigator\.serviceWorker/i,
    /\bcdn\b/i,
    /googleapis/i,
    /googletagmanager/i,
    /analytics/i
  ];

  const found = forbiddenPatterns.find((pattern) => pattern.test(html));
  if (found) {
    throw new Error(`Generated HTML contains a forbidden runtime dependency hint: ${found}`);
  }
};

const evalLocalModule = async (relativePath, exportNames) => {
  const source = await readFile(resolve(root, relativePath), "utf8");
  const body = stripModuleSyntax(source);
  return new Function(`${body}\nreturn { ${exportNames.join(", ")} };`)();
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const choiceKeyLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

const difficultyLabel = (difficulty) => {
  const labels = {
    easy: "やさしい",
    normal: "ふつう",
    hard: "むずかしい"
  };
  return labels[difficulty] || "";
};

const getCorrectChoiceIdsForBuild = (question) => {
  if (question.type === "single-image-choice" || question.type === "single-text-choice") {
    return [question.correctChoiceId];
  }

  return question.choices.filter((choice) => choice.isCorrect).map((choice) => choice.id);
};

const buildStaticFallback = ({
  questions,
  crownSvg,
  heroSceneSvg,
  getFlagSvg,
  getIllustrationSvg,
  getMapImageDataUri
}) => {
  const getChoiceImageMarkup = (choice, key) => {
    if (!choice.imageId) {
      return "";
    }

    const mapImageDataUri = getMapImageDataUri(choice.imageId);
    if (mapImageDataUri) {
      return `<img class="choice-raster-image" src="${mapImageDataUri}" alt="選択肢${escapeHtml(key)}: ${escapeHtml(choice.label)}">`;
    }

    return getFlagSvg(choice.imageId) || getIllustrationSvg(choice.imageId);
  };

  const getQuestionImageMarkup = (question) => {
    if (!question.questionImageId) {
      return "";
    }

    const imageDataUri = getMapImageDataUri(question.questionImageId);
    if (!imageDataUri) {
      return "";
    }

    return `<img class="question-image" src="${imageDataUri}" alt="${escapeHtml(question.questionImageAlt || "問題の写真")}">`;
  };

  const groupedQuestions = new Map();
  questions.forEach((question, index) => {
    const key = `${question.categoryLabel}：${question.subcategoryLabel || "まとめ"}`;
    if (!groupedQuestions.has(key)) {
      groupedQuestions.set(key, []);
    }
    groupedQuestions.get(key).push({ question, index });
  });

  const listSections = Array.from(groupedQuestions.entries())
    .map(([label, items]) => {
      const links = items
        .map(
          ({ question, index }) => `
            <li>
              <a href="#static-q-${index + 1}">
                <span class="key-chip small" aria-hidden="true">${index + 1}</span>
                <span>${escapeHtml(question.title)}</span>
              </a>
            </li>
          `
        )
        .join("");

      const firstQuestion = items[0].question;
      return `
        <section class="mode-section browse-section" aria-label="${escapeHtml(label)}">
          <h3><span class="cat-tag cat-${escapeHtml(firstQuestion.category)}">${escapeHtml(firstQuestion.categoryLabel)}</span>${escapeHtml(firstQuestion.subcategoryLabel || "")}<span class="browse-count">${items.length}問</span></h3>
          <ol class="static-list">${links}</ol>
        </section>
      `;
    })
    .join("");

  // カテゴリーごとに独立した流れにして、「初級だけ」のような遊び方をJSなしで可能にする
  const groups = Array.from(groupedQuestions.entries()).map(([label, items]) => {
    const parts = label.split("：");
    return { label, category: parts[0], subcategory: parts[1] || parts[0], items };
  });

  const modeCards = groups
    .map(
      ({ category, subcategory, items }) => `
        <a class="mode-card static-mode-card" href="#static-q-${items[0].index + 1}">
          <span class="mode-top">
            <span class="mode-kicker cat-${escapeHtml(items[0].question.category)}">${escapeHtml(category)}</span>
            <span class="mode-count">${items.length}問</span>
          </span>
          <strong>${escapeHtml(subcategory)}</strong>
        </a>
      `
    )
    .join("");

  const renderStaticQuestion = (question, questionIndex, positionInGroup, group, groupIndex) => {
      const correctIds = getCorrectChoiceIdsForBuild(question);
      const isImageQuestion = question.type === "single-image-choice";
      const inputType = question.type === "multi-select" ? "checkbox" : "radio";
      const questionId = `static-q-${questionIndex + 1}`;
      const nextId =
        positionInGroup + 1 < group.items.length
          ? `static-q-${group.items[positionInGroup + 1].index + 1}`
          : `static-goal-${groupIndex}`;

      const choicesHtml = question.choices
        .map((choice, choiceIndex) => {
          const key = choiceKeyLabels[choiceIndex] || String(choiceIndex + 1);
          const isCorrect = correctIds.includes(choice.id);
          const imageMarkup = isImageQuestion ? getChoiceImageMarkup(choice, key) : "";
          const label =
            isImageQuestion && choice.label === "これ！"
              ? `選択肢${key}`
              : choice.label;

          return `
            <label class="static-choice ${isImageQuestion ? "static-image-choice" : "static-text-choice"} ${isCorrect ? "is-correct" : "is-wrong"}">
              <input type="${inputType}" name="${questionId}" value="${escapeHtml(choice.id)}">
              <span class="static-choice-content">
                ${imageMarkup ? `<span class="flag-frame">${imageMarkup}</span>` : ""}
                <span class="choice-bottom">
                  <span class="key-chip" aria-hidden="true">${escapeHtml(key)}</span>
                  <span class="choice-label">${escapeHtml(label)}</span>
                </span>
              </span>
              <span class="static-verdict ${isCorrect ? "ok" : "ng"}">${isCorrect ? "正解" : "ちがう"}</span>
            </label>
          `;
        })
        .join("");

      const answer = question.choices
        .map((choice, choiceIndex) => {
          if (!correctIds.includes(choice.id)) {
            return "";
          }
          const key = choiceKeyLabels[choiceIndex] || String(choiceIndex + 1);
          const label =
            isImageQuestion && choice.label === "これ！"
              ? `選択肢${key}`
              : choice.label;
          return `${key}：${label}`;
        })
        .filter(Boolean)
        .join("、");

      const explanationRows = question.choices
        .map((choice, choiceIndex) => {
          const key = choiceKeyLabels[choiceIndex] || String(choiceIndex + 1);
          const isCorrect = correctIds.includes(choice.id);
          const visual = isImageQuestion
            ? `<span class="mini-flag">${getChoiceImageMarkup(choice, key)}</span>`
            : `<span class="verdict-dot ${isCorrect ? "ok" : "ng"}" aria-hidden="true">${isCorrect ? "○" : "×"}</span>`;
          const label =
            isImageQuestion && choice.label === "これ！"
              ? `選択肢${key}`
              : choice.label;

          return `
            <li class="explanation-row ${isCorrect ? "is-correct-choice" : ""}">
              ${visual}
              <div class="row-body">
                <div class="row-title">
                  <span class="key-chip small" aria-hidden="true">${escapeHtml(key)}</span>
                  <strong>${escapeHtml(label)}</strong>
                  ${isCorrect ? '<span class="badge correct-badge">正解</span>' : ""}
                </div>
                <p>${escapeHtml(choice.explanation)}</p>
              </div>
            </li>
          `;
        })
        .join("");

      return `
        <section class="screen-card quiz-card static-question" id="${questionId}">
          <div class="quiz-topbar">
            <span class="progress-label">第${positionInGroup + 1}問 <small>/ ${escapeHtml(group.subcategory)} 全${group.items.length}問</small></span>
            <a class="quiet-button" href="#static-home">ホーム</a>
          </div>
          <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${group.items.length}" aria-valuenow="${positionInGroup}" aria-label="クイズの進み具合">
            <div class="progress-fill" style="width: ${Math.round((positionInGroup / group.items.length) * 100)}%"></div>
          </div>
          <div class="question-meta">
            <span class="meta-chip cat-${escapeHtml(question.category)}">${escapeHtml(question.categoryLabel || "")}</span>
            <span class="meta-chip">${escapeHtml(question.subcategoryLabel || "")}</span>
            <span class="meta-chip soft">${escapeHtml(difficultyLabel(question.difficulty))}</span>
            ${question.type === "multi-select" ? '<span class="meta-chip multi">複数選択</span>' : ""}
          </div>
          ${question.questionImageId ? `<div class="question-image-frame">${getQuestionImageMarkup(question)}</div>` : ""}
          <h2 class="prompt">${escapeHtml(question.prompt)}</h2>
          <fieldset class="static-choices ${isImageQuestion ? "static-image-grid" : "static-text-grid"}">
            <legend class="sr-only">選択肢</legend>
            ${choicesHtml}
          </fieldset>
          <details class="static-answer">
            <summary>答えと解説を見る</summary>
            <div class="browse-body">
              <p class="browse-answer"><span class="browse-answer-label">答え</span> ${escapeHtml(answer)}</p>
              <p class="overall">${escapeHtml(question.overallExplanation)}</p>
              <ul class="explanation-list" aria-label="すべての選択肢の解説">
                ${explanationRows}
              </ul>
            </div>
          </details>
          <div class="button-row">
            <a class="primary-button big grow-button" href="#${nextId}">${positionInGroup + 1 < group.items.length ? "次の問題へ" : "ゴールへ"}</a>
            <a class="ghost-button" href="#static-modes">モード選択へ</a>
          </div>
        </section>
      `;
  };

  const questionSections = groups
    .map((group, groupIndex) => {
      const sections = group.items
        .map(({ question, index }, positionInGroup) =>
          renderStaticQuestion(question, index, positionInGroup, group, groupIndex)
        )
        .join("");

      const nextGroup = groups[groupIndex + 1];
      const goalSection = `
        <section class="screen-card result-card static-end" id="static-goal-${groupIndex}">
          <p class="eyebrow">クリア</p>
          <h2>「${escapeHtml(group.subcategory)}」おわり！</h2>
          <p class="result-message">${nextGroup ? "おつかれさま！つづけて次のカテゴリーにも挑戦してみよう。" : "全カテゴリー制覇！本当におつかれさま！"}</p>
          <div class="button-row centered">
            ${
              nextGroup
                ? `<a class="primary-button big" href="#static-q-${nextGroup.items[0].index + 1}">次は「${escapeHtml(nextGroup.subcategory)}」へ</a>`
                : '<a class="primary-button big" href="#static-home">ホームへ戻る</a>'
            }
            <a class="ghost-button" href="#static-modes">モード選択へ</a>
          </div>
        </section>
      `;

      return sections + goalSection;
    })
    .join("");

  return `
      <main class="app-shell static-fallback" id="static-home">
        <header class="top-band" aria-label="アプリ情報">
          <div class="brand-mark">${crownSvg}</div>
          <div class="brand-text">
            <p class="brand-eyebrow">Quiz Trip to the UK</p>
            <h1>クイズで旅するイギリス</h1>
          </div>
        </header>
        <section class="hero-panel">
          <div class="hero-copy">
            <h2>イギリス入門クイズ</h2>
            <p>国旗や首都から、ハリー・ポッターの駅まで。旅行がもっと楽しくなる${questions.length}問を集めました。</p>
            <p class="static-note">この画面が出ている場合は、iPhoneのプレビュー用表示です。点数保存はありませんが、選択肢をタップして答えと解説を見ながら遊べます。</p>
            <div class="button-row">
              <a class="primary-button big" href="#static-modes">クイズを始める</a>
              <a class="ghost-button" href="#static-list">問題一覧を見る</a>
            </div>
          </div>
          <div class="hero-art" aria-hidden="true">
            ${heroSceneSvg}
          </div>
        </section>
        <section class="screen-card" id="static-modes">
          <div class="section-heading">
            <p class="eyebrow">モード選択</p>
            <h2>遊ぶクイズを選ぼう</h2>
            <p>カテゴリーを選ぶと、その範囲の問題だけを順番に遊べます。</p>
          </div>
          <div class="mode-grid">${modeCards}</div>
        </section>
        <section class="screen-card static-index" id="static-list">
          <div class="section-heading">
            <p class="eyebrow">問題一覧</p>
            <h2>ぜんぶで${questions.length}問</h2>
            <p>好きな問題から始めても、上から順番に進めても遊べます。</p>
          </div>
          ${listSections}
        </section>
        ${questionSections}
      </main>
  `;
};

const css = await readFile(resolve(root, "src", "styles.css"), "utf8");
const modules = await readModuleGraph(entry);
const bundle = modules
  .map(({ filePath, source }) => `// ${filePath.replace(`${root}/`, "")}\n${stripModuleSyntax(source)}`)
  .join("\n\n");

const js = `(() => {
"use strict";
${bundle}
})();`;

new Function(js);

const [{ questions }, illustrationAssets, flagAssets, mapAssets] = await Promise.all([
  evalLocalModule("src/data/questions.ts", ["questions"]),
  evalLocalModule("src/assets/illustrations.ts", [
    "crownSvg",
    "heroSceneSvg",
    "getIllustrationSvg"
  ]),
  evalLocalModule("src/assets/flags.ts", ["getFlagSvg"]),
  evalLocalModule("src/assets/generated/mapImages.ts", ["getMapImageDataUri"])
]);

const staticFallback = buildStaticFallback({
  questions,
  crownSvg: illustrationAssets.crownSvg,
  heroSceneSvg: illustrationAssets.heroSceneSvg,
  getIllustrationSvg: illustrationAssets.getIllustrationSvg,
  getFlagSvg: flagAssets.getFlagSvg,
  getMapImageDataUri: mapAssets.getMapImageDataUri
});

const html = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>クイズで旅するイギリス</title>
    <style>
${css}
    </style>
  </head>
  <body>
    <div id="app">
${staticFallback}
    </div>
    <script>
${js}
    </script>
  </body>
</html>
`;

assertNoRuntimeNetworkHints(html);
await mkdir(dirname(distPath), { recursive: true });
await writeFile(distPath, html, "utf8");
console.log(`Built ${distPath}`);
