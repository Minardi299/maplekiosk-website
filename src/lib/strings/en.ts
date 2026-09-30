export const en = {
  meta: {
    home: {
      title: "MapleKiosk · Keep your register. Add the kiosk.",
      desc: "Modular apps for restaurants and salons in Montreal and the South Shore: kiosk, kitchen screen, AI booking assistant, client care and more. No contract, 0% on in-person sales.",
    },
    features: {
      title: "Apps · MapleKiosk",
      desc: "Kiosk, counter station, kitchen screen, TV menus, delivery in one queue, loyalty.",
    },
    pricing: {
      title: "Pricing · MapleKiosk",
      desc: "One price per app, SaaS or on-premise. No contract, cancel any month, or buy it outright.",
    },
    about: {
      title: "About · MapleKiosk",
      desc: "Founded in Montreal. We build it and install it ourselves.",
    },
    salons: {
      title: "Salons · MapleKiosk",
      desc: "A phone assistant for nail salons, spas, and beauty shops: it answers, guides, and books while your hands are busy.",
    },
    booking: {
      title: "AI booking assistant · MapleKiosk",
      desc: "A phone assistant for restaurants and salons: it answers every call in French or English, knows your services and prices, and books the slot.",
    },
    demo: {
      title: "Live demo · MapleKiosk",
      desc: "Try MapleKiosk in your browser: take an order, send it to the kitchen, mark an item sold out, or let the assistant book a salon appointment.",
    },
    groups: {
      title: "Groups & franchises · MapleKiosk",
      desc: "One system for 3–25 locations: menus pushed to every store at once, one view of sales, and your own acquirer at every counter.",
    },
    restaurants: {
      title: "Restaurants & fast food · MapleKiosk",
      desc: "Kiosk and kitchen screen for restaurants and takeout counters, with delivery in one queue.",
    },
    privacy: { title: "Privacy · MapleKiosk", desc: "Privacy policy." },
    terms: { title: "Terms · MapleKiosk", desc: "Terms of service." },
    notFound: { title: "Page not found · MapleKiosk", desc: "Page not found." },
  },

  nav: {
    features: "Apps",
    pricing: "Pricing",
    about: "About",
    cta: "See how it works",
    services: "See our services",
    openMenu: "Open the menu",
    closeMenu: "Close the menu",
    menu: [
      {
        to: "/restaurants",
        label: "Restaurants & cafés",
      },
      {
        to: "/salons",
        label: "Hair, nail & beauty salons",
      },
      {
        to: "/booking",
        label: "AI booking assistant",
      },
    ],
  },

  zeroNote: "*Applicable to in-person sales.",

  planUi: {
    prev: "Previous module",
    next: "Next module",
    demo: "Try it in the demo",
  },

  call: {
    label: "Try it: call the assistant",
    big: "Call the assistant",
  },

  hero: {
    titleA: "Complete by design.",
    titleB: "Modular by choice.",
    body: "Pick one module or all of them. Each one fits beside the register, the staff and the habits you already have. No rip-and-replace.",
    wedge: "Keep your register. Add only what you need.",
    explore: "Explore the modules",
    picker: {
      caption: "Keep your POS. Add {list}.",
      captionNone: "Keep your POS as it is. Add a module when you are ready.",
      and: "and",
      lanes: [
        {
          name: "Restaurants & cafés",
          mods: [
            { id: "kds", label: "Kitchen screen", phrase: "a kitchen screen" },
            { id: "kiosk", label: "Self-order kiosk", phrase: "a self-order kiosk" },
            { id: "tv", label: "TV menu boards", phrase: "TV menu boards" },
            { id: "delivery", label: "Delivery queue", phrase: "one delivery queue" },
          ],
        },
        {
          name: "Hair, nail & beauty salons",
          mods: [
            { id: "ai", label: "AI booking assistant", phrase: "an assistant that answers every call" },
            { id: "profiles", label: "Client profiles", phrase: "client profiles" },
            { id: "loyalty", label: "Loyalty & promos", phrase: "loyalty and promos" },
            { id: "checkout", label: "Checkout & tips", phrase: "checkout with tips" },
          ],
        },
      ],
    },
  },

  modules: {
    title: "Every piece works alone. Together, they work as one.",
    both: "RESTAURANTS · SALONS",
    restaurants: "RESTAURANTS",
    cards: [
      {
        title: "AI booking assistant",
        body: "Answers every call in French or English and books the slot. It says it is automated.",
        both: true,
      },
      {
        title: "Customer care",
        body: "Customer profiles, digital stamps, points and promos that bring regulars back.",
        both: true,
      },
      {
        title: "Counter station",
        body: "Fast checkout, one-tap favourites and tips on the screen. Cash, card, tap and QR.",
        both: true,
      },
      {
        title: "Insights",
        body: "Rush hours, most popular items and average ticket times, in one place.",
        both: false,
      },
      {
        title: "Self-order kiosk",
        body: "Customers order and customize on their own. Every choice reaches the counter exactly as picked.",
        both: false,
      },
      {
        title: "Kitchen screen (KDS)",
        body: "Tickets from every channel on one screen, in the order they were rung. Bump when done.",
        both: false,
      },
      {
        title: "TV menu boards",
        body: "Synced with your menu. Mark an item sold out once, and every screen follows.",
        both: false,
      },
      {
        title: "Delivery, one queue",
        body: "Uber Eats and DoorDash land on the same screen as walk-ins. No wall of tablets.",
        both: false,
      },
    ],
    more: "Plus staff payroll for salons, inventory management, reservations, waitlists, and more.",
  },

  services: {
    title: "Made for the businesses we know",
    sub: "Start from your industry. Each page shows the pieces that matter there.",
    cards: [
      {
        hook: "Counter, dine-in, takeout and delivery on one queue.",
        body: "Kiosk, kitchen screen, TV menus and delivery, from one counter to a whole group.",
        link: "Restaurants & cafés",
      },
      {
        hook: "Full chairs, and hands that stay on the client.",
        body: "Bookings, client profiles and loyalty for salons that are always busy.",
        link: "Salons",
      },
      {
        hook: "Every call answered. Not by you.",
        body: "A life-like voice answers questions, knows your services and prices, and books the slot. For restaurants and salons.",
        link: "The assistant",
      },
    ],
  },

  groupsBand: {
    title: "From one counter to your whole group",
    body: "Running more than one location? One menu pushed everywhere, one view of sales, and still 0%* of your sales.",
    link: "MapleKiosk for groups",
  },

  diagram: {
    sub: "They sit on your money. We stay beside it.",
    othersTag: "THE OTHERS: SQUARE · TOAST · CLOVER",
    usTag: "OURS: MAPLEKIOSK",
    you: "You",
    bank: "Bank",
    othersName: "Their platform",
    othersParts: "software + hardware + your money",
    cut: "~2.5% of every card sale",
    othersNote:
      "Every payment goes through them: ~2.5% on every credit card, with the margin hidden in the rate. Leaving means new hardware and lost data.",
    acqName: "Your acquirer",
    acqRate: "your negotiated rate",
    usBox: "MapleKiosk: software only · 0%* of your sales",
    usNote:
      "Your payment agreement stays between you and your acquirer. We never touch your money, and we take no commission.",
  },

  teach: {
    body: "A “free” POS doesn't exist. The price hides in the rate: about 2.5% of every sale, forever. Ours is printed right here.",
    zero: "0%",
  },

  calc: {
    title: "What your payments really cost you",
    sub: "Enter your numbers. We compare honestly, even when it doesn't favour us.",
    volume: "In-person card sales per month",
    debit: "Interac debit share",
    ticket: "Average ticket",
    resultTag: "ESTIMATED FEES PER MONTH",
    square: "Square",
    clover: "Clover",
    acq: "Your own acquirer",
    honestTitle: "Our honest take:",
    honestBody:
      " at your volume, Square's flat rate is probably your best option: the fixed fees of an acquirer account would eat the savings. We'll tell you the same in person.",
    saveTitle: "Estimated savings:",
    saveBody:
      " per month with your own agreement, because we take no commission on your payments.",
    locations: "Locations",
    perLocation: "per location",
    totalAcross: "Total across {n} locations",
    saveAcross: " Across {n} locations, that is {amount} per month.",
    axisX: "Card sales / month",
    axisY: "Fees / month",
    chartTag: "ESTIMATED SAVINGS PER MONTH",
    chartAlt:
      "Chart of estimated monthly fees against monthly card volume: Square and Clover as lines, your own acquirer as a band.",
    disclaimer:
      "Published rates for Square (2.5% credit; 0.75% + 7¢ debit). Clover publishes no Canadian rates, so we estimate with its published US in-person rate (2.3% + 10¢). “Your own acquirer” = a typical interchange-plus deal for a small merchant (1.3–1.8% on credit; 8¢ per debit transaction; about $60/month in fixed fees included). Estimates only. Bring a statement for the real math.",
  },

  lineCost: {
    title: "What does the line cost you?",
    sub: "The customers who look at the line and walk out never show up in a report. Put a number on them.",
    walkouts: "Customers who walk away per day",
    days: "Days open per month",
    resultTag: "ESTIMATED SALES LOST PER MONTH",
    payoff:
      "If the kiosk caught even part of those orders while the line keeps moving, what would that change at the end of the month?",
    honest:
      "If this number is small, a kiosk won't pay for itself, and we'll tell you that too.",
    cta: "Bring these numbers and we'll check them for real",
  },

  chips: {
    title: "Terms we can promise",
    items: [
      "No contract",
      "No terminal lease",
      "No forced payment bundle",
      "Cancel any month",
      "Buy it outright, if you prefer",
      "Certified by Revenu Québec (WEB-SRM)",
    ],
  },

  finalCta: {
    title: "Founded in Montreal. No contract. We install it ourselves.",
    sub: "Two weeks in your shop. If the kiosk doesn't pay for itself, we unplug it, and you owe nothing.",
  },

  footer: {
    tagline:
      "Business apps and practical AI services, built in Canada for food-service and beauty operators — from one counter to a multi-location group.",
    product: "Product",
    industries: "Industries",
    demo: "Demo",
    groups: "Groups & franchises",
    legal: "Legal",
    nails: "Nail & Beauty Salons",
    restaurants: "Restaurants & Fast Food",
    coffee: "Cafés & Boba",
    rights: "All rights reserved.",
    madeIn: "Made in Canada 🍁",
    privacy: "Privacy",
    terms: "Terms",
  },

  coffee: {
    title: "Your menu isn't one button. Your register shouldn't be either.",
    intro:
      "A generic register was built for one price, one tap. A boba or coffee order is a stack of choices (size, sugar, ice, milk, toppings) flying at you during the rush. The kiosk is built for exactly that.",
    quotes: [
      {
        q: "“50% sugar, less ice, extra pearls?”",
        body: "Modifiers that mirror your real menu (sugar and ice levels, size, hot or cold, milk swaps and toppings), priced and sent to the bar automatically.",
      },
      {
        q: "“Next order up!”",
        body: "Orders fly to a bar and kitchen display in sequence, so drinks and food come out in the right order even when the line is out the door.",
      },
      {
        q: "“Buy 9, get the 10th?”",
        body: "Digital stamp cards, points and promos that regulars actually use. No punch card to lose, no math at the till.",
      },
    ],
  },

  restaurants: {
    title: "The DoorDash beep interrupts your service. Again.",
    sub: "Uber Eats and DoorDash arrive on the kitchen screen. No more tablet wall.",
    bandTitle: "Dinner rush or slow Tuesday: the kitchen reads one queue.",
    phoneTitle: "Every call gets answered. Not by you.",
    walletTitle: "The punch card lives in their phone now.",
    vig: {
      padTag: "Reservation", padTime: "6:42 pm",
      padL1: "Tran — party of 4", padL2: "Saturday 7 pm ✓ confirmed", padL3: "asks for the booth",
      padStamp: "Taken by the assistant",
      loyTitle: "Loyalty card", loyTag: "Your place · since 2019", loyTenth: "10th",
     
      restName: "MapleKiosk restaurant",
      custName: "Tran Nguyen",
    },
    kds: {
      tickets: [
        { no: "041", src: "Kiosk", l1: "Crispy chicken · combo", l2: "No onions · extra sauce", status: "Ready" },
        { no: "042", src: "Counter", l1: "Classic poutine · L", l2: "“Next order up!”", status: "In prep" },
        { no: "043", src: "Uber Eats", l1: "2 × salmon poke bowl", l2: "No more tablet wall", status: "Waiting" },
      ],
      soldQuote: "“86”",
      soldBadge: "Sold out",
      soldItem: "Grilled salmon",
      soldBody: "Marked sold out once — greyed out on the kiosk and the TV menus instantly.",
    },
    quotes: [
      {
        q: "The phone rings, the tablet beeps, the line grows, and you have two hands.",
        body: "Kiosk, counter, and delivery fall into a single prep queue.",
      },
      {
        q: "“86 the salmon.”",
        body: "Mark an item sold out once and it greys out on the kiosk and your TV menus instantly.",
      },
      {
        q: "The phone rings mid-service: a table for four, Saturday.",
        body: "An assistant answers every call in French or English, handles the questions, and books the table, while you keep plating.",
      },
    ],
    plan: {
      aria: "Interactive drawing of a restaurant with the MapleKiosk modules",
      introBody: "Click a number to see what that module does. The register you have today stays on the counter.",
      labels: {
        kitchen: "Kitchen",
        dining: "Dining room",
        register: "Your register stays",
        entrance: "Entrance",
      },
      modules: [
        { name: "Self-order kiosk", body: "Customers order and customize on their own. Every choice reaches the counter exactly as picked." },
        { name: "Counter station", body: "Fast checkout, one-tap favourites and tips on the screen. Cash, card, tap and QR." },
        { name: "Kitchen screen", body: "Tickets from every channel on one screen, in the order they were rung. Bump when done." },
        { name: "TV menu boards", body: "Synced with your menu. Mark an item sold out once, and every screen follows." },
        { name: "Delivery, one queue", body: "Uber Eats and DoorDash land on the same screen as walk-ins. No wall of tablets." },
        { name: "AI booking assistant", body: "Answers every call in French or English and books the table. It says it is automated." },
        { name: "Reservations & waitlist", body: "Tonight’s bookings and the walk-in waitlist, in one place." },
        { name: "Loyalty & customer care", body: "Customer profiles, digital stamps, points and promos that bring regulars back." },
        { name: "Inventory", body: "Stock by item, so you see what is running low before the rush." },
      ],
      screens: {
        kiosk: {
          header: "Order here",
          item: "Crispy chicken combo",
          rows: [
            { label: "Side", on: "Fries", off: "Salad" },
            { label: "Remove", on: "No onions", off: "No pickles" },
            { label: "Add", on: "Extra sauce", off: "Cheese" },
          ],
          cta: "Add to order",
        },
        counter: {
          order: "Order #042",
          where: "Counter",
          lines: ["1 × Classic poutine · L", "1 × Crispy chicken combo"],
          total: "Total",
          tip: "Tip",
          custom: "Custom",
          charge: "Charge · cash, card, tap or QR",
        },
        tv: {
          title: "Menu",
          screen: "TV 1 of 2",
          items: ["Classic poutine", "Crispy chicken combo", "Grilled salmon", "Salmon poke bowl"],
          note: "“86 the salmon.” Marked once at the counter. The kiosk and both TVs follow.",
        },
        delivery: {
          title: "One queue",
          order: "In order",
          now: "now",
          rows: [
            { src: "Uber Eats", item: "2 × salmon poke bowl", time: "6:55" },
            { src: "Kiosk", item: "Classic poutine · L", time: "" },
            { src: "DoorDash", item: "2 × chicken combo", time: "7:05" },
            { src: "Counter", item: "2 × latte", time: "" },
          ],
        },
        call: {
          incoming: "Incoming call",
          time: "6:42 pm",
          caller: "Caller",
          assistant: "Assistant",
          lines: [
            { who: "caller", text: "Hi, do you have a table for four on Saturday?" },
            { who: "assistant", text: "Hi! I am the restaurant’s automated assistant. I have 7 pm on Saturday. Should I book it?" },
            { who: "caller", text: "Yes, and could we get the booth?" },
          ],
          done: "Tran · party of 4 · Sat 7 pm · booth",
        },
        book: {
          title: "Tonight · Saturday",
          tag: "Book",
          byPhone: "By phone",
          rows: [
            { time: "6:30", who: "Nguyen · 2", where: "Table 3", phone: false },
            { time: "7:00", who: "Tran · 4", where: "Booth", phone: true },
            { time: "7:15", who: "Singh · 6", where: "Tables 5+6", phone: false },
          ],
          waitlist: "Waitlist",
          waiting: "2 waiting",
          wait: [
            { who: "Kevin · 3", eta: "~15 min" },
            { who: "Amélie · 2", eta: "~25 min" },
          ],
        },
        loyalty: {
          screen: "Customer screen",
          tier: "Gold",
          welcome: "Welcome back, Tran!",
          stamps: "8 of 10 stamps",
          tenth: "The 10th is on us",
        },
        stock: {
          title: "Stock",
          onHand: "On hand",
          low: "Low",
          rows: [
            { item: "Oat milk", qty: "2", low: true },
            { item: "Salmon fillets", qty: "6", low: false },
            { item: "Burger buns", qty: "48", low: false },
            { item: "Fries (kg)", qty: "22", low: false },
          ],
        },
      },
    },
  },

  insights: {
    title: "The numbers you never have time to pull",
    body: "MapleKiosk keeps score while you serve: rush hours, most popular items, average ticket times. Not data for the sake of data — decisions: schedule the second cashier for the hour that actually needs it, and cut the item nobody orders.",
    hoursLabel: "Orders by hour",
    topLabel: "Most ordered today",
    topItems: ["Taro milk tea · L", "Classic poutine", "Crispy chicken combo"],
    avgLabel: "Average ticket time",
    avgValue: "3m 40s",
  },

  groups: {
    title: "What works at one counter breaks at five.",
    sub: "One system for every location — and you keep your own acquirer, and your own negotiated rate, at each of them.",
    cta: "Talk to the founder",
    mailSubject: "MapleKiosk for our group",
    pains: [
      {
        label: "Menus",
        hook: "Change the menu once. Every store follows.",
        body: "A price change or a new item reaches every kiosk, counter station, and TV board in the group at the same moment. No store-by-store round, no version drift.",
      },
      {
        label: "Reporting",
        hook: "One view of sales, not one login per store.",
        body: "Every location reports into the same view. Read the group's day in one place, then open a single store when a number looks off.",
      },
      {
        label: "Rush staffing",
        hook: "The extra cashier at rush — times every location.",
        body: "A kiosk takes orders through the rush at each store. The cost line that multiplies fastest across a group is the one the kiosk absorbs.",
      },
      {
        label: "Rollout",
        hook: "Open the next location in days, not weeks.",
        body: "Your menus, pricing, and loyalty already live in the system. A new store is hardware and an install visit, not a software project.",
      },
    ],
    insightsTitle: "Run the stores you are not standing in",
    insightsBody:
      "The insights dashboard puts every location side by side: rush hours, most popular items, average ticket times. Schedule the second cashier for the hour that needs it, and cut the item nobody orders — at a store you visit once a week.",
    proofTitle: "Built for Canada.",
    proofPoints: [
      "Certified by Revenu Québec (WEB-SRM)",
      "French-first interface, for customers and staff",
      "Interac debit in the fee math, not an afterthought",
      "We install it ourselves, on site, around your service hours",
    ],
    partnerTag: "THE DESIGN PARTNER OFFER",
    partnerTitle: "We take one design partner per segment. Here is the deal.",
    partnerPoints: [
      {
        title: "A 90-day pilot",
        body: "We run 1–2 of your locations for 90 days.",
      },
      {
        title: "Metrics agreed before the start",
        body: "We agree on the success metrics up front: kiosk share of orders and average ticket.",
      },
      {
        title: "A rollout price fixed in advance",
        body: "If the pilot hits the metrics, the remaining locations roll out at a price agreed before the pilot began.",
      },
      {
        title: "If it misses, we leave",
        body: "We unplug, and you owe nothing. Same terms as every install.",
      },
    ],
    ctaTitle: "The next step is a conversation, not a demo booth.",
    ctaSub: "Email the founder directly. The person who writes the software answers — and installs.",
  },

  features: {
    title: "Everything the counter uses, in one place.",
    sub: "For the owner who already knows the problem. Here is what answers it.",
    blocks: [
      {
        title: "The kiosk",
        body: "Full modifiers: sugar, ice, size, milks, toppings. Every choice is priced and sent to the bar exactly as ordered. Customer side in English, French, Vietnamese, and Russian.",
      },
      {
        title: "The counter station",
        body: "Fast checkout, favourites, on-screen tips.",
      },
      {
        title: "The kitchen screen (KDS)",
        body: "Orders in sequence: kiosk, counter, and delivery in a single queue.",
      },
      {
        title: "Delivery, one queue",
        body: "Uber Eats and DoorDash land on the same screen as the counter. No more tablet wall.",
      },
      {
        title: "Menus on TVs",
        body: "Synced with your menu; mark an item sold out in one tap.",
      },
      {
        title: "Customer profiles & loyalty",
        body: "Digital stamps, points, and regulars who come back.",
      },
      {
        title: "It connects to your register",
        body: "Clover integration today. Your register stays your register.",
      },
      {
        title: "Your place or ours",
        body: "Cloud, or installed on site. Buy it outright if you prefer.",
      },
    ],
  },

  day: {
    title: "Open to rush to reset: the way it really runs",
    sub: "One service day, and the part of MapleKiosk that carries each hour.",
    beats: [
      {
        time: "7:00",
        name: "Open & prep",
        tags: [
          { label: "Menus on TVs", detail: "Your TV boards read the same menu as the kiosk and the counter. Change a price or hide an item once and every screen in the shop follows." },
          { label: "Counter station", detail: "One-tap favourites, saved combos and quick modifiers keep the queue moving. Cash, card, tap and QR, with tips on the screen." },
        ],
        text: "One screen sets today's menu everywhere: the TVs, the kiosk, the counter. Last night's sold-out items come back on before the door opens.",
      },
      {
        time: "8:15",
        name: "The morning rush",
        tags: [
          { label: "The kiosk", detail: "Sugar and ice levels, size, hot or cold, milk swaps, and toppings like pearls, jelly and cheese foam. Each one priced and printed to the bar exactly as ordered." },
          { label: "Kitchen screen", detail: "Orders reach the bar and kitchen screens in sequence, with bump-when-done and clear tickets, so nothing gets lost in the rush." },
        ],
        text: "Two people order at the kiosk while your hands are full. “Half sugar, less ice” or “no onions, extra sauce” reaches the kitchen written exactly that way, in the order it was rung.",
      },
      {
        time: "11:30",
        name: "Order-ahead & delivery",
        tags: [
          { label: "Delivery, one queue", detail: "Uber Eats and DoorDash orders drop onto the same screen as walk-ins, so the bar works one queue instead of three tablets." },
        ],
        text: "Uber Eats and DoorDash stop being a second tablet. Their tickets fall into the same prep queue as the walk-ins, so nobody's order jumps the line.",
      },
      {
        time: "14:00",
        name: "The slow hour",
        tags: [
          { label: "Sold-out sync", detail: "Mark an item sold out once. It greys out on the kiosk, the TV boards and the counter at the same moment, so nobody sells what you cannot make." },
          { label: "Loyalty", detail: "Digital stamps, points and promos that bring regulars back. All tracked at the till, with no card to punch or lose." },
        ],
        text: "The oat milk runs out. One tap greys it out on the kiosk, the TVs and the counter at once. No refunds, no apologies at the counter. Regulars' stamps keep counting.",
      },
      {
        time: "20:00",
        name: "Close & reset",
        tags: [
          { label: "One day, one screen", detail: "Counter, kiosk and delivery totals land on one screen at close, so you read the day in one place instead of three." },
        ],
        text: "Counter, kiosk and delivery close on one screen instead of three.",
      },
    ],
    alsoTitle: "Also in the box",
    also: [
      "Connects to your register: Clover today, and yours stays yours",
      "Your place or ours: cloud, or installed on site",
    ],
    question: "Which of those five moments costs you the most right now?",
  },

  pricing: {
    colApp: "App",
    colFor: "For",
    colPrice: "Hosted by us · monthly",
    colOnPrem: "On your servers",
    onPremValue: "Call for pricing",
    title: "One price per app. SaaS or on-premise.",
    sub: "Every MapleKiosk app comes two ways: hosted by us (SaaS, billed monthly) or installed on your own servers (on-premise, one-time licence). Pick per app and mix and match.",
    per: "/month",
    apps: [
      { name: "MapleCoffee", price: "$39", tag: "" },
      { name: "MapleRES", price: "$49", tag: "" },
      { name: "MapleSPA", price: "$44", tag: "Flagship app" },
    ],
    note: "Prices in USD, per app, before tax. AI integration services are quoted separately. Need several apps or a custom build? Talk to sales for a bundle.",
    buyTitle: "Or buy it outright",
    buyBody: "One payment, installed on site, yours for good.",
    buyCta: "Contact us",
    faqTitle: "Straight questions, straight answers",
    faq: [
      {
        q: "What if I cancel?",
        a: "You cancel any month, no penalty. Your menu and your data leave with you.",
      },
      {
        q: "What about the hardware?",
        a: "No long-term lease, ever. Buy the kiosk outright, or take it with the subscription.",
      },
      {
        q: "Do my payments go through you?",
        a: "No. Never. Your payment agreement stays between you and your acquirer, see the calculator.",
      },
      {
        q: "How long does the install take?",
        a: "We load your menu before the visit and install on site, around your service hours.",
      },
      {
        q: "Does it work with my register?",
        a: "Clover integration today; otherwise the kiosk runs beside your register without replacing it.",
      },
      {
        q: "How does the two-week trial work?",
        a: "Two weeks in your shop. If the kiosk doesn't pay for itself, we unplug it, and you owe nothing.",
      },
    ],
  },

  about: {
    title: "Built in Montreal. Installed by the people who wrote it.",
    paras: [
      "MapleKiosk is built in Montreal by a small team: the people who write the software load your menu and come to install the kiosk themselves.",
      "The product runs today in salons, boba shops, and restaurants across the United States, including multi-location groups. The first Quebec installs are next, that's why the demo is free and the trial costs nothing.",
      "The terms. No contract, no lease, no payment bundle, exist for one reason: we'd rather you stay by choice.",
    ],
  },

  salons: {
    title: "The phone rings. Your hands are in acrylic.",
    sub: "An assistant answers every call, in French or English, walks the client through your services, and books the slot. It shows up in your schedule. Your tech never stops.",
    bandTitle: "Your hands stay on the client. The assistant takes the calls.",
    quotes: [
      {
        q: "“Anything for two, Saturday afternoon?”",
        body: "The assistant checks your schedule, answers like a human, and books the slot, it shows up in your calendar.",
      },
      {
        q: "No answer means she books the next salon on Google.",
        body: "Every call gets picked up, in French or English: mid-set, mid-facial, mid-rush.",
      },
      {
        q: "“How much for a gel refill?”",
        body: "It knows your services and your prices, and it answers, then offers the booking.",
      },
    ],
    disclosure:
      "The assistant is automated and says so at the start of every call. Call handling is being reviewed for Quebec privacy law (Law 25) before launch.",
    listenTitle: "Call it yourself.",
    plan: {
      aria: "Interactive drawing of a salon with the MapleKiosk modules",
      introBody: "Click a number to see what that module does. Your hands stay on the client.",
      labels: {
        styling: "Styling",
        nails: "Nail bar",
        pedicure: "Pedicure",
        desk: "Front desk",
        waiting: "Waiting",
        entrance: "Entrance",
      },
      modules: [
        { name: "AI booking assistant", body: "Answers every call in French or English, knows your services and prices, and books the slot. It says it is automated." },
        { name: "Appointments", body: "The day’s bookings, technician by technician. What the assistant books shows up here." },
        { name: "Client profiles", body: "Each client’s visits and services, at the chair." },
        { name: "Checkout & tips", body: "Fast checkout with tips on the screen. Cash, card, tap and QR." },
        { name: "Loyalty & promos", body: "Digital stamps, points and promos that bring regulars back." },
        { name: "Waitlist", body: "Walk-ins join one list and take their turn, in order." },
        { name: "Staff payroll", body: "Hours, services, tips and commission per technician, ready for payday." },
        { name: "Inventory", body: "Stock by product, so you reorder before the polish runs out." },
      ],
      screens: {
        call: {
          incoming: "Incoming call",
          time: "11:08 am",
          caller: "Caller",
          assistant: "Assistant",
          lines: [
            { who: "caller", text: "Hi! Anything for two, Saturday afternoon?" },
            { who: "assistant", text: "Hi! I am the salon’s automated assistant. I have 2:30 with Linh and Mai. Should I book it?" },
            { who: "caller", text: "Perfect, thank you." },
          ],
          done: "2 guests · Sat 2:30 · Linh + Mai",
        },
        day: {
          title: "Saturday",
          tag: "Day view",
          techs: ["Linh", "Mai", "Vy"],
          byPhone: "By phone",
          slots: [
            { tech: 0, time: "10:00", what: "Gel refill", phone: false },
            { tech: 1, time: "11:30", what: "Pedicure", phone: false },
            { tech: 2, time: "12:00", what: "Nail art", phone: false },
            { tech: 0, time: "2:30", what: "2 guests", phone: true },
            { tech: 1, time: "2:30", what: "2 guests", phone: true },
          ],
        },
        profile: {
          name: "Tran Nguyen",
          tier: "Gold",
          visits: "12 visits",
          last: "Last visit: gel refill with Linh",
          next: "Next visit: Saturday 2:30",
        },
        checkout: {
          title: "Checkout",
          lines: [
            { item: "Gel refill", price: "45.00" },
            { item: "Nail art", price: "10.00" },
          ],
          total: "Total",
          tip: "Tip",
          custom: "Custom",
          charge: "Charge · cash, card, tap or QR",
        },
        loyalty: {
          screen: "Client screen",
          tier: "Gold",
          welcome: "Welcome back, Tran!",
          stamps: "8 of 10 visits",
          tenth: "The 10th is on us",
        },
        waitlist: {
          title: "Walk-ins",
          tag: "In order",
          next: "Next",
          rows: [
            { who: "Mai K.", what: "Manicure", eta: "~10 min" },
            { who: "Sofia", what: "Pedicure", eta: "~25 min" },
            { who: "Kevin", what: "Gel", eta: "~35 min" },
          ],
        },
        payroll: {
          title: "Payroll",
          period: "Sep 15 – 28",
          cols: ["Tech", "Hours", "Tips"],
          rows: [
            { tech: "Linh", hours: "32 h", tips: "412" },
            { tech: "Mai", hours: "28 h", tips: "365" },
            { tech: "Vy", hours: "18 h", tips: "210" },
          ],
        },
        stock: {
          title: "Retail & supplies",
          onHand: "On hand",
          low: "Low",
          rows: [
            { item: "Gel base coat", qty: "2", low: true },
            { item: "Red polish #12", qty: "9", low: false },
            { item: "Cuticle oil", qty: "14", low: false },
            { item: "Acetone (L)", qty: "6", low: false },
          ],
        },
      },
    },
  },

  booking: {
    title: "Every call answered. Not by you.",
    sub: "An assistant answers every call in French or English, knows your services and prices, and books the slot, while your hands stay on the work.",
    before: {
      title: "The phone was never built for a busy shop.",
      beforeTag: "Before",
      afterTag: "With the assistant",
      rows: [
        { before: "The phone rings mid-service. You let it ring, or you put a client on hold.", after: "It picks up every call, and your hands stay on the work." },
        { before: "“Press 1 for our hours…” Callers hang up before they reach anyone.", after: "Callers speak normally. It understands the question and answers it." },
        { before: "You repeat the same prices and hours a hundred times a week.", after: "It knows your services, prices and hours, and gives them for you." },
        { before: "The caller switches from French to English, and the call gets harder.", after: "It answers in French or English." },
      ],
    },
    how: {
      title: "Three steps. We do the setup.",
      steps: [
        { title: "It learns your shop", body: "We load your services, prices, hours and policies, so it answers with your facts, not guesses." },
        { title: "You set the rules", body: "Which slots it can book, and how long each service takes." },
        { title: "It answers. You stay informed.", body: "Every booking lands in your schedule." },
      ],
    },
    does: {
      title: "Sounds like a person. Says it is not one.",
      items: [
        { title: "Answers without awkward pauses", body: "A natural back-and-forth, so the caller never repeats themselves." },
        { title: "French and English", body: "It answers every call in French or English." },
        { title: "Knows your menu or your services", body: "Prices, durations, hours and policies come from your setup." },
        { title: "Books the slot", body: "It offers open times and confirms the booking before the call ends." },
      ],
    },
    uses: {
      title: "One assistant, for the kitchen and the salon chair",
      rows: [
        { hook: "A table for four, Saturday?", body: "Reservations for tonight and the weekend, opening hours, and the questions that interrupt service.", link: "Restaurants & cafés" },
        { hook: "Anything for two, Saturday afternoon?", body: "Appointments by service and technician, prices, and reschedules, while the tech keeps working.", link: "Salons" },
      ],
    },
    trust: {
      title: "It says it is automated. On every call.",
      points: [
        "Callers hear that the assistant is automated at the start of every call.",
        "Call handling is being reviewed for Quebec privacy law (Law 25) before launch.",
      ],
    },
    faqTitle: "Straight questions, straight answers",
    faq: [
      { q: "What is the AI booking assistant?", a: "A phone assistant for restaurants and salons. It answers calls with a life-like voice, answers questions about your services, prices and hours, and books the slot." },
      { q: "Does it replace my staff?", a: "No. It takes the calls your hands cannot take, so your staff stay with the customer in front of them." },
      { q: "Does it tell callers that it is automated?", a: "Yes. It says so at the start of every call." },
      { q: "Which languages does it speak?", a: "French and English." },
      { q: "Where do the bookings go?", a: "Into your schedule." },
      { q: "Can I try it before I decide?", a: "Yes. Call the number on this page and talk to it yourself." },
      { q: "What does it cost?", a: "The assistant is quoted separately from the apps." },
    ],
    finalTitle: "Call it now. It picks up.",
    finalSub: "Ask it for a table, a gel refill, or your opening hours. Then decide.",
  },

  demo: {
    title: "Try it the way your staff will use it.",
    sub: "Place an order, send it to the kitchen, mark an item sold out. In salon mode, let the assistant take a call. Nothing here is saved.",
    modes: { cafe: "Café & restaurant", salon: "Salon" },
    modeLabel: "Demo mode",
    reset: "Start over",
    portal: "Open the real portal",
    log: "Event log",
    logEmpty: "Nothing yet. Tap something above.",
    cafe: {
      inputTag: "Take an order",
      kiosk: "Kiosk",
      counter: "Counter",
      items: [
        { id: "latte", name: "Latte", price: 4.75 },
        { id: "maple", name: "Maple latte", price: 5.5 },
        { id: "brew", name: "Cold brew", price: 4.25 },
        { id: "croissant", name: "Croissant", price: 3.5 },
        { id: "poutine", name: "Classic poutine", price: 11.5 },
        { id: "combo", name: "Chicken combo", price: 13.95 },
      ],
      order: "Order #{n}",
      empty: "Tap an item to start an order.",
      total: "Total",
      remove: "Remove one {item}",
      pay: "Pay at the kiosk",
      charge: "Charge",
      soldOut: "Sold out",
      menuTag: "Sold out today",
      mark: "86",
      back: "Back on",
      customerTag: "Customer",
      noCustomer: "No customer",
      customers: [
        { name: "Ava", stamps: 6 },
        { name: "Tran", stamps: 8 },
        { name: "Noah", stamps: 2 },
      ],
      kitchen: "Kitchen screen",
      bump: "Bump",
      noTickets: "No open tickets. The kitchen is caught up.",
      seed: [
        { n: 42, src: "Counter", lines: ["1 × Classic poutine"] },
        { n: 43, src: "Uber Eats", lines: ["2 × Cold brew", "1 × Croissant"] },
      ],
      screen: "Customer screen",
      idle: "Welcome! Order at the kiosk or the counter.",
      welcome: "Welcome back, {name}!",
      stamps: "{n} of 10 stamps",
      thanks: "Thank you! Order #{n} is in the kitchen.",
      ready: "Order #{n} is ready",
      tv: "TV menu board",
      src: { kiosk: "Kiosk", counter: "Counter" },
      events: {
        sent: "Order #{n} sent to the kitchen from the {src}.",
        bumped: "Order #{n} bumped: ready for pickup.",
        soldOut: "{item} marked sold out. The kiosk and the TV follow.",
        back: "{item} is back on the menu.",
        customer: "{name} added to the order.",
        stamp: "{name} earned a stamp: {n} of 10.",
      },
    },
    salon: {
      phoneTag: "The assistant",
      play: "Play a sample call",
      playing: "Call in progress…",
      again: "Play it again",
      caller: "Caller",
      assistant: "Assistant",
      script: [
        { who: "caller", text: "Hi! Anything for two, Saturday afternoon?" },
        { who: "assistant", text: "Hi! I am the salon’s automated assistant. I have 2:30 with Linh and Mai. Should I book it?" },
        { who: "caller", text: "Perfect, thank you." },
        { who: "assistant", text: "Done: Saturday at 2:30 with Linh and Mai. See you then!" },
      ],
      realTitle: "Or call the real one",
      calendarTag: "Appointments · Saturday",
      techs: ["Linh", "Mai", "Vy"],
      hours: ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"],
      byPhone: "By phone",
      bookings: [
        { tech: 0, start: 0, len: 1, what: "Gel refill · Tran" },
        { tech: 1, start: 1, len: 2, what: "Pedicure · Ava" },
        { tech: 2, start: 2, len: 1, what: "Nail art · Kim" },
        { tech: 0, start: 5, len: 1, what: "Manicure · Lise" },
      ],
      newBooking: "2:30 · 2 guests",
      checkoutTag: "Checkout",
      open: [
        { client: "Tran", service: "Gel refill", tech: 0, price: 45 },
        { client: "Ava", service: "Pedicure", tech: 1, price: 55 },
        { client: "Kim", service: "Nail art", tech: 2, price: 30 },
      ],
      with: "with {tech}",
      tip: "Tip",
      charge: "Charge {total}",
      noOpen: "Everyone is checked out.",
      payrollTag: "Payroll · this period",
      cols: ["Tech", "Hours", "Tips"],
      hoursWorked: ["32 h", "28 h", "18 h"],
      tipsStart: [412, 365, 210],
      waitTag: "Walk-ins",
      add: "Add a walk-in",
      seat: "Seat the next one",
      walkins: ["Mai K.", "Sofia", "Kevin", "Amélie", "Tom", "Lina"],
      noWait: "No one is waiting.",
      events: {
        call: "The assistant answered a call.",
        booked: "Booked by phone: Saturday 2:30, Linh and Mai.",
        charged: "{client} paid {total} with a {tip} tip. {tech}’s tips went up.",
        added: "{name} joined the walk-in list.",
        seated: "{name} was seated.",
      },
    },
  },

  notFound: {
    title: "This page isn't on the menu.",
    text: "Head back home, or better, try the kiosk yourself.",
    back: "Back to home",
  },
}
