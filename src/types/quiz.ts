export type Difficulty = "easy" | "normal" | "hard";

export type QuestionType = "single-text-choice" | "single-image-choice" | "multi-select";

export type Category = "general" | "origin";

export type Subcategory =
  | "easy"
  | "normal"
  | "hard"
  | "food"
  | "sports"
  | "transport"
  | "fashion"
  | "culture"
  | "tech";

export type SingleChoice = {
  id: string;
  label: string;
  explanation: string;
};

export type ImageChoice = SingleChoice & {
  imageId: string;
};

export type MultiChoice = SingleChoice & {
  isCorrect: boolean;
};

export type BaseQuestion = {
  id: string;
  category: Category;
  categoryLabel: string;
  subcategory?: Subcategory;
  subcategoryLabel?: string;
  difficulty: Difficulty;
  title: string;
  prompt: string;
  overallExplanation: string;
};

export type SingleTextChoiceQuestion = BaseQuestion & {
  type: "single-text-choice";
  choices: SingleChoice[];
  correctChoiceId: string;
};

export type SingleImageChoiceQuestion = BaseQuestion & {
  type: "single-image-choice";
  choices: ImageChoice[];
  correctChoiceId: string;
};

export type MultiSelectQuestion = BaseQuestion & {
  type: "multi-select";
  choices: MultiChoice[];
};

export type Question =
  | SingleTextChoiceQuestion
  | SingleImageChoiceQuestion
  | MultiSelectQuestion;

export type StoredStats = {
  bestScore: number;
  completedSessions: number;
  lastPlayedDate: string | null;
};
