
import React, { useState, useEffect } from 'react';
import { ViewState, QuizAnswer } from './types.ts';
import InitialSelection from './components/InitialSelection.tsx';
import Quiz from './components/Quiz.tsx';
import QuizResult from './components/QuizResult.tsx';
import MainSite from './components/MainSite.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.INITIAL);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleStartQuiz = () => setView(ViewState.QUIZ);
  const handleGoDirectly = () => setView(ViewState.MAIN);
  
  const handleQuizFinish = (results: QuizAnswer[]) => {
    setAnswers(results);
    setView(ViewState.RESULT);
  };

  const handleGoToSiteFromResult = () => setView(ViewState.MAIN);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-luxury text-slate-900 overflow-x-hidden">
      {view === ViewState.INITIAL && (
        <InitialSelection 
          onStartQuiz={handleStartQuiz} 
          onGoDirectly={handleGoDirectly} 
        />
      )}

      {view === ViewState.QUIZ && (
        <Quiz 
          onFinish={handleQuizFinish} 
          onGoDirectly={handleGoDirectly}
        />
      )}

      {view === ViewState.RESULT && (
        <QuizResult 
          answers={answers}
          onContinue={handleGoToSiteFromResult}
        />
      )}

      {view === ViewState.MAIN && (
        <MainSite />
      )}
    </div>
  );
};

export default App;
