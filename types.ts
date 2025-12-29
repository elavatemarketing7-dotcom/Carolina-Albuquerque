
export enum ViewState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
  MAIN = 'MAIN'
}

export interface QuizAnswer {
  question: string;
  answer: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}
