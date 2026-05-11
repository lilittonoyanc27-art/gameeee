import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, RotateCcw, 
  Star, CheckCircle2, 
  AlertCircle,
  Gem,
  ArrowLeft,
  Users
} from 'lucide-react';
import { CONJUGATION_CHALLENGES } from './vocabData';

interface Player {
  name: string;
  points: number;
  color: string;
  avatar: string;
}

export default function ConjugationGameView({ onBack }: { onBack: () => void }) {
  const [players, setPlayers] = useState<Player[]>([
    { name: 'Գոռ', points: 0, color: 'bg-cyan-500', avatar: '👦' },
    { name: 'Գայանե', points: 0, color: 'bg-rose-500', avatar: '👧' }
  ]);
  
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const currentChallenge = CONJUGATION_CHALLENGES[currentIndex];
  const currentPlayer = players[currentPlayerIndex];

  const handleOptionClick = (option: string) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(option);
    const correct = option === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      const newPlayers = [...players];
      newPlayers[currentPlayerIndex].points += 10;
      setPlayers(newPlayers);
    }
    
    setTimeout(() => {
      nextTurn();
    }, 2500);
  };

  const nextTurn = () => {
    setIsCorrect(null);
    setSelectedOption(null);
    setCurrentPlayerIndex((prev) => (prev === 0 ? 1 : 0));
    
    if (currentIndex < CONJUGATION_CHALLENGES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameCompleted(true);
    }
  };

  const resetGame = () => {
    setPlayers(p => p.map(player => ({ ...player, points: 0 })));
    setCurrentIndex(0);
    setCurrentPlayerIndex(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setGameCompleted(false);
  };

  if (gameCompleted) {
    const winner = players[0].points > players[1].points ? players[0] : 
                   players[1].points > players[0].points ? players[1] : null;

    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-8">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-white rounded-[48px] p-8 sm:p-12 shadow-2xl border-4 border-slate-50 space-y-8"
        >
          <Trophy className="w-20 h-20 text-yellow-400 mx-auto" />
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic">ՄՐՑՈՒՅԹՆ ԱՎԱՐՏՎԱԾ Է!</h2>
            {winner ? (
              <div className="space-y-2">
                <p className="text-xl font-bold text-slate-500 uppercase tracking-widest leading-tight">Հաղթողը</p>
                <p className={`${winner.color.replace('bg-', 'text-')} text-5xl font-black italic uppercase tracking-tighter`}>
                   {winner.name} {winner.avatar}
                </p>
              </div>
            ) : (
              <p className="text-2xl font-black text-slate-500 uppercase italic">Ոչ-ոքի!</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
             {players.map(p => (
               <div key={p.name} className={`${p.color} p-6 rounded-3xl text-white shadow-lg`}>
                  <div className="text-4xl mb-2">{p.avatar}</div>
                  <div className="font-black uppercase text-sm tracking-widest">{p.name}</div>
                  <div className="text-3xl font-black">{p.points}</div>
               </div>
             ))}
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={resetGame}
              className="bg-slate-950 text-white py-5 rounded-2xl font-black italic uppercase text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl"
            >
              <RotateCcw className="w-5 h-5" /> Նորից խաղալ
            </button>
            <button 
              onClick={onBack}
              className="bg-slate-100 text-slate-500 py-5 rounded-2xl font-black italic uppercase text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
            >
              Գլխավոր Մենյու
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 space-y-12 mt-8">
      {/* Turn Indicator & Scoreboard */}
      <div className="flex justify-between items-center gap-4 sm:gap-8">
         {players.map((p, i) => (
           <motion.div 
             key={p.name}
             animate={{ 
               scale: currentPlayerIndex === i ? 1.05 : 0.95,
               opacity: currentPlayerIndex === i ? 1 : 0.4
             }}
             className={`flex-1 ${p.color} p-4 sm:p-6 rounded-[32px] text-white shadow-2xl relative overflow-hidden`}
           >
              {currentPlayerIndex === i && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute inset-0 bg-white/20 animate-pulse"
                />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <div className="text-3xl sm:text-5xl bg-white/20 p-2 sm:p-3 rounded-2xl">
                  {p.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60">ԽԱՂԱՑՈՂ</div>
                  <div className="text-lg sm:text-2xl font-black italic uppercase truncate leading-none">{p.name}</div>
                  <div className="text-sm sm:text-xl font-black mt-1">{p.points}</div>
                </div>
              </div>
           </motion.div>
         ))}
      </div>

      {/* Game Card */}
      <motion.div
        key={currentIndex}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[48px] sm:rounded-[64px] p-6 sm:p-16 shadow-2xl border-4 border-slate-50 text-center space-y-12 relative overflow-hidden"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
           <motion.div 
             className={`h-full ${currentPlayer.color}`}
             initial={{ width: 0 }}
             animate={{ width: `${((currentIndex + 1) / CONJUGATION_CHALLENGES.length) * 100}%` }}
           />
        </div>

        <div className="space-y-6">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full ${currentChallenge.verb === 'quedar' ? 'bg-cyan-50 text-cyan-600' : 'bg-rose-50 text-rose-600'} font-black text-[10px] sm:text-xs uppercase tracking-widest border`}>
             <Star className="w-3 h-3 sm:w-4 sm:h-4" /> Բայ` {currentChallenge.verb.toUpperCase()}
          </div>
          
          <div className="space-y-4">
             <h3 className="text-2xl sm:text-4xl font-bold text-slate-800 leading-relaxed max-w-2xl mx-auto">
               {currentChallenge.sentence.split('___')[0]}
               <span className="inline-block w-24 sm:w-32 mx-2 border-b-4 border-dashed border-indigo-400 align-bottom pb-1" />
               {currentChallenge.sentence.split('___')[1]}
             </h3>
             <p className="text-lg sm:text-xl font-black italic text-indigo-500 uppercase tracking-tight">
               {currentChallenge.translation}
             </p>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4">
           {currentChallenge.options.map((option, i) => (
             <motion.button
               key={option}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => handleOptionClick(option)}
               disabled={isCorrect !== null}
               className={`
                 p-6 sm:p-8 rounded-[32px] font-black text-xl sm:text-2xl uppercase italic transition-all shadow-lg
                 ${selectedOption === option 
                   ? (option === currentChallenge.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                   : 'bg-white text-slate-900 border-2 border-slate-100 hover:border-indigo-400'
                 }
               `}
             >
               {option}
             </motion.button>
           ))}
        </div>

        {/* Feedback Area */}
        <div className="h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isCorrect === true && (
              <motion.div 
                key="correct"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-500 font-black uppercase tracking-[0.2em] flex items-center gap-2 text-sm"
              >
                <CheckCircle2 className="w-5 h-5" /> ՃԻՇՏ Է! +10 ՄԻԱՎՈՐ
              </motion.div>
            )}
            {isCorrect === false && (
              <motion.div 
                key="incorrect"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="text-red-500 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> ՍԽԱԼ Է!
                </div>
                <div className="text-indigo-600 font-black uppercase text-base italic">
                  ՃԻՇՏ Է՝ {currentChallenge.correctAnswer.toUpperCase()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Quick Reminder */}
      <div className="grid sm:grid-cols-2 gap-6">
         <div className="bg-cyan-50 p-6 rounded-[32px] border border-cyan-100 space-y-3">
            <h4 className="font-black text-cyan-600 uppercase italic tracking-widest flex items-center gap-2">
               <Gem className="w-4 h-4" /> QUEDAR
            </h4>
            <p className="text-xs text-cyan-800 font-bold leading-relaxed">
               Օգտագործվում է պայմանավորվելու կամ հանդիպելու համար (թե որտեղ և երբ)։ Օրինակ՝ "Quedamos a las 5" (Հանդիպում ենք ժամը 5-ին)։
            </p>
         </div>
         <div className="bg-rose-50 p-6 rounded-[32px] border border-rose-100 space-y-3">
            <h4 className="font-black text-rose-600 uppercase italic tracking-widest flex items-center gap-2">
               <Gem className="w-4 h-4" /> QUEDARSE
            </h4>
            <p className="text-xs text-rose-800 font-bold leading-relaxed">
               Անդրադարձ բայ է, նշանակում է մնալ մի վայրում։ Օրինակ՝ "Me quedo en casa" (Ես մնում եմ տանը)։
            </p>
         </div>
      </div>
    </div>
  );
}
