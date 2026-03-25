import AnimalCard from '../components/AnimalCard';

export default function Borneo() {
  const animals = [
    {
      name: 'De Orang-oetan',
      scientificName: 'Pongo pygmaeus (Borneo)',
      icon: '🦧',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De orang-oetan is de grootste boomdiersoort ter wereld. Zijn naam betekent 'mens van het bos' in het Maleis. Hij heeft lange, superkrachtige armen (de spanwijdte kan 2,4 meter zijn — breder dan hij lang is!) en roodbruine, ruige vacht. Volwassen mannetjes hebben brede wangkussens.",
      where: 'Hoog in de bomen! De orang-oetan is het grootste dier dat bijna zijn hele leven in bomen doorbrengt. Elke avond bouwt hij een comfortabel slaapnest van bladeren en takken, soms met een \'dakje\' tegen de regen.',
      whatEats: 'Vooral fruit (meer dan 400 soorten!), maar ook bladeren, schors, honing, insecten en soms vogeleieren. Ze onthouden precies welke bomen wanneer vruchten dragen — als een levende kalender!',
      whyClass: "De orang-oetan heeft haar, is warmbloedig, en moeders voeden hun baby's jarenlang met melk. Een jong blijft tot wel 8 jaar bij zijn moeder — dat is het langst van alle dieren behalve de mens!",
      funFact: "Orang-oetans gebruiken gereedschap! Ze peuteren met stokken insecten uit boomgaatjes, gebruiken grote bladeren als paraplu, en maken van takken 'handschoenen' om stekelige vruchten vast te pakken.",
      didYouKnow: "Orang-oetans delen 97% van hun DNA met mensen. Ze kunnen zelfs leren communiceren met gebarentaal!",
      colorTheme: 'border-orange-600'
    },
    {
      name: 'De Neushoornvogel',
      scientificName: 'Buceros rhinoceros',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De neushoornvogel is een grote, indrukwekkende vogel met een enorme, kleurrijke snavel en een opvallende 'helm' (casque) bovenop. Hij kan tot 1 meter lang worden. Zijn vleugelslag is zo krachtig dat je het geluid van ver kunt horen — het klinkt als een stoomlocomotief!",
      where: 'In de hoge boomkruinen van het regenwoud. De vrouwtjes broeden in holle bomen en metselen de opening dicht met modder en eten, zodat alleen een smal gleufje overblijft waardoor het mannetje voedsel aangeeft.',
      whatEats: 'Vooral vruchten (met name vijgen!), maar ook insecten, kleine hagedissen en slakken. Hij gooit het voedsel omhoog en vangt het op in zijn snavel.',
      whyClass: 'De neushoornvogel heeft veren, een (hele grote!) snavel, legt eieren en is warmbloedig.',
      funFact: 'Het vrouwtje zit soms 3 tot 4 maanden opgesloten in de holle boom tijdens het broeden! Het mannetje brengt in die tijd trouw honderden keren voedsel aan.',
      didYouKnow: "Neushoornvogels zijn belangrijke 'tuiniers' van het bos. Ze eten vruchten en poepen de zaden verderop uit. Zo helpen ze het bos groeien en verspreiden ze bomen over grote afstanden.",
      colorTheme: 'border-yellow-500'
    },
    {
      name: 'De Vliegende Draak (Draco)',
      scientificName: 'Draco volans',
      icon: '🦎',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: "De vliegende draak is een kleine hagedis (ongeveer 20 centimeter) die kan 'vliegen' — nou ja, eigenlijk zweeft hij. Hij heeft verlengde ribben aan de zijkant van zijn lichaam met een dunne huidflap ertussen. Die kan hij uitspreiden als vleugels. Opgevouwen zie je er niets van!",
      where: 'In de bomen van het tropisch regenwoud op Borneo en omliggende eilanden. Hij zweeft van boom tot boom en landt bijna nooit op de grond.',
      whatEats: 'Vooral mieren en termieten. Hij wacht geduldig op een boomstam en grijpt voorbijlopende insecten met zijn snelle tongetje.',
      whyClass: 'De vliegende draak heeft schubben, is koudbloedig en legt eitjes in de grond — het enige moment dat het vrouwtje naar beneden komt!',
      funFact: "De vliegende draak kan tot 8 meter ver zweven van boom tot boom en verliest daarbij maar heel weinig hoogte. Hij kan zelfs bochten nemen in de lucht!",
      didYouKnow: "Mannetjes spreiden hun felgekleurde huidflappen uit om indruk te maken op vrouwtjes. Elke soort heeft een andere kleur: geel, oranje, rood of blauw.",
      colorTheme: 'border-lime-500'
    },
    {
      name: 'Het Wandelend Blad',
      scientificName: 'Phyllium (familie)',
      icon: '🍃',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "Het wandelend blad is de kampioen camouflage van het insectenrijk. Dit insect ziet er precies uit als een groen blad — compleet met 'nerven', onregelmatige randen en zelfs nep-vraatplekjes en bruine 'rotte' randjes! Roofdieren lopen er gewoon voorbij.",
      where: "Tussen het bladerdek van het regenwoud op Borneo en andere Zuidoost-Aziatische wouden. Hij zit overdag doodstil op een tak en beweegt zich alleen 's nachts als het veiliger is.",
      whatEats: 'Bladeren van verschillende bomen en planten. Hij eet soms ook zijn eigen afgeworpen huid na een vervelling! Niets gaat verloren.',
      whyClass: 'Het wandelend blad heeft zes poten, drie lichaamsdelen en ondergaat een onvolledige gedaanteverwisseling (van ei naar nimf naar volwassene, zonder popstadium).',
      funFact: 'Als het wandelend blad loopt, wiegt hij zachtjes heen en weer, precies zoals een blad in de wind. Zelfs zijn eitjes zien eruit als plantenzaadjes!',
      didYouKnow: "Het wandelend blad is al minstens 47 miljoen jaar oud. Er zijn fossielen gevonden die bijna exact hetzelfde eruitzien als de huidige soorten!",
      colorTheme: 'border-green-500'
    },
    {
      name: 'De Borneo Vogelspinachtigen (tarantula)',
      scientificName: 'Theraphosidae (familie)',
      icon: '🕷️',
      animalClass: 'Spinachtige',
      classIcon: '🕷️',
      description: "Op Borneo leven verschillende soorten tarantula's (vogelspinnen). Sommige zijn zo groot als een uitgespreide hand! Ze zien er angstaanjagend uit met hun dikke, harige poten, maar voor mensen zijn ze niet echt gevaarlijk. Hun beet doet pijn, maar is vergelijkbaar met een wespensteek.",
      where: 'Sommige soorten graven holen in de bosbodem, andere leven in holle bomen of tussen boomschors. Ze spinnen een dunne laag zijde rond hun hol als \'alarmsysteem\': als een prooidier over het web loopt, voelt de spin de trillingen!',
      whatEats: "Insecten, krekels, kleine hagedissen, kikkers en soms zelfs kleine vogels en muizen (vandaar de naam 'vogelspinnen'!). Ze bespuiten hun prooi met verteringssappen en zuigen het vloeibare voedsel op.",
      whyClass: 'Ze hebben 8 poten (insecten hebben er 6), geen vleugels, en hun lichaam bestaat uit twee delen (kop-borststuk en achterlijf) in plaats van drie. Ze hebben ook gifklauwen (cheliceren) vooraan.',
      funFact: 'Sommige tarantula\'s kunnen hun irriterende buikharen afschieten als verdediging! Deze haartjes veroorzaken hevige jeuk bij aanvallers. De spin wordt er kaal van op de buik!',
      didYouKnow: "Vrouwelijke tarantula's kunnen 15 tot 25 jaar oud worden — veel ouder dan de meeste huisdieren!",
      colorTheme: 'border-stone-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-lime-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌺 Het regenwoud van Borneo 🌺</h2>
        <p className="text-xl text-lime-100 font-medium">Zuidoost-Azië (Maleisië, Indonesië, Brunei)</p>
        <div className="mt-6 bg-lime-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed mb-4">
            Het regenwoud van Borneo is een van de oudste oerwouden ter wereld: het bestaat al meer dan 130 miljoen jaar! Borneo is het derde grootste eiland ter wereld. In dit oerwoud groeit de grootste bloem ter wereld (de Rafflesia, tot 1 meter breed!) en leven dieren die nergens anders voorkomen.
          </p>
          <p className="text-lg leading-relaxed">
            Helaas verdwijnt het regenwoud van Borneo in hoog tempo. Grote stukken bos worden gekapt om er palmolieplantages aan te leggen. Palmolie zit in heel veel producten: koekjes, shampoo, chips… Kijk maar eens op de verpakking!
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
