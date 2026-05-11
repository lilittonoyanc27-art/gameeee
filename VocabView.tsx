import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, ArrowLeft,
  Sparkles, Gem, Info
} from 'lucide-react';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  const quedarTable = [
    { p: "Yo", c: "quedo" },
    { p: "Tú", c: "quedas" },
    { p: "Él/Ella/Usted", c: "queda" },
    { p: "Nosotros", c: "quedamos" },
    { p: "Vosotros", c: "quedáis" },
    { p: "Ellos/Ellas/Ustedes", c: "quedan" }
  ];

  const quedarseTable = [
    { p: "Yo", c: "me quedo" },
    { p: "Tú", c: "te quedas" },
    { p: "Él/Ella/Usted", c: "se queda" },
    { p: "Nosotros", c: "nos quedamos" },
    { p: "Vosotros", c: "os quedáis" },
    { p: "Ellos/Ellas/Ustedes", c: "se quedan" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 pt-8 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex p-3 bg-indigo-100 rounded-2xl shadow-inner">
           <BookOpen className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 uppercase italic tracking-tighter">
          ԲԱՑԱՏՐՈՒԹՅՈՒՆ
        </h2>
        <p className="text-slate-500 font-bold italic max-w-xl mx-auto uppercase tracking-widest text-xs">
          QUEDAR vs QUEDARSE
        </p>
      </section>

      {/* Tables */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-cyan-50 rounded-[40px] p-8 border border-cyan-100 space-y-6 shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-cyan-200 pb-4">
            <Gem className="text-cyan-600 w-8 h-8" />
            <h3 className="text-3xl font-black text-cyan-900 italic uppercase">QUEDAR</h3>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-inner font-sans">
             {quedarTable.map((row) => (
               <div key={row.p} className="flex border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="w-1/2 p-4 font-black italic text-slate-400 uppercase text-xs tracking-widest">{row.p}</div>
                  <div className="w-1/2 p-4 font-black text-slate-900 italic text-xl uppercase">{row.c}</div>
               </div>
             ))}
          </div>
          <div className="p-4 bg-white/50 rounded-2xl border border-cyan-100/50 flex gap-3 text-sm text-cyan-900 leading-relaxed italic">
             <Info className="shrink-0 w-5 h-5 text-cyan-600" />
             <span>Օգտագործվում է պայմանավորվելու կամ հանդիպելու համար։</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-rose-50 rounded-[40px] p-8 border border-rose-100 space-y-6 shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
            <Gem className="text-rose-600 w-8 h-8" />
            <h3 className="text-3xl font-black text-rose-900 italic uppercase">QUEDARSE</h3>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-inner font-sans">
             {quedarseTable.map((row) => (
               <div key={row.p} className="flex border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="w-1/2 p-4 font-black italic text-slate-400 uppercase text-xs tracking-widest">{row.p}</div>
                  <div className="w-1/2 p-4 font-black text-slate-900 italic text-xl uppercase">{row.c}</div>
               </div>
             ))}
          </div>
          <div className="p-4 bg-white/50 rounded-2xl border border-rose-100/50 flex gap-3 text-sm text-rose-900 leading-relaxed italic">
             <Info className="shrink-0 w-5 h-5 text-rose-600" />
             <span>Անդրադարձ բայ՝ նշանակում է մնալ մի վայրում։</span>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="bg-indigo-600 rounded-[48px] p-8 sm:p-12 text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Sparkles className="w-32 h-32 rotate-12" />
        </div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">Պատրա՞ստ են Գոռն ու Գայանեն</h3>
          <p className="text-indigo-100 font-bold opacity-80 italic uppercase tracking-widest text-xs">Սկսեք մրցույթը և ստուգեք ձեր գիտելիքները:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            ՍԿՍԵԼ ՄՐՑՈՒՅԹԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-indigo-500/30 backdrop-blur-md text-white border border-indigo-400 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:bg-indigo-500/50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}
