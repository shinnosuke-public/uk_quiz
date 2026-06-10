export const getCorrectChoiceIds = (question) => {
  if (question.type === "single-image-choice" || question.type === "single-text-choice") {
    return [question.correctChoiceId];
  }

  return question.choices.filter((choice) => choice.isCorrect).map((choice) => choice.id);
};

export const isAnswerCorrect = (question, selectedIds) => {
  const selected = [...selectedIds].sort();
  const correct = getCorrectChoiceIds(question).sort();

  return selected.length === correct.length && selected.every((id, index) => id === correct[index]);
};

export const countCorrectAnswers = (questions, answers) =>
  questions.reduce((count, question) => {
    return count + (isAnswerCorrect(question, answers[question.id] || []) ? 1 : 0);
  }, 0);

export const getResultMessage = (correctCount, totalCount) => {
  if (totalCount === 0) {
    return "またあとでクイズを追加して遊びましょう。";
  }

  const ratio = correctCount / totalCount;
  if (ratio === 1) {
    return "🏆 パーフェクト！きみはもうイギリス博士。現地ではガイド役をお願いします！";
  }
  if (ratio >= 0.8) {
    return "すごい！あと少しで満点。間違えた問題だけ、もう一度のぞいてみよう。";
  }
  if (ratio >= 0.5) {
    return "いい調子！解説を読んでからもう一度遊ぶと、ぐんと点が上がるよ。";
  }
  return "だいじょうぶ、ここからが本番。解説を読んで、もう一度チャレンジしよう！";
};
