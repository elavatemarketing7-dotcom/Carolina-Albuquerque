
import React, { useState } from 'react';
import { EXPERT_DATA } from '../constants.tsx';

const MainSite: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const openLightbox = (url: string) => setSelectedImg(url);
  const closeLightbox = () => setSelectedImg(null);

  const CTAButton = ({ text = "Agendar consulta no WhatsApp", variant = "primary" }) => (
    <div className="flex flex-col items-center">
      <a 
        href={EXPERT_DATA.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full max-w-xs text-center px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all active:scale-95 animate-bounce-slow ${
          variant === "primary" ? "whatsapp-green text-white" : "bg-gold text-white"
        }`}
      >
        {text}
      </a>
      <span className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-medium">Sem compromisso</span>
    </div>
  );

  return (
    <div className="animate-fade-in">
      {/* 1. HERO SECTION - Otimizada para visibilidade total da imagem */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-slate-100">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img 
            src={EXPERT_DATA.IMAGES.PRIMARY} 
            alt="Dra Carolina Albuquerque" 
            className="w-full h-full object-cover object-[center_top] md:object-[right_top] transition-transform duration-[2s] hover:scale-105"
          />
          {/* Gradiente sutil para leitura no mobile (mais escuro em baixo) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent md:via-transparent" />
          
          {/* Gradiente lateral para desktop (protege o texto à esquerda) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/20 to-transparent hidden md:block" />
        </div>
        
        <div className="relative z-10 px-6 pb-20 w-full max-w-5xl mx-auto md:mx-0 md:pl-12 lg:pl-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] font-bold drop-shadow-lg">
              "Eu sou Carolina Albuquerque, e minha missão é revelar sua melhor versão."
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 font-medium leading-relaxed drop-shadow-md">
              Especialista em Harmonização Facial focada em <span className="text-gold font-bold underline decoration-gold/50 underline-offset-4">naturalidade</span> e <span className="text-gold font-bold underline decoration-gold/50 underline-offset-4">segurança</span>.
            </p>
            <div className="flex justify-start">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={EXPERT_DATA.IMAGES.AUTHORITY_2} 
                alt="Dra. Carolina Albuquerque" 
                className="relative rounded-3xl shadow-2xl z-10 w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full">Diferencial Premium</div>
            <h2 className="text-4xl font-serif text-slate-900 leading-tight">Muito prazer, sou Carolina.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Diferente de grandes clínicas impessoais, aqui o foco é você. Eu acredito que a harmonização não deve mudar quem você é, mas realçar os traços que te tornam única.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Avaliação facial estratégica e personalizada",
                "Uso dos melhores produtos do mercado mundial",
                "Acompanhamento direto comigo do início ao fim",
                "Ambiente exclusivo e atendimento com hora marcada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-slate-800 font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS (GALLERY) */}
      <section className="py-20 bg-luxury">
        <div className="px-6 mb-12 text-center">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Resultados que inspiram</h2>
          <p className="text-slate-500 max-w-md mx-auto italic">O equilíbrio perfeito entre a arte e a técnica para transformar vidas.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 px-2 md:px-8">
          {EXPERT_DATA.SOCIAL_PROOF.map((url, idx) => (
            <div 
              key={idx} 
              onClick={() => openLightbox(url)}
              className="aspect-square bg-slate-200 overflow-hidden cursor-zoom-in group rounded-lg"
            >
              <img 
                src={url} 
                loading="lazy"
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center px-6">
          <p className="text-[10px] text-slate-400 mb-8 uppercase tracking-widest font-bold">*Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.</p>
          <CTAButton text="Clique aqui para saber mais" />
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Avaliação Honesta", desc: "Apenas o que você realmente precisa, sem excessos ou empurra-empurra de serviços." },
            { title: "Atendimento Exclusivo", desc: "Você não é apenas um número. Cada paciente recebe minha atenção total e tempo necessário." },
            { title: "Clareza Total", desc: "Explico cada passo do método, os produtos utilizados e o que esperar de cada fase." },
            { title: "Segurança Absoluta", desc: "Protocolos rigorosos e técnica refinada para garantir sua tranquilidade total." }
          ].map((card, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-serif text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-serif text-gold mb-12">Seu Caminho para a Transformação</h2>
          
          <div className="space-y-12 relative z-10">
            {[
              { step: "01", title: "Contato Inicial", desc: "Conversamos via WhatsApp para entender suas expectativas básicas." },
              { step: "02", title: "Agendamento VIP", desc: "Escolhemos o melhor horário para sua consulta de avaliação presencial." },
              { step: "03", title: "Avaliação e Plano", desc: "Realizamos o mapeamento facial e definimos o método ideal para seu rosto." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold font-bold mb-4 bg-gold/5">
                  {step.step}
                </div>
                <h4 className="text-xl font-serif mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.desc}</p>
                {i < 2 && <div className="h-12 w-px bg-gold/20 my-4" />}
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <CTAButton text="Quero minha avaliação exclusiva" variant="gold" />
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <section className="py-20 bg-white">
        <div className="px-6 mb-12 text-center">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Bastidores e Expertise</h2>
          <p className="text-slate-500">Harmonização Facial feita com amor e dedicação total.</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x no-scrollbar">
          {EXPERT_DATA.HARMONIZATION_GALLERY.map((url, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[350px] h-[450px] rounded-[2rem] overflow-hidden snap-center shadow-2xl">
              <img 
                src={url} 
                alt="Expert Work" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 text-center bg-luxury relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <img src={EXPERT_DATA.IMAGES.AUTHORITY_3} className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Pronta para elevar sua autoestima?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            A consulta de avaliação é o primeiro passo para o seu novo eu. Vamos descobrir juntas o que é melhor para você.
          </p>
          <CTAButton />
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-100 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-serif italic text-gold">{EXPERT_DATA.NAME}</h3>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-2 font-bold">{EXPERT_DATA.PROFISSAO}</p>
        </div>
        <div className="space-y-2 text-slate-600 mb-8 text-sm">
          <p>{EXPERT_DATA.ADDRESS}</p>
          <a href={EXPERT_DATA.INSTAGRAM} target="_blank" className="text-gold font-bold underline decoration-gold/30 hover:decoration-gold transition-all">@dracarolinaralbuquerque</a>
        </div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} Todos os direitos reservados. Design Premium.</p>
      </footer>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/98 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10"
            alt="Lightbox"
          />
          <button className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition-transform">&times;</button>
        </div>
      )}
    </div>
  );
};

export default MainSite;
