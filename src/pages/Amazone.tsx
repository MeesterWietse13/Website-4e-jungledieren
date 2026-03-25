import AnimalCard from '../components/AnimalCard';

export default function Amazone() {
  const animals = [
    {
      name: 'De Jaguar',
      scientificName: 'Panthera onca',
      icon: '🐆',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De jaguar is de grootste kat van Zuid-Amerika en de derde grootste kat ter wereld (na de tijger en de leeuw). Hij heeft een prachtige goudgele vacht met zwarte vlekken, die we 'rozetten' noemen. In het midden van die rozetten zitten vaak nog kleine zwarte stipjes. Dat is het verschil met een luipaard!",
      where: 'De jaguar leeft het liefst op de bosbodem, vaak in de buurt van rivieren en moerassen. Anders dan de meeste katten houdt hij enorm van water en is hij een uitstekende zwemmer.',
      whatEats: 'Hij is een toproofdier (hij staat bovenaan de voedselketen). Hij eet herten, tapirs, vissen, schildpadden en zelfs kaaimannen (een soort krokodillen). Zijn kaken zijn zó sterk dat hij door het schild van een schildpad kan bijten!',
      whyClass: 'De jaguar heeft vacht, is warmbloedig en de moeder geeft melk aan haar welpen. De welpen worden blind geboren en blijven ongeveer 2 jaar bij hun moeder om te leren jagen.',
      funFact: "De naam 'jaguar' komt van het inheemse woord 'yaguar', wat betekent: 'hij die doodt met één sprong'.",
      didYouKnow: "Er bestaan ook volledig zwarte jaguars! Die noemen we 'zwarte panters'. Als je goed kijkt in fel zonlicht, zie je dat ze toch rozetten hebben, maar dan donkerzwart op een zwarte vacht.",
      colorTheme: 'border-orange-500'
    },
    {
      name: 'De Ara (papegaai)',
      scientificName: 'Ara macao (Geelvleugelara of Scharlaken ara)',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De ara is een van de grootste en meest kleurrijke papegaaien ter wereld. Er bestaan veel soorten, zoals de scharlaken ara (felrood met blauwe en gele vleugels) en de blauwgele ara. Ze hebben een lange staart en een grote, sterke, kromme snavel.",
      where: "Ara's leven hoog in het kronendak van het oerwoud. Ze nestelen in holle bomen. Een koppel ara's blijft hun hele leven samen en ze vliegen vaak heel dicht naast elkaar.",
      whatEats: "Vooral noten, zaden en vruchten. Hun snavel is zo sterk dat ze moeiteloos harde paranoten kunnen kraken! Soms eten ze ook klei langs de rivieroevers. Die klei helpt om giftige stoffen uit onrijpe zaden te neutraliseren.",
      whyClass: 'De ara heeft veren, een snavel, legt eieren en is warmbloedig.',
      funFact: "Ara's zijn super slim en heel sociaal. Ze 'praten' met elkaar door hard te krijsen. Dat geluid kan je kilometers ver horen in de jungle!",
      didYouKnow: "Ara's kunnen heel oud worden. In het wild worden ze vaak 40 tot 50 jaar, maar als huisdier kunnen ze wel 80 jaar oud worden — ouder dan veel mensen!",
      colorTheme: 'border-blue-500'
    },
    {
      name: 'De Pijlgifkikker',
      scientificName: 'Dendrobatidae (familie)',
      icon: '🐸',
      animalClass: 'Amfibie',
      classIcon: '🐸',
      description: "De pijlgifkikker is piepklein (soms maar 2 tot 5 centimeter!) maar supergevaarlijk. Zijn huid bevat een sterk, dodelijk gif. De felgekleurde huid — blauw, rood, geel, oranje of groen — is een duidelijke waarschuwing voor roofdieren: 'Eet mij niet op, ik ben giftig!' Dit noemen we 'waarschuwingskleuren'.",
      where: 'Meestal op de vochtige bosbodem, tussen de afgevallen bladeren. Sommige soorten klimmen ook in bomen.',
      whatEats: 'Kleine insecten zoals mieren, termieten en kleine kevertjes. Wetenschappers denken dat de kikker zijn gif niet zelf maakt, maar haalt uit de giftige insecten die hij eet!',
      whyClass: 'De pijlgifkikker is koudbloedig, heeft een vochtige, gladde huid zonder schubben, en begint zijn leven als kikkervisje in het water (met kieuwen). Later krijgt hij longen en poten en leeft hij op het land. Deze verandering heet metamorfose.',
      funFact: "Sommige pijlgifkikkers zijn geweldige ouders. Ze dragen hun kikkervisjes op hun rug naar kleine waterplasjes hoog in de bomen (bijvoorbeeld in de kelk van een bromelia-plant).",
      didYouKnow: "Inheemse volkeren in het Amazonewoud wreven de punten van hun jachtpijlen over de rug van de 'gouden pijlgifkikker'. Eén zo'n kikkertje heeft genoeg gif om 10 volwassen mensen te doden!",
      colorTheme: 'border-green-500'
    },
    {
      name: 'De Groene Anaconda',
      scientificName: 'Eunectes murinus',
      icon: '🐍',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: 'De groene anaconda is de zwaarste slang ter wereld. Ze kan wel 200 kilogram wegen, tot 9 meter lang worden en zo dik als een boomstam zijn! Ze is niet giftig, maar doodt haar prooi door zich eromheen te wikkelen en steeds strakker te knijpen elke keer als de prooi uitademt. Dit is een wurgslang.',
      where: 'In en rond de rivieren, moerassen en overstroomde bossen van het Amazonewoud. Op het land is ze traag en log, maar in het water is ze razendsnel en sierlijk.',
      whatEats: 'Grote prooidieren zoals herten, wilde zwijnen, kaaimannen, capibara\'s (grote knaagdieren) en soms zelfs jaguars. Na een heel grote maaltijd hoeft ze soms maandenlang niet meer te eten!',
      whyClass: 'De anaconda heeft schubben en is koudbloedig. Bijzonder: ze legt geen eieren, maar baart levende jongen (soms wel 40 tegelijk!).',
      funFact: "De ogen en neusgaten van de anaconda zitten helemaal bovenop haar kop. Zo kan ze bijna onzichtbaar onder water liggen wachten, terwijl ze toch kan zien en ademen — net als een krokodil.",
      didYouKnow: "De anaconda kan haar kaken 'ontkoppelen' (uit de kom halen). Hierdoor kan ze prooien doorslikken die veel breder zijn dan haar eigen kop. Haar huid en maag rekken enorm mee!",
      colorTheme: 'border-emerald-600'
    },
    {
      name: 'De Blauwe Morpho-vlinder',
      scientificName: 'Morpho menelaus',
      icon: '🦋',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "De blauwe morpho is een van de grootste en mooiste vlinders ter wereld. Zijn vleugels kunnen wel 15 tot 20 centimeter breed worden! De bovenkant van de vleugels is schitterend, glanzend metaalblauw. Maar de onderkant is dofbruin met 'oogvlekken'. Als hij met gesloten vleugels op een tak zit, lijkt hij op een dor blaadje met ogen die roofdieren afschrikken.",
      where: 'In alle lagen van het oerwoud, maar je ziet ze vaak fladderen langs rivieren of op open plekken waar zonlicht doorkomt.',
      whatEats: "De volwassen vlinder 'eet' niet, maar drinkt! Met zijn lange, opgerolde tong (de roltong) zuigt hij sappen op uit rottend fruit, rottende dieren, boomsappen en natte modder. Hij proeft met sensoren op zijn pootjes!",
      whyClass: 'De morpho heeft zes poten, een lichaam met drie delen (kop, borststuk, achterlijf), twee voelsprieten en een uitwendig skelet. Hij ondergaat een volledige gedaanteverwisseling: ei ➔ rups ➔ pop (cocon) ➔ vlinder.',
      funFact: 'De blauwe kleur is eigenlijk een optische illusie! Er zit geen blauwe kleurstof (pigment) in de vleugels. De kleur ontstaat door miljoenen microscopisch kleine schubbetjes die het licht op een speciale manier weerkaatsen.',
      didYouKnow: "Een volwassen morpho-vlinder leeft maar heel kort: ongeveer 2 tot 3 weken. Zijn enige doel is dan nog een partner vinden om eitjes te leggen.",
      colorTheme: 'border-cyan-500'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-emerald-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌿 Het Amazonewoud 🌿</h2>
        <p className="text-xl text-emerald-100 font-medium">Zuid-Amerika (Brazilië, Peru, Colombia, Ecuador…)</p>
        <div className="mt-6 bg-emerald-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed mb-4">
            Het Amazonewoud is het grootste tropische regenwoud ter wereld. Het is zo groot als bijna heel Europa! 
            De machtige Amazone-rivier stroomt er dwars doorheen — ze is zo breed dat je op sommige plekken de overkant niet kunt zien. In dit woud leven naar schatting 10 miljoen verschillende soorten dieren en planten.
          </p>
          <p className="text-lg leading-relaxed">
            Het Amazonewoud is ontzettend belangrijk voor de hele wereld: de bomen maken enorm veel zuurstof aan en slaan CO₂ op, wat helpt tegen klimaatverandering. Daarom noemen mensen het Amazonewoud vaak 'de longen van de aarde'.
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
