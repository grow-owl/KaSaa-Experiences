/**
 * Central Single Source of Truth for KaSaa Experiences
 * All business details, contact information, hours, verification statuses,
 * and canonical links are managed here.
 */

export const siteConfig = {
  businessName: "KaSaa Experiences",
  tagline: "Make Something. Make Memories.",
  subheading:
    "Discover pottery, painting, and creative experiences that bring people together. Step away from the usual routine, get your hands creative, and enjoy meaningful moments with the people who matter.",
  shortDescription:
    "Creative recreation and hands-on experiences venue at Vega Circle Mall, Siliguri — specializing in pottery workshops, canvas painting, date experiences, and celebrations.",
  
  // Production Canonical Domain
  siteUrl: import.meta.env.VITE_SITE_URL || "https://kasaa-experiences.vercel.app",

  // Location & Address (From public business listings & verified floor details)
  location: {
    floor: "5th Floor, INOX",
    building: "Vega Circle Mall",
    street: "Sevoke Road",
    city: "Siliguri",
    state: "West Bengal",
    country: "India",
    fullAddress: "5th Floor, INOX, Vega Circle Mall, Sevoke Road, Siliguri, West Bengal, India",
    landmark: "Near Sevoke Road junction, inside Vega Circle Mall (5th Floor by INOX)",
    // Direct directions link using verified query
    directionsUrl:
      import.meta.env.VITE_MAP_URL ||
      "https://www.google.com/maps/search/?api=1&query=KaSaa+Experiences+Vega+Circle+Mall+Sevoke+Road+Siliguri",
  },

  // Operating Hours — Provisional based on public Justdial listing; marked for owner confirmation
  hours: {
    display: "11:00 AM – 8:00 PM",
    days: "Daily (Monday – Sunday)",
    isProvisional: true,
    source: "Public Justdial Business Directory (needs official owner confirmation prior to final launch)",
    sourceUrl: "https://www.justdial.com/Siliguri/Kasaa-Experiences-One-Stop-For-Art-Events-Experiences-Sevoke-Road/9999PX353-X353-260409224411-G8C3_BZDET",
    verificationStatus: "Pending Owner Confirmation (documented in LAUNCH_CHECKLIST.md)",
  },

  // Direct Contact & Messaging (Loaded dynamically from .env)
  contact: {
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "",
    isWhatsAppConfigured: Boolean(import.meta.env.VITE_WHATSAPP_NUMBER),
    phone: import.meta.env.VITE_PHONE_NUMBER || "",
    isPhoneConfigured: Boolean(import.meta.env.VITE_PHONE_NUMBER),
    email: "", // Empty until verified
  },

  // Verified & Configured Social Channels
  social: {
    instagram: "https://www.instagram.com/kasaa.experiences/", // Editable/configurable
    instagramHandle: "@kasaa_experiences",
    googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=KaSaa+Experiences+Vega+Circle+Mall+Sevoke+Road+Siliguri",
  },

  // Trust / Rating Details
  reviewsSummary: {
    rating: "4.9",
    ratingOutOf: "5.0",
    ratingNote: "Based on verified visitor feedback at Vega Circle Mall",
  },

  // Agreed Activities & Current Public Availability Status
  activitiesStatus: {
    pottery: {
      name: "Pottery & Wheel Throwing",
      available: true,
      category: "primary",
    },
    painting: {
      name: "Canvas & Guided Painting",
      available: true,
      category: "primary",
    },
    karaoke: {
      name: "Karaoke & Recreation Lounge",
      available: true,
      category: "supporting",
    },
    resinArt: {
      name: "Resin Art & DIY Crafts",
      available: false, // Omitted from bookable cards until verified
      category: "optional",
      note: "Unconfirmed availability. Marked in LAUNCH_CHECKLIST.md.",
    },
  },
};

export default siteConfig;
