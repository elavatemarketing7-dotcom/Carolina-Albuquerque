
import React from 'react';
import { EXPERT_DATA } from '../constants';
import { QuizAnswer } from '../types';

interface QuizResultProps {
  answers: QuizAnswer[];
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ answers, onContinue }) => {
  const formatWhatsAppLink = () => {
    const base = EXPERT_DATA.WHATSAPP;
    const summary = answers.map(a => `*${a.question}*: ${a.answer}`).join('%0A');
    const text = `%0AOlá Dra. Carolina! Acabei de fazer a avaliação no seu site.%0A%0AMeus resultados:%0A${summary}%0A%0AGostaria de saber mais sobre o método.`;
    return `${base}&text=${text}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 py-8">
      <div className="w-full max-w-md text-center space-y-4 animate-fade-in">
        {/* Profile Image - Smaller for mobile compact view */}
        <div className="relative inline-block">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold to-yellow-200 rounded-full blur-md opacity-30 animate-pulse" />
          <img 
            src={EXPERT_DATA.IMAGES.AUTHORITY_2} 
            alt="Dra Carolina" 
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover border-4 border-gold shadow-2xl"
          />
        </div>

        <div className="space-y-1">
          <span className="inline-block px-3 py-0.5 bg-gold text-slate-900 text-[10px] font-bold rounded-full uppercase tracking-tighter">
            Perfil Compatível. Você é a Paciente Ideal.
          </span>
          <h2 className="text-2xl font-serif text-gold leading-tight">
            Análise Concluída
          </h2>
        </div>

        <p className="text-base text-slate-300 px-2 leading-snug">
          "Com base nas suas respostas, o Método da <span className="text-gold font-bold">Carolina Albuquerque</span> consegue entregar exatamente a naturalidade e segurança que você procura."
        </p>

        <div className="space-y-2 pt-2 px-2">
          <a 
            href={formatWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full whatsapp-green text-white py-4 rounded-xl font-bold text-base shadow-xl animate-bounce-slow"
          >
            1. Enviar minha avaliação à DRA.
          </a>
          
          <a 
            href={EXPERT_DATA.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-slate-900 py-4 rounded-xl font-bold text-base shadow-xl"
          >
            2. Chamar no WhatsApp sem compromisso
          </a>

          <button 
            onClick={onContinue}
            className="block w-full border-2 border-white/10 text-white/50 py-3.5 rounded-xl font-semibold text-base hover:bg-white/5 transition-colors"
          >
            3. Não enviar e continuar no site
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
