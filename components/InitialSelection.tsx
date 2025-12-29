
import React from 'react';
import { EXPERT_DATA } from '../constants';

interface InitialSelectionProps {
  onStartQuiz: () => void;
  onGoDirectly: () => void;
}

const InitialSelection: React.FC<InitialSelectionProps> = ({ onStartQuiz, onGoDirectly }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 grayscale"
        style={{ backgroundImage: `url(${EXPERT_DATA.IMAGES.PRIMARY})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-2xl">
        <h1 className="text-3xl font-serif mb-2">Bem-vinda</h1>
        <p className="text-sm text-slate-600 mb-8 font-medium uppercase tracking-widest">Dra. Carolina Albuquerque</p>
        
        <p className="mb-8 text-slate-700">
          Para uma experiência personalizada e exclusiva, escolha como deseja continuar:
        </p>
        
        <button 
          onClick={onStartQuiz}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl mb-4 font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform active:scale-95 animate-bounce-slow"
        >
          Fazer Avaliação Personalizada
        </button>
        
        <button 
          onClick={onGoDirectly}
          className="w-full border-2 border-slate-900 text-slate-900 py-5 rounded-2xl font-semibold hover:bg-slate-50 transition-colors"
        >
          Ir direto para o site
        </button>
      </div>
    </div>
  );
};

export default InitialSelection;
