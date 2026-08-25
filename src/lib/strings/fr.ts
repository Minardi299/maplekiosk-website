import type { Strings } from "../i18n"

export const fr: Strings = {
  meta: {
    home: {
      title: "MapleKiosk — Gardez votre caisse. Ajoutez la borne.",
      desc: "Borne de commande pour salons de thé et comptoirs rapides à Montréal et sur la Rive-Sud. Sans contrat, 0 % sur vos ventes.",
    },
    features: {
      title: "Fonctionnalités — MapleKiosk",
      desc: "Borne, station comptoir, écran cuisine, menus télé, livraison dans une seule file, fidélité.",
    },
    pricing: {
      title: "Tarifs — MapleKiosk",
      desc: "Un prix, tout inclus. Sans contrat, annulez n'importe quel mois, ou achetez-la une fois pour toutes.",
    },
    calculator: {
      title: "Calculateur de frais de paiement — MapleKiosk",
      desc: "Ce que vos paiements par carte coûtent vraiment — Square, Clover ou votre propre acquéreur, comparés honnêtement.",
    },
    demo: {
      title: "Réserver une démo — MapleKiosk",
      desc: "15 minutes. Votre menu, sur une vraie borne.",
    },
    about: {
      title: "À propos — MapleKiosk",
      desc: "Fondée à Longueuil. On la construit et on l'installe nous-mêmes.",
    },
    salons: {
      title: "Salons — MapleKiosk",
      desc: "Un assistant téléphonique qui répond, guide et réserve pendant que vos mains travaillent.",
    },
    coffee: {
      title: "Cafés & boba — MapleKiosk",
      desc: "Borne de commande pour cafés, salons de thé aux perles et comptoirs de restauration rapide.",
    },
    restaurants: {
      title: "Restaurants et restauration rapide — MapleKiosk",
      desc: "Borne et écran de cuisine pour restaurants et comptoirs à emporter — la livraison dans une seule file.",
    },
    privacy: {
      title: "Confidentialité — MapleKiosk",
      desc: "Politique de confidentialité.",
    },
    terms: {
      title: "Conditions — MapleKiosk",
      desc: "Conditions d'utilisation.",
    },
    notFound: {
      title: "Page introuvable — MapleKiosk",
      desc: "Page introuvable.",
    },
  },

  nav: {
    features: "Fonctionnalités",
    pricing: "Tarifs",
    about: "À propos",
    cta: "Chargez mon menu dans une démo gratuite",
  },

  hero: {
    title:
      "Pendant qu'un client choisit ses perles, trois autres regardent la file.",
    wedgeStrong: "Gardez votre caisse. Ajoutez la borne.",
    wedgeRest:
      " Si elle ne se paie pas toute seule, on la débranche — et vous ne devez rien.",
    ctaSecondary: "15 minutes, mardi à 14 h",
    ticket: {
      name: "Thé au lait taro · L",
      num: "№ 042",
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
        "Commandé par le client, envoyé au bar tel quel — pendant que la file avance.",
    },
  },

  router: {
    title: "Trois comptoirs, trois matins différents",
    sub: "Choisissez le vôtre.",
    cta: "Réserver 15 minutes",
    doors: [
      {
        label: "Salons de thé & cafés",
        hook: "« 50 % sucre, moins de glace, perles en extra » — et la file avance.",
        body: "La borne prend les commandes sur mesure et les envoie au bar telles quelles.",
      },
      {
        label: "Comptoirs & pour emporter",
        hook: "Le téléphone sonne, la tablette bipe, la file s'allonge — et vous avez deux mains.",
        body: "Borne, comptoir et livraison tombent dans une seule file de préparation.",
      },
      {
        label: "Salle à manger",
        hook: "Le bip du DoorDash coupe votre service. Encore.",
        body: "Uber Eats et DoorDash arrivent à l'écran de cuisine — fini le mur de tablettes.",
      },
    ],
  },

  diagram: {
    title: "Où va votre argent",
    sub: "Eux, ils s'assoient sur votre argent. Nous, on reste à côté.",
    othersTag: "LES AUTRES — SQUARE · TOAST · CLOVER",
    usTag: "NOUS — MAPLEKIOSK",
    you: "Vous",
    bank: "Banque",
    othersBox: "Leur plateforme : logiciel + matériel + votre argent — un seul bloc",
    othersNote:
      "Chaque paiement passe par eux : ~2,5 % sur chaque carte de crédit, marge cachée dans le taux. Quitter = nouveau matériel, données perdues.",
    acqBox: "Votre acquéreur — votre taux négocié",
    usBox: "MapleKiosk — logiciel seulement · 0 % sur vos ventes",
    usNote:
      "Votre entente de paiement reste entre vous et votre acquéreur. On ne touche jamais à votre argent — et on ne prélève aucune commission.",
  },

  teach: {
    pre: "Un logiciel de caisse « gratuit », ça n'existe pas. Le prix est caché dans le taux — environ 2,5 % de chaque vente, pour toujours. Nous, on affiche le nôtre : ",
    zero: "0 %",
    post: ".",
  },

  calc: {
    title: "Ce que vos paiements vous coûtent vraiment",
    sub: "Entrez vos chiffres. On compare — honnêtement, même quand ce n'est pas en notre faveur.",
    volume: "Ventes par carte, par mois",
    debit: "Part en débit Interac",
    ticket: "Panier moyen",
    resultTag: "FRAIS ESTIMÉS PAR MOIS",
    square: "Square",
    clover: "Clover",
    acq: "Votre propre acquéreur",
    honestTitle: "Notre avis honnête :",
    honestBody:
      " à votre volume, le taux fixe de Square est probablement votre meilleure option — les frais fixes d'un compte d'acquéreur mangeraient l'économie. On vous le dira aussi en personne.",
    saveTitle: "Économie estimée :",
    saveBody:
      " par mois avec votre propre entente — parce que nous ne prélevons aucune commission sur vos paiements.",
    disclaimer:
      "Tarifs affichés de Square (2,5 % crédit ; 0,75 % + 7 ¢ débit). Clover n'affiche pas de tarifs canadiens — nous estimons avec son tarif américain en personne (2,3 % + 10 ¢). « Votre propre acquéreur » = exemple d'entente interchange-plus typique pour un petit commerçant (1,3 à 1,8 % sur le crédit ; 8 ¢ par transaction débit ; frais fixes d'environ 60 $/mois inclus). Chiffres indicatifs — apportez un relevé pour le calcul réel.",
    cta: "Apportez un relevé — on vérifie ces chiffres pour vrai",
  },

  chips: {
    title: "Des conditions qu'on peut écrire en grosses lettres",
    items: [
      "Pas de contrat",
      "Pas de location de terminal",
      "Pas de forfait de paiement imposé",
      "Annulez n'importe quel mois",
      "Achetez-la une fois pour toutes, si vous préférez",
    ],
  },

  finalCta: {
    title: "Fondée à Longueuil. Pas de contrat. On vient l'installer nous-mêmes.",
    sub: "Deux semaines d'essai dans votre commerce. Si la borne ne se paie pas toute seule, on la débranche — et vous ne devez rien.",
  },

  footer: {
    tagline:
      "Une famille d'applications d'affaires et des services d'IA abordables, conçus avec soin au Canada pour ceux qui font vivre les petites entreprises.",
    product: "Produit",
    legal: "Légal",
    calculator: "Calculateur",
    demo: "Réserver une démo",
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
    kicker: "On parle le langage du comptoir",
    title: "Votre menu n'est pas un seul bouton. Votre caisse non plus.",
    intro:
      "Une caisse générique a été conçue pour un prix, une pression. Une commande de boba ou de café, c'est une pile de choix — format, sucre, glace, lait, garnitures — qui vous arrive en plein rush. La borne est conçue exactement pour ça.",
    quotes: [
      {
        q: "« 50 % sucre, moins de glace, perles en extra ? »",
        body: "Des options qui reflètent votre vrai menu — niveaux de sucre et de glace, format, chaud ou froid, changements de lait et garnitures — tarifées et envoyées au bar automatiquement.",
      },
      {
        q: "« Prochaine commande prête ! »",
        body: "Les commandes filent vers un affichage bar et cuisine en séquence, pour que boissons et plats sortent dans le bon ordre même quand la file déborde jusqu'à la porte.",
      },
      {
        q: "« Achetez-en 9, le 10e offert ? »",
        body: "Cartes à tampons numériques, points et promos que les habitués utilisent vraiment — aucune carte à perdre, aucun calcul à la caisse.",
      },
    ],
  },

  restaurants: {
    title: "Le bip du DoorDash coupe votre service. Encore.",
    sub: "Uber Eats et DoorDash arrivent à l'écran de cuisine — fini le mur de tablettes.",
    bandTitle: "Coup de feu ou mardi tranquille — la cuisine lit une seule file.",
    quotes: [
      {
        q: "Le téléphone sonne, la tablette bipe, la file s'allonge — et vous avez deux mains.",
        body: "Borne, comptoir et livraison tombent dans une seule file de préparation.",
      },
      {
        q: "« En rupture, le saumon. »",
        body: "Marquez un article en rupture une seule fois et il devient grisé sur la borne et vos menus télé, instantanément.",
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
        body: "Modificateurs complets — sucre, glace, format, laits, garnitures. Chaque choix est facturé au bon prix et envoyé au bar tel quel. Côté client en français, anglais, vietnamien et russe.",
      },
      {
        title: "La station comptoir",
        body: "Encaissement rapide, favoris, pourboires à l'écran.",
      },
      {
        title: "L'écran de cuisine (KDS)",
        body: "Les commandes en séquence — borne, comptoir et livraison dans une seule file.",
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
        body: "Intégration Clover aujourd'hui — votre caisse reste votre caisse. [VÉRIFIER la liste exacte d'intégrations avant publication]",
      },
      {
        title: "Chez vous ou chez nous",
        body: "Infonuagique, ou installée sur place. Achetez-la une fois pour toutes si vous préférez.",
      },
    ],
    timelineTitle: "Une matinée au comptoir",
    timeline: [
      {
        time: "7 h",
        text: "Ouverture. Les téléviseurs et la borne s'allument avec le menu du jour.",
      },
      {
        time: "8 h 15",
        text: "Le rush. La borne prend les commandes sur mesure, le comptoir encaisse, le bar lit une seule file.",
      },
      {
        time: "11 h 30",
        text: "Les commandes à l'avance et la livraison tombent dans la même file que le comptoir.",
      },
      {
        time: "14 h",
        text: "Heure creuse. Rupture de stock sur tous les écrans, en un geste.",
      },
      {
        time: "20 h",
        text: "Fermeture. Les chiffres de la journée sur un seul écran.",
      },
    ],
  },

  pricing: {
    title: "Un prix. Tout ce que le comptoir utilise.",
    price: "[PRIX]",
    per: "/mois",
    includes:
      "Borne, station comptoir, écran cuisine, menus télé, fidélité. Tout inclus.",
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
        a: "Non. Jamais. Votre entente de paiement reste entre vous et votre acquéreur — voyez le calculateur.",
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
        a: "Deux semaines dans votre commerce. Si la borne ne se paie pas toute seule, on la débranche — et vous ne devez rien.",
      },
    ],
  },

  calcPage: {
    intro:
      "Le même calculateur qu'on apporte à chaque démo. Glissez les curseurs jusqu'à vos chiffres.",
  },

  demo: {
    title: "15 minutes. Votre menu, sur une vraie borne.",
    sub: "On charge votre menu avant de venir — vous jouez avec, vous décidez. Mardi ou mercredi après le rush, c'est parfait.",
    form: {
      name: "Nom",
      business: "Commerce",
      area: "Quartier ou ville",
      phone: "Téléphone (texto ok)",
      slot: "Créneau souhaité",
      submit: "Réservez mes 15 minutes",
    },
    orText: "Ou textez ",
    orEmail: "Ou écrivez à ",
    photo: "[PHOTO — le fondateur à un comptoir]",
  },

  about: {
    title: "Construite à Longueuil. Installée par celui qui l'a écrite.",
    paras: [
      "MapleKiosk est construite à Longueuil par Minh — un développeur qui écrit le logiciel, charge votre menu et vient installer la borne lui-même.",
      "Le produit tourne aujourd'hui dans des boutiques de thé aux perles aux États-Unis. Les premières installations locales s'en viennent — c'est pour ça que la démo est gratuite et que l'essai ne coûte rien.",
      "Les conditions — pas de contrat, pas de location, pas de forfait de paiement — existent pour une raison : on préfère que vous restiez par choix.",
    ],
    photo: "[PHOTO]",
  },

  salons: {
    title: "Le téléphone sonne. Vos mains sont dans l'acrylique.",
    sub: "Un assistant répond à chaque appel, en français ou en anglais, guide la cliente dans vos services et réserve le créneau. Il apparaît dans votre horaire. Votre technicienne ne s'arrête jamais.",
    recording: "[ENREGISTREMENT — un vrai appel de 30 secondes, à produire]",
    disclosure:
      "L'assistant est automatisé et le dit au début de chaque appel. Le traitement des appels est en révision pour la Loi 25 avant le lancement.",
  },

  privacy: {
    title: "Confidentialité",
    intro:
      "Cette page satisfera la Loi 25 du Québec avant le lancement. Les blocs ci-dessous sont des espaces réservés jusqu'à la révision juridique.",
    sections: [
      {
        title: "Ce qu'on collecte",
        body: "[Champs du formulaire de démo : nom, commerce, ville, téléphone. Les entrées du calculateur ne sont pas conservées — à confirmer avant publication.]",
      },
      {
        title: "Responsable de la protection des renseignements personnels",
        body: "[RESPONSABLE + COURRIEL]",
      },
      { title: "Hébergement", body: "[LIEU D'HÉBERGEMENT DES DONNÉES]" },
      {
        title: "Témoins (cookies)",
        body: "[À CONFIRMER — lister les témoins s'il y en a]",
      },
    ],
    review: "[FAIRE RÉVISER PAR UN JURISTE QUÉBÉCOIS AVANT PUBLICATION]",
  },

  legal: {
    title: "Conditions d'utilisation",
    intro:
      "[CONDITIONS D'UTILISATION — texte juridique rédigé en français d'abord et révisé par un juriste québécois.]",
    review: "[FAIRE RÉVISER PAR UN JURISTE QUÉBÉCOIS AVANT PUBLICATION]",
  },

  notFound: {
    title: "Cette page n'est pas au menu.",
    text: "Revenez à l'accueil — ou mieux, réservez les 15 minutes.",
    back: "Retour à l'accueil",
  },
}
