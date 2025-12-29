
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_DATA } from '../constants';
import { QuizAnswer } from '../types';

interface QuizProps {
  onFinish: (answers: QuizAnswer[]) => void;
  onGoDirectly: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onGoDirectly }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleAnswer = (option: string) => {
    const newAnswers = [
      ...answers,
      { question: QUIZ_QUESTIONS[currentIdx].text, answer: option }
    ];
    setAnswers(newAnswers);

    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      {/* Background with blurred content */}
      <div className="absolute inset-0 bg-luxury/90 backdrop-blur-lg" />
      
      <div className="relative z-10 w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-6 border border-slate-100 overflow-hidden">
        {/* Header inside Quiz */}
        <div className="text-center mb-4">
          <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Avaliação Personalizada</p>
          <h2 className="text-lg font-serif text-slate-800">Dra. Carolina Albuquerque</h2>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1 rounded-full mb-6">
          <div 
            className="bg-gold h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="min-h-[250px] flex flex-col">
          <h3 className="text-xl font-serif text-slate-900 mb-6 leading-snug">
            {QUIZ_QUESTIONS[currentIdx].text}
          </h3>

          <div className="space-y-2 flex-grow">
            {QUIZ_QUESTIONS[currentIdx].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-xl border-2 border-slate-50 bg-slate-50 hover:border-gold hover:bg-gold/5 transition-all text-slate-700 font-medium text-sm active:scale-98"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={onGoDirectly}
          className="mt-6 w-full text-center text-slate-400 text-xs hover:text-slate-600 transition-colors"
        >
          Pular e ir para o site
        </button>
      </div>
    </div>
  );
};

export default Quiz;
