export const en = {
  meta: {
    home: {
      title: "MapleKiosk · Keep your register. Add the kiosk.",
      desc: "Self-order kiosks for quick-service counters and multi-location groups in Montreal and the South Shore. No contract, 0% of your sales.",
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
  },

  hero: {
    title: "Every rush, someone looks at the line and walks out.",
    wedgeStrong: "Keep your register. Add the kiosk.",
    wedgeRest:
      " If it doesn't pay for itself, we unplug it, and you owe nothing.",
    ticket: {
      name: "Taro milk tea · L",
      num: "No. 042",
      rows: [
        { label: "Large size", price: "$5.50" },
        { label: "50% sugar · less ice", price: "incl." },
        { label: "Tapioca pearls", price: "+$0.75" },
        { label: "Cheese foam", price: "+$0.75" },
        { label: "Oat milk", price: "+$0.50" },
      ],
      totalLabel: "Total",
      total: "$7.50",
      caption:
        "Ordered by the customer, sent to the bar exactly as is, while the line keeps moving.",
    },
  },

  router: {
    title: "Three counters, three different mornings",
    sub: "Pick yours.",
    doors: [
      {
        label: "Tea & coffee counters",
        hook: "“Half sugar, less ice, extra pearls.” And the line keeps moving.",
        body: "The kiosk takes the custom orders and sends them to the bar exactly as chosen.",
      },
      {
        label: "Takeout counters",
        hook: "The phone rings, the tablet beeps, the line grows, and you have two hands.",
        body: "Kiosk, counter, and delivery fall into a single prep queue.",
      },
      {
        label: "Dine-in",
        hook: "The DoorDash beep interrupts your service. Again.",
        body: "Uber Eats and DoorDash arrive on the kitchen screen. No more tablet wall.",
      },
    ],
  },

  groupsBand: {
    title: "From one counter to your whole group",
    body: "Running more than one location? One menu pushed everywhere, one view of sales, and still 0% of your sales.",
    link: "MapleKiosk for groups",
  },

  diagram: {
    title: "Where your money goes",
    sub: "They sit on your money. We stay beside it.",
    othersTag: "THE OTHERS: SQUARE · TOAST · CLOVER",
    usTag: "OURS: MAPLEKIOSK",
    you: "You",
    bank: "Bank",
    othersBox: "Their platform: software + hardware + your money, one block",
    othersNote:
      "Every payment goes through them: ~2.5% on every credit card, with the margin hidden in the rate. Leaving means new hardware and lost data.",
    acqBox: "Your acquirer, your negotiated rate",
    usBox: "MapleKiosk: software only · 0% of your sales",
    usNote:
      "Your payment agreement stays between you and your acquirer. We never touch your money, and we take no commission.",
  },

  teach: {
    pre: "A “free” POS doesn't exist. The price hides in the rate: about 2.5% of every sale, forever. Ours is printed right here: ",
    zero: "0%",
    post: ".",
  },

  calc: {
    title: "What your payments really cost you",
    sub: "Enter your numbers. We compare honestly, even when it doesn't favour us.",
    volume: "Card sales per month",
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
    chartTag: "ESTIMATED SAVINGS PER MONTH",
    chartAlt:
      "Chart of estimated monthly fees against monthly card volume: Square and Clover as lines, your own acquirer as a band.",
    disclaimer:
      "Published rates for Square (2.5% credit; 0.75% + 7¢ debit). Clover publishes no Canadian rates, so we estimate with its published US in-person rate (2.3% + 10¢). “Your own acquirer” = a typical interchange-plus deal for a small merchant (1.3–1.8% on credit; 8¢ per debit transaction; about $60/month in fixed fees included). Estimates only. Bring a statement for the real math.",
    cta: "Bring a statement and we'll check these numbers for real",
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
  },

  insights: {
    title: "The numbers you never have time to pull",
    body: "MapleKiosk keeps score while you serve: rush hours, most popular items, average ticket times. Not data for the sake of data — decisions: schedule the second cashier for the hour that actually needs it, and cut the item nobody orders.",
    tag: "INSIGHTS",
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
    proofTitle: "Built for Quebec. Proven in the United States.",
    proofPoints: [
      "Certified by Revenu Québec (WEB-SRM) — certificate [NUMÉRO]",
      "French-first interface, for customers and staff",
      "Interac debit in the fee math, not an afterthought",
      "We install it ourselves, on site, around your service hours",
      "Built in Montreal. Proven in [N] locations across the United States — [salons, boba shops, and restaurants]",
    ],
    proofStats:
      "[$X]M in orders placed through MapleKiosk. From [A] to [B] locations in [N] months.",
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
    screenshot: "[SCREENSHOT]",
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
        body: "Clover integration today. Your register stays your register. [VERIFY the exact integration list before publishing]",
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
        a: "Clover integration today; otherwise the kiosk runs beside your register without replacing it. [VERIFY the integration list]",
      },
      {
        q: "How does the two-week trial work?",
        a: "Two weeks in your shop. If the kiosk doesn't pay for itself, we unplug it, and you owe nothing.",
      },
    ],
  },

  about: {
    title: "Built in Montreal. Installed by the person who wrote it.",
    paras: [
      "MapleKiosk is built in Montreal by Minh: a developer who writes the software, loads your menu, and comes to install the kiosk himself.",
      "The product runs today in salons, boba shops, and restaurants across the United States, including multi-location groups. The first Quebec installs are next, that's why the demo is free and the trial costs nothing.",
      "The terms. No contract, no lease, no payment bundle, exist for one reason: we'd rather you stay by choice.",
    ],
    photo: "[PHOTO]",
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
    recording: "[RECORDING: a real 30-second call, to be produced]",
    disclosure:
      "The assistant is automated and says so at the start of every call. Call handling is being reviewed for Quebec privacy law (Law 25) before launch.",
  },

  notFound: {
    title: "This page isn't on the menu.",
    text: "Head back home, or better, try the kiosk yourself.",
    back: "Back to home",
  },
}
