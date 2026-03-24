import AnimalCard from '../components/AnimalCard';

export default function Amazone() {
  const animals = [
    {
      name: 'De Jaguar',
      icon: '🐆',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De jaguar is de grootste kat van Zuid-Amerika en de derde grootste kat ter wereld (na de tijger en de leeuw). Hij heeft een prachtige goudgele vacht met zwarte vlekken, die we 'rozetten' noemen.",
      where: 'De jaguar leeft op de bosbodem, vaak in de buurt van rivieren en moerassen. Hij is een uitstekende zwemmer!',
      whatEats: 'De jaguar is een roofdier. Hij eet herten, tapirs, krokodillen, vissen en zelfs schildpadden. Zijn kaken zijn zo sterk dat hij door het schild van een schildpad kan bijten!',
      whyClass: 'De jaguar heeft vacht, is warmbloedig en de moeder geeft melk aan haar welpen.',
      funFact: "De naam 'jaguar' komt van het inheemse woord 'yaguar', wat betekent: 'hij die doodt met één sprong'. De jaguar kan vanuit stilstand enorm hoog en ver springen!",
      question: "Waarom noemen we de vlekken van een jaguar 'rozetten'?",
      options: [
        { id: 'A', text: 'Omdat ze ruiken als rozen' },
        { id: 'B', text: 'Omdat ze de vorm hebben van kleine roosjes' },
        { id: 'C', text: 'Omdat jaguars van rozen houden' }
      ],
      answerId: 'B',
      colorTheme: 'border-orange-500'
    },
    {
      name: 'De Ara (papegaai)',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De ara is een van de meest kleurrijke vogels ter wereld. Er bestaan veel soorten, zoals de scharlaken ara (feloranje-rood) en de blauwgele ara. Ze kunnen heel oud worden: soms wel 60 tot 80 jaar!",
      where: "Ara's leven hoog in de boomkruinen van het oerwoud. Ze nestelen in holle bomen.",
      whatEats: "Noten, zaden, vruchten en soms klei! Ja, echt: ara's likken aan kleirotsen om mineralen binnen te krijgen die hen helpen om giftige zaden te verteren.",
      whyClass: 'De ara heeft veren, een snavel, legt eieren en is warmbloedig.',
      funFact: "Ara's zijn heel sociale dieren. Ze leven in grote groepen en 'praten' veel met elkaar. Als je er eentje als huisdier hebt, kan hij zelfs woorden leren nazeggen!",
      question: "Waarom eten ara's klei van rotswanden?",
      options: [
        { id: 'A', text: 'Omdat ze dorst hebben' },
        { id: 'B', text: 'Om mineralen te krijgen die helpen gif te verteren' },
        { id: 'C', text: 'Omdat klei lekker smaakt' }
      ],
      answerId: 'B',
      colorTheme: 'border-blue-500'
    },
    {
      name: 'De Pijlgifkikker',
      icon: '🐸',
      animalClass: 'Amfibie',
      classIcon: '🐸',
      description: "De pijlgifkikker is piepklein (soms maar 2 centimeter!) maar supergevaarlijk. Zijn huid bevat een sterk gif. De felgekleurde huid (blauw, rood, geel, oranje) is een waarschuwing: 'Eet mij niet op!'",
      where: 'Op de vochtige bosbodem, tussen het bladafval en bij kleine beekjes. Sommige soorten dragen hun kikkervisjes op hun rug naar water hoger in de bomen!',
      whatEats: 'Kleine insecten zoals mieren en termieten. Wetenschappers denken dat het gif van de kikker afkomstig is van de insecten die hij eet.',
      whyClass: 'De pijlgifkikker is koudbloedig, heeft een vochtige huid zonder schubben, en begint zijn leven als kikkervisje in het water.',
      funFact: "Inheemse volkeren in het Amazonewoud wreven het gif van deze kikker op hun pijlpunten om mee te jagen. Daarom heet hij 'pijlgifkikker'!",
      question: 'Waarom heeft de pijlgifkikker zulke felle kleuren?',
      options: [
        { id: 'A', text: 'Om mooi te zijn voor andere kikkers' },
        { id: 'B', text: "Als waarschuwing voor vijanden: 'Ik ben giftig!'" },
        { id: 'C', text: 'Om zich te verstoppen tussen bloemen' }
      ],
      answerId: 'B',
      colorTheme: 'border-green-500'
    },
    {
      name: 'De Groene Anaconda',
      icon: '🐍',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: 'De groene anaconda is de zwaarste slang ter wereld. Ze kan wel 200 kilogram wegen en tot 9 meter lang worden! Ze is niet giftig, maar doodt haar prooi door zich eromheen te wikkelen en te knijpen.',
      where: 'In en rond de rivieren en moerassen van het Amazonewoud. De anaconda is een fantastische zwemmer en brengt veel tijd in het water door.',
      whatEats: 'Grote prooidieren zoals herten, wilde zwijnen, kaaimannen (krokodilachtigen) en grote vogels.',
      whyClass: 'De anaconda heeft schubben, is koudbloedig en legt geen eieren maar baart levende jongen (dat is bijzonder voor een reptiel!).',
      funFact: "De anaconda kan haar kaak uit de kom laten 'klikken' om prooidieren te verslinden die groter zijn dan haar eigen hoofd! Na een grote maaltijd hoeft ze soms maandenlang niet meer te eten.",
      question: 'Hoe doodt de groene anaconda haar prooi?',
      options: [
        { id: 'A', text: 'Met gif' },
        { id: 'B', text: 'Door eromheen te wikkelen en te knijpen' },
        { id: 'C', text: 'Met haar scherpe tanden' }
      ],
      answerId: 'B',
      colorTheme: 'border-emerald-600'
    },
    {
      name: 'De Blauwe Morpho-vlinder',
      icon: '🦋',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "De blauwe morpho-vlinder is een van de mooiste vlinders ter wereld. Zijn vleugels zijn schitterend blauw en kunnen tot 15 centimeter breed worden. Maar de onderkant van zijn vleugels is bruin met 'oogvlekken', zodat hij zich kan verstoppen als hij zijn vleugels dichtklapt.",
      where: 'In alle lagen van het oerwoud, maar vooral langs rivieren en in open plekken waar zonlicht komt.',
      whatEats: "De vlinder 'eet' niet echt, maar drinkt! Met zijn opgerolde tong (roltong) zuigt hij sap van rottend fruit, natte modder en bloemen.",
      whyClass: 'De morpho-vlinder heeft zes poten, een lichaam met drie delen (kop, borststuk en achterlijf) en twee paar vleugels.',
      funFact: 'De blauwe kleur is eigenlijk een optische illusie! De vleugels hebben geen blauw pigment. Microscopisch kleine schubben op de vleugels weerkaatsen het licht op een speciale manier, waardoor wij blauw zien.',
      question: 'De blauwe morpho-vlinder is eigenlijk niet echt blauw. Hoe komt het dat wij hem toch blauw zien?',
      options: [
        { id: 'A', text: 'Hij schildert zijn vleugels' },
        { id: 'B', text: 'Kleine schubben weerkaatsen het licht zo dat het blauw lijkt' },
        { id: 'C', text: 'Hij eet blauwe bloemen' }
      ],
      answerId: 'B',
      colorTheme: 'border-cyan-500'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-emerald-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌿 Het Amazonewoud 🌿</h2>
        <p className="text-xl text-emerald-100 font-medium">Zuid-Amerika (Brazilië, Peru, Colombia…)</p>
        <div className="mt-6 bg-emerald-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed">
            Het Amazonewoud is het grootste tropische regenwoud ter wereld. Het is zo groot als bijna heel Europa! 
            De Amazone-rivier stroomt er dwars doorheen en is de breedste rivier ter wereld. In dit woud leven miljoenen soorten dieren.
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
