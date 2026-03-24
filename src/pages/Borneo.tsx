import AnimalCard from '../components/AnimalCard';

export default function Borneo() {
  const animals = [
    {
      name: 'De Orang-oetan',
      scientificName: 'Pongo pygmaeus (Borneose orang-oetan)',
      icon: '🦧',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De orang-oetan is de grootste boomdiersoort ter wereld. Zijn naam betekent 'mens van het bos' in het Maleis. Hij heeft lange, sterke armen (de spanwijdte kan wel 2 meter zijn!) en een opvallende roodbruine vacht. Volwassen mannetjes krijgen grote, vlezige wangplaten.",
      where: 'Hoog in de bomen van het regenwoud op Borneo. De orang-oetan is het grootste dier dat bijna zijn hele leven in bomen doorbrengt. Elke avond bouwt hij hoog in de kruinen een nieuw, comfortabel slaapnest van bladeren en takken.',
      whatEats: 'Vooral fruit (ze kennen meer dan 400 soorten eetbare planten!), maar ook bladeren, schors, insecten en soms honing. Ze zijn heel belangrijk voor het bos omdat ze zaden verspreiden via hun poep.',
      whyClass: "De orang-oetan heeft haar, is warmbloedig, en moeders voeden hun baby's jarenlang met melk. Een jong blijft tot wel 8 jaar bij zijn moeder — dat is de langste jeugd van alle dieren op aarde (na de mens)!",
      funFact: 'Orang-oetans zijn super slim en gebruiken gereedschap! Ze gebruiken stokjes om termieten uit een boom te peuteren of om honing uit een nest te halen, en ze gebruiken grote bladeren als paraplu als het regent.',
      didYouKnow: "Orang-oetans kunnen niet zwemmen! Ze zijn bang voor diep water en zullen altijd proberen via de bomen een rivier over te steken.",
      colorTheme: 'border-orange-600'
    },
    {
      name: 'De Neushoornvogel',
      scientificName: 'Buceros rhinoceros (Gewone neushoornvogel)',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De neushoornvogel is een grote vogel met een enorme, kleurrijke snavel en een opvallende 'helm' (casque) bovenop. Die helm is hol en werkt als een soort klankkast om hun roep te versterken. Hun vleugelslag is zo krachtig dat het klinkt als een stoomlocomotief die voorbijvliegt!",
      where: 'In de hoge boomkruinen van het regenwoud. Ze hebben grote, oude bomen nodig met natuurlijke holtes om in te nestelen.',
      whatEats: 'Vooral vruchten (met name wilde vijgen), maar ook insecten, kleine hagedissen en boomkikkers.',
      whyClass: 'De neushoornvogel heeft veren, een snavel, legt eieren en is warmbloedig.',
      funFact: 'Als het vrouwtje gaat broeden, kruipt ze in een holle boom. Het mannetje metselt de opening dicht met modder en poep, zodat alleen een smal gleufje overblijft. Zo is ze veilig voor roofdieren (zoals slangen en apen).',
      didYouKnow: "Het mannetje moet soms wel 3 maanden lang elke dag voedsel brengen naar het ingemetselde vrouwtje en haar kuikens. Als het mannetje iets overkomt, heeft het gezin een groot probleem.",
      colorTheme: 'border-yellow-500'
    },
    {
      name: 'De Vliegende Draak',
      scientificName: 'Draco volans',
      icon: '🦎',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: "De vliegende draak (of Draco) is een kleine hagedis (ongeveer 20 centimeter lang) die kan 'vliegen'! Nou ja, eigenlijk zweeft hij. Hij heeft verlengde ribben met een huidflap ertussen (het patagium) die hij kan uitspreiden als vleugels.",
      where: 'In de bomen van het tropisch regenwoud op Borneo. Hij zweeft van boomstam naar boomstam en komt bijna nooit op de grond, behalve het vrouwtje als ze eitjes gaat leggen.',
      whatEats: 'Vooral mieren en termieten. Hij zit stil op een boomstam en wacht tot er een lekker hapje voorbij komt lopen.',
      whyClass: 'De vliegende draak heeft schubben, is koudbloedig en legt eitjes in een kuiltje in de grond.',
      funFact: "De vliegende draak kan wel 8 meter ver zweven! Hij gebruikt zijn 'vleugels' ook om te communiceren: mannetjes spreiden hun felgekleurde huidflappen uit om vrouwtjes aan te trekken of rivalen weg te jagen.",
      didYouKnow: "Tijdens het zweven gebruikt de hagedis zijn lange, dunne staart om te sturen, net als het roer van een vliegtuig.",
      colorTheme: 'border-lime-500'
    },
    {
      name: 'Het Wandelend Blad',
      scientificName: 'Phyllium (familie)',
      icon: '🍃',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "Het wandelend blad is de absolute kampioen camouflage van het insectenrijk. Dit insect ziet er precies uit als een groen (of soms bruin) blad — compleet met 'nerven' en zelfs nep-vraatplekjes of bruine randjes! Roofdieren lopen er gewoon voorbij zonder het te zien.",
      where: "Tussen het bladerdek van het regenwoud. Hij zit overdag muisstil en beweegt zich vooral 's nachts om te eten.",
      whatEats: 'Bladeren van verschillende bomen en struiken. Soms eet hij na een vervelling zijn eigen afgeworpen huid op om voedingsstoffen te recyclen!',
      whyClass: 'Het wandelend blad heeft zes poten, drie lichaamsdelen (kop, borststuk, achterlijf) en twee voelsprieten. Hij ondergaat een onvolledige metamorfose: de baby\'s (nimfen) lijken al op kleine volwassenen.',
      funFact: 'Als het wandelend blad loopt, wiegt hij zachtjes heen en weer. Zo lijkt hij precies op een blad dat ritselt in de wind. Zelfs zijn eitjes zien eruit als plantenzaadjes!',
      didYouKnow: "Vrouwelijke wandelende bladeren hebben mannetjes niet altijd nodig om zich voort te planten. Als er geen mannetjes zijn, leggen ze onbevruchte eitjes waar alleen maar nieuwe vrouwtjes uitkomen (dit heet parthenogenese).",
      colorTheme: 'border-green-500'
    },
    {
      name: 'De Vogelspin',
      scientificName: 'Theraphosidae (familie)',
      icon: '🕷️',
      animalClass: 'Spinachtige',
      classIcon: '🕷️',
      description: "Op Borneo leven verschillende soorten grote vogelspinnen (tarantula's). Sommige zijn zo groot als een handpalm en heel harig! Ze zien er angstaanjagend uit, maar voor mensen zijn ze meestal niet gevaarlijk. Hun beet doet pijn (vergelijkbaar met een wespensteek), maar is zelden dodelijk.",
      where: 'Sommige soorten graven holen in de bosbodem, andere leven hoog in holle bomen of tussen boomschors. Ze spinnen geen web om prooien in te vangen, maar gebruiken zijde om hun hol te bekleden en als struikeldraadjes.',
      whatEats: "Insecten, kleine hagedissen, kikkers en heel soms een klein vogeltje of muis (vandaar de naam vogelspin!). Ze jagen 's nachts vanuit een hinderlaag.",
      whyClass: 'Spinachtigen zijn géén insecten! Ze hebben 8 poten (insecten hebben er 6), geen vleugels, geen voelsprieten, en hun lichaam bestaat uit twee delen (kopborststuk en achterlijf) in plaats van drie.',
      funFact: 'Vogelspinnen kunnen niet goed zien. Ze jagen door trillingen te voelen. Als een prooi over hun zijden struikeldraadjes loopt, voelt de spin dat met de haartjes op haar poten en schiet ze razendsnel naar buiten!',
      didYouKnow: "Als een vogelspin zich bedreigd voelt, kan ze met haar achterpoten brandharen van haar achterlijf wrijven en in de lucht gooien. Die haartjes veroorzaken vreselijke jeuk in de ogen en neus van een roofdier!",
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
            Het regenwoud van Borneo is een van de oudste oerwouden ter wereld: het bestaat naar schatting al 130 miljoen jaar! Dat is ouder dan het Amazonewoud. 
            Borneo is het op twee na grootste eiland ter wereld.
          </p>
          <p className="text-lg leading-relaxed">
            In dit oerwoud groeien de grootste bloemen ter wereld (de Rafflesia, die ruikt naar rottend vlees!) en leven dieren die nergens anders op aarde voorkomen. Helaas wordt dit prachtige woud zwaar bedreigd door houtkap en de aanleg van palmolieplantages.
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
