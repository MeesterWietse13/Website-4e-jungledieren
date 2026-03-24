import { motion, AnimatePresence } from 'motion/react';

interface AnimalProps {
  name: string;
  scientificName: string;
  icon: string;
  animalClass: string;
  classIcon: string;
  description: string;
  where: string;
  whatEats: string;
  whyClass: string;
  funFact: string;
  didYouKnow: string;
  colorTheme: string;
  key?: number;
}

export default function AnimalCard({
  name,
  scientificName,
  icon,
  animalClass,
  classIcon,
  description,
  where,
  whatEats,
  whyClass,
  funFact,
  didYouKnow,
  colorTheme
}: AnimalProps) {
  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-xl border-4 ${colorTheme} mb-12`}>
      {/* Header */}
      <div className={`p-6 ${colorTheme.replace('border-', 'bg-').replace('-500', '-100').replace('-600', '-100').replace('-400', '-100').replace('-700', '-100')} flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 ${colorTheme} gap-4`}>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{icon}</span>
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-800">{name}</h3>
            <p className="text-sm font-medium text-gray-600 italic">{scientificName}</p>
          </div>
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border-2 font-bold flex items-center gap-2 text-sm md:text-base shrink-0">
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

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-5 rounded-2xl border-2 border-yellow-300 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-6xl opacity-20">🌟</div>
            <h4 className="font-display font-bold text-xl text-yellow-800 mb-2 flex items-center gap-2">
              <span>🌟</span> Leuk weetje!
            </h4>
            <p className="text-yellow-900 font-medium">{funFact}</p>
          </div>

          <div className="bg-purple-50 p-5 rounded-2xl border-2 border-purple-300 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-6xl opacity-20">🔎</div>
            <h4 className="font-display font-bold text-xl text-purple-800 mb-2 flex items-center gap-2">
              <span>🔎</span> Wist je dat:
            </h4>
            <p className="text-purple-900 font-medium">{didYouKnow}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
