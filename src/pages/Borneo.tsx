import AnimalCard from '../components/AnimalCard';

export default function Borneo() {
  const animals = [
    {
      name: 'De Orang-oetan',
      icon: '🦧',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De orang-oetan is de grootste boomdiersoort ter wereld. Zijn naam betekent 'mens van het bos' in het Maleis. Hij heeft lange, sterke armen (de spanwijdte kan 2,4 meter zijn!) en roodbruine vacht.",
      where: 'Hoog in de bomen! De orang-oetan is het grootste dier dat bijna zijn hele leven in bomen doorbrengt. Elke avond bouwt hij een comfortabel slaapnest van bladeren en takken.',
      whatEats: 'Vooral fruit (meer dan 400 soorten!), maar ook bladeren, schors, insecten en soms vogeleieren.',
      whyClass: "De orang-oetan heeft haar, is warmbloedig, en moeders voeden hun baby's jarenlang met melk. Een jong blijft tot wel 8 jaar bij zijn moeder — dat is het langst van alle dieren!",
      funFact: 'Orang-oetans gebruiken gereedschap! Ze gebruiken stokken om insecten uit bomen te peuteren, en grote bladeren als paraplu als het regent. Slimme dieren!',
      question: "Wat betekent het woord 'orang-oetan'?",
      options: [
        { id: 'A', text: 'Rode aap' },
        { id: 'B', text: 'Mens van het bos' },
        { id: 'C', text: 'Grote klimmer' }
      ],
      answerId: 'B',
      colorTheme: 'border-orange-600'
    },
    {
      name: 'De Neushoornvogel',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De neushoornvogel is een grote vogel met een enorme, kleurrijke snavel en een opvallende 'helm' (casque) bovenop. Hij kan tot 1 meter lang worden. Zijn vleugelslag is zo krachtig dat je het geluid van ver kunt horen — het klinkt als een stoomlocomotief!",
      where: 'In de hoge boomkruinen van het regenwoud. De vrouwtjes broeden in holle bomen en metselen de opening dicht met modder, zodat alleen een smal gleufje overblijft waardoor het mannetje voedsel aangeeft.',
      whatEats: 'Vooral vruchten (met name vijgen), maar ook insecten, kleine hagedissen en slakken.',
      whyClass: 'De neushoornvogel heeft veren, een snavel, legt eieren en is warmbloedig.',
      funFact: 'Het vrouwtje zit soms 3 maanden opgesloten in de holle boom tijdens het broeden! Tijdens die hele tijd brengt het mannetje trouw voedsel. Als het mannetje sterft, sterft het vrouwtje soms ook.',
      question: 'Waarom metselt het vrouwtje van de neushoornvogel zichzelf in de boom?',
      options: [
        { id: 'A', text: 'Omdat ze het koud heeft' },
        { id: 'B', text: 'Om zichzelf en de eieren te beschermen tegen roofdieren' },
        { id: 'C', text: 'Omdat ze graag alleen is' }
      ],
      answerId: 'B',
      colorTheme: 'border-yellow-500'
    },
    {
      name: 'De Vliegende Draak (Draco)',
      icon: '🦎',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: "De vliegende draak is een kleine hagedis (ongeveer 20 centimeter) die kan 'vliegen'! Nou ja, eigenlijk zweeft hij. Hij heeft verlengde ribben met een huidflap ertussen die hij kan uitspreiden als vleugels.",
      where: 'In de bomen van het tropisch regenwoud op Borneo. Hij zweeft van boom tot boom en landt bijna nooit op de grond.',
      whatEats: 'Vooral mieren en termieten. Hij wacht op een boomstam en grijpt voorbijlopende insecten.',
      whyClass: 'De vliegende draak heeft schubben, is koudbloedig en legt eitjes in de grond — het enige moment dat hij naar beneden komt!',
      funFact: "De vliegende draak kan tot 8 meter ver zweven van boom tot boom! Hij gebruikt zijn 'vleugels' ook om indruk te maken: mannetjes spreiden hun felgekleurde huidflappen uit om vrouwtjes aan te trekken.",
      question: 'Hoe kan de vliegende draak door de lucht zweven?',
      options: [
        { id: 'A', text: 'Hij heeft echte vleugels zoals een vogel' },
        { id: 'B', text: 'Hij heeft verlengde ribben met huidflappen die hij uitspreidt' },
        { id: 'C', text: 'Hij blaast zichzelf op als een ballon' }
      ],
      answerId: 'B',
      colorTheme: 'border-lime-500'
    },
    {
      name: 'Het Wandelend Blad',
      icon: '🍃',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "Het wandelend blad is de kampioen camouflage van het insectenrijk. Dit insect ziet er precies uit als een groen blad — compleet met 'nerven' en zelfs nep-vraatplekjes! Roofdieren lopen er gewoon voorbij zonder het te zien.",
      where: "Tussen het bladerdek van het regenwoud op Borneo en andere Zuidoost-Aziatische wouden. Hij zit overdag doodstil en beweegt zich 's nachts.",
      whatEats: 'Bladeren van verschillende bomen en planten. Hij eet ook soms zijn eigen afgeworpen huid na een vervelling!',
      whyClass: 'Het wandelend blad heeft zes poten, drie lichaamsdelen en ondergaat een gedaanteverwisseling van ei tot volwassen dier.',
      funFact: 'Als het wandelend blad loopt, wiegt hij zachtjes heen en weer, precies zoals een blad in de wind. Zelfs zijn eitjes zien eruit als plantenzaadjes. De natuur is een geniale ontwerper!',
      question: 'Hoe beschermt het wandelend blad zich tegen vijanden?',
      options: [
        { id: 'A', text: 'Hij bijt heel hard' },
        { id: 'B', text: 'Hij ziet er precies uit als een blad zodat vijanden hem niet opmerken' },
        { id: 'C', text: 'Hij rent heel snel weg' }
      ],
      answerId: 'B',
      colorTheme: 'border-green-500'
    },
    {
      name: 'De Borneo-vogelspinachtigen (tarantula)',
      icon: '🕷️',
      animalClass: 'Spinachtige',
      classIcon: '🕷️',
      description: "Op Borneo leven verschillende soorten tarantula's (vogelspinnen). Sommige zijn zo groot als een handpalm! Ze zien er angstaanjagend uit, maar voor mensen zijn niet echt gevaarlijk. Hun beet doet pijn, maar is vergelijkbaar met een wespensteek.",
      where: 'Sommige graven holen in de bosbodem, andere leven in holle bomen of tussen boomschors. Ze spinnen een dunne laag zijde rond hun hol als een alarmsysteem: als een prooidier over het web loopt, voelt de spin de trillingen!',
      whatEats: 'Insecten, kleine hagedissen, kikkers en soms zelfs kleine vogels (vandaar de naam vogelspinnen!).',
      whyClass: 'Ze hebben 8 poten (insecten hebben er 6), geen vleugels, en hun lichaam bestaat uit twee delen (kop-borststuk en achterlijf) in plaats van drie.',
      funFact: 'Sommige tarantula\'s kunnen hun irriterende haren afschieten als verdediging! Deze haartjes veroorzaken hevige jeuk bij aanvallers. Dat is hun geheime wapen!',
      question: 'Wat is het belangrijkste verschil tussen spinachtigen en insecten?',
      options: [
        { id: 'A', text: 'Spinnen zijn altijd groter' },
        { id: 'B', text: 'Spinachtigen hebben 8 poten, insecten 6 poten' },
        { id: 'C', text: 'Spinnen zijn altijd giftig' }
      ],
      answerId: 'B',
      colorTheme: 'border-stone-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-lime-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌺 Het regenwoud van Borneo 🌺</h2>
        <p className="text-xl text-lime-100 font-medium">Zuidoost-Azië (Maleisië, Indonesië, Brunei)</p>
        <div className="mt-6 bg-lime-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed">
            Het regenwoud van Borneo is een van de oudste oerwouden ter wereld: het bestaat al meer dan 130 miljoen jaar! 
            Borneo is het derde grootste eiland ter wereld. In dit oerwoud groeien de grootste bloemen en leven dieren die nergens anders voorkomen.
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
