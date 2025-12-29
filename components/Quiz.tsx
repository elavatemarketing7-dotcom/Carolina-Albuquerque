
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_DATA } from '../constants.tsx';
import { QuizAnswer } from '../types.ts';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 overflow-hidden">
      {/* Background Image for the whole Quiz screen */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-top grayscale opacity-30 transition-opacity duration-700"
        style={{ backgroundImage: `url(${EXPERT_DATA.IMAGES.PRIMARY})` }}
      />
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-luxury/80 backdrop-blur-xl z-1" />
      
      <div className="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh] animate-fade-in">
        
        {/* Header Image inside Quiz Card with premium frame effect */}
        <div className="relative h-44 shrink-0 overflow-hidden">
          <img 
            src={EXPERT_DATA.IMAGES.PRIMARY} 
            alt="Dra. Carolina Albuquerque" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          
          {/* Floating Avatar inside Header */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 rounded-full p-1 bg-white shadow-lg">
              <img 
                src={EXPERT_DATA.IMAGES.AUTHORITY_2} 
                alt="Avatar" 
                className="w-full h-full rounded-full object-cover border border-slate-100"
              />
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-10 flex flex-col overflow-y-auto">
          {/* Dr. Name */}
          <div className="text-center mb-4">
             <p className="text-[9px] uppercase tracking-widest text-gold font-bold mb-1">Passo {currentIdx + 1} de {QUIZ_QUESTIONS.length}</p>
            <h2 className="text-lg font-serif text-slate-800 leading-none">Dra. Carolina Albuquerque</h2>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1 rounded-full mb-8">
            <div 
              className="bg-gold h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(191,160,96,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-serif text-slate-900 mb-6 leading-snug min-h-[3.5rem] text-center">
              {QUIZ_QUESTIONS[currentIdx].text}
            </h3>

            <div className="space-y-3 mb-4">
              {QUIZ_QUESTIONS[currentIdx].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-center p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-gold hover:bg-white hover:shadow-lg hover:shadow-gold/5 transition-all text-slate-700 font-medium text-sm active:scale-[0.98]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={onGoDirectly}
            className="mt-2 w-full text-center text-slate-400 text-[10px] uppercase tracking-widest hover:text-slate-600 transition-colors py-2"
          >
            Sair e ir para o site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
