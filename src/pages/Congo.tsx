import AnimalCard from '../components/AnimalCard';

export default function Congo() {
  const animals = [
    {
      name: 'De Berggorilla',
      icon: '🦍',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De berggorilla is een van onze naaste familieleden: we delen meer dan 98% van ons DNA met gorilla's! Een volwassen mannetje (de 'zilverrug') kan wel 200 kilogram wegen. Ondanks hun enorme kracht zijn gorilla's heel zachtaardige dieren.",
      where: 'Berggorilla\'s leven in de mistige bergwouden aan de rand van het Congobekken, op hoogtes tot 4.000 meter. Ze maken elke avond een nieuw nest van bladeren en takken om in te slapen.',
      whatEats: "Gorilla's zijn vooral planteneters. Ze eten bladeren, stengels, scheuten, vruchten en soms kleine insecten.",
      whyClass: "De gorilla heeft haar, is warmbloedig en gorillamoeders zogen hun baby's met melk. Een babygorilla blijft tot 3 jaar dicht bij zijn mama.",
      funFact: "Elke gorilla heeft een unieke 'neusafdruk', net zoals wij allemaal unieke vingerafdrukken hebben. Onderzoekers gebruiken foto's van gorillaneuzen om ze uit elkaar te houden!",
      question: "Hoeveel procent van ons DNA delen we met gorilla's?",
      options: [
        { id: 'A', text: 'Ongeveer 50%' },
        { id: 'B', text: 'Ongeveer 75%' },
        { id: 'C', text: 'Meer dan 98%' }
      ],
      answerId: 'C',
      colorTheme: 'border-slate-600'
    },
    {
      name: 'De Afrikaanse Grijze Papegaai',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: 'De Afrikaanse grijze papegaai wordt beschouwd als de slimste papegaai ter wereld. Hij heeft een zachte grijze verenkleed met een opvallende rode staart. Deze vogel kan niet alleen woorden nadoen, maar begrijpt ook wat sommige woorden betekenen!',
      where: "In de boomkruinen van het dichte Congoregenwoud. Ze leven in groepen en slapen samen in grote 'slaapbomen'.",
      whatEats: 'Noten (vooral van de oliepalm), zaden, vruchten en af en toe boomschors.',
      whyClass: 'Hij heeft veren, een snavel, legt eieren en is warmbloedig. Zijn sterke, kromme snavel is perfect om harde noten te kraken.',
      funFact: "Een beroemde grijze papegaai genaamd 'Alex' kon meer dan 100 woorden gebruiken, kleuren herkennen en tot 6 tellen. Wetenschappers denken dat hij even slim was als een kind van 5 jaar!",
      question: 'Wat maakt de Afrikaanse grijze papegaai zo bijzonder?',
      options: [
        { id: 'A', text: 'Hij is de grootste papegaai' },
        { id: 'B', text: 'Hij kan woorden begrijpen, niet alleen nadoen' },
        { id: 'C', text: 'Hij kan 100 km per uur vliegen' }
      ],
      answerId: 'B',
      colorTheme: 'border-gray-500'
    },
    {
      name: 'De Goliathkikker',
      icon: '🐸',
      animalClass: 'Amfibie',
      classIcon: '🐸',
      description: 'De goliathkikker is de grootste kikker ter wereld! Hij kan tot 32 centimeter lang worden (zonder poten) en meer dan 3 kilogram wegen. Dat is zo groot als een kleine kat! Ondanks zijn enorme formaat maakt hij nauwelijks geluid.',
      where: 'Bij snelstromende rivieren en watervallen in de regenwouden van Kameroen en Equatoriaal-Guinea. Hij houdt van helder, zuurstofrijk water.',
      whatEats: 'Insecten, kleine vissen, krabben, schorpioenen en zelfs kleine slangen en andere kikkers.',
      whyClass: 'De goliathkikker is koudbloedig, heeft een gladde, vochtige huid, en zijn jongen beginnen als kikkervisjes die in het water leven.',
      funFact: 'De goliathkikker bouwt nesten! Hij sleept zware stenen (soms van 2 kg!) naar de oever om een beschut poeltje te maken voor zijn eitjes. Dat is heel uitzonderlijk voor een kikker.',
      question: 'Hoe groot kan een goliathkikker worden?',
      options: [
        { id: 'A', text: '5 centimeter, net als een gewone kikker' },
        { id: 'B', text: 'Tot 32 centimeter, zo groot als een kleine kat!' },
        { id: 'C', text: 'Tot 1 meter, zo groot als een hond' }
      ],
      answerId: 'B',
      colorTheme: 'border-teal-600'
    },
    {
      name: 'De Driehoornkameleon',
      icon: '🦎',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: "De driehoornkameleon (ook wel Jacksons kameleon genoemd) is een reptiel met drie kleine hoorntjes op zijn hoofd. Hij kan van kleur veranderen! Dat doet hij niet alleen om zich te verstoppen, maar ook om zijn stemming te tonen of zijn lichaamstemperatuur te regelen.",
      where: 'In de bomen van de vochtige bergwouden in Oost-Afrika, aan de rand van het Congobekken. Hij grijpt zich met zijn grijpstaart en speciale tenen vast aan takken.',
      whatEats: 'Insecten! De kameleon schiet zijn enorm lange, kleverige tong naar buiten om insecten te vangen. Zijn tong kan langer zijn dan zijn eigen lichaam!',
      whyClass: 'De kameleon heeft schubben, is koudbloedig en sommige soorten leggen eieren terwijl andere levende jongen baren.',
      funFact: 'De ogen van een kameleon kunnen onafhankelijk van elkaar draaien. Dat betekent dat hij tegelijk naar voren én naar achteren kan kijken! Zo ziet hij een insect aankomen zonder zijn hoofd te draaien.',
      question: 'Waarom verandert een kameleon van kleur?',
      options: [
        { id: 'A', text: 'Alleen om zich te verstoppen' },
        { id: 'B', text: 'Om zijn stemming te tonen, temperatuur te regelen én zich te camoufleren' },
        { id: 'C', text: 'Omdat hij ziek is' }
      ],
      answerId: 'B',
      colorTheme: 'border-green-400'
    },
    {
      name: 'De Goliathkever',
      icon: '🪲',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: 'De goliathkever is een van de zwaarste insecten ter wereld. Als larve kan hij wel 100 gram wegen — dat is zo zwaar als een appel! Het volwassen kevertje is iets lichter maar nog altijd indrukwekkend: tot 11 centimeter lang.',
      where: 'In de boomkruinen van het Congoregenwoud. De larven leven in rottend hout op de bosbodem.',
      whatEats: 'De larven eten eiwitrijk voedsel en rottend hout. Volwassen kevers eten boomschors en vruchten.',
      whyClass: 'De goliathkever heeft zes poten, drie lichaamsdelen en harde dekschilden die zijn vliegvleugels beschermen.',
      funFact: 'Ondanks zijn gewicht kan de goliathkever vliegen! Hij opent zijn harde buitenvleugels en ontvouwt zijn dunne vliegvleugels eronder. Het geluid dat hij maakt klinkt als een klein helikoptertje!',
      question: 'Hoe zwaar kan een goliathkeverlarve worden?',
      options: [
        { id: 'A', text: '1 gram, heel licht' },
        { id: 'B', text: 'Ongeveer 100 gram, zo zwaar als een appel' },
        { id: 'C', text: '1 kilogram, zo zwaar als een pak melk' }
      ],
      answerId: 'B',
      colorTheme: 'border-amber-700'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-teal-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌳 Het Congoregenwoud 🌳</h2>
        <p className="text-xl text-teal-100 font-medium">Centraal-Afrika (Democratische Republiek Congo, Kameroen, Gabon…)</p>
        <div className="mt-6 bg-teal-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed">
            Het Congoregenwoud is het op één na grootste tropische oerwoud ter wereld. Het ligt in het hart van Afrika, rond de machtige Congorivier. 
            Dit woud is de thuisbasis van heel bijzondere dieren die nergens anders op aarde leven.
          </p>
        </div>
      </div>

      <div className="space-y-12 mt-12">
        {animals.map((animal, index) => (
          <AnimalCard key={index} {...animal} />
        ))}
      </div>
    </div>
  );
}
