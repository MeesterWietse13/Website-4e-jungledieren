import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Leaf, Bug, Cat, Bird, Frog, Turtle } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <section className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-tr-full -z-10 opacity-50"></div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-green-700 mb-6 flex items-center gap-4">
          <span>🌍</span> Welkom in het oerwoud!
        </h2>
        
        <div className="prose prose-lg prose-green max-w-none text-green-900 font-medium">
          <p className="text-xl leading-relaxed mb-6">
            Oerwouden (ook wel tropische regenwouden genoemd) zijn de meest bijzondere plekken op onze planeet. 
            Het is er warm, vochtig en er leven ongelofelijk veel dieren en planten. 
            Wist je dat meer dan de helft van alle diersoorten op aarde in het oerwoud leeft?
          </p>
          
          <p className="text-lg font-bold mb-4 text-green-800">
            In dit dossier nemen we je mee op een reis door drie beroemde oerwouden:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Link to="/amazone" className="group">
              <div className="bg-emerald-100 rounded-2xl p-6 h-full border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-3">🦜</div>
                <h3 className="font-display font-bold text-xl text-emerald-800 mb-2">1. Het Amazonewoud</h3>
                <p className="text-emerald-700 text-sm">(Zuid-Amerika) — het grootste oerwoud ter wereld!</p>
              </div>
            </Link>
            
            <Link to="/congo" className="group">
              <div className="bg-teal-100 rounded-2xl p-6 h-full border-2 border-teal-300 hover:border-teal-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-3">🦍</div>
                <h3 className="font-display font-bold text-xl text-teal-800 mb-2">2. Het Congoregenwoud</h3>
                <p className="text-teal-700 text-sm">(Afrika) — het hart van het Afrikaanse continent.</p>
              </div>
            </Link>
            
            <Link to="/borneo" className="group">
              <div className="bg-lime-100 rounded-2xl p-6 h-full border-2 border-lime-300 hover:border-lime-500 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-3">🦧</div>
                <h3 className="font-display font-bold text-xl text-lime-800 mb-2">3. Het regenwoud van Borneo</h3>
                <p className="text-lime-700 text-sm">(Azië) — een van de oudste oerwouden op aarde!</p>
              </div>
            </Link>
          </div>
          
          <p className="text-xl font-bold text-center bg-yellow-100 p-4 rounded-xl border-2 border-yellow-300 text-yellow-800">
            Bij elk dier vind je een informatief tekstje en een vraag om op te lossen. Veel plezier! 🕵️‍♂️
          </p>
        </div>
      </section>

      {/* Animal Classes Section */}
      <section className="bg-amber-50 rounded-3xl p-8 shadow-xl border-4 border-amber-400">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-800 mb-8 flex items-center gap-3">
          <span>🔬</span> Dierklassen: wat zijn dat?
        </h2>
        
        <p className="text-lg text-amber-900 mb-8 font-medium">
          Wetenschappers verdelen dieren in groepen (klassen). In dit dossier komen deze klassen voor:
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-orange-100 p-3 rounded-full text-2xl">🐾</div>
            <div>
              <h3 className="font-display font-bold text-xl text-orange-800 mb-1">Zoogdieren</h3>
              <p className="text-orange-900 text-sm">Hebben haar of vacht, drinken melk van hun mama als baby, zijn warmbloedig.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-blue-100 p-3 rounded-full text-2xl">🦜</div>
            <div>
              <h3 className="font-display font-bold text-xl text-blue-800 mb-1">Vogels</h3>
              <p className="text-blue-900 text-sm">Hebben veren en een snavel, leggen eieren, zijn warmbloedig.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-green-100 p-3 rounded-full text-2xl">🐸</div>
            <div>
              <h3 className="font-display font-bold text-xl text-green-800 mb-1">Amfibieën</h3>
              <p className="text-green-900 text-sm">Leven zowel op het land als in het water, zijn koudbloedig, hebben een vochtige huid.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-emerald-100 p-3 rounded-full text-2xl">🦎</div>
            <div>
              <h3 className="font-display font-bold text-xl text-emerald-800 mb-1">Reptielen</h3>
              <p className="text-emerald-900 text-sm">Hebben schubben, zijn koudbloedig, leggen meestal eieren met een schaal.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-purple-100 p-3 rounded-full text-2xl">🦋</div>
            <div>
              <h3 className="font-display font-bold text-xl text-purple-800 mb-1">Insecten</h3>
              <p className="text-purple-900 text-sm">Hebben zes poten, een lichaam met drie delen en vaak vleugels.</p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 flex gap-4 items-start">
            <div className="bg-red-100 p-3 rounded-full text-2xl">🕷️</div>
            <div>
              <h3 className="font-display font-bold text-xl text-red-800 mb-1">Spinachtigen</h3>
              <p className="text-red-900 text-sm">Hebben acht poten en geen vleugels. Ze zijn géén insecten!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
