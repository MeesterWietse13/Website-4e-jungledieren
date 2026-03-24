import AnimalCard from '../components/AnimalCard';

export default function Amazone() {
  const animals = [
    {
      name: 'De Jaguar',
      scientificName: 'Panthera onca',
      icon: '🐆',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De jaguar is de grootste kat van Zuid-Amerika en de derde grootste kat ter wereld (na de tijger en de leeuw). Hij heeft een prachtige goudgele vacht met zwarte vlekken, die we 'rozetten' noemen. Elke jaguar heeft een uniek vlekkenpatroon, net zoals jij unieke vingerafdrukken hebt.",
      where: 'De jaguar leeft op de bosbodem, vaak in de buurt van rivieren en moerassen. Anders dan de meeste katten houdt hij van water en is hij een uitstekende zwemmer. Hij zwemt zelfs door brede rivieren!',
      whatEats: 'De jaguar is een roofdier. Hij eet herten, tapirs, krokodilachtigen, vissen, schildpadden en zelfs anaconda\'s. Zijn kaken zijn de sterkste van alle grote katten — hij kan door het schild van een schildpad bijten!',
      whyClass: 'De jaguar heeft vacht, is warmbloedig en de moeder geeft melk aan haar welpen. De welpen worden blind geboren en blijven ongeveer 2 jaar bij hun moeder.',
      funFact: "De naam 'jaguar' komt van het inheemse woord 'yaguar', wat betekent: 'hij die doodt met één sprong'. De jaguar kan vanuit stilstand wel 3 meter hoog springen!",
      didYouKnow: "Er bestaan ook volledig zwarte jaguars! Die noemen we 'zwarte panters'. Als je goed kijkt in het zonlicht, zie je dat ze toch rozetten hebben — alleen heel donker.",
      colorTheme: 'border-orange-500'
    },
    {
      name: 'De Ara (papegaai)',
      scientificName: 'Ara macao (scharlaken ara)',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "De ara is een van de meest kleurrijke vogels ter wereld. Er bestaan veel soorten, zoals de scharlaken ara (feloranje-rood met blauwe en gele vleugels) en de blauwgele ara. Ze kunnen heel oud worden: soms wel 60 tot 80 jaar! Dat is ouder dan veel mensen.",
      where: "Ara's leven hoog in de boomkruinen van het oerwoud. Ze nestelen in holle bomen, vaak in gaten die spechten hebben gemaakt. Een koppel ara's blijft hun hele leven samen — ze zijn echte trouwe partners.",
      whatEats: "Noten, zaden, vruchten en soms klei! Ja, echt: ara's verzamelen zich bij kleirotsen en likken eraan om mineralen binnen te krijgen. Die mineralen helpen hen om giftige zaden te verteren.",
      whyClass: 'De ara heeft veren, een snavel, legt eieren en is warmbloedig. Zijn sterke, kromme snavel kan zelfs een bezemsteel doorbijten!',
      funFact: "Ara's zijn heel sociale dieren. Ze leven in groepen van soms wel 30 vogels en 'praten' veel met elkaar. Elke groep heeft zijn eigen 'dialect'!",
      didYouKnow: "Ara's vliegen elke ochtend soms 25 kilometer van hun slaapboom naar hun favoriete voedselplekken. Ze hebben een ingebouwde 'GPS' in hun hoofd!",
      colorTheme: 'border-blue-500'
    },
    {
      name: 'De Pijlgifkikker',
      scientificName: 'Dendrobates (familie)',
      icon: '🐸',
      animalClass: 'Amfibie',
      classIcon: '🐸',
      description: "De pijlgifkikker is piepklein (soms maar 2 centimeter!) maar supergevaarlijk. Zijn huid bevat een sterk gif. De felgekleurde huid — blauw, rood, geel, oranje of groen — is een duidelijke waarschuwing: 'Eet mij niet op!' Dit noemen wetenschappers 'waarschuwingskleuren' of 'aposematisme'.",
      where: 'Op de vochtige bosbodem, tussen het bladafval en bij kleine beekjes. Sommige soorten zijn geweldige ouders: ze dragen hun kikkervisjes op hun rug naar kleine waterplasjes hoog in de bomen, in bijvoorbeeld de kelk van een bromelia-plant.',
      whatEats: 'Kleine insecten zoals mieren, termieten en kleine kevertjes. Wetenschappers denken dat het gif van de kikker afkomstig is van de insecten die hij eet. In gevangenschap verliest hij langzaam zijn gif!',
      whyClass: 'De pijlgifkikker is koudbloedig, heeft een vochtige huid zonder schubben, en begint zijn leven als kikkervisje in het water. Later groeit hij poten en leeft hij op het land. Die verandering noemen we \'metamorfose\'.',
      funFact: "Inheemse volkeren in het Amazonewoud wreven het gif van de 'gouden pijlgifkikker' op hun pijlpunten om mee te jagen. Eén kikkertje bevat genoeg gif om 10 volwassen mannen te doden!",
      didYouKnow: "Er zijn meer dan 170 soorten pijlgifkikkers, en ze komen in bijna alle kleuren van de regenboog voor. De felste kleuren betekenen het sterkste gif.",
      colorTheme: 'border-green-500'
    },
    {
      name: 'De Groene Anaconda',
      scientificName: 'Eunectes murinus',
      icon: '🐍',
      animalClass: 'Reptiel',
      classIcon: '🦎',
      description: 'De groene anaconda is de zwaarste slang ter wereld. Ze kan wel 200 kilogram wegen, tot 9 meter lang worden en zo dik als een boomstam zijn! Ze is niet giftig, maar doodt haar prooi door zich eromheen te wikkelen en steeds strakker te knijpen als de prooi uitademt. Dat noemen we een \'wurgslang\'.',
      where: 'In en rond de rivieren en moerassen van het Amazonewoud. De anaconda brengt het grootste deel van haar leven in het water door. In het water draagt het water haar gewicht, zodat ze zich makkelijk kan verplaatsen.',
      whatEats: 'Grote prooidieren zoals herten, wilde zwijnen, kaaimannen, capibara\'s (het grootste knaagdier ter wereld) en grote vogels. Na een heel grote maaltijd hoeft ze soms maandenlang niet meer te eten!',
      whyClass: 'De anaconda heeft schubben, is koudbloedig en — dit is bijzonder — legt geen eieren maar baart levende jongen. Ze kan tot 40 jongen tegelijk krijgen!',
      funFact: "De anaconda kan haar kaak uit de kom laten klikken om prooidieren te verslinden die veel breder zijn dan haar eigen hoofd. Haar huid rekt mee als een elastiek!",
      didYouKnow: "De ogen en neusgaten van de anaconda zitten bovenop haar hoofd, zodat ze bijna helemaal ondergedoken in het water kan liggen en toch alles in de gaten houdt — net als een krokodil.",
      colorTheme: 'border-emerald-600'
    },
    {
      name: 'De Blauwe Morpho-vlinder',
      scientificName: 'Morpho menelaus',
      icon: '🦋',
      animalClass: 'Insect',
      classIcon: '🦋',
      description: "De blauwe morpho-vlinder is een van de mooiste vlinders ter wereld. Zijn vleugels zijn schitterend blauw en kunnen tot 15 centimeter breed worden — dat is zo breed als je hand! Maar de onderkant van zijn vleugels is bruin met oogvlekken. Als hij zijn vleugels dichtklapt, lijkt hij op een dood blaadje en is hij onzichtbaar.",
      where: 'In alle lagen van het oerwoud, maar vooral langs rivieren en in open plekken waar zonlicht komt. Je kunt hem vaak zien fladderen in lichtbundels tussen de bomen.',
      whatEats: "De vlinder 'eet' niet echt, maar drinkt! Met zijn opgerolde tong (roltong of proboscis) zuigt hij sap van rottend fruit, natte modder en bloemen. Als rups eet hij bladeren.",
      whyClass: 'De morpho-vlinder heeft zes poten, een lichaam met drie delen (kop, borststuk en achterlijf) en twee paar vleugels. Hij ondergaat een volledige metamorfose: van ei, naar rups, naar pop, naar vlinder.',
      funFact: 'De blauwe kleur is eigenlijk een optische illusie! De vleugels hebben geen blauw pigment. Microscopisch kleine schubben op de vleugels weerkaatsen het licht op een speciale manier, waardoor wij blauw zien. Wetenschappers noemen dit \'structurele kleur\'.',
      didYouKnow: "Een morpho-vlinder leeft maar 2 tot 3 weken als volwassen vlinder. In die korte tijd moet hij een partner vinden. Maar als rups leeft hij maandenlang!",
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
