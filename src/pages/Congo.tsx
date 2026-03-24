import AnimalCard from '../components/AnimalCard';

export default function Congo() {
  const animals = [
    {
      name: 'De Gorilla',
      scientificName: 'Gorilla gorilla (Westelijke gorilla) / Gorilla beringei (Oostelijke gorilla)',
      icon: '🦍',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De gorilla is de grootste en sterkste mensaap ter wereld. Ze zien er misschien gevaarlijk uit, maar het zijn eigenlijk zachtaardige, rustige reuzen. Ze leven in hechte families die geleid worden door één groot, sterk mannetje: de 'zilverrug'. Hij heet zo omdat hij een grijze/zilveren streep haar op zijn rug krijgt als hij ouder wordt.",
      where: 'In de dichte, vochtige bossen van het Congobekken. Ze brengen veel tijd door op de grond, maar klimmen ook in bomen om fruit te zoeken of om een slaapnest te bouwen van bladeren en takken.',
      whatEats: 'Gorilla\'s zijn planteneters (herbivoren). Ze eten enorme hoeveelheden bladeren, stengels, fruit en bamboescheuten. Een volwassen zilverrug kan wel 30 kilo planten per dag eten!',
      whyClass: 'Gorilla\'s hebben haar, zijn warmbloedig en zogen hun jongen. Ze zijn heel nauw verwant aan de mens: we delen ongeveer 98% van ons DNA!',
      funFact: "Als een gorilla wil laten zien wie de baas is, gaat hij op zijn achterpoten staan en roffelt hij met vlakke handen op zijn borstkas. Dat maakt een luid 'pok-pok-pok' geluid dat kilometers ver te horen is!",
      didYouKnow: "Gorilla's hebben, net als mensen, unieke vingerafdrukken. Maar wetenschappers herkennen ze vaak aan hun neus: elke gorilla heeft een uniek patroon van rimpels op zijn neus (een 'neusafdruk')!",
      colorTheme: 'border-stone-600'
    },
    {
      name: 'De Okapi',
      scientificName: 'Okapia johnstoni',
      icon: '🦒',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De okapi is een heel bijzonder dier dat eruitziet alsof het uit verschillende dieren is samengesteld. Hij heeft de strepen van een zebra op zijn poten, het lichaam van een paard, maar... hij is eigenlijk de enige levende familiegenoot van de giraffe! Hij werd pas in 1901 door wetenschappers ontdekt, omdat hij zich zo goed kan verstoppen.",
      where: 'Diep in het dichte Ituri-regenwoud in Congo. De okapi is heel schuw en leeft het liefst alleen, verborgen tussen de bomen. Zijn strepen helpen hem om te camoufleren in de schaduwen van het bos.',
      whatEats: 'Bladeren, knoppen, fruit en paddenstoelen. Net als de giraffe heeft de okapi een extreem lange, blauwzwarte tong (wel 35 centimeter lang!) waarmee hij bladeren van takken ritst.',
      whyClass: 'De okapi heeft een fluweelachtige vacht, is warmbloedig en geeft melk aan haar jong. De mannetjes hebben twee kleine, met huid bedekte hoorntjes op hun kop, net als giraffen (ossiconen).',
      funFact: 'De tong van de okapi is zó lang, dat hij ermee zijn eigen oren en ogen kan wassen!',
      didYouKnow: "Okapi's communiceren met elkaar via geluiden die zo laag zijn (infrasoon) dat mensen ze niet kunnen horen. Zo kunnen ze praten zonder dat roofdieren, zoals luipaarden, hen horen.",
      colorTheme: 'border-amber-700'
    },
    {
      name: 'De Grijze Roodstaartpapegaai',
      scientificName: 'Psittacus erithacus',
      icon: '🦜',
      animalClass: 'Vogel',
      classIcon: '🦜',
      description: "Deze papegaai is niet zo felgekleurd als de ara — hij is zilvergrijs met een opvallende, felrode staart. Maar wat hem echt bijzonder maakt, is zijn hersenpan. Het is een van de slimste vogels ter wereld, met de intelligentie van een kind van 4 of 5 jaar oud!",
      where: 'In de boomkruinen van het Congoregenwoud. Ze leven in grote, luidruchtige groepen en slapen samen in hoge bomen om veilig te zijn voor roofdieren.',
      whatEats: 'Vooral zaden, noten, fruit en bessen. Met hun sterke snavel kraken ze makkelijk harde palmnoten open.',
      whyClass: 'Hij heeft veren, legt eieren en is warmbloedig.',
      funFact: "Grijze roodstaartpapegaaien kunnen niet alleen geluiden imiteren (zoals een rinkelende telefoon of een blaffende hond), maar ze kunnen ook echt de betekenis van woorden leren en zinnetjes maken!",
      didYouKnow: "Een beroemde grijze roodstaartpapegaai genaamd 'Alex' kende meer dan 100 Engelse woorden, kon kleuren en vormen herkennen, en kon zelfs tellen tot zes!",
      colorTheme: 'border-slate-500'
    },
    {
      name: 'De Afrikaanse Luipaard',
      scientificName: 'Panthera pardus pardus',
      icon: '🐆',
      animalClass: 'Zoogdier',
      classIcon: '🐾',
      description: "De luipaard (of panter) is de koning van de camouflage in het Congowoud. Zijn goudgele vacht zit vol met zwarte vlekken (rozetten), waardoor hij perfect wegvalt tegen de bladeren en schaduwen. Het is een sluipmoordenaar die heel stil en geduldig jaagt.",
      where: 'Overal in het oerwoud, zowel op de grond als hoog in de bomen. De luipaard is een fantastische klimmer.',
      whatEats: 'Hij is een carnivoor en eet bijna alles wat hij kan vangen: apen, antilopen, vogels en knaagdieren.',
      whyClass: 'De luipaard is een zoogdier: warmbloedig, behaard en levendbarend.',
      funFact: 'De luipaard is zo sterk dat hij een prooi die zwaarder is dan hijzelf, recht omhoog een boom in kan slepen! Zo beschermt hij zijn eten tegen andere roofdieren zoals hyena\'s.',
      didYouKnow: "Luipaarden kunnen muisstil lopen omdat ze zachte kussentjes onder hun poten hebben. Ze besluipen hun prooi tot ze heel dichtbij zijn, en vallen dan aan met een korte, snelle sprint.",
      colorTheme: 'border-yellow-600'
    },
    {
      name: 'De Goliathkikker',
      scientificName: 'Conraua goliath',
      icon: '🐸',
      animalClass: 'Amfibie',
      classIcon: '🐸',
      description: "Vergeet de kleine kikkertjes in de vijver: de goliathkikker is de grootste kikker ter wereld! Hij kan zo groot worden als een huiskat (wel 32 centimeter lang, zonder poten) en meer dan 3 kilo wegen.",
      where: 'In en rond snelle, heldere rivieren met een zanderige bodem in de dichte regenwouden van Centraal-Afrika.',
      whatEats: 'Omdat hij zo groot is, eet hij niet alleen insecten, maar ook krabben, kleine vissen, andere kikkers en soms zelfs kleine slangen of vogeltjes!',
      whyClass: 'Hij is koudbloedig, heeft een gladde, vochtige huid en begint zijn leven in het water als kikkervisje.',
      funFact: 'De goliathkikker heeft geen kwaakblaas en kan dus niet kwaken zoals andere kikkers! Hij maakt alleen een soort fluitend geluid met zijn mond open.',
      didYouKnow: "Om een veilige plek voor hun eitjes te maken, verplaatsen goliathkikkers stenen in de rivier om een soort 'zwembadje' te bouwen. Sommige van die stenen wegen wel 2 kilo!",
      colorTheme: 'border-green-700'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-emerald-800 text-white rounded-3xl p-8 shadow-xl text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">🌳 Het Congoregenwoud 🌳</h2>
        <p className="text-xl text-emerald-100 font-medium">Afrika (Democratische Republiek Congo, Gabon, Kameroen…)</p>
        <div className="mt-6 bg-emerald-900/50 p-6 rounded-2xl text-left">
          <p className="text-lg leading-relaxed mb-4">
            Het Congoregenwoud is het op één na grootste regenwoud ter wereld. Het ligt in het hart van Afrika, rond de evenaar. Het is een donker, mysterieus en heel dicht begroeid woud.
          </p>
          <p className="text-lg leading-relaxed">
            Omdat het zo moeilijk doordringbaar is, zijn er nog steeds stukken van dit oerwoud waar nog nooit een mens is geweest! Het is de thuisbasis van enkele van de meest unieke en bedreigde diersoorten op aarde.
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
