// Structured content, ready to be served later by an admin-managed backend.
// Texts are French (primary locale); keep keys stable for future en/ar translations.
import heroPrint from "@/assets/hero-print.jpg";
import largeFormat from "@/assets/large-format.jpg";
import packaging from "@/assets/packaging.jpg";
import wedding from "@/assets/wedding.jpg";
import photoAlbum from "@/assets/photo-album.jpg";
import soutenance from "@/assets/soutenance.jpg";

export type Group = { title: string; items: string[] };
export type Category = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  intro: string;
  image: string;
  groups: Group[];
};

export const categories: Category[] = [
  {
    id: "design",
    index: "01",
    title: "Design graphique",
    kicker: "Conception",
    intro:
      "Logo, identité, supports : nous dessinons ce dont votre projet a besoin — seul, ou prêt à imprimer.",
    image: heroPrint,
    groups: [
      {
        title: "Identité",
        items: ["Création de logo", "Identité visuelle", "Charte graphique", "Carte de visite"],
      },
      {
        title: "Supports",
        items: [
          "Flyers et affiches",
          "Brochures et catalogues",
          "Menus",
          "Faire-part de mariage",
          "Packaging",
          "Étiquettes et stickers",
          "Papeterie événementielle",
        ],
      },
      {
        title: "Digital & préparation",
        items: [
          "Visuels réseaux sociaux",
          "Visuels promotionnels",
          "Mise en page et préparation de fichiers",
          "Création sur brief",
        ],
      },
    ],
  },
  {
    id: "impression",
    index: "02",
    title: "Impression & papeterie",
    kicker: "Impression",
    intro:
      "Des cartes de visite aux catalogues, en passant par les mémoires de fin d’études et les stickers sur mesure.",
    image: heroPrint,
    groups: [
      {
        title: "Papeterie d’entreprise",
        items: [
          "Cartes de visite",
          "Cartes de visite premium",
          "Cartes de fidélité",
          "Cartes de rendez-vous",
          "Papier à en-tête",
          "Enveloppes",
          "Cartes de remerciement",
          "Chemises de présentation",
        ],
      },
      {
        title: "Publicité & promotion",
        items: [
          "Flyers publicitaires",
          "Dépliants",
          "Affiches publicitaires",
          "Brochures",
          "Catalogues produits",
          "Livrets",
          "Fiches produits",
          "Menus restaurant & café",
          "Listes de prix",
        ],
      },
      {
        title: "Académique",
        items: [
          "Impression de mémoire / thèse",
          "Documents PFE",
          "Rapports",
          "Reliure",
          "Tirages multiples",
          "Posters scientifiques",
          "Affiches de soutenance",
          "Panneaux de présentation",
        ],
      },
      {
        title: "Stickers & adhésifs",
        items: [
          "Étiquettes produits",
          "Stickers logo",
          "Stickers ronds / rectangulaires",
          "Stickers découpe à la forme",
          "Étiquettes adhésives",
          "Vitrophanie",
          "Adhésifs décoratifs",
        ],
      },
    ],
  },
  {
    id: "grand-format",
    index: "03",
    title: "Grand format & signalétique",
    kicker: "Publicité",
    intro:
      "Bâches, roll-ups, panneaux, vitrines, véhicules : votre message à l’échelle de la rue.",
    image: largeFormat,
    groups: [
      {
        title: "Impression grand format",
        items: [
          "Bâches publicitaires",
          "Panneaux PVC",
          "Panneaux publicitaires",
          "Panneaux immobiliers",
          "Enseignes promotionnelles",
        ],
      },
      {
        title: "Événementiel & salons",
        items: [
          "Roll-ups",
          "X-banners",
          "Photocalls",
          "Fonds de scène",
          "Panneaux de bienvenue",
          "Stands promotionnels",
          "Présentoirs d’exposition",
        ],
      },
      {
        title: "Vitrines & véhicules",
        items: [
          "Vitrophanie",
          "Habillage de vitrine",
          "Lettrage adhésif",
          "Habillage véhicule",
          "Signalétique directionnelle",
        ],
      },
    ],
  },
  {
    id: "packaging",
    index: "04",
    title: "Packaging & produits personnalisés",
    kicker: "Marque",
    intro:
      "Boîtes, sacs, étiquettes et cartes : présentez vos produits comme une vraie marque.",
    image: packaging,
    groups: [
      {
        title: "Emballages",
        items: [
          "Boîtes personnalisées",
          "Sacs en papier",
          "Packaging produit",
          "Coffrets cadeaux",
          "Emballage cadeau personnalisé",
        ],
      },
      {
        title: "Accompagnement",
        items: [
          "Étiquettes produits",
          "Stickers d’emballage",
          "Cartes de remerciement",
          "Inserts imprimés",
          "Supports pour boutiques",
          "Concept packaging pour petites marques",
        ],
      },
    ],
  },
  {
    id: "evenementiel",
    index: "05",
    title: "Mariage & événementiel",
    kicker: "Célébration",
    intro:
      "Une collection coordonnée, du faire-part au plan de table, pour un jour qui vous ressemble.",
    image: wedding,
    groups: [
      {
        title: "Papeterie",
        items: [
          "Faire-part de mariage",
          "Invitations événementielles",
          "Menus",
          "Marque-places",
          "Numéros de table",
          "Plans de table",
        ],
      },
      {
        title: "Décor & souvenirs",
        items: [
          "Panneaux de bienvenue",
          "Photocalls",
          "Roll-ups",
          "Collections papeterie mariage",
          "Souvenirs imprimés",
        ],
      },
    ],
  },
  {
    id: "albums",
    index: "06",
    title: "Livres, albums & souvenirs",
    kicker: "Mémoire",
    intro: "Des objets qui se tiennent en main et se transmettent.",
    image: photoAlbum,
    groups: [
      {
        title: "Albums",
        items: [
          "Albums photo",
          "Albums personnalisés",
          "Albums de mariage",
          "Albums de remise de diplôme",
          "Albums d’événement",
        ],
      },
      {
        title: "Livres & keepsakes",
        items: [
          "Livres photo",
          "Livres souvenirs",
          "Livrets imprimés",
          "Agrandissements",
          "Cadeaux photo personnalisés",
        ],
      },
    ],
  },
];

export const photoLab = {
  identity: [
    "Photos d’identité",
    "Carte nationale d’identité",
    "Passeport",
    "Visa",
    "Photos administratives",
    "Autres formats officiels",
  ],
  prints: [
    "Tirages photo standards",
    "Retirages",
    "Agrandissements",
    "Collections de tirages",
    "Compositions personnalisées",
    "Collages photo",
  ],
  bestOf: [
    "Best Of Mariage",
    "Best Of Événement",
    "Best Of Famille",
    "Best Of Graduation",
    "Best Of Soutenance",
    "Albums de mariage",
    "Albums personnalisés",
    "Livres photo",
    "Livres souvenirs",
  ],
  retouch: [
    "Retouche photo",
    "Amélioration d’image",
    "Mises en page photo",
    "Collages",
    "Produits photo sur mesure",
  ],
};

export type Pack = {
  id: string;
  number: string;
  name: string;
  audience: string;
  pitch: string;
  image?: string;
  items: string[];
};

export const packs: Pack[] = [
  {
    id: "soutenance",
    number: "01",
    name: "Soutenance",
    audience: "Étudiants · PFE · Thèse · Diplôme",
    pitch: "Impression académique, supports de présentation et souvenirs de diplôme, réunis.",
    image: soutenance,
    items: [
      "Impression du mémoire / PFE",
      "Reliure",
      "Exemplaires multiples",
      "Poster scientifique",
      "Affiche de soutenance",
      "Roll-up",
      "Panneaux de présentation",
      "Supports imprimés",
      "Tirages photo de graduation",
      "Agrandissements",
      "Album de graduation personnalisé",
      "Best Of Soutenance",
      "Best Of Graduation",
      "Livre souvenir",
      "Souvenirs photo personnalisés",
    ],
  },
  {
    id: "mariage",
    number: "02",
    name: "Mariage",
    audience: "Couples · Familles",
    pitch: "Une papeterie coordonnée et des souvenirs qui durent.",
    image: wedding,
    items: [
      "Faire-part",
      "Menus",
      "Marque-places",
      "Numéros de table",
      "Plan de table",
      "Panneau de bienvenue",
      "Photocall",
      "Papeterie événementielle",
      "Tirages photo mariage",
      "Album de mariage personnalisé",
      "Best Of Mariage",
      "Livre photo",
      "Souvenirs imprimés",
    ],
  },
  {
    id: "entreprise",
    number: "03",
    name: "Entreprise",
    audience: "Sociétés · Professionnels",
    pitch: "Toute votre communication imprimée, cohérente et maîtrisée.",
    image: largeFormat,
    items: [
      "Logo et identité visuelle",
      "Cartes de visite",
      "Papier à en-tête",
      "Enveloppes",
      "Flyers",
      "Affiches",
      "Brochures",
      "Catalogues",
      "Menus",
      "Stickers et étiquettes",
      "Packaging",
      "Sacs en papier",
      "Présentoirs promotionnels",
      "Signalétique",
      "Supports publicitaires",
    ],
  },
  {
    id: "petite-entreprise",
    number: "04",
    name: "Petite entreprise",
    audience: "Entrepreneurs · Boutiques · Nouvelles marques",
    pitch: "L’essentiel pour lancer votre marque et soigner chaque colis.",
    image: packaging,
    items: [
      "Logo et identité de base",
      "Cartes de visite",
      "Étiquettes produits",
      "Stickers",
      "Cartes de remerciement",
      "Sacs en papier",
      "Packaging personnalisé",
      "Inserts produits",
      "Supports promotionnels",
    ],
  },
  {
    id: "photo-souvenirs",
    number: "05",
    name: "Photo & souvenirs",
    audience: "Familles · Particuliers",
    pitch: "Vos photos sortent du téléphone et deviennent des objets.",
    image: photoAlbum,
    items: [
      "Tirages photo",
      "Agrandissements",
      "Albums photo",
      "Collections Best Of",
      "Livres photo",
      "Souvenirs de mariage",
      "Souvenirs d’événement",
      "Souvenirs de graduation",
      "Collages photo",
      "Cadeaux photo personnalisés",
    ],
  },
  {
    id: "sur-mesure",
    number: "06",
    name: "Sur-mesure",
    audience: "Tout projet",
    pitch: "Votre projet est unique. Votre pack aussi.",
    items: [
      "Design graphique",
      "Impression",
      "Publicité grand format",
      "Packaging",
      "Papeterie événementielle",
      "Albums photo",
      "Autre (à préciser)",
    ],
  },
];
