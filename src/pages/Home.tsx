import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Leaf, Bug, Cat, Bird, Turtle, Search, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <section className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-tr-full -z-10 opacity-50"></div>
        
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-green-800 mb-4">
            🌴 Dieren van het Oerwoud 🌴
          </h1>
          <p className="text-2xl text-green-700 font-bold mb-2">Een speurtocht door drie oerwouden van de wereld</p>
          <p className="text-xl text-green-600 font-medium mb-4">Voor leerlingen van het 4de leerjaar</p>
          <div className="flex justify-center gap-4 text-3xl mb-6">
            <span>🐒</span><span>🦜</span><span>🐆</span><span>🐸</span><span>🦋</span><span>🕷️</span>
          </div>
          <div className="inline-block bg-yellow-100 border-2 border-yellow-400 text-yellow-800 px-6 py-3 rounded-full font-bold text-lg shadow-sm">
            📌 Lees slim, zoek gericht en ontdek de geheime code!
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-green-700 mb-6 flex items-center gap-4 mt-12">
          <span>🌍</span> Welkom in het oerwoud!
        </h2>
        
        <div className="prose prose-lg prose-green max-w-none text-green-900 font-medium">
          <p className="text-lg leading-relaxed mb-4">
            Oerwouden (ook wel tropische regenwouden genoemd) zijn de meest bijzondere plekken op onze planeet. Het is er warm, vochtig en er leven ongelofelijk veel dieren en planten. In een oerwoud regent het bijna elke dag en de temperatuur blijft het hele jaar door rond de 25 tot 30 graden. Wist je dat meer dan de helft van alle diersoorten op aarde in het oerwoud leeft? En dat terwijl oerwouden maar 6% van het aardoppervlak bedekken!
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Oerwouden hebben verschillende verdiepingen, net als een flatgebouw. Helemaal bovenaan is het 'kronendak' waar de toppen van de bomen een groen dak vormen. Daaronder vind je kleinere bomen en struiken. Op de donkere bosbodem groeien schimmels en varens. Elk dier leeft op zijn eigen 'verdieping'!
          </p>
          
          <p className="text-xl font-bold mb-4 text-green-800">
            In dit dossier nemen we je mee op een reis door drie beroemde oerwouden:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Link to="/amazone" className="group">
              <div className="bg-emerald-100 rounded-2xl p-6 h-full border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-lg transition-all transform hover:-translate-y-1 flex flex-col">
                <div className="text-4xl mb-3">🦜</div>
                <h3 className="font-display font-bold text-xl text-emerald-800 mb-2">1. Het Amazonewoud</h3>
                <p className="text-emerald-700 text-sm mb-4">(Zuid-Amerika) — het grootste oerwoud ter wereld!</p>
                <div className="bg-white/60 rounded-xl p-3 mt-auto">
                  <h4 className="font-bold text-emerald-800 text-sm mb-1">Dieren in dit woud:</h4>
                  <ul className="text-sm text-emerald-900 space-y-1">
                    <li>• De Jaguar</li>
                    <li>• De Ara (papegaai)</li>
                    <li>• De Pijlgifkikker</li>
                    <li>• De Groene Anaconda</li>
                    <li>• De Blauwe Morpho-vlinder</li>
                  </ul>
                </div>
              </div>
            </Link>
            
            <Link to="/congo" className="group">
              <div className="bg-teal-100 rounded-2xl p-6 h-full border-2 border-teal-300 hover:border-teal-500 hover:shadow-lg transition-all transform hover:-translate-y-1 flex flex-col">
                <div className="text-4xl mb-3">🦍</div>
                <h3 className="font-display font-bold text-xl text-teal-800 mb-2">2. Het Congoregenwoud</h3>
                <p className="text-teal-700 text-sm mb-4">(Afrika) — het hart van het Afrikaanse continent.</p>
                <div className="bg-white/60 rounded-xl p-3 mt-auto">
                  <h4 className="font-bold text-teal-800 text-sm mb-1">Dieren in dit woud:</h4>
                  <ul className="text-sm text-teal-900 space-y-1">
                    <li>• De Gorilla</li>
                    <li>• De Okapi</li>
                    <li>• De Grijze Roodstaartpapegaai</li>
                    <li>• De Afrikaanse Luipaard</li>
                    <li>• De Goliathkikker</li>
                  </ul>
                </div>
              </div>
            </Link>
            
            <Link to="/borneo" className="group">
              <div className="bg-lime-100 rounded-2xl p-6 h-full border-2 border-lime-300 hover:border-lime-500 hover:shadow-lg transition-all transform hover:-translate-y-1 flex flex-col">
                <div className="text-4xl mb-3">🦧</div>
                <h3 className="font-display font-bold text-xl text-lime-800 mb-2">3. Het regenwoud van Borneo</h3>
                <p className="text-lime-700 text-sm mb-4">(Azië) — een van de oudste oerwouden op aarde!</p>
                <div className="bg-white/60 rounded-xl p-3 mt-auto">
                  <h4 className="font-bold text-lime-800 text-sm mb-1">Dieren in dit woud:</h4>
                  <ul className="text-sm text-lime-900 space-y-1">
                    <li>• De Orang-oetan</li>
                    <li>• De Neushoornvogel</li>
                    <li>• De Vliegende Draak</li>
                    <li>• Het Wandelend Blad</li>
                    <li>• De Vogelspin</li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Speurtocht Section */}
      <section className="bg-indigo-50 rounded-3xl p-8 shadow-xl border-4 border-indigo-400 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-indigo-200 opacity-50">
          <Search size={120} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-indigo-800 mb-6 flex items-center gap-3 relative z-10">
          <span>🎯</span> Jouw opdracht: de Oerwoud-speurtocht!
        </h2>
        <div className="prose prose-lg max-w-none text-indigo-900 font-medium relative z-10">
          <p className="mb-4">
            Dit is geen gewoon leesdossier. Je gaat op speurtocht! Het antwoord op elke vraag is een <strong>cijfer</strong>. Samen vormen de 10 cijfers je geheime code waarmee je op de website het codeslot kunt openen en je badge verdient.
          </p>
          <div className="bg-white p-6 rounded-2xl border-2 border-indigo-200 shadow-sm mt-6">
            <h3 className="text-xl font-bold text-indigo-700 mb-2 flex items-center gap-2">
              <span>💡</span> Tip — Slim lezen:
            </h3>
            <p className="text-indigo-800">
              Je hoeft niet altijd de hele tekst te lezen! Kijk eerst goed naar de vraag. Zoek dan de juiste titel of het juiste kopje in de tekst. Zo vind je sneller het antwoord. Dat noemen we <strong>'selectief lezen'</strong> of <strong>'zoekend lezen'</strong>.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/codeslot" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg">
              <Lock size={24} />
              Naar het Codeslot
            </Link>
          </div>
        </div>
      </section>

      {/* Animal Classes Section */}
      <section className="bg-amber-50 rounded-3xl p-8 shadow-xl border-4 border-amber-400">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-800 mb-6 flex items-center gap-3">
          <span>🔬</span> Dierklassen: wat zijn dat?
        </h2>
        
        <p className="text-lg text-amber-900 mb-8 font-medium">
          Wetenschappers verdelen dieren in groepen. Dat noemen we 'classificatie'. Zo kunnen ze beter begrijpen hoe dieren aan elkaar verwant zijn. In dit dossier komen deze klassen voor:
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-orange-100 p-3 rounded-full text-2xl">🐾</div>
            <div>
              <h3 className="font-display font-bold text-xl text-orange-800 mb-1">Zoogdieren</h3>
              <p className="text-orange-900 text-sm">Hebben haar of vacht, drinken melk van hun mama als baby, zijn warmbloedig (hun lichaam blijft altijd even warm). Voorbeelden: honden, katten, mensen!</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-blue-100 p-3 rounded-full text-2xl">🦜</div>
            <div>
              <h3 className="font-display font-bold text-xl text-blue-800 mb-1">Vogels</h3>
              <p className="text-blue-900 text-sm">Hebben veren en een snavel, leggen eieren, zijn warmbloedig. Niet alle vogels kunnen vliegen (denk aan de struisvogel).</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-green-100 p-3 rounded-full text-2xl">🐸</div>
            <div>
              <h3 className="font-display font-bold text-xl text-green-800 mb-1">Amfibieën</h3>
              <p className="text-green-900 text-sm">Leven zowel op het land als in het water, zijn koudbloedig, hebben een vochtige huid zonder schubben.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-emerald-100 p-3 rounded-full text-2xl">🦎</div>
            <div>
              <h3 className="font-display font-bold text-xl text-emerald-800 mb-1">Reptielen</h3>
              <p className="text-emerald-900 text-sm">Hebben schubben of schilden, zijn koudbloedig, leggen meestal eieren met een leerachtige schaal.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-purple-100 p-3 rounded-full text-2xl">🦋</div>
            <div>
              <h3 className="font-display font-bold text-xl text-purple-800 mb-1">Insecten</h3>
              <p className="text-purple-900 text-sm">Hebben zes poten, een lichaam met drie delen (kop, borststuk, achterlijf) en vaak vleugels.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-red-100 p-3 rounded-full text-2xl">🕷️</div>
            <div>
              <h3 className="font-display font-bold text-xl text-red-800 mb-1">Spinachtigen</h3>
              <p className="text-red-900 text-sm">Hebben acht poten, geen vleugels en een lichaam met twee delen. Ze zijn géén insecten!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
