import { CheckCircle2 } from 'lucide-react';

export default function Antwoorden() {
  const answers = [
    {
      region: 'Amazonewoud',
      icon: '🌿',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      items: [
        { animal: 'Jaguar', answer: 'B', explanation: 'De vlekken hebben de vorm van kleine roosjes.' },
        { animal: 'Ara', answer: 'B', explanation: 'Om mineralen te krijgen die helpen gif te verteren.' },
        { animal: 'Pijlgifkikker', answer: 'B', explanation: 'Felle kleuren waarschuwen vijanden dat hij giftig is.' },
        { animal: 'Groene anaconda', answer: 'B', explanation: 'Door eromheen te wikkelen en te knijpen.' },
        { animal: 'Blauwe morpho-vlinder', answer: 'B', explanation: 'Kleine schubben weerkaatsen het licht zo dat het blauw lijkt.' }
      ]
    },
    {
      region: 'Congoregenwoud',
      icon: '🌳',
      color: 'text-teal-700',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      items: [
        { animal: 'Berggorilla', answer: 'C', explanation: 'Meer dan 98% van ons DNA.' },
        { animal: 'Afrikaanse grijze papegaai', answer: 'B', explanation: 'Hij kan woorden begrijpen, niet alleen nadoen.' },
        { animal: 'Goliathkikker', answer: 'B', explanation: 'Tot 32 centimeter, zo groot als een kleine kat!' },
        { animal: 'Driehoornkameleon', answer: 'B', explanation: 'Om zijn stemming te tonen, temperatuur te regelen én zich te camoufleren.' },
        { animal: 'Goliathkever', answer: 'B', explanation: 'Ongeveer 100 gram, zo zwaar als een appel.' }
      ]
    },
    {
      region: 'Borneo',
      icon: '🌺',
      color: 'text-lime-700',
      bg: 'bg-lime-50',
      border: 'border-lime-200',
      items: [
        { animal: 'Orang-oetan', answer: 'B', explanation: "'Mens van het bos'." },
        { animal: 'Neushoornvogel', answer: 'B', explanation: 'Om zichzelf en de eieren te beschermen tegen roofdieren.' },
        { animal: 'Vliegende draak', answer: 'B', explanation: 'Hij heeft verlengde ribben met huidflappen die hij uitspreidt.' },
        { animal: 'Wandelend blad', answer: 'B', explanation: 'Hij ziet er precies uit als een blad zodat vijanden hem niet opmerken.' },
        { animal: 'Vogelspinachtigen', answer: 'B', explanation: 'Spinachtigen hebben 8 poten, insecten 6 poten.' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-amber-500 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">📝 Antwoordenblad</h2>
        <p className="text-xl text-amber-100 font-medium">
          Hieronder vind je de juiste antwoorden op alle vragen uit dit dossier. 
          Probeer eerst zelf de vragen te beantwoorden voordat je hier kijkt!
        </p>
      </div>

      <div className="space-y-8">
        {answers.map((section, idx) => (
          <div key={idx} className={`${section.bg} rounded-3xl p-6 md:p-8 border-4 ${section.border} shadow-lg`}>
            <h3 className={`text-3xl font-display font-bold ${section.color} mb-6 flex items-center gap-3`}>
              <span>{section.icon}</span> {section.region}
            </h3>
            
            <div className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <span className="font-bold text-lg text-gray-800">{item.animal}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 flex-1">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-display font-bold bg-green-100 text-green-700 shrink-0`}>
                      {item.answer}
                    </span>
                    <span className="text-gray-600 font-medium">— {item.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
