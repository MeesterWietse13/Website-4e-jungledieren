import AnimalCard from '../components/AnimalCard';

export default function Congo() {
  const animals = [
    {
      name: 'De Berggorilla',
      scientificName: 'Gorilla beringei beringei',
      icon: '🦍',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De berggorilla is een van onze naaste familieleden: we delen meer dan 98% van ons DNA met gorilla's! Een volwassen mannetje (de 'zilverrug', genoemd naar de zilveren streep op zijn rug) kan wel 200 kilogram wegen. Ondanks hun enorme kracht zijn gorilla's heel zachtaardige, verlegen dieren die het liefst rustig bladeren eten.",
      where: 'Berggorilla\'s leven in de mistige bergwouden aan de rand van het Congobekken, op hoogtes tot 4.000 meter. Ze maken elke avond een nieuw nest van bladeren en takken om in te slapen — ze gebruiken nooit tweemaal hetzelfde nest!',
      whatEats: "Gorilla's zijn vooral planteneters. Ze eten bladeren, stengels, scheuten, vruchten en soms mieren of slakken. Een volwassen gorilla eet ongeveer 18 kilogram planten per dag!",
      whyClass: "De gorilla heeft haar, is warmbloedig en gorillamoeders zogen hun baby's met melk. Een babygorilla blijft tot 3 à 4 jaar dicht bij zijn mama en leert alles van haar.",
      funFact: "Elke gorilla heeft een unieke 'neusafdruk', net zoals wij unieke vingerafdrukken hebben. Onderzoekers gebruiken foto's van gorillaneuzen om ze uit elkaar te houden!",
      didYouKnow: "De zilverrug communiceert met zijn groep door op zijn borst te trommelen. Dat geluid is tot 1 kilometer ver hoorbaar en klinkt als een holle trommel.",
      colorTheme: 'border-stone-600'
    },
    {
      name: 'De Afrikaanse Grijze Papegaai',
      scientificName: 'Psittacus erithacus',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De Afrikaanse grijze papegaai wordt beschouwd als de slimste papegaai ter wereld. Hij heeft een zachte grijze verenkleed met een opvallende helderrode staart. Deze vogel kan niet alleen woorden nadoen, maar begrijpt ook wat sommige woorden betekenen!",
      where: "In de boomkruinen van het dichte Congoregenwoud. Ze leven in groepen van soms wel honderd vogels en slapen samen in grote 'slaapbomen'. Overdag gaan ze in kleinere groepjes op zoek naar voedsel.",
      whatEats: "Noten (vooral van de oliepalm), zaden, vruchten en af en toe boomschors. Hij houdt zijn voedsel vast met één poot terwijl hij met zijn snavel eet — net alsof hij een handje heeft!",
      whyClass: "Hij heeft veren, een snavel, legt eieren en is warmbloedig. Zijn sterke, kromme snavel kan harde palmpitten kraken.",
      funFact: "Een beroemde grijze papegaai genaamd 'Alex' kon meer dan 100 Engelse woorden gebruiken, kleuren herkennen, vormen benoemen en tot 6 tellen. Wetenschappers schatten zijn intelligentie gelijk aan die van een kind van 5 jaar.",
      didYouKnow: "Grijze papegaaien kunnen het geluid van een telefoon, deurbel of microgolfoven perfect nadoen. Sommige eigenaars worden er gek van!",
      colorTheme: 'border-slate-500'
    },
    {
      name: 'De Goliathkikker',
      scientificName: 'Conraua goliath',
      icon: '🐸',
      animalClass: 'Amfibie',
      classIcon: '🐸',
      description: "De goliathkikker is de grootste kikker ter wereld! Hij kan tot 32 centimeter lang worden (zonder uitgestrekte poten) en meer dan 3 kilogram wegen. Met uitgestrekte poten is hij bijna zo lang als een baby! Ondanks zijn enorme formaat maakt hij nauwelijks geluid — hij heeft geen stemzak zoals andere kikkers.",
      where: "Bij snelstromende rivieren en watervallen in de regenwouden van Kameroen en Equatoriaal-Guinea. Hij houdt van helder, zuurstofrijk water met een temperatuur van precies 16 tot 22 graden.",
      whatEats: "Insecten, kleine vissen, krabben, schorpioenen en zelfs kleine slangen en andere kikkers. Met die grote mond past er heel wat in!",
      whyClass: "De goliathkikker is koudbloedig, heeft een gladde, vochtige huid en zijn jongen beginnen als kikkervisjes die in het water leven.",
      funFact: "De goliathkikker bouwt nesten! Hij sleept zware stenen (soms van 2 kilogram!) naar de oever om een beschut poeltje te maken voor zijn eitjes. Dat is heel uitzonderlijk voor een kikker.",
      didYouKnow: "De goliathkikker kan tot 3 meter ver springen. Gecombineerd met zijn kracht is hij een ware atleet onder de kikkers.",
      colorTheme: 'border-green-700'
    },
    {
      name: 'De Driehoornkameleon',
      scientificName: 'Trioceros jacksonii',
      icon: '🦎',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: "De driehoornkameleon (ook wel Jacksons kameleon) is een reptiel met drie kleine hoorntjes op zijn hoofd — hij lijkt op een minidinosaurus! Hij kan van kleur veranderen. Dat doet hij niet (alleen) om zich te verstoppen, maar vooral om zijn stemming te tonen (boos = donker, ontspannen = lichtgroen) en om zijn lichaamstemperatuur te regelen.",
      where: "In de bomen van de vochtige bergwouden in Oost-Afrika, aan de rand van het Congobekken. Hij grijpt zich met zijn grijpstaart en speciale 'tang-tenen' (twee groepen tenen die als een tang werken) vast aan takken.",
      whatEats: "Insecten! De kameleon schiet zijn enorm lange, kleverige tong naar buiten om insecten te vangen. Zijn tong kan anderhalve keer zo lang zijn als zijn eigen lichaam en schiet in 0,07 seconden naar buiten — sneller dan je kunt knipperen!",
      whyClass: "De kameleon heeft schubben, is koudbloedig en de driehoornkameleon baart levende jongen (dat is bijzonder, want veel kameleonsoorten leggen eieren).",
      funFact: "De ogen van een kameleon kunnen onafhankelijk van elkaar draaien. Dat betekent dat hij tegelijk naar voren én naar achteren kan kijken — een blikveld van bijna 360 graden!",
      didYouKnow: "Kameleons lopen heel langzaam en wiegen heen en weer. Wetenschappers denken dat dit ze laat lijken op een blad dat in de wind beweegt, zodat roofdieren hen niet opmerken.",
      colorTheme: 'border-lime-600'
    },
    {
      name: 'De Goliathkever',
      scientificName: 'Goliathus goliatus',
      icon: '🪲',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "De goliathkever is een van de zwaarste insecten ter wereld. Als larve kan hij wel 100 gram wegen — zo zwaar als een appel! Het volwassen kevertje is iets lichter (rond de 50 gram) maar nog altijd enorm voor een insect: tot 11 centimeter lang. Hij heeft een opvallend zwart-wit gestreept schild.",
      where: "In de boomkruinen van het Congoregenwoud. De larven leven in rottend hout op de bosbodem, waar het lekker vochtig en warm is. Volwassen kevers klimmen naar boven, naar het kronendak.",
      whatEats: "De larven hebben veel eiwit nodig en eten rottend hout en compost. Volwassen kevers eten boomschors, sap en vruchten.",
      whyClass: "De goliathkever heeft zes poten, drie lichaamsdelen en harde dekschilden (elytra) die zijn dunne vliegvleugels eronder beschermen.",
      funFact: "Ondanks zijn gewicht kan de goliathkever vliegen! Hij opent zijn harde buitenschilden, ontvouwt zijn vliegvleugels en stijgt op met een geluid als een klein helikoptertje.",
      didYouKnow: "De goliathkever is vernoemd naar 'Goliath' uit de bijbel, de beroemde reus. Een toepasselijke naam voor zo'n reuzenkever!",
      colorTheme: 'border-amber-700'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-emerald-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌳 Het Congoregenwoud 🌳</h2>
        <p className="text-xl text-emerald-100 font-medium">Centraal-Afrika (Democratische Republiek Congo, Kameroen, Gabon…)</p>
        <div className="mt-6 bg-emerald-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed mb-4">
            Het Congoregenwoud is het op één na grootste tropische oerwoud ter wereld. Het ligt in het hart van Afrika, rond de machtige Congorivier. Dit woud is de thuisbasis van heel bijzondere dieren die nergens anders op aarde leven, zoals de berggorilla en de okapi.
          </p>
          <p className="text-lg leading-relaxed">
            Het Congoregenwoud is ook een gigantisch waterreservoir. Het slaat zoveel water op in de bodem en bomen dat het het weer van heel Afrika beïnvloedt. Helaas wordt er veel bos gekapt, wat een bedreiging vormt voor de dieren die er leven.
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
