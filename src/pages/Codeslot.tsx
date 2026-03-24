import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, ShieldCheck } from 'lucide-react';

export default function Codeslot() {
  const [code, setCode] = useState<string[]>(Array(10).fill(''));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [status, setStatus] = useState<('idle' | 'correct' | 'incorrect')[]>(Array(10).fill('idle'));
  const [isUnlocked, setIsUnlocked] = useState(false);

  const correctCode = '0248101214';

  const handleNumberClick = (num: string) => {
    if (isUnlocked) return;

    if (activeIndex < 10) {
      const newCode = [...code];
      newCode[activeIndex] = num;
      setCode(newCode);

      const newStatus = [...status];
      if (num === correctCode[activeIndex]) {
        newStatus[activeIndex] = 'correct';
        setStatus(newStatus);
        
        if (activeIndex === 9) {
          setTimeout(() => setIsUnlocked(true), 500);
        } else {
          setActiveIndex(activeIndex + 1);
        }
      } else {
        newStatus[activeIndex] = 'incorrect';
        setStatus(newStatus);
        
        // Reset after a short delay
        setTimeout(() => {
          setCode(Array(10).fill(''));
          setStatus(Array(10).fill('idle'));
          setActiveIndex(0);
        }, 800);
      }
    }
  };

  const handleReset = () => {
    setCode(Array(10).fill(''));
    setStatus(Array(10).fill('idle'));
    setActiveIndex(0);
    setIsUnlocked(false);
  };

  return (
    <div className="space-y-8">
      <div className="bg-indigo-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center justify-center gap-4">
          <Lock size={48} /> Het Geheime Codeslot
        </h2>
        <p className="text-xl text-indigo-100 font-medium">
          Voer de 10-cijferige code in om de deur te openen!
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-indigo-200 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div 
              key="lock"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-2xl"
            >
              {/* Code Display */}
              <div className="flex justify-center gap-2 mb-12 flex-wrap">
                {code.map((digit, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: activeIndex === index ? 1.1 : 1,
                      y: status[index] === 'incorrect' ? [0, -10, 10, -10, 10, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-16 md:w-14 md:h-18 flex items-center justify-center text-3xl font-bold rounded-xl border-4 transition-colors ${
                      status[index] === 'correct' 
                        ? 'bg-green-100 border-green-500 text-green-700' 
                        : status[index] === 'incorrect'
                          ? 'bg-red-100 border-red-500 text-red-700'
                          : activeIndex === index
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-inner'
                            : 'bg-gray-50 border-gray-300 text-gray-400'
                    }`}
                  >
                    {digit || (activeIndex === index ? '_' : '')}
                  </motion.div>
                ))}
              </div>

              {/* Keypad */}
              <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleNumberClick(num.toString())}
                    className="bg-gray-100 hover:bg-indigo-100 text-gray-800 hover:text-indigo-800 font-display font-bold text-3xl py-6 rounded-2xl border-b-4 border-gray-300 hover:border-indigo-300 active:border-b-0 active:translate-y-1 transition-all"
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={handleReset}
                  className="bg-red-100 hover:bg-red-200 text-red-800 font-bold text-xl py-6 rounded-2xl border-b-4 border-red-300 hover:border-red-400 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center"
                >
                  Wis
                </button>
                <button
                  onClick={() => handleNumberClick('0')}
                  className="bg-gray-100 hover:bg-indigo-100 text-gray-800 hover:text-indigo-800 font-display font-bold text-3xl py-6 rounded-2xl border-b-4 border-gray-300 hover:border-indigo-300 active:border-b-0 active:translate-y-1 transition-all"
                >
                  0
                </button>
                <div className="bg-gray-50 rounded-2xl border-b-4 border-gray-200 flex items-center justify-center text-gray-400">
                  <Lock size={24} />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="inline-block bg-green-100 p-8 rounded-full mb-8">
                <Unlock size={80} className="text-green-600" />
              </div>
              <h3 className="text-4xl font-display font-bold text-green-800 mb-4">
                Code Geaccepteerd!
              </h3>
              <p className="text-xl text-green-700 mb-8">
                De deur is open. Je hebt de speurtocht fantastisch volbracht!
              </p>
              
              <div className="bg-gradient-to-br from-yellow-100 to-amber-200 border-4 border-yellow-400 rounded-3xl p-8 max-w-md mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500 opacity-20 rounded-full -ml-10 -mb-10"></div>
                
                <ShieldCheck size={64} className="text-amber-600 mx-auto mb-4 relative z-10" />
                <h4 className="text-2xl font-bold text-amber-900 mb-2 relative z-10">BADGE VERDIEND!</h4>
                <div className="bg-white/60 rounded-xl p-4 relative z-10">
                  <p className="font-display font-bold text-xl text-amber-800">Leesstrategie:</p>
                  <p className="text-3xl font-black text-amber-600 uppercase tracking-wider mt-2">Selectief Lezen</p>
                </div>
              </div>
              
              <button
                onClick={handleReset}
                className="mt-12 text-gray-500 hover:text-gray-800 underline font-medium"
              >
                Sluit de deur en begin opnieuw
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
