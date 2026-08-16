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
    slug: "ember-and-co",
    title: "PCC COMMUNITY MARKETS",
    category: "Brand Refresh",
    year: "2023",
    client: "Ember & Co",
    industry: "Beauty & Wellness",
    services: ["Brand Strategy", "Packaging Design", "Art Direction"],
    overview: "A refined brand refresh for a luxury skincare line focused on natural, science-backed formulations. The new identity elevates the brand while honoring its commitment to simplicity and efficacy.",
    challenge: "Ember had outgrown their original identity but needed to maintain recognition among their loyal customer base. The refresh needed to feel evolutionary rather than revolutionary.",
    solution: "We refined and elevated every touchpoint, introducing warmer tones and premium materials while maintaining the brand's essential character. The result is sophisticated yet approachable.",
  },
  {
    slug: "stillwater-journal",
    title: "PCC COMMUNITY MARKETS",
    category: "Editorial Design",
    year: "2023",
    client: "Stillwater Publishing",
    industry: "Publishing",
    services: ["Editorial Design", "Typography", "Art Direction"],
    overview: "A biannual literary journal celebrating slow journalism and long-form storytelling. The design creates space for contemplation and deep reading in an age of constant distraction.",
    challenge: "The journal needed to stand apart from the noise of contemporary publishing while remaining accessible to readers. Every design decision needed to support the reading experience.",
    solution: "We developed a typographic system that prioritizes readability and rhythm, with generous margins and carefully considered spacing. The design disappears in service of the content.",
  },
  {
    slug: "aura-wellness",
    title: "BORN X RAISED",
    category: "Brand Identity",
    year: "2024",
    client: "Aura Wellness",
    industry: "Health & Wellness",
    services: ["Brand Strategy", "Visual Identity", "Packaging Design"],
    overview: "A holistic brand identity for a premium wellness brand offering meditation and mindfulness products. The design embodies tranquility and intentional living.",
    challenge: "The wellness space is crowded with similar aesthetics. Aura needed to stand out while authentically representing their philosophy of mindful, sustainable wellness.",
    solution: "We created a calming visual language rooted in natural forms and soft gradients, paired with tactile packaging that invites touch and interaction. Every element reinforces the sense of presence.",
  },
  {
    slug: "forge-collective",
    title: "BORN X RAISED",
    category: "Visual System",
    year: "2024",
    client: "Forge Collective",
    industry: "Industrial Design",
    services: ["Visual Identity", "Brand Guidelines", "Digital Design"],
    overview: "A bold visual system for a collaborative of industrial designers and makers. The identity celebrates craft, precision, and the beauty of functional objects.",
    challenge: "Forge needed an identity that honored traditional craftsmanship while positioning them as forward-thinking innovators in industrial design.",
    solution: "We developed a mark inspired by metalworking and forging processes, supported by a system of geometric patterns and an industrial-inspired color palette that feels both timeless and modern.",
  },
  {
    slug: "halcyon-press",
    title: "PCC COMMUNITY MARKETS",
    category: "Editorial Design",
    year: "2023",
    client: "Halcyon Press",
    industry: "Publishing",
    services: ["Book Design", "Typography", "Art Direction"],
    overview: "A complete editorial identity for an independent publisher specializing in art books and cultural essays. The design system honors the printed word while embracing contemporary aesthetics.",
    challenge: "Halcyon wanted their books to feel collectible and precious without being pretentious. The design needed to serve diverse content while maintaining cohesive identity.",
    solution: "We created a flexible typographic system with signature elements—custom margins, distinctive running heads, and a restrained palette—that make every Halcyon book instantly recognizable.",
  },
  {
    slug: "drift-studio",
    title: "BORN X RAISED",
    category: "Brand Identity",
    year: "2024",
    client: "Drift Studio",
    industry: "Photography",
    services: ["Brand Strategy", "Visual Identity", "Web Design"],
    overview: "A refined brand identity for a fine art photography studio specializing in minimalist landscape and architectural work. The identity is as considered as the work it represents.",
    challenge: "The studio needed an identity that would complement rather than compete with their photography. It needed to be almost invisible yet distinctly memorable.",
    solution: "We designed a typographic identity with delicate, considered details that reveal themselves slowly—much like the subtle beauty in their photographs. Less became infinitely more.",
  },
];
