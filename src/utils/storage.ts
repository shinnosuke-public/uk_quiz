const STORAGE_KEY = "uk_quiz_stats_v1";

const defaultStats = {
  bestScore: 0,
  completedSessions: 0,
  lastPlayedDate: null
};

const canUseLocalStorage = () => {
  try {
    const testKey = "__uk_quiz_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

export const loadStats = () => {
  if (!canUseLocalStorage()) {
    return { ...defaultStats };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...defaultStats };
    }

    const parsed = JSON.parse(raw);
    return {
      bestScore: typeof parsed.bestScore === "number" ? parsed.bestScore : 0,
      completedSessions:
        typeof parsed.completedSessions === "number" ? parsed.completedSessions : 0,
      lastPlayedDate: typeof parsed.lastPlayedDate === "string" ? parsed.lastPlayedDate : null
    };
  } catch {
    return { ...defaultStats };
  }
};

export const saveCompletedSession = (score) => {
  const previous = loadStats();
  const next = {
    bestScore: Math.max(previous.bestScore, score),
    completedSessions: previous.completedSessions + 1,
    lastPlayedDate: new Date().toLocaleDateString("ja-JP")
  };

  if (!canUseLocalStorage()) {
    return next;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    return next;
  }

  return next;
};
