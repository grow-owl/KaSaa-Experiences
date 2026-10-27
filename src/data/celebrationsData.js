/**
 * celebrationsData.js
 * Dedicated data module for KaSaa Celebrations & Group Gatherings.
 * Derived from Page 8 of the official Brochure and the Group Experience Builder.
 */

export const BESPOKE_CELEBRATIONS = [
  {
    id: 'private-setups',
    title: 'Private Setups',
    tagline: 'Exclusive, intimate studio space reserved for your milestone moment.',
    priceDisplay: '₹5,000',
    image: '/images/brochure/bespoke-gathering.webp',
    badge: 'Exclusive Venue',
    idealFor: 'Intimate anniversaries, closed-door gatherings & VIP family evenings',
    features: [
      'Dedicated private studio corner or lounge reservation',
      'Curated ambient lighting and personalized table styling',
      'Welcome drinks and priority kitchen service',
      'Dedicated KaSaa studio host for your group',
    ],
  },
  {
    id: 'cooking-dates',
    title: 'Cooking Dates',
    tagline: 'Get your hands in the kitchen and whip up something delicious together.',
    priceDisplay: '₹7,000',
    image: '/images/brochure/bespoke-hands.webp',
    badge: 'Unique Experience',
    idealFor: 'Couples, best friends, and food lovers seeking interactive dates',
    features: [
      'Hands-on interactive guided culinary session',
      'All fresh ingredients, chef aprons, and cookware provided',
      'Prepare signature gourmet pasta, pizza, or desserts together',
      'Dine on your fresh creations with refreshing mocktails',
    ],
  },
  {
    id: 'proposal-setups',
    title: 'Proposal Setups',
    tagline: 'A dream backdrop designed for the most unforgettable "Yes".',
    priceDisplay: '₹10,000',
    image: '/images/brochure/signature-celebration.webp',
    badge: 'Romantic Milestone',
    idealFor: 'Marriage proposals, vow renewals, and dream surprise dates',
    features: [
      'Fairytale romantic decor: fairy lights, candle paths & florals',
      'Customized photo memory wall or framed milestones',
      'Complimentary celebration cake or dessert treat',
      'Discreet coordination with your personal photographer or music playlist',
    ],
  },
  {
    id: 'group-gatherings',
    title: 'Group of 4–10 Gatherings',
    tagline: 'Creative group hangouts that bring everyone together with ease.',
    priceDisplay: '₹800 onwards / person',
    image: '/images/brochure/artisan-craft-real.webp',
    badge: 'Best for Friends & Family',
    idealFor: 'Kitty parties, friends reunions, family creative days & small teams',
    features: [
      'Choice of creative workshops (pottery, painting, resin, fluid art)',
      'Shared food platters (momos, pizzas, sliders & refreshing drinks)',
      'Dedicated seating with zero rush or time constraints',
      'Additional custom services available for groups of 10+ guests',
    ],
  },
];

export const SIGNATURE_EXPERIENCES = [
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    subtitle: 'Kids & Adult Birthdays',
    description: 'From joyful soft play games for kids to aesthetic pottery & wine-glass painting parties for adults.',
    icon: 'PartyPopper',
  },
  {
    id: 'date-nights',
    title: 'Date Nights & Anniversaries',
    subtitle: 'Romantic & Creative',
    description: 'Share a potter\'s wheel, paint together on double canvases, and enjoy artisan bites under warm ambient lighting.',
    icon: 'Heart',
  },
  {
    id: 'kitty-parties',
    title: 'Kitty Parties & Socials',
    subtitle: 'Chit-Chat & Creative Fun',
    description: 'Gossip, laughter, fluid art crafts, and hot steaming momos with delicious thick shakes at Vega Circle Mall.',
    icon: 'Users',
  },
  {
    id: 'corporate-outings',
    title: 'Team Bonding & Corporate',
    subtitle: 'Mindful Off-Sites',
    description: 'Step away from screens. Bond over tactile clay sculpting, group canvas murals, and tailored catering buffets.',
    icon: 'Sparkles',
  },
];
