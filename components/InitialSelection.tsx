
import React from 'react';
import { EXPERT_DATA } from '../constants.tsx';

interface InitialSelectionProps {
  onStartQuiz: () => void;
  onGoDirectly: () => void;
}

const InitialSelection: React.FC<InitialSelectionProps> = ({ onStartQuiz, onGoDirectly }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 grayscale blur-[2px]"
        style={{ backgroundImage: `url(${EXPERT_DATA.IMAGES.PRIMARY})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Foto Flutuante em Moldura */}
        <div className="relative mb-8 animate-float">
          <div className="absolute -inset-4 bg-gold/20 rounded-full blur-2xl opacity-50" />
          <div className="relative w-40 h-40 rounded-full p-1.5 bg-gradient-to-b from-gold via-white to-gold shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/50">
              <img 
                src={EXPERT_DATA.IMAGES.AUTHORITY_2} 
                alt="Dra. Carolina" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
          {/* Badge flutuante na moldura */}
          <div className="absolute -bottom-2 -right-2 bg-white text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-gold/30 uppercase tracking-tighter">
            Especialista
          </div>
        </div>

        <div className="w-full bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-2xl">
          <h1 className="text-3xl font-serif mb-1">Bem-vinda</h1>
          <p className="text-[10px] text-gold mb-6 font-bold uppercase tracking-[0.2em]">Dra. Carolina Albuquerque</p>
          
          <p className="mb-8 text-slate-600 text-sm leading-relaxed">
            Sua beleza é única. Inicie sua jornada de transformação com uma avaliação personalizada baseada no meu método exclusivo.
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={onStartQuiz}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-gold/20 transition-all active:scale-95 animate-bounce-slow"
            >
              Fazer Avaliação Agora
            </button>
            
            <button 
              onClick={onGoDirectly}
              className="w-full text-slate-500 py-3 rounded-2xl font-semibold text-sm hover:text-slate-800 transition-colors"
            >
              Pular avaliação e ir ao site
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default InitialSelection;
