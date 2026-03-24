import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface AnimalProps {
  name: string;
  icon: string;
  animalClass: string;
  classIcon: string;
  description: string;
  where: string;
  whatEats: string;
  whyClass: string;
  funFact: string;
  question: string;
  options: { id: string; text: string }[];
  answerId: string;
  colorTheme: string;
}

export default function AnimalCard({
  name,
  icon,
  animalClass,
  classIcon,
  description,
  where,
  whatEats,
  whyClass,
  funFact,
  question,
  options,
  answerId,
  colorTheme
}: AnimalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (id: string) => {
    if (selectedAnswer) return; // Prevent changing answer
    setSelectedAnswer(id);
    setShowExplanation(true);
  };

  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-xl border-4 ${colorTheme} mb-12`}>
      {/* Header */}
      <div className={`p-6 ${colorTheme.replace('border-', 'bg-').replace('-500', '-100')} flex justify-between items-center border-b-4 ${colorTheme}`}>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{icon}</span>
          <h3 className="text-3xl font-display font-bold text-gray-800">{name}</h3>
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border-2 font-bold flex items-center gap-2 text-sm md:text-base">
          <span>{classIcon}</span> Klasse: {animalClass}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-6">
        <p className="text-lg font-medium text-gray-700 leading-relaxed">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200">
            <h4 className="font-display font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
              <span>🌍</span> Waar leeft hij?
            </h4>
            <p className="text-gray-700">{where}</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200">
            <h4 className="font-display font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
              <span>🍽️</span> Wat eet hij?
            </h4>
            <p className="text-gray-700">{whatEats}</p>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl border-2 border-blue-200">
          <h4 className="font-display font-bold text-lg text-blue-800 mb-2 flex items-center gap-2">
            <span>{classIcon}</span> Waarom een {animalClass.toLowerCase()}?
          </h4>
          <p className="text-blue-900">{whyClass}</p>
        </div>

        <div className="bg-yellow-50 p-5 rounded-2xl border-2 border-yellow-300 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-6xl opacity-20">🌟</div>
          <h4 className="font-display font-bold text-xl text-yellow-800 mb-2 flex items-center gap-2">
            <span>🌟</span> Leuk weetje!
          </h4>
          <p className="text-yellow-900 font-medium text-lg">{funFact}</p>
        </div>

        {/* Quiz Section */}
        <div className="mt-8 pt-8 border-t-4 border-dashed border-gray-200">
          <div className="bg-indigo-50 rounded-3xl p-6 md:p-8 border-4 border-indigo-200">
            <h4 className="font-display font-bold text-2xl text-indigo-800 mb-6 flex items-center gap-3">
              <span className="bg-indigo-200 p-2 rounded-full"><HelpCircle size={28} className="text-indigo-700" /></span>
              Tijd voor een vraag!
            </h4>
            
            <p className="text-xl font-bold text-indigo-900 mb-6">{question}</p>
            
            <div className="space-y-3">
              {options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === answerId;
                const showResult = selectedAnswer !== null;
                
                let buttonClass = "bg-white border-indigo-200 text-indigo-800 hover:bg-indigo-100 hover:border-indigo-300";
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass = "bg-green-100 border-green-500 text-green-800";
                  } else if (isSelected) {
                    buttonClass = "bg-red-100 border-red-500 text-red-800";
                  } else {
                    buttonClass = "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-xl border-2 font-bold text-lg transition-all duration-300 flex items-center gap-4 ${buttonClass}`}
                  >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-display ${showResult && isCorrect ? 'bg-green-500 text-white' : showResult && isSelected ? 'bg-red-500 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                      {option.id}
                    </span>
                    {option.text}
                    {showResult && isCorrect && <span className="ml-auto text-2xl">✅</span>}
                    {showResult && isSelected && !isCorrect && <span className="ml-auto text-2xl">❌</span>}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  className="bg-white p-5 rounded-2xl border-2 border-indigo-200 text-center"
                >
                  {selectedAnswer === answerId ? (
                    <div>
                      <h5 className="font-display font-bold text-2xl text-green-600 mb-2">Super goed! 🎉</h5>
                      <p className="text-indigo-900 font-medium">Je hebt het juiste antwoord gevonden!</p>
                    </div>
                  ) : (
                    <div>
                      <h5 className="font-display font-bold text-2xl text-red-500 mb-2">Oeps! 🙈</h5>
                      <p className="text-indigo-900 font-medium">
                        Het juiste antwoord was <strong>{answerId}</strong>. Probeer de volgende vraag!
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
