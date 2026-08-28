import type { Strings } from "../i18n"

export const fr: Strings = {
  meta: {
    home: {
      title: "MapleKiosk · Gardez votre caisse. Ajoutez la borne.",
      desc: "Borne de commande pour salons de thé et comptoirs rapides à Montréal et sur la Rive-Sud. Sans contrat, 0 % sur vos ventes.",
    },
    features: {
      title: "Applications · MapleKiosk",
      desc: "Borne, station comptoir, écran cuisine, menus télé, livraison dans une seule file, fidélité.",
    },
    pricing: {
      title: "Tarifs · MapleKiosk",
      desc: "Un prix par application, SaaS ou sur site. Sans contrat, annulez n'importe quel mois, ou achetez-la une fois pour toutes.",
    },
    about: {
      title: "À propos · MapleKiosk",
      desc: "Fondée à Montreal. On la construit et on l'installe nous-mêmes.",
    },
    salons: {
      title: "Salons · MapleKiosk",
      desc: "Un assistant téléphonique pour salons d'ongles, spas et instituts de beauté : il répond, guide et réserve pendant que vos mains travaillent.",
    },
    coffee: {
      title: "Cafés & boba · MapleKiosk",
      desc: "Borne de commande pour cafés, salons de thé aux perles et comptoirs de restauration rapide.",
    },
    restaurants: {
      title: "Restaurants et restauration rapide · MapleKiosk",
      desc: "Borne et écran de cuisine pour restaurants et comptoirs à emporter, avec la livraison dans une seule file.",
    },
    privacy: {
      title: "Confidentialité · MapleKiosk",
      desc: "Politique de confidentialité.",
    },
    terms: {
      title: "Conditions · MapleKiosk",
      desc: "Conditions d'utilisation.",
    },
    notFound: {
      title: "Page introuvable · MapleKiosk",
      desc: "Page introuvable.",
    },
  },

  nav: {
    features: "Applications",
    pricing: "Tarifs",
    about: "À propos",
    cta: "Voyez comment ça marche",
  },

  hero: {
    title:
      "Pendant qu'un client choisit ses perles, trois autres regardent la file.",
    wedgeStrong: "Gardez votre caisse. Ajoutez la borne.",
    wedgeRest:
      " Si elle ne se paie pas toute seule, on la débranche, et vous ne devez rien.",
    ticket: {
      name: "Thé au lait taro · L",
      num: "#042",
      rows: [
        { label: "Format large", price: "5,50 $" },
        { label: "Sucre 50 % · moins de glace", price: "incl." },
        { label: "Perles de tapioca", price: "+0,75 $" },
        { label: "Mousse de fromage", price: "+0,75 $" },
        { label: "Lait d'avoine", price: "+0,50 $" },
      ],
      totalLabel: "Total",
      total: "7,50 $",
      caption:
        "Commandé par le client, envoyé au bar tel quel, pendant que la file avance.",
    },
  },

  router: {
    title: "Trois comptoirs, trois matins différents",
    sub: "Choisissez le vôtre.",
    doors: [
      {
        label: "Salons de thé & cafés",
        hook: "« 50 % sucre, moins de glace, perles en extra. » Et la file avance.",
        body: "La borne prend les commandes sur mesure et les envoie au bar telles quelles.",
      },
      {
        label: "Comptoirs & pour emporter",
        hook: "Le téléphone sonne, la tablette bipe, la file s'allonge, et vous avez deux mains.",
        body: "Borne, comptoir et livraison tombent dans une seule file de préparation.",
      },
      {
        label: "Salle à manger",
        hook: "Le bip du DoorDash coupe votre service. Encore.",
        body: "Uber Eats et DoorDash arrivent à l'écran de cuisine. Fini le mur de tablettes.",
      },
    ],
  },

  diagram: {
    title: "Où va votre argent",
    sub: "Eux, ils s'assoient sur votre argent. Nous, on reste à côté.",
    othersTag: "LES AUTRES : SQUARE · TOAST · CLOVER",
    usTag: "NOUS : MAPLEKIOSK",
    you: "Vous",
    bank: "Banque",
    othersBox: "Leur plateforme : logiciel + matériel + votre argent, un seul bloc",
    othersNote:
      "Chaque paiement passe par eux : ~2,5 % sur chaque carte de crédit, marge cachée dans le taux. Quitter = nouveau matériel, données perdues.",
    acqBox: "Votre acquéreur, votre taux négocié",
    usBox: "MapleKiosk : logiciel seulement · 0 % sur vos ventes",
    usNote:
      "Votre entente de paiement reste entre vous et votre acquéreur. On ne touche jamais à votre argent, et on ne prélève aucune commission.",
  },

  teach: {
    pre: "Un logiciel de caisse « gratuit », ça n'existe pas. Le prix est caché dans le taux : environ 2,5 % de chaque vente, pour toujours. Nous, on affiche le nôtre : ",
    zero: "0 %",
    post: ".",
  },

  calc: {
    title: "Ce que vos paiements vous coûtent vraiment",
    sub: "Entrez vos chiffres. On compare honnêtement, même quand ce n'est pas en notre faveur.",
    volume: "Ventes par carte, par mois",
    debit: "Part en débit Interac",
    ticket: "Panier moyen",
    resultTag: "FRAIS ESTIMÉS PAR MOIS",
    square: "Square",
    clover: "Clover",
    acq: "Votre propre acquéreur",
    honestTitle: "Notre avis honnête :",
    honestBody:
      " à votre volume, le taux fixe de Square est probablement votre meilleure option : les frais fixes d'un compte d'acquéreur mangeraient l'économie. On vous le dira aussi en personne.",
    saveTitle: "Économie estimée :",
    saveBody:
      " par mois avec votre propre entente, parce que nous ne prélevons aucune commission sur vos paiements.",
    disclaimer:
      "Tarifs affichés de Square (2,5 % crédit ; 0,75 % + 7 ¢ débit). Clover n'affiche pas de tarifs canadiens, donc nous estimons avec son tarif américain en personne (2,3 % + 10 ¢). « Votre propre acquéreur » = exemple d'entente interchange-plus typique pour un petit commerçant (1,3 à 1,8 % sur le crédit ; 8 ¢ par transaction débit ; frais fixes d'environ 60 $/mois inclus). Chiffres indicatifs. Apportez un relevé pour le calcul réel.",
    cta: "Apportez un relevé et on vérifie ces chiffres pour vrai",
  },

  lineCost: {
    title: "Combien vous coûte la file ?",
    sub: "Les clients qui regardent la file et repartent n'apparaissent dans aucun rapport. Mettez un chiffre dessus.",
    walkouts: "Clients qui repartent par jour",
    days: "Jours d'ouverture par mois",
    resultTag: "VENTES PERDUES ESTIMÉES PAR MOIS",
    payoff:
      "Si la borne rattrapait ne serait-ce qu'une partie de ces commandes pendant que la file avance, qu'est-ce que ça changerait à la fin du mois ?",
    honest:
      "Si ce chiffre est petit, une borne ne se paiera pas toute seule, et on vous le dira aussi.",
    cta: "Apportez ces chiffres et on les vérifie pour vrai",
  },

  chips: {
    title: "Des conditions qu'on peut promettre",
    items: [
      "Pas de contrat",
      "Pas de location de terminal",
      "Pas de forfait de paiement imposé",
      "Annulez n'importe quel mois",
      "Achetez-la une fois pour toutes, si vous préférez",
    ],
  },

  finalCta: {
    title: "Fondée à Montreal. Pas de contrat. On vient l'installer nous-mêmes.",
    sub: "Deux semaines d'essai dans votre commerce. Si la borne ne se paie pas toute seule, on la débranche, et vous ne devez rien.",
  },

  footer: {
    tagline:
      "Une famille d'applications d'affaires et des services d'IA abordables, conçus avec soin au Canada pour ceux qui font vivre les petites entreprises.",
    product: "Produit",
    legal: "Légal",
    industries: "Secteurs",
    nails: "Salons d'ongles et de beauté",
    restaurants: "Restaurants et restauration rapide",
    coffee: "Cafés & boba",
    rights: "Tous droits réservés.",
    madeIn: "Fait au Canada 🍁",
    privacy: "Confidentialité",
    terms: "Conditions",
  },

  coffee: {
    title: "Votre menu n'est pas un seul bouton. Votre caisse non plus.",
    intro:
      "Une caisse générique a été conçue pour un prix, une pression. Une commande de boba ou de café, c'est une pile de choix (format, sucre, glace, lait, garnitures) qui vous arrive en plein rush. La borne est conçue exactement pour ça.",
    quotes: [
      {
        q: "« 50 % sucre, moins de glace, perles en extra ? »",
        body: "Des options qui reflètent votre vrai menu (niveaux de sucre et de glace, format, chaud ou froid, changements de lait et garnitures), tarifées et envoyées au bar automatiquement.",
      },
      {
        q: "« Prochaine commande prête ! »",
        body: "Les commandes filent vers un affichage bar et cuisine en séquence, pour que boissons et plats sortent dans le bon ordre même quand la file déborde jusqu'à la porte.",
      },
      {
        q: "« Achetez-en 9, le 10e offert ? »",
        body: "Cartes à tampons numériques, points et promos que les habitués utilisent vraiment. Aucune carte à perdre, aucun calcul à la caisse.",
      },
    ],
  },

  restaurants: {
    title: "Le bip du DoorDash coupe votre service. Encore.",
    sub: "Uber Eats et DoorDash arrivent à l'écran de cuisine. Fini le mur de tablettes.",
    bandTitle: "Coup de feu ou mardi tranquille : la cuisine lit une seule file.",
    phoneTitle: "Chaque appel est pris. Pas par vous.",
    walletTitle: "La carte à tampons est maintenant dans leur téléphone.",
    vig: {
      padTag: "Réservation", padTime: "18 h 42",
      padL1: "Tran — 4 personnes", padL2: "samedi 19 h ✓ confirmé", padL3: "demande la banquette",
      padStamp: "Pris par l'assistant",
      loyTitle: "Carte fidélité", loyTag: "Chez vous · depuis 2019", loyTenth: "10ᵉ",
     
      restName: "Restaurant MapleKiosk",
      custName: "Tran Nguyen",
    },
    kds: {
      tickets: [
        { no: "041", src: "Kiosque", l1: "Poulet croustillant · combo", l2: "Sans oignons · extra sauce", status: "Prêt" },
        { no: "042", src: "Comptoir", l1: "Poutine classique · L", l2: "« Prochaine commande prête ! »", status: "En préparation" },
        { no: "043", src: "Uber Eats", l1: "2 × bol poké saumon", l2: "Fini le mur de tablettes", status: "En attente" },
      ],
      soldQuote: "« 86 »",
      soldBadge: "Épuisé",
      soldItem: "Saumon grillé",
      soldBody: "Marqué épuisé une fois — grisé sur le kiosque et les menus TV instantanément.",
    },
    quotes: [
      {
        q: "Le téléphone sonne, la tablette bipe, la file s'allonge, et vous avez deux mains.",
        body: "Borne, comptoir et livraison tombent dans une seule file de préparation.",
      },
      {
        q: "« En rupture, le saumon. »",
        body: "Marquez un article en rupture une seule fois et il devient grisé sur la borne et vos menus télé, instantanément.",
      },
      {
        q: "Le téléphone sonne en plein service : une table pour quatre, samedi.",
        body: "Un assistant répond à chaque appel, en français ou en anglais, répond aux questions et réserve la table, pendant que vous continuez le service.",
      },
    ],
  },

  features: {
    title: "Tout ce que le comptoir utilise, au même endroit.",
    sub: "Pour le propriétaire qui connaît déjà le problème. Voici ce qui y répond.",
    screenshot: "[CAPTURE D'ÉCRAN]",
    blocks: [
      {
        title: "La borne",
        body: "Modificateurs complets : sucre, glace, format, laits, garnitures. Chaque choix est facturé au bon prix et envoyé au bar tel quel. Côté client en français, anglais, vietnamien et russe.",
      },
      {
        title: "La station comptoir",
        body: "Encaissement rapide, favoris, pourboires à l'écran.",
      },
      {
        title: "L'écran de cuisine (KDS)",
        body: "Les commandes en séquence : borne, comptoir et livraison dans une seule file.",
      },
      {
        title: "La livraison, une seule file",
        body: "Uber Eats et DoorDash tombent sur le même écran que le comptoir. Fini le mur de tablettes.",
      },
      {
        title: "Menus sur téléviseurs",
        body: "Synchronisés avec votre menu ; rupture de stock en un geste.",
      },
      {
        title: "Profils clients et fidélité",
        body: "Étampes numériques, points, et des habitués qui reviennent.",
      },
      {
        title: "Ça se branche sur votre caisse",
        body: "Intégration Clover aujourd'hui. Votre caisse reste votre caisse. [VÉRIFIER la liste exacte d'intégrations avant publication]",
      },
      {
        title: "Chez vous ou chez nous",
        body: "Infonuagique, ou installée sur place. Achetez-la une fois pour toutes si vous préférez.",
      },
    ],
  },

  day: {
    title: "De l'ouverture au rush à la fermeture, comme ça se passe vraiment",
    sub: "Une journée de service, et la partie de MapleKiosk qui porte chaque heure.",
    beats: [
      {
        time: "7 h",
        name: "Ouverture et préparation",
        tags: [
          { label: "Menus sur TV", detail: "Vos écrans télé lisent le même menu que la borne et le comptoir. Changez un prix ou masquez un article une fois, et tous les écrans du commerce suivent." },
          { label: "Poste comptoir", detail: "Favoris en une touche, combos enregistrés et options rapides gardent la file en mouvement. Comptant, carte, sans contact et code QR, avec le pourboire à l'écran." },
        ],
        text: "Un seul écran règle le menu du jour partout : les téléviseurs, la borne, le comptoir. Les articles épuisés d'hier soir reviennent avant l'ouverture.",
      },
      {
        time: "8 h 15",
        name: "Le rush du matin",
        tags: [
          { label: "La borne", detail: "Niveaux de sucre et de glace, format, chaud ou froid, changements de lait, et garnitures comme les perles, la gelée et la mousse de fromage. Chaque choix est tarifé et imprimé au bar exactement comme commandé." },
          { label: "Écran cuisine", detail: "Les commandes arrivent aux écrans du bar et de la cuisine dans l'ordre, avec le bouton « terminé » et des billets clairs, pour que rien ne se perde dans le rush." },
        ],
        text: "Deux clients commandent à la borne pendant que vous avez les mains pleines. « 50 % sucre, moins de glace » ou « sans oignons, extra sauce » arrive en cuisine écrit exactement comme ça, dans l'ordre où c'est entré.",
      },
      {
        time: "11 h 30",
        name: "Commandes à l'avance et livraison",
        tags: [
          { label: "Livraison, une seule file", detail: "Les commandes Uber Eats et DoorDash tombent sur le même écran que les clients au comptoir. Le bar travaille une seule file au lieu de trois tablettes." },
        ],
        text: "Uber Eats et DoorDash cessent d'être une deuxième tablette. Leurs billets tombent dans la même file que les clients au comptoir. Aucune commande ne double la file.",
      },
      {
        time: "14 h",
        name: "L'heure creuse",
        tags: [
          { label: "Ruptures synchronisées", detail: "Marquez un article épuisé une seule fois. Il devient gris sur la borne, les écrans télé et le comptoir au même moment, pour que personne ne vende ce que vous ne pouvez pas faire." },
          { label: "Fidélité", detail: "Tampons numériques, points et promos qui ramènent les habitués. Tout est suivi à la caisse, sans carte à poinçonner ni à perdre." },
        ],
        text: "Le lait d'avoine est fini. Une touche le grise sur la borne, les téléviseurs et le comptoir en même temps. Pas de remboursement, pas d'excuses au comptoir. Les timbres des habitués continuent de compter.",
      },
      {
        time: "20 h",
        name: "Fermeture et remise à zéro",
        tags: [
          { label: "Une journée, un écran", detail: "Les totaux du comptoir, de la borne et de la livraison arrivent sur un seul écran à la fermeture. Vous lisez la journée à un seul endroit au lieu de trois." },
        ],
        text: "Comptoir, borne et livraison ferment sur un seul écran au lieu de trois.",
      },
    ],
    alsoTitle: "Aussi dans la boîte",
    also: [
      "Se connecte à votre caisse. Clover aujourd'hui, et la vôtre reste la vôtre",
      "Chez vous ou chez nous : infonuagique, ou installé sur place",
    ],
    question: "Lequel de ces cinq moments vous coûte le plus en ce moment ?",
  },

  pricing: {
    title: "Un prix par application. SaaS ou sur site.",
    sub: "Chaque application MapleKiosk est offerte de deux façons : hébergée par nous (SaaS, facturée mensuellement) ou installée sur vos propres serveurs (sur site, licence unique). Choisissez par application et combinez à votre guise.",
    per: "/mois",
    apps: [
      { name: "MapleCoffee", price: "39 $", tag: "" },
      { name: "MapleRES", price: "49 $", tag: "" },
      { name: "MapleSPA", price: "44 $", tag: "Application phare" },
    ],
    note: "Prix en USD, par application, avant taxes. Les services d'intégration d'IA sont facturés séparément. Besoin de plusieurs applications ou d'un projet sur mesure ? Parlez aux ventes pour un forfait.",
    buyTitle: "Ou achetez-la une fois pour toutes",
    buyBody: "Un seul paiement, installée sur place, à vous pour de bon.",
    buyCta: "Nous contacter",
    faqTitle: "Questions franches, réponses franches",
    faq: [
      {
        q: "Et si j'annule ?",
        a: "Vous annulez n'importe quel mois, sans pénalité. Votre menu et vos données partent avec vous.",
      },
      {
        q: "Et le matériel ?",
        a: "Jamais de location à long terme. Achetez la borne une fois pour toutes, ou prenez-la avec l'abonnement.",
      },
      {
        q: "Mes paiements passent-ils par vous ?",
        a: "Non. Jamais. Votre entente de paiement reste entre vous et votre acquéreur, voyez le calculateur.",
      },
      {
        q: "Combien de temps pour l'installation ?",
        a: "On charge votre menu avant la visite et on installe sur place, autour de vos heures de service.",
      },
      {
        q: "Ça marche avec ma caisse ?",
        a: "Intégration Clover aujourd'hui ; sinon la borne fonctionne à côté de votre caisse, sans la remplacer. [VÉRIFIER la liste d'intégrations]",
      },
      {
        q: "L'essai de deux semaines, comment ça marche ?",
        a: "Deux semaines dans votre commerce. Si la borne ne se paie pas toute seule, on la débranche, et vous ne devez rien.",
      },
    ],
  },

  about: {
    title: "Construite à Montreal. Installée par celui qui l'a écrite.",
    paras: [
      "MapleKiosk est construite à Montreal par Minh : un développeur qui écrit le logiciel, charge votre menu et vient installer la borne lui-même.",
      "Le produit tourne aujourd'hui dans des boutiques de thé aux perles aux États-Unis. Les premières installations locales s'en viennent, c'est pour ça que la démo est gratuite et que l'essai ne coûte rien.",
      "Les conditions. Pas de contrat, pas de location, pas de forfait de paiement, existent pour une raison : on préfère que vous restiez par choix.",
    ],
    photo: "[PHOTO]",
  },

  salons: {
    title: "Le téléphone sonne. Vos mains sont dans l'acrylique.",
    sub: "Un assistant répond à chaque appel, en français ou en anglais, guide la cliente dans vos services et réserve le créneau. Il apparaît dans votre horaire. Votre technicienne ne s'arrête jamais.",
    bandTitle: "Vos mains restent sur la cliente. L'assistant prend les appels.",
    quotes: [
      {
        q: "« Une place pour deux, samedi après-midi ? »",
        body: "L'assistant vérifie votre horaire, répond comme un humain et réserve le créneau, il apparaît dans votre calendrier.",
      },
      {
        q: "Pas de réponse ? Elle réserve au prochain salon sur Google.",
        body: "Chaque appel est pris, en français ou en anglais : en pleine pose, en plein soin, en plein rush.",
      },
      {
        q: "« C'est combien, un remplissage gel ? »",
        body: "Il connaît vos services et vos prix, et il répond, puis propose la réservation.",
      },
    ],
    recording: "[ENREGISTREMENT : un vrai appel de 30 secondes, à produire]",
    disclosure:
      "L'assistant est automatisé et le dit au début de chaque appel. Le traitement des appels est en révision pour la Loi 25 avant le lancement.",
  },

  notFound: {
    title: "Cette page n'est pas au menu.",
    text: "Revenez à l'accueil, ou mieux, essayez la borne vous-même.",
    back: "Retour à l'accueil",
  },
}
