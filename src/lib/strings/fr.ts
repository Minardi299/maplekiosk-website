import type { Strings } from "../i18n"

export const fr: Strings = {
  meta: {
    home: {
      title: "MapleKiosk · Gardez votre caisse. Ajoutez la borne.",
      desc: "Applications modulaires pour restaurants et salons à Montréal et sur la Rive-Sud : borne, écran de cuisine, assistant de réservation IA, soins clients et plus. Sans contrat, 0 % sur les ventes en personne.",
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
    booking: {
      title: "Assistant de réservation IA · MapleKiosk",
      desc: "Un assistant téléphonique pour restaurants et salons : il répond à chaque appel en français ou en anglais, connaît vos services et vos prix, et réserve le créneau.",
    },
    demo: {
      title: "Démo en direct · MapleKiosk",
      desc: "Essayez MapleKiosk dans votre navigateur : prenez une commande, envoyez-la en cuisine, marquez un article épuisé, ou laissez l'assistant réserver un rendez-vous au salon.",
    },
    groups: {
      title: "Groupes et franchises · MapleKiosk",
      desc: "Un seul système pour 3 à 25 emplacements : menus poussés partout d'un coup, une seule vue des ventes, et votre propre acquéreur à chaque comptoir.",
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
    services: "Voir nos services",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menu: [
      {
        to: "/restaurants",
        label: "Restaurants et cafés",
      },
      {
        to: "/salons",
        label: "Salons de coiffure, d'ongles et de beauté",
      },
      {
        to: "/booking",
        label: "Assistant de réservation IA",
      },
    ],
  },

  zeroNote: "*Applicable aux ventes en personne.",

  planUi: {
    prev: "Module précédent",
    next: "Module suivant",
    demo: "Essayez-le dans la démo",
  },

  call: {
    label: "Essayez : appelez l'assistant",
    big: "Appelez l'assistant",
  },

  hero: {
    titleA: "Complet par conception.",
    titleB: "Modulaire par choix.",
    body: "Prenez un module ou tous. Chacun s'installe à côté de votre caisse, de votre équipe et de vos habitudes. Rien à arracher, rien à remplacer.",
    wedge: "Gardez votre caisse. Ajoutez seulement ce qu'il vous faut.",
    explore: "Explorer les modules",
    picker: {
      caption: "Gardez votre caisse. Ajoutez {list}.",
      captionNone: "Gardez votre caisse telle quelle. Ajoutez un module quand vous serez prêt.",
      and: "et",
      lanes: [
        {
          name: "Restaurants et cafés",
          mods: [
            { id: "kds", label: "Écran de cuisine", phrase: "un écran de cuisine" },
            { id: "kiosk", label: "Borne libre-service", phrase: "une borne libre-service" },
            { id: "tv", label: "Menus sur télé", phrase: "des menus sur télé" },
            { id: "delivery", label: "File de livraison", phrase: "une seule file de livraison" },
          ],
        },
        {
          name: "Salons de coiffure, d'ongles et de beauté",
          mods: [
            { id: "ai", label: "Assistant de réservation IA", phrase: "un assistant qui répond à chaque appel" },
            { id: "profiles", label: "Profils clients", phrase: "des profils clients" },
            { id: "loyalty", label: "Fidélité et promos", phrase: "la fidélité et les promos" },
            { id: "checkout", label: "Paiement et pourboires", phrase: "le paiement avec pourboires" },
          ],
        },
      ],
    },
  },

  modules: {
    title: "Chaque module fonctionne seul. Ensemble, ils ne font qu'un.",
    both: "RESTAURANTS · SALONS",
    restaurants: "RESTAURANTS",
    cards: [
      {
        title: "Assistant de réservation IA",
        body: "Répond à chaque appel en français ou en anglais et réserve le créneau. Il dit qu'il est automatisé.",
        both: true,
      },
      {
        title: "Soins clients",
        body: "Profils clients, tampons numériques, points et promos qui ramènent les habitués.",
        both: true,
      },
      {
        title: "Poste comptoir",
        body: "Encaissement rapide, favoris en une touche et pourboires à l'écran. Comptant, carte, sans contact et QR.",
        both: true,
      },
      {
        title: "Aperçus",
        body: "Heures de pointe, articles les plus populaires et temps de commande moyens, au même endroit.",
        both: false,
      },
      {
        title: "Borne libre-service",
        body: "Les clients commandent et personnalisent eux-mêmes. Chaque choix arrive au comptoir tel quel.",
        both: false,
      },
      {
        title: "Écran de cuisine (KDS)",
        body: "Les billets de tous les canaux sur un seul écran, dans l'ordre où ils sont entrés. Terminé d'une touche.",
        both: false,
      },
      {
        title: "Menus sur télé",
        body: "Synchronisés avec votre menu. Marquez un article épuisé une fois, et tous les écrans suivent.",
        both: false,
      },
      {
        title: "Livraison, une seule file",
        body: "Uber Eats et DoorDash arrivent sur le même écran que les clients au comptoir. Fini le mur de tablettes.",
        both: false,
      },
    ],
    more: "En plus : paie du personnel pour les salons, gestion des stocks, réservations, listes d'attente, et plus encore.",
  },

  services: {
    title: "Conçu pour les commerces qu'on connaît",
    sub: "Partez de votre secteur. Chaque page montre les modules qui comptent chez vous.",
    cards: [
      {
        hook: "Comptoir, salle, emporter et livraison dans une seule file.",
        body: "Borne, écran de cuisine, menus télé et livraison, d'un comptoir à tout un groupe.",
        link: "Restaurants et cafés",
      },
      {
        hook: "Des fauteuils pleins, et les mains sur la cliente.",
        body: "Réservations, profils clients et fidélité pour les salons toujours occupés.",
        link: "Salons",
      },
      {
        hook: "Chaque appel est pris. Pas par vous.",
        body: "Une voix naturelle répond aux questions, connaît vos services et vos prix, et réserve le créneau. Pour restaurants et salons.",
        link: "L'assistant",
      },
    ],
  },

  groupsBand: {
    title: "D'un comptoir à tout votre groupe",
    body: "Plus d'un emplacement ? Un menu poussé partout, une seule vue des ventes, et toujours 0 %* sur vos ventes.",
    link: "MapleKiosk pour les groupes",
  },

  diagram: {
    sub: "Eux, ils s'assoient sur votre argent. Nous, on reste à côté.",
    othersTag: "LES AUTRES : SQUARE · TOAST · CLOVER",
    usTag: "NOUS : MAPLEKIOSK",
    you: "Vous",
    bank: "Banque",
    othersName: "Leur plateforme",
    othersParts: "logiciel + matériel + votre argent",
    cut: "~2,5 % de chaque vente par carte",
    othersNote:
      "Chaque paiement passe par eux : ~2,5 % sur chaque carte de crédit, marge cachée dans le taux. Quitter = nouveau matériel, données perdues.",
    acqName: "Votre acquéreur",
    acqRate: "votre taux négocié",
    usBox: "MapleKiosk : logiciel seulement · 0 %* sur vos ventes",
    usNote:
      "Votre entente de paiement reste entre vous et votre acquéreur. On ne touche jamais à votre argent, et on ne prélève aucune commission.",
  },

  teach: {
    body: "Un logiciel de caisse « gratuit », ça n'existe pas. Le prix est caché dans le taux : environ 2,5 % de chaque vente, pour toujours. Le nôtre est affiché ici même.",
    zero: "0 %",
  },

  calc: {
    title: "Ce que vos paiements vous coûtent vraiment",
    sub: "Entrez vos chiffres. On compare honnêtement, même quand ce n'est pas en notre faveur.",
    volume: "Ventes par carte en personne, par mois",
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
    locations: "Emplacements",
    perLocation: "par emplacement",
    totalAcross: "Total pour {n} emplacements",
    saveAcross: " Pour {n} emplacements, c'est {amount} par mois.",
    axisX: "Ventes par carte / mois",
    axisY: "Frais / mois",
    chartTag: "ÉCONOMIE ESTIMÉE PAR MOIS",
    chartAlt:
      "Graphique des frais mensuels estimés selon le volume de ventes par carte : Square et Clover en courbes, votre propre acquéreur en bande.",
    disclaimer:
      "Tarifs affichés de Square (2,5 % crédit ; 0,75 % + 7 ¢ débit). Clover n'affiche pas de tarifs canadiens, donc nous estimons avec son tarif américain en personne (2,3 % + 10 ¢). « Votre propre acquéreur » = exemple d'entente interchange-plus typique pour un petit commerçant (1,3 à 1,8 % sur le crédit ; 8 ¢ par transaction débit ; frais fixes d'environ 60 $/mois inclus). Chiffres indicatifs. Apportez un relevé pour le calcul réel.",
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
      "Système d'enregistrement des ventes certifié par Revenu Québec (MEV-WEB)",
    ],
  },

  finalCta: {
    title: "Fondée à Montreal. Pas de contrat. On vient l'installer nous-mêmes.",
    sub: "Deux semaines d'essai dans votre commerce. Si la borne ne se paie pas toute seule, on la débranche, et vous ne devez rien.",
  },

  footer: {
    tagline:
      "Des applications d'affaires et des services d'IA concrets, conçus au Canada pour la restauration et les salons — d'un seul comptoir à un groupe multi-emplacements.",
    product: "Produit",
    industries: "Secteurs",
    demo: "Démo",
    groups: "Groupes et franchises",
    legal: "Légal",
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
    plan: {
      aria: "Dessin interactif d'un restaurant avec les modules MapleKiosk",
      introBody: "Cliquez sur un numéro pour voir ce que fait ce module. La caisse que vous avez aujourd'hui reste sur le comptoir.",
      labels: {
        kitchen: "Cuisine",
        dining: "Salle à manger",
        register: "Votre caisse reste",
        entrance: "Entrée",
      },
      modules: [
        { name: "Borne libre-service", body: "Les clients commandent et personnalisent eux-mêmes. Chaque choix arrive au comptoir tel quel." },
        { name: "Poste comptoir", body: "Encaissement rapide, favoris en une touche et pourboires à l'écran. Comptant, carte, sans contact et QR." },
        { name: "Écran de cuisine", body: "Les billets de tous les canaux sur un seul écran, dans l'ordre où ils sont entrés. Terminé d'une touche." },
        { name: "Menus sur télé", body: "Synchronisés avec votre menu. Marquez un article épuisé une fois, et tous les écrans suivent." },
        { name: "Livraison, une seule file", body: "Uber Eats et DoorDash arrivent sur le même écran que les clients au comptoir. Fini le mur de tablettes." },
        { name: "Assistant de réservation IA", body: "Répond à chaque appel en français ou en anglais et réserve la table. Il dit qu'il est automatisé." },
        { name: "Réservations et liste d'attente", body: "Les réservations du soir et la liste d'attente des clients sans réservation, au même endroit." },
        { name: "Fidélité et soins clients", body: "Profils clients, tampons numériques, points et promos qui ramènent les habitués." },
        { name: "Stocks", body: "Les stocks par article, pour voir ce qui manque avant le rush." },
      ],
      screens: {
        kiosk: {
          header: "Commandez ici",
          item: "Combo poulet croustillant",
          rows: [
            { label: "Accomp.", on: "Frites", off: "Salade" },
            { label: "Retirer", on: "Sans oignons", off: "Sans cornichons" },
            { label: "Ajouter", on: "Extra sauce", off: "Fromage" },
          ],
          cta: "Ajouter à la commande",
        },
        counter: {
          order: "Commande n° 042",
          where: "Comptoir",
          lines: ["1 × Poutine classique · L", "1 × Combo poulet croustillant"],
          total: "Total",
          tip: "Pourboire",
          custom: "Autre",
          charge: "Encaisser · comptant, carte, sans contact ou QR",
        },
        tv: {
          title: "Menu",
          screen: "Télé 1 de 2",
          items: ["Poutine classique", "Combo poulet croustillant", "Saumon grillé", "Bol poké au saumon"],
          note: "« En rupture, le saumon. » Marqué une fois au comptoir. La borne et les deux télés suivent.",
        },
        delivery: {
          title: "Une seule file",
          order: "Dans l'ordre",
          now: "immédiat",
          rows: [
            { src: "Uber Eats", item: "2 × bol poké au saumon", time: "18:55" },
            { src: "Borne", item: "Poutine classique · L", time: "" },
            { src: "DoorDash", item: "2 × combo poulet", time: "19:05" },
            { src: "Comptoir", item: "2 × latte", time: "" },
          ],
        },
        call: {
          incoming: "Appel entrant",
          time: "18:42",
          caller: "Client",
          assistant: "Assistant",
          lines: [
            { who: "caller", text: "Bonjour, avez-vous une table pour quatre samedi ?" },
            { who: "assistant", text: "Bonjour ! Je suis l'assistant automatisé du restaurant. J'ai 19 h samedi. Je vous la réserve ?" },
            { who: "caller", text: "Oui, et est-ce qu'on pourrait avoir la banquette ?" },
          ],
          done: "Tran · 4 personnes · sam. 19 h · banquette",
        },
        book: {
          title: "Ce soir · samedi",
          tag: "Réservations",
          byPhone: "Par téléphone",
          rows: [
            { time: "18:30", who: "Nguyen · 2", where: "Table 3", phone: false },
            { time: "19:00", who: "Tran · 4", where: "Banquette", phone: true },
            { time: "19:15", who: "Singh · 6", where: "Tables 5+6", phone: false },
          ],
          waitlist: "Liste d'attente",
          waiting: "2 en attente",
          wait: [
            { who: "Kevin · 3", eta: "~15 min" },
            { who: "Amélie · 2", eta: "~25 min" },
          ],
        },
        loyalty: {
          screen: "Écran client",
          tier: "Or",
          welcome: "Bon retour, Tran !",
          stamps: "8 tampons sur 10",
          tenth: "Le 10ᵉ est offert",
        },
        stock: {
          title: "Stocks",
          onHand: "En stock",
          low: "Bas",
          rows: [
            { item: "Lait d'avoine", qty: "2", low: true },
            { item: "Filets de saumon", qty: "6", low: false },
            { item: "Pains à burger", qty: "48", low: false },
            { item: "Frites (kg)", qty: "22", low: false },
          ],
        },
      },
    },
  },

  insights: {
    title: "Les chiffres que vous n'avez jamais le temps de sortir",
    body: "MapleKiosk tient le compte pendant que vous servez : heures de pointe, articles les plus populaires, temps de commande moyens. Pas des données pour des données — des décisions : mettez la deuxième caisse à l'heure qui en a vraiment besoin, et retirez l'article que personne ne commande.",
    hoursLabel: "Commandes par heure",
    topLabel: "Les plus commandés aujourd'hui",
    topItems: ["Thé au lait taro · L", "Poutine classique", "Poulet croustillant · combo"],
    avgLabel: "Temps de commande moyen",
    avgValue: "3 min 40 s",
  },

  groups: {
    title: "Ce qui marche à un comptoir casse à cinq.",
    sub: "Un seul système pour tous vos emplacements — et vous gardez votre propre acquéreur, et votre taux négocié, à chacun d'eux.",
    cta: "Parlez au fondateur",
    mailSubject: "MapleKiosk pour notre groupe",
    pains: [
      {
        label: "Menus",
        hook: "Changez le menu une fois. Tous les commerces suivent.",
        body: "Un changement de prix ou un nouvel article atteint chaque borne, chaque poste comptoir et chaque écran télé du groupe au même moment. Pas de tournée commerce par commerce, pas de versions qui divergent.",
      },
      {
        label: "Rapports",
        hook: "Une seule vue des ventes, pas une connexion par commerce.",
        body: "Chaque emplacement rapporte dans la même vue. Lisez la journée du groupe à un seul endroit, puis ouvrez un seul commerce quand un chiffre cloche.",
      },
      {
        label: "Personnel au rush",
        hook: "La caisse de plus au rush — fois chaque emplacement.",
        body: "Une borne prend les commandes pendant le rush à chaque commerce. La ligne de coûts qui se multiplie le plus vite dans un groupe, c'est celle que la borne absorbe.",
      },
      {
        label: "Déploiement",
        hook: "Ouvrez le prochain emplacement en jours, pas en semaines.",
        body: "Vos menus, vos prix et votre fidélité vivent déjà dans le système. Un nouveau commerce, c'est du matériel et une visite d'installation, pas un projet logiciel.",
      },
    ],
    insightsTitle: "Gérez les commerces où vous n'êtes pas",
    insightsBody:
      "Le tableau de bord met chaque emplacement côte à côte : heures de pointe, articles les plus populaires, temps de commande moyens. Mettez la deuxième caisse à l'heure qui en a besoin, et retirez l'article que personne ne commande — dans un commerce que vous visitez une fois par semaine.",
    proofTitle: "Conçu pour le Canada.",
    proofPoints: [
      "Système d'enregistrement des ventes certifié par Revenu Québec (MEV-WEB)",
      "Interface d'abord en français, pour les clients et le personnel",
      "Le débit Interac dans le calcul des frais, pas une réflexion après coup",
      "On installe nous-mêmes, sur place, autour de vos heures de service",
    ],
    partnerTag: "L'OFFRE PARTENAIRE DE CONCEPTION",
    partnerTitle: "On prend un partenaire de conception par segment. Voici l'entente.",
    partnerPoints: [
      {
        title: "Un pilote de 90 jours",
        body: "On équipe 1 ou 2 de vos emplacements pendant 90 jours.",
      },
      {
        title: "Des mesures convenues avant le départ",
        body: "On s'entend d'avance sur les mesures de succès : part des commandes à la borne et panier moyen.",
      },
      {
        title: "Un prix de déploiement fixé d'avance",
        body: "Si le pilote atteint les mesures, le reste des emplacements se déploie au prix convenu avant le début du pilote.",
      },
      {
        title: "S'il les rate, on s'en va",
        body: "On débranche, et vous ne devez rien. Les mêmes conditions que chaque installation.",
      },
    ],
    ctaTitle: "La prochaine étape, c'est une conversation, pas un kiosque de démo.",
    ctaSub: "Écrivez directement au fondateur. La personne qui écrit le logiciel répond — et installe.",
  },

  features: {
    title: "Tout ce que le comptoir utilise, au même endroit.",
    sub: "Pour le propriétaire qui connaît déjà le problème. Voici ce qui y répond.",
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
        body: "Intégration Clover aujourd'hui. Votre caisse reste votre caisse.",
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
    colApp: "Application",
    colFor: "Pour",
    colPrice: "Hébergée par nous · mensuel",
    colOnPrem: "Sur vos serveurs",
    onPremValue: "Prix sur demande",
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
        a: "Intégration Clover aujourd'hui ; sinon la borne fonctionne à côté de votre caisse, sans la remplacer.",
      },
      {
        q: "L'essai de deux semaines, comment ça marche ?",
        a: "Deux semaines dans votre commerce. Si la borne ne se paie pas toute seule, on la débranche, et vous ne devez rien.",
      },
    ],
  },

  about: {
    title: "Construite à Montreal. Installée par ceux qui l'ont écrite.",
    paras: [
      "MapleKiosk est construite à Montreal par une petite équipe : ceux qui écrivent le logiciel chargent votre menu et viennent installer la borne eux-mêmes.",
      "Le produit tourne aujourd'hui dans des salons, des boutiques de boba et des restaurants aux États-Unis, y compris des groupes multi-emplacements. Les premières installations québécoises s'en viennent, c'est pour ça que la démo est gratuite et que l'essai ne coûte rien.",
      "Les conditions. Pas de contrat, pas de location, pas de forfait de paiement, existent pour une raison : on préfère que vous restiez par choix.",
    ],
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
    disclosure:
      "L'assistant est automatisé et le dit au début de chaque appel. Le traitement des appels est en révision pour la Loi 25 avant le lancement.",
    listenTitle: "Appelez-le vous-même.",
    plan: {
      aria: "Dessin interactif d'un salon avec les modules MapleKiosk",
      introBody: "Cliquez sur un numéro pour voir ce que fait ce module. Vos mains restent sur la cliente.",
      labels: {
        styling: "Coiffure",
        nails: "Bar à ongles",
        pedicure: "Pédicure",
        desk: "Accueil",
        waiting: "Attente",
        entrance: "Entrée",
      },
      modules: [
        { name: "Assistant de réservation IA", body: "Répond à chaque appel en français ou en anglais, connaît vos services et vos prix, et réserve le créneau. Il dit qu'il est automatisé." },
        { name: "Rendez-vous", body: "Les rendez-vous de la journée, technicienne par technicienne. Ce que l'assistant réserve apparaît ici." },
        { name: "Profils clients", body: "Les visites et les services de chaque cliente, au fauteuil." },
        { name: "Paiement et pourboires", body: "Encaissement rapide avec pourboires à l'écran. Comptant, carte, sans contact et QR." },
        { name: "Fidélité et promos", body: "Tampons numériques, points et promos qui ramènent les habituées." },
        { name: "Liste d'attente", body: "Les clientes sans rendez-vous s'inscrivent sur une seule liste et passent à tour de rôle." },
        { name: "Paie du personnel", body: "Heures, services, pourboires et commissions par technicienne, prêts pour la paie." },
        { name: "Stocks", body: "Les stocks par produit, pour recommander avant de manquer de vernis." },
      ],
      screens: {
        call: {
          incoming: "Appel entrant",
          time: "11:08",
          caller: "Cliente",
          assistant: "Assistant",
          lines: [
            { who: "caller", text: "Bonjour ! Avez-vous de la place pour deux, samedi après-midi ?" },
            { who: "assistant", text: "Bonjour ! Je suis l'assistant automatisé du salon. J'ai 14 h 30 avec Linh et Mai. Je vous réserve ?" },
            { who: "caller", text: "Parfait, merci." },
          ],
          done: "2 personnes · sam. 14 h 30 · Linh + Mai",
        },
        day: {
          title: "Samedi",
          tag: "Vue du jour",
          techs: ["Linh", "Mai", "Vy"],
          byPhone: "Par téléphone",
          slots: [
            { tech: 0, time: "10:00", what: "Remplissage gel", phone: false },
            { tech: 1, time: "11:30", what: "Pédicure", phone: false },
            { tech: 2, time: "12:00", what: "Déco d'ongles", phone: false },
            { tech: 0, time: "14:30", what: "2 personnes", phone: true },
            { tech: 1, time: "14:30", what: "2 personnes", phone: true },
          ],
        },
        profile: {
          name: "Tran Nguyen",
          tier: "Or",
          visits: "12 visites",
          last: "Dernière visite : remplissage gel avec Linh",
          next: "Prochaine visite : samedi 14 h 30",
        },
        checkout: {
          title: "Paiement",
          lines: [
            { item: "Remplissage gel", price: "45.00" },
            { item: "Déco d'ongles", price: "10.00" },
          ],
          total: "Total",
          tip: "Pourboire",
          custom: "Autre",
          charge: "Encaisser · comptant, carte, sans contact ou QR",
        },
        loyalty: {
          screen: "Écran client",
          tier: "Or",
          welcome: "Bon retour, Tran !",
          stamps: "8 visites sur 10",
          tenth: "La 10ᵉ est offerte",
        },
        waitlist: {
          title: "Sans rendez-vous",
          tag: "Dans l'ordre",
          next: "Suivante",
          rows: [
            { who: "Mai K.", what: "Manucure", eta: "~10 min" },
            { who: "Sofia", what: "Pédicure", eta: "~25 min" },
            { who: "Kevin", what: "Gel", eta: "~35 min" },
          ],
        },
        payroll: {
          title: "Paie",
          period: "15 – 28 sept.",
          cols: ["Technicienne", "Heures", "Pourboires"],
          rows: [
            { tech: "Linh", hours: "32 h", tips: "412" },
            { tech: "Mai", hours: "28 h", tips: "365" },
            { tech: "Vy", hours: "18 h", tips: "210" },
          ],
        },
        stock: {
          title: "Produits et fournitures",
          onHand: "En stock",
          low: "Bas",
          rows: [
            { item: "Base gel", qty: "2", low: true },
            { item: "Vernis rouge n° 12", qty: "9", low: false },
            { item: "Huile à cuticules", qty: "14", low: false },
            { item: "Acétone (L)", qty: "6", low: false },
          ],
        },
      },
    },
  },

  booking: {
    title: "Chaque appel est pris. Pas par vous.",
    sub: "Un assistant répond à chaque appel en français ou en anglais, connaît vos services et vos prix, et réserve le créneau pendant que vos mains restent au travail.",
    before: {
      title: "Le téléphone n'a jamais été fait pour un commerce occupé.",
      beforeTag: "Avant",
      afterTag: "Avec l'assistant",
      rows: [
        { before: "Le téléphone sonne en plein service. Vous le laissez sonner, ou vous mettez une cliente en attente.", after: "Il prend chaque appel, et vos mains restent au travail." },
        { before: "« Pour nos heures, faites le 1… » Les gens raccrochent avant de parler à quelqu'un.", after: "Les gens parlent normalement. Il comprend la question et y répond." },
        { before: "Vous répétez les mêmes prix et les mêmes heures cent fois par semaine.", after: "Il connaît vos services, vos prix et vos heures, et les donne à votre place." },
        { before: "La personne passe du français à l'anglais, et l'appel se complique.", after: "Il répond en français ou en anglais." },
      ],
    },
    how: {
      title: "Trois étapes. On s'occupe de la configuration.",
      steps: [
        { title: "Il apprend votre commerce", body: "On charge vos services, vos prix, vos heures et vos politiques, pour qu'il réponde avec vos faits, pas avec des suppositions." },
        { title: "Vous fixez les règles", body: "Quels créneaux il peut réserver, et combien de temps dure chaque service." },
        { title: "Il répond. Vous restez informé.", body: "Chaque réservation arrive dans votre horaire." },
      ],
    },
    does: {
      title: "Il parle comme une personne. Il dit qu'il n'en est pas une.",
      items: [
        { title: "Répond sans pauses gênantes", body: "Un échange naturel, pour que la personne n'ait jamais à se répéter." },
        { title: "Français et anglais", body: "Il répond à chaque appel en français ou en anglais." },
        { title: "Connaît votre menu ou vos services", body: "Les prix, les durées, les heures et les politiques viennent de votre configuration." },
        { title: "Réserve le créneau", body: "Il propose les heures libres et confirme la réservation avant la fin de l'appel." },
      ],
    },
    uses: {
      title: "Un seul assistant, pour la cuisine et le fauteuil du salon",
      rows: [
        { hook: "Une table pour quatre, samedi ?", body: "Les réservations pour ce soir et la fin de semaine, les heures d'ouverture, et les questions qui coupent le service.", link: "Restaurants et cafés" },
        { hook: "De la place pour deux, samedi après-midi ?", body: "Les rendez-vous par service et par technicienne, les prix et les changements, pendant que la technicienne continue de travailler.", link: "Salons" },
      ],
    },
    trust: {
      title: "Il dit qu'il est automatisé. À chaque appel.",
      points: [
        "Les gens entendent que l'assistant est automatisé au début de chaque appel.",
        "Le traitement des appels est en révision pour la Loi 25 avant le lancement.",
      ],
    },
    faqTitle: "Questions franches, réponses franches",
    faq: [
      { q: "Qu'est-ce que l'assistant de réservation IA ?", a: "Un assistant téléphonique pour restaurants et salons. Il répond aux appels avec une voix naturelle, répond aux questions sur vos services, vos prix et vos heures, et réserve le créneau." },
      { q: "Est-ce qu'il remplace mon personnel ?", a: "Non. Il prend les appels que vos mains ne peuvent pas prendre, pour que votre équipe reste avec le client devant elle." },
      { q: "Est-ce qu'il dit aux gens qu'il est automatisé ?", a: "Oui. Il le dit au début de chaque appel." },
      { q: "Quelles langues parle-t-il ?", a: "Français et anglais." },
      { q: "Où vont les réservations ?", a: "Dans votre horaire." },
      { q: "Est-ce que je peux l'essayer avant de décider ?", a: "Oui. Appelez le numéro sur cette page et parlez-lui vous-même." },
      { q: "Combien ça coûte ?", a: "L'assistant est facturé séparément des applications." },
    ],
    finalTitle: "Appelez-le maintenant. Il répond.",
    finalSub: "Demandez-lui une table, un remplissage gel ou vos heures d'ouverture. Puis décidez.",
  },

  demo: {
    title: "Essayez-le comme votre équipe l'utilisera.",
    sub: "Passez une commande, envoyez-la en cuisine, marquez un article épuisé. En mode salon, laissez l'assistant prendre un appel. Rien n'est enregistré ici.",
    modes: { cafe: "Café et restaurant", salon: "Salon" },
    modeLabel: "Mode de démo",
    reset: "Recommencer",
    portal: "Ouvrir le vrai portail",
    log: "Journal des événements",
    logEmpty: "Rien pour l'instant. Touchez quelque chose plus haut.",
    cafe: {
      inputTag: "Prendre une commande",
      kiosk: "Borne",
      counter: "Comptoir",
      items: [
        { id: "latte", name: "Latte", price: 4.75 },
        { id: "maple", name: "Latte à l'érable", price: 5.5 },
        { id: "brew", name: "Infusion à froid", price: 4.25 },
        { id: "croissant", name: "Croissant", price: 3.5 },
        { id: "poutine", name: "Poutine classique", price: 11.5 },
        { id: "combo", name: "Combo poulet", price: 13.95 },
      ],
      order: "Commande n° {n}",
      empty: "Touchez un article pour commencer une commande.",
      total: "Total",
      remove: "Retirer 1 × {item}",
      pay: "Payer à la borne",
      charge: "Encaisser",
      soldOut: "Épuisé",
      menuTag: "Épuisé aujourd'hui",
      mark: "Rupture",
      back: "Remettre",
      customerTag: "Client",
      noCustomer: "Aucun client",
      customers: [
        { name: "Ava", stamps: 6 },
        { name: "Tran", stamps: 8 },
        { name: "Noah", stamps: 2 },
      ],
      kitchen: "Écran de cuisine",
      bump: "Terminé",
      noTickets: "Aucun billet ouvert. La cuisine est à jour.",
      seed: [
        { n: 42, src: "Comptoir", lines: ["1 × Poutine classique"] },
        { n: 43, src: "Uber Eats", lines: ["2 × Infusion à froid", "1 × Croissant"] },
      ],
      screen: "Écran client",
      idle: "Bienvenue ! Commandez à la borne ou au comptoir.",
      welcome: "Bon retour, {name} !",
      stamps: "{n} tampons sur 10",
      thanks: "Merci ! La commande n° {n} est en cuisine.",
      ready: "Commande n° {n} prête",
      tv: "Menu sur télé",
      src: { kiosk: "Borne", counter: "Comptoir" },
      events: {
        sent: "Commande n° {n} envoyée en cuisine ({src}).",
        bumped: "Commande n° {n} terminée : prête à ramasser.",
        soldOut: "{item} : en rupture. La borne et la télé suivent.",
        back: "{item} : de retour au menu.",
        customer: "{name} : fiche client ajoutée à la commande.",
        stamp: "{name} gagne un tampon : {n} sur 10.",
      },
    },
    salon: {
      phoneTag: "L'assistant",
      play: "Écouter un appel exemple",
      playing: "Appel en cours…",
      again: "Réécouter",
      caller: "Cliente",
      assistant: "Assistant",
      script: [
        { who: "caller", text: "Bonjour ! Avez-vous de la place pour deux, samedi après-midi ?" },
        { who: "assistant", text: "Bonjour ! Je suis l'assistant automatisé du salon. J'ai 14 h 30 avec Linh et Mai. Je vous réserve ?" },
        { who: "caller", text: "Parfait, merci." },
        { who: "assistant", text: "C'est fait : samedi à 14 h 30 avec Linh et Mai. À samedi !" },
      ],
      realTitle: "Ou appelez le vrai",
      calendarTag: "Rendez-vous · samedi",
      techs: ["Linh", "Mai", "Vy"],
      hours: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
      byPhone: "Par téléphone",
      bookings: [
        { tech: 0, start: 0, len: 1, what: "Remplissage gel · Tran" },
        { tech: 1, start: 1, len: 2, what: "Pédicure · Ava" },
        { tech: 2, start: 2, len: 1, what: "Déco d'ongles · Kim" },
        { tech: 0, start: 5, len: 1, what: "Manucure · Lise" },
      ],
      newBooking: "14:30 · 2 personnes",
      checkoutTag: "Paiement",
      open: [
        { client: "Tran", service: "Remplissage gel", tech: 0, price: 45 },
        { client: "Ava", service: "Pédicure", tech: 1, price: 55 },
        { client: "Kim", service: "Déco d'ongles", tech: 2, price: 30 },
      ],
      with: "avec {tech}",
      tip: "Pourboire",
      charge: "Encaisser {total}",
      noOpen: "Tout le monde a payé.",
      payrollTag: "Paie · cette période",
      cols: ["Technicienne", "Heures", "Pourboires"],
      hoursWorked: ["32 h", "28 h", "18 h"],
      tipsStart: [412, 365, 210],
      waitTag: "Sans rendez-vous",
      add: "Ajouter une personne",
      seat: "Faire passer la suivante",
      walkins: ["Mai K.", "Sofia", "Kevin", "Amélie", "Tom", "Lina"],
      noWait: "Personne n'attend.",
      events: {
        call: "L'assistant a pris un appel.",
        booked: "Réservé par téléphone : samedi 14 h 30, Linh et Mai.",
        charged: "{client} a payé {total}, dont {tip} de pourboire. Les pourboires de {tech} ont augmenté.",
        added: "{name} est sur la liste d'attente.",
        seated: "C'est au tour de {name}.",
      },
    },
  },

  notFound: {
    title: "Cette page n'est pas au menu.",
    text: "Revenez à l'accueil, ou mieux, essayez la borne vous-même.",
    back: "Retour à l'accueil",
  },
}
