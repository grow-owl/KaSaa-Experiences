/**
 * Curated Activities Data for KaSaa Experiences
 * Strict hierarchy: Pottery and Painting are primary; DIY Crafts and Karaoke are supporting.
 * Powered by real owner-supplied photography.
 * NOTE: Absolutely no pricing, discounts, or budget numbers are displayed.
 */

export const activities = [
  {
    id: "pottery",
    title: "Pottery & Wheel Throwing",
    tagline: "Feel the clay, center your focus, and shape your own ceramic piece.",
    category: "primary",
    badge: "Most Popular Hands-On Experience",
    shortDescription:
      "Sit down at the electric potter's wheel, feel the cool wet clay in your hands, and learn the grounding craft of shaping vessels, cups, or bowls with hands-on guidance.",
    fullDescription:
      "Whether you have never touched clay before or are returning to the craft, our studio pottery session guides you through the meditative fundamentals — wedging, centering, pulling walls, and shaping your personal ceramic creation. Perfect for unwinding, tactile therapy, and sharing a genuine creative milestone together.",
    highlights: [
      "Dedicated electric potter's wheel station",
      "Hands-on instructor guidance step-by-step",
      "Natural clay, sculpting tools, and aprons provided",
      "Take your wet creation home or arrange studio firing (subject to studio schedule)",
      "Beginner-friendly with zero prior experience needed",
    ],
    idealFor: "Individuals, couples on dates, friends, and anyone needing a screen-free mindful break",
    enquiryType: "pottery",
    ctaLabel: "Enquire About Pottery",
    imageSlot: "pottery.webp",
    aspectRatio: "4/3",
    objectPosition: "center bottom",
  },
  {
    id: "painting",
    title: "Canvas & Guided Painting",
    tagline: "Unleash bold colors and brushstrokes on fresh canvas.",
    category: "primary",
    badge: "Creative Free-Flow & Expression",
    shortDescription:
      "Take your seat at a tabletop easel with high-quality stretched canvas, acrylic paints, and brushes. Paint at your own rhythm or follow guided artistic inspiration.",
    fullDescription:
      "No exams, no rules, and no pressure. Our painting corner provides a relaxing, welcoming space where beginners and art lovers alike can pick up a palette knife or brush, explore rich color combinations, and paint something truly personal to keep and hang on your wall.",
    highlights: [
      "Stretched canvas, acrylic paints, and full brush sets included",
      "Tabletop easels and protective artist aprons provided",
      "Gentle creative prompts and guidance available on request",
      "Keep and take your completed canvas painting home with you",
      "Suitable for all ages and skill levels",
    ],
    idealFor: "Creative catch-ups, soulful date afternoons, friends groups, and mindful solo sessions",
    enquiryType: "painting",
    ctaLabel: "Explore Painting Sessions",
    imageSlot: "painting.webp",
    aspectRatio: "4/3",
    objectPosition: "center",
  },
  {
    id: "diy",
    title: "DIY Crafts & Tactile Making",
    tagline: "Custom craft projects, personalized gifts, and hands-on making.",
    category: "supporting",
    badge: "Creative Hands-On Crafts",
    shortDescription:
      "Explore personalized craft making, textured decor, and creative keepsake projects with full studio materials provided.",
    fullDescription:
      "Our DIY craft corner invites you to unwind with tactile materials, guided prompts, and creative craft projects suitable for individuals, friends, and family groups seeking a unique take-home creation.",
    highlights: [
      "All craft materials, bases, and decorative elements included",
      "Hands-on studio guidance and creative inspiration",
      "Take home your completed personalized creation",
      "Great companion session with pottery and painting",
    ],
    idealFor: "Creative catch-ups, friend outings, and personalized keepsakes",
    enquiryType: "general",
    ctaLabel: "Enquire About DIY Crafts",
    imageSlot: "diy.webp",
    aspectRatio: "16/10",
  },
  {
    id: "karaoke",
    title: "Karaoke & Recreation Lounge",
    tagline: "Sing your favorite tunes, laugh out loud, and unwind in good company.",
    category: "supporting",
    badge: "Supporting Recreation",
    shortDescription:
      "Round off your creative workshop with favorite songs, cozy seating, and lighthearted fun with friends or family.",
    fullDescription:
      "Designed as a playful complement to our tactile craft workshops, the karaoke and recreation corner lets you sing along to classics, share laughs, and bond freely without the noise and rush of typical mall spots.",
    highlights: [
      "Comfortable lounge seating and sound setup",
      "Diverse library of regional and popular songs",
      "Ideal companion activity after pottery or painting",
      "Casual, intimate setting for friends and families",
    ],
    idealFor: "Groups of friends, double dates, and celebration after-sessions",
    enquiryType: "karaoke",
    ctaLabel: "Ask About Karaoke",
    imageSlot: "family_time.webp",
    aspectRatio: "16/10",
  },
];

/**
 * Verified note regarding specialized craft workshops
 */
export const unconfirmedActivitiesNote = {
  title: "Resin Art Workshops",
  status: "Available via Special Booking",
  description:
    "Specialized resin art workshops are coordinated directly based on studio instructor schedule and curing requirements. Please enquire with our team via WhatsApp for upcoming resin session dates.",
};
