
import React, { useState, useEffect } from 'react';
import { ViewState, QuizAnswer } from './types';
import { EXPERT_DATA } from './constants';
import InitialSelection from './components/InitialSelection';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import MainSite from './components/MainSite';

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

  // Smooth scroll to top on view change
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
