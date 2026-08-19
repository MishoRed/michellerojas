export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  industry: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  presentationUrl?: string;
  presentationLabel?: string;
  award?: string;
}

export const projects: Project[] = [
  {
    slug: "born-x-raised",
    title: "BORN X RAISED",
    category: "Brand Identity",
    year: "2026",
    client: "BORN X RAISED",
    industry: "Apparel and Fashion Industry",
    services: ["Brand Strategy Presentation"],
    overview: "This project audited Born X Raised (BXR), a Los Angeles streetwear brand built on Venice subcultures, Chicano and indigenous identity, and LA community pride. With nearly half a million followers and high-profile partnerships including a Fanatics x Complex collab for the Mexico National Baseball Team and ties to figures like Nipsey Hussle, BXR carries real cultural authority through a relaxed, nostalgic, community-driven tone.",
    challenge: "Despite BXR's strong cultural footprint, the brand produces almost exclusively menswear, even though women visibly wear and style its oversized pieces. BXR has never partnered with a women's label to serve that audience directly, leaving a clear, unaddressed gap in how the brand reaches its own community.",
    solution: "The proposed fix is a collaboration with iamkoko.la, an LA-based women's streetwear brand that reworks vintage jerseys into corsets and cropped silhouettes and already overlaps with BXR's existing partners like Complex Market. The concept centers on a Los Angeles team jersey collection (Lakers, Dodgers, Raiders) rendered in iamkoko.la's style but branded with BXR's logo, giving women an entry point into the BXR world, grounded in real audience interest, without diluting the brand's core identity.",
    presentationUrl: "https://www.canva.com/design/DAHJ5gMA0lk/a5DuQfpCOFlv20KA4bkbYQ/view",
  },
  {
    slug: "pcc-community-markets",
    title: "PCC Community Markets",
    category: "Brand Identity",
    year: "2026",
    client: "PCC Community Markets",
    industry: "Grocery Store and Retail Food Cooperative",
    services: ["Brand Strategy Presentation"],
    overview: "This project audited PCC Community Markets, a Puget Sound co-op with 16 stores, over 95,000 member households, and an \"organic first,\" community-led brand identity built on partnerships with farmers, indigenous tribes, and BIPOC, women-owned, and LGBTQ+ suppliers. The audit found real strengths in PCC's content strategy, including transparency, strong Instagram engagement, and an authentic community voice.",
    challenge: "Despite this values-driven positioning, PCC's Partner Program, which offers member discounts at local businesses, included no POC-owned food partnerships and few genuinely healthy options. This left a gap between PCC's stated commitment to diversity and equity and the actual makeup of its business partnerships.",
    solution: "The proposed fix pairs PCC with Ba Bar Green, a vegan, plant-based Vietnamese restaurant in South Lake Union owned by Eric Banh and Teresa Nguyen, adding a healthy, POC-owned partner that shares PCC's values and audience. The plan includes a \"comfort-vegan,\" community-first creative direction, prototypes like a member discount flyer and a joint cooking class, and a one-year Instagram-first rollout, positioning the partnership to sharpen PCC's brand identity while opening the door to future growth in underserved areas.",
    presentationUrl: "https://www.canva.com/design/DAHLRcL0UBM/KdmD6N1dqDVdTK9WCxn_lQ/view#1",
  },
  {
    slug: "eve",
    title: "Eve",
    category: "AI UX",
    year: "2026",
    client: "Eve",
    industry: "Skincare",
    services: ["AI UX Presentation"],
    overview: "Eve is a skincare app designed to support long-term routine consistency by helping users make confident, informed, and low-stress skincare decisions over time. Its core audience spans individuals ages 18 to 55 across all genders who want to build and maintain a comprehensive skincare routine tailored to their unique needs.",
    challenge: "Users need a simple way to track and evaluate their routines so they can understand which products and practices are actually improving their skin versus which aren't delivering results. Because skincare is closely tied to confidence and self-image, routines that become overwhelming or fail to show progress can leave users feeling frustrated, discouraged, and unsure of what to do next.",
    solution: "Eve addresses this by making skincare management structured, personalized, and easy to maintain through intuitive tools for tracking products, skin concerns, and routine frequency. By simplifying how users track, evaluate, and adapt their routines, Eve helps them feel more confident, informed, and in control of their long-term skincare journey.",
    presentationUrl: "https://www.figma.com/deck/yg3Uxg6IyKZvkRleM3wrKs/EVE---Presentation?node-id=10-19&t=zx8y2O25ZjshdZEi-1",
    award: "UW Screen Summit 2026",
  },
  {
    slug: "panera-bread",
    title: "Panera Bread",
    category: "Multicultural Marketing",
    year: "2026",
    client: "Panera Bread",
    industry: "Restaurant and Food Service",
    services: ["Multicultural Marketing Presentation"],
    overview: "This project developed a final pitch for Panera on marketing to Latino Americans, grounded in research into this audience's consumer behavior, cultural values, and purchasing patterns within the U.S. market. The work aimed to show Panera not just entering the Latino American market, but genuinely welcoming it through cultural relevance, shared values, and everyday rituals.",
    challenge: "The project required balancing rigorous, culturally accurate research with a creative, compelling pitch, pushing beyond data into a story that felt authentic and empathetic rather than transactional. The core challenge was identifying a product that could serve as a meaningful, trust-building entry point into Latino American households.",
    solution: "The pitch positioned Panera's CPG coffee as that entry point, framing coffee as a symbol of connection, routine, and community central to many Latino American households. By centering the strategy on a product already woven into everyday ritual, the pitch offered Panera an authentic, accessible path to building loyalty and a more inclusive marketing approach.",
    presentationUrl: "https://www.canva.com/design/DAG2HSStgBs/-__yVa0HwuOVcW-MgsX3SA/view#1",
  },
  {
    slug: "meta",
    title: "Meta",
    category: "Inclusion and Equity Marketing",
    year: "2026",
    client: "Meta",
    industry: "Tech",
    services: ["Inclusion and Equity Marketing Presentation"],
    overview: "As part of a graduate course in Inclusive Design and Product Equity, this project involved collaborating directly with Meta on a product equity review of an in-development AI feature. Serving as Visual Lead, the work centered on evaluating the feature through an inclusive design and accessibility lens while shaping how the team's findings were presented.",
    challenge: "The team needed to translate a comprehensive equity and accessibility analysis into a presentation that was both visually polished and tightly aligned with Meta's brand guidelines, ensuring every slide reinforced the spoken narrative rather than distracting from it. As Visual Lead, this meant building a consistent design system, from style and font to color scheme and supporting visuals like graphs and images, that could hold up in front of Meta's own engineers, designers, and product managers.",
    solution: "The project culminated in an actionable proposal for a data personalization toggle, giving users greater control and transparency over their personal data within Meta's AI features. The team presented these findings directly to Meta stakeholders, successfully translating research and design work into a practical, equity-focused product recommendation.",
    presentationUrl: "https://www.canva.com/design/DAGvWtHQwCs/pUyYv6ifTTxY5aOHHVBmNA/view#25",
  },
  {
    slug: "soundcloud",
    title: "Soundcloud",
    category: "Audio Storytelling",
    year: "2025",
    client: "Soundcloud",
    industry: "Digital Audio",
    services: ["Audio Storytelling Episode"],
    overview: "\"The Thabbs\" is a narrative-driven podcast episode that blends structured storytelling with the raw, electric energy of an unforgettable interview. Intentional narration guides listeners through the story while actualities from the interview capture the subject's eccentric personality, humor, and unstoppable energy in their own words.",
    challenge: "The production needed to balance journalistic integrity with expressive storytelling, grounding the narrative in careful research and fact-checking while still leaving room for spontaneity and personality. It also required layering environmental sound, music, and subtle effects to enhance emotion and pacing without overpowering the interviewee's voice or making the piece feel overproduced.",
    solution: "By weaving ambi throughout the episode and using sound design selectively, the piece brings scenes to life while letting the interview feel alive rather than scripted. The result is a dynamic, credible, and entertaining podcast that celebrates creativity, energy, and character in equal measure.",
  },
  {
    slug: "baby-this-is-keke-palmer",
    title: "Baby, This is Keke Palmer",
    category: "Influencer Marketing",
    year: "2025",
    client: "Baby, This is Keke Palmer",
    industry: "Podcast",
    services: ["Influencer Marketing"],
    overview: "This project matched three multicultural creators, Kapiel Raaj of KRS Channel, Lada Duncheva of AstroLada, and Jimmy M of The Tarot Ship, with the podcast Baby, This Is Keke Palmer, developing a distinct campaign concept for each. All three have built established communities around astrology, spirituality, and personal development, while bringing distinct cultural perspectives, from Kapiel's roots in Vedic Astrology to Lada's Bulgarian background and Jimmy's blend of tarot and ancient wisdom.",
    challenge: "The core challenge was designing a partnership that showcased each creator's individual expertise authentically, rather than flattening three distinct voices into one generic collaboration. Success also depended on avoiding stereotypes, generic messaging, and unrealistic claims about astrology, all while choosing a format that could hold three separate narratives together as one cohesive campaign.",
    solution: "Each creator was paired with a dedicated podcast episode built around their specific expertise, Kapiel's \"Astrology, Karma & Real-Life Glow-Ups,\" Lada's \"Healing Through Astrology,\" and Jimmy's \"Astrology, Tarot & Ancient Wisdom,\" extendable through short-form video, social content, and behind-the-scenes material. A magazine-style format ties the three episodes together while still presenting each creator as a distinct expert, reflecting the broader principle that successful multicultural influencer marketing depends on authentic alignment between brand, creator, audience, and objectives.",
    presentationUrl: "https://www.canva.com/design/DAG4jrT0hEk/BdvmekOLbxVRzIb9OVpNGA/view",
  },
  {
    slug: "panera-bread-coffee",
    title: "Panera Bread Coffee",
    category: "Coffee Digital Marketing",
    year: "2025 - 2026",
    client: "Panera Bread Coffee",
    industry: "Food",
    services: ["Coffee Digital Marketing"],
    overview: "In this role, I led D2C e-commerce, CRM, and digital marketing for Panera Coffee, driving audience growth, engagement, acquisition, and brand awareness through data-informed campaigns. As creative director, I also shaped the brand's tone, voice, and visual identity across photoshoots and email campaigns, while managing execution across Shopify, Omnisend, Google Ads, Microsoft Ads, Walmart Connect, and Amazon Seller Central.",
    challenge: "The role required balancing creative brand-building with performance marketing across a wide range of platforms, all while managing a yearly budget to optimize acquisition and minimize costs. It also meant keeping the brand's visual and tonal identity consistent everywhere it showed up, from photoshoot concept and styling to email storytelling, customer segmentation, and the Panera Bread Coffee website, including original content like the latte recipes blog, without losing sight of measurable growth targets.",
    solution: "By building and maintaining a cross-functional campaign calendar, directing creative execution, updating the website with fresh photoshoot imagery, banners, and product content, owning the latte recipes blog, and developing tailored segmentation strategies for email and text, I drove strong FY2025-2026 results: $42K in email revenue growth with 58% audience growth, $30K in Walmart e-commerce growth, $66K in Shopify growth, and a 25% lift in Google Ads conversions. I also managed SEO, landing page optimization, and the broader blog content calendar, presenting high-level performance reporting to General Management throughout.",
    presentationUrl: "https://panera-coffee.com/",
    presentationLabel: "PANERA BREAD COFFEE",
  },
];
