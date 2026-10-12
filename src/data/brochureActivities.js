/**
 * brochureActivities.js
 * Comprehensive structured catalog of all 12 activity categories from
 * KaSaa's official Activity Brochure (Siliguri).
 * 
 * STRICT RULES APPLIED:
 * - NO PRICING OR NUMBERS DISPLAYED ANYWHERE.
 * - NO INVENTED BUSINESS DETAILS OR ACTIVITIES.
 * - NO KARAOKE DETAILS INVENTED (as not provided in brochure).
 * - Full WhatsApp enquiry support with configurable phone numbers.
 */

import { siteConfig } from './siteConfig';

export const BROCHURE_CATEGORIES = [
  {
    id: 'classic-canvas',
    slug: 'classic-canvas',
    name: 'Classic Canvas',
    brochurePage: 2,
    heroImage: '/images/brochure/classic-canvas-real.webp',
    tagline: 'Classic guided canvas painting session where your personal creativity takes center stage.',
    description:
      'Take your seat at a tabletop easel with high-quality canvas, vibrant paints, and artist tools. Whether an individual creative pause or a shared afternoon, enjoy a dedicated studio environment designed for painting.',
    inclusions: [
      'Stretched canvas',
      'Tabletop easel stand',
      'Fine paint brushes and brush sets',
      'Acrylic paints and palette',
      'Protective artist apron',
    ],
    specialNotes: [
      '*Pre-order basis only',
      'All painting materials provided for the session',
      'Take your completed canvas masterpiece home',
    ],
    enquiryType: 'classic-canvas',
    items: [
      {
        id: 'canvas-mini',
        name: 'Mini Canvas',
        description: 'Compact canvas board perfect for quick creative studies, detailed miniature compositions, or gentle first-time exploration.',
        image: '/images/brochure/classic-canvas.webp',
        badge: 'Canvas Variant',
        note: 'Pre-order basis only',
      },
      {
        id: 'canvas-small',
        name: 'Small Canvas',
        description: 'Handy and versatile canvas size suited for beginner landscapes, botanical illustrations, and expressive color palettes.',
        image: '/images/brochure/classic-canvas.webp',
        badge: 'Canvas Variant',
        note: 'Pre-order basis only',
      },
      {
        id: 'canvas-medium',
        name: 'Medium Canvas',
        description: 'Spacious canvas format providing ample room for textured layers, bold strokes, and statement wall decor paintings.',
        image: '/images/brochure/classic-canvas.webp',
        badge: 'Canvas Variant',
        note: 'Pre-order basis only',
      },
      {
        id: 'canvas-large',
        name: 'Large Canvas',
        description: 'Generous full-size canvas designed for immersive art sessions, detailed portraits, or ambitious multi-layered artwork.',
        image: '/images/brochure/classic-canvas.webp',
        badge: 'Canvas Variant',
        note: 'Pre-order basis only',
      },
    ],
  },
  {
    id: 'fluid-expressions',
    slug: 'fluid-expressions',
    name: 'Fluid Expressions',
    brochurePage: 2,
    heroImage: '/images/brochure/fluid-bear.webp',
    tagline: 'Mesmerizing acrylic pouring and marbling art experiences with organic swirls and vivid color cells.',
    description:
      'Experience the magic of fluid art — mixing custom color recipes and pouring them over curated bases to create completely one-of-a-kind marbling patterns with zero paintbrushes required.',
    inclusions: [
      'Specialized pouring acrylics & color pigments',
      'Cell-forming mediums and mixing cups',
      'Chosen craft bases (bookmarks, coasters, cutouts, canvas, bear figures, trays)',
      'Protective drip trays, gloves, and aprons',
    ],
    specialNotes: [
      '*Select cutout shapes available on pre-order basis',
      'Pieces are carefully cured and dried in our studio',
    ],
    enquiryType: 'fluid-expressions',
    items: [
      {
        id: 'fluid-bookmark',
        name: 'Fluid Bookmark',
        description: 'Hand-poured fluid art bookmark with vibrant swirling colors, sealed and finished with ribbon or tassel.',
        image: '/images/brochure/fluid-bookmark.webp',
        badge: 'Keepsake',
      },
      {
        id: 'fluid-on-coasters',
        name: 'Fluid on Coasters',
        description: 'Set of custom circular coasters layered in high-gloss fluid pigments and organic cellular marbling.',
        image: '/images/brochure/fluid-coasters.webp',
        badge: 'Functional Art',
      },
      {
        id: 'fluid-cutouts',
        name: 'Fluid Cutouts*',
        description: 'Bespoke custom-shaped wooden letter or silhouette cutouts poured with stunning fluid gradients.',
        image: '/images/brochure/fluid-cutouts.webp',
        badge: 'Custom Silhouette',
        note: '*Pre-order basis only',
      },
      {
        id: 'fluid-on-canvas',
        name: 'Fluid on Canvas',
        description: 'Traditional stretched square canvas transformed into an abstract modern fluid artwork through dirty pour and Dutch techniques.',
        image: '/images/brochure/fluid-canvas.webp',
        badge: 'Wall Art',
      },
      {
        id: 'fluid-bear',
        name: 'Fluid Bear',
        description: 'Iconic designer bear figurine dipped and poured with marbling fluid art to create an eye-catching sculptural piece.',
        image: '/images/brochure/fluid-bear.webp',
        badge: 'Sculptural Art',
      },
      {
        id: 'fluid-tray',
        name: 'Fluid Tray',
        description: 'Elegant wooden serving tray with a poured fluid art base, delivering a captivating statement piece for your home.',
        image: '/images/brochure/fluid-tray.webp',
        badge: 'Home Decor',
      },
    ],
  },
  {
    id: 'the-artisan-edit',
    slug: 'the-artisan-edit',
    name: 'The Artisan Edit',
    brochurePage: 3,
    heroImage: '/images/brochure/artisan-craft-real.webp',
    tagline: 'Heritage crafts, mirror mosaics, and intricate artistic traditions curated for mindful hands-on creation.',
    description:
      'Explore timeless artisan traditions that blend sacred geometry, clay relief sculpture, and shimmering crystal embellishment into mindful meditative sessions.',
    inclusions: [
      'Wooden art boards & design stencils',
      'Clay, sculpting tools, and traditional mirrors (aabhla)',
      'Dotting mandalas styluses and high-density acrylic paints',
      'Shimmering rhinestone crystals, gems, and precision applicator pens',
    ],
    specialNotes: [
      'Beginner-friendly with step-by-step guidance',
      'All completed heritage artworks are yours to keep and display',
    ],
    enquiryType: 'the-artisan-edit',
    items: [
      {
        id: 'rhinestone-canvas',
        name: 'Rhinestone Canvas',
        description: 'Sparkling diamond-style crystal art where colorful faceted rhinestones are placed individually onto canvas to create gleaming motifs.',
        image: '/images/brochure/rhinestone-canvas.webp',
        badge: 'Crystal Art',
      },
      {
        id: 'dot-mandala',
        name: 'Dot Mandala',
        description: 'Meditative dot painting on wooden art discs, building concentric patterns of vibrant colors and sacred geometric harmony.',
        image: '/images/brochure/dot-mandala.webp',
        badge: 'Mindful Art',
      },
      {
        id: 'lippan-art',
        name: 'Lippan Art',
        description: 'Traditional Gujarati mud and mirror relief art, combining rolled clay borders, geometric formations, and embedded sparkling mirrors.',
        image: '/images/brochure/lippan-art.webp',
        badge: 'Heritage Craft',
      },
    ],
  },
  {
    id: 'mini-memoirs',
    slug: 'mini-memoirs',
    name: 'Mini Memoirs',
    brochurePage: 3,
    heroImage: '/images/brochure/pebble-painting.webp',
    tagline: 'Charming mini keepsakes, hand-painted wooden treasures, and personalized mementos to make and cherish.',
    description:
      'Delightful, approachable creative crafts designed for personal souvenirs, sweet gifts, and tactile fun for both children and adults looking for an expressive craft.',
    inclusions: [
      'Handcrafted natural bases (raw wood slices, river stones, frames, acrylic magnets)',
      'Paint pens, acrylic paints, and fine detail brushes',
      'Decorative cords, ribbon tassels, and protective clear varnish',
    ],
    specialNotes: [
      'Perfect companion craft for quick sessions and gifts',
      'Suitable for all age groups and family gatherings',
    ],
    enquiryType: 'mini-memoirs',
    items: [
      {
        id: 'diy-frames',
        name: 'DIY Frames',
        description: 'Wooden photo frames adorned with hand-painted botanicals, customized lettering, and personalized decorative borders.',
        image: '/images/brochure/diy-frames.webp',
        badge: 'Photo Keepsake',
      },
      {
        id: 'diy-bookmarks',
        name: 'DIY Bookmarks',
        description: 'Pastel craft card bookmarks customized with delicate hand-drawn patterns, calligraphy, and silk ribbon cords.',
        image: '/images/brochure/diy-bookmarks.webp',
        badge: 'Paper Craft',
      },
      {
        id: 'diy-cutouts',
        name: 'DIY Cutouts',
        description: 'Whimsical animal, tree, vehicle, and botanical wooden silhouette cutouts painted and styled to your imagination.',
        image: '/images/brochure/diy-cutouts.webp',
        badge: 'Wood Silhouette',
      },
      {
        id: 'wooden-coasters',
        name: 'Wooden Coasters',
        description: 'Natural rustic tree-slice coasters painted with detailed florals, botanicals, or whimsical art, finished with waterproof sealant.',
        image: '/images/brochure/wooden-coasters.webp',
        badge: 'Rustic Decor',
      },
      {
        id: 'pebble-painting',
        name: 'Pebble Painting',
        description: 'Smooth river stones transformed with intricate mandala dotting, cheerful animals, or inspiring quotes.',
        image: '/images/brochure/pebble-painting.webp',
        badge: 'Stone Art',
      },
      {
        id: 'photo-magnets',
        name: 'Photo Magnets',
        description: 'Personalized mini fridge magnets featuring framed personal photos or custom miniature painted artwork.',
        image: '/images/brochure/photo-magnets.webp',
        badge: 'Magnetic Keepsake',
      },
    ],
  },
  {
    id: 'the-textured-tales',
    slug: 'the-textured-tales',
    name: 'The Textured Tales',
    brochurePage: 4,
    heroImage: '/images/brochure/textured-art-real.webp',
    tagline: 'Tactile dimension and sculptural palette knife artistry that leaps off the canvas surface.',
    description:
      'Immerse yourself in heavy texture art — sculpting rich acrylic pastes, beach wave froth, and illuminated lunar craters using artist palette knives and dimensional mediums.',
    inclusions: [
      'Sculptural modeling pastes & texture gel mediums',
      'Canvas boards, circular moon discs, and wooden beach trays',
      'Palette knives, texture combs, and acrylic shading pigments',
      'Protective sealant coats',
    ],
    specialNotes: [
      'Step-by-step guidance on knife pressure, layering, and relief sculpting',
      'Dries into durable, touchable three-dimensional art',
    ],
    enquiryType: 'the-textured-tales',
    items: [
      {
        id: 'textured-canvas',
        name: 'Textured Canvas (Small)',
        description: 'Small canvas board sculpted with swirling palette knife impasto waves, abstract ridges, and contemporary monochrome tones.',
        image: '/images/brochure/textured-canvas.webp',
        badge: 'Palette Knife Art',
      },
      {
        id: 'textured-3d-moon',
        name: 'Textured 3D Moon',
        description: 'Circular wall disc capturing lunar craters and glowing celestial topography with rich dimensional modeling paste and shimmering pigment.',
        image: '/images/brochure/textured-3d-moon.webp',
        badge: '3D Relief Disc',
      },
      {
        id: 'textured-beach-tray',
        name: 'Textured Beach Tray',
        description: 'Wooden serving tray handcrafted with sandy shorelines, lacing sea foam, and ocean wave depth using textured paste and resin.',
        image: '/images/brochure/textured-beach-tray.webp',
        badge: 'Coastal Decor',
      },
    ],
  },
  {
    id: 'cloth-and-colour',
    slug: 'cloth-and-colour',
    name: 'Cloth & Colour',
    brochurePage: 4,
    heroImage: '/images/brochure/diy-potli.webp',
    tagline: 'Wearable textile artistry, hand-painted fabric accessories, and bespoke handcrafted wardrobe staples.',
    description:
      'Turn cotton, canvas, silk, and heritage fabrics into wearable artistic expressions using professional fabric pigments, stencils, and personalized illustrations.',
    inclusions: [
      'High-quality textile blanks (baseball caps, silk scarves, canvas pouches, tote bags, potlis, folding fans)',
      'Permanent fabric paints, textile mediums, and fine detailing brushes',
      'Heat-setting and finishing guidance for lasting durability',
    ],
    specialNotes: [
      'Colorfast and washable once heat-set following studio guidelines',
      'Wear or carry your customized handcrafted accessories anywhere',
    ],
    enquiryType: 'cloth-and-colour',
    items: [
      {
        id: 'diy-caps',
        name: 'DIY Caps',
        description: 'Classic cotton baseball caps customized with hand-painted monograms, bold lettering, or artistic logos.',
        image: '/images/brochure/diy-caps.webp',
        badge: 'Wearable Art',
      },
      {
        id: 'diy-potli-making',
        name: 'DIY Potli Making',
        description: 'Traditional drawstring potli pouches adorned with embellishments, hand-painted festive motifs, and tassels.',
        image: '/images/brochure/diy-potli.webp',
        badge: 'Festive Craft',
      },
      {
        id: 'scarf-painting',
        name: 'Scarf Painting',
        description: 'Soft silk or modal scarves painted with fluid botanicals, marbled watercolor washes, and modern abstract strokes.',
        image: '/images/brochure/scarf-painting.webp',
        badge: 'Fashion Accessory',
      },
      {
        id: 'diy-pouches',
        name: 'DIY Pouches',
        description: 'Zippered cotton canvas utility pouches painted with bespoke calligraphy, inspiring phrases, and whimsical illustrations.',
        image: '/images/brochure/diy-pouches.webp',
        badge: 'Canvas Accessory',
      },
      {
        id: 'vintage-fans',
        name: 'Vintage Fans',
        description: 'Foldable paper and bamboo hand fans painted with delicate cherry blossoms, vintage florals, or serene landscapes.',
        image: '/images/brochure/vintage-fans.webp',
        badge: 'Vintage Keepsake',
      },
      {
        id: 'tote-bag-painting',
        name: 'Tote Bag Painting',
        description: 'Eco-friendly natural canvas tote bags hand-painted with bold artistic graphics, typography, or custom nature scenes.',
        image: '/images/brochure/tote-bag-painting.webp',
        badge: 'Eco Fashion',
      },
    ],
  },
  {
    id: 'out-of-the-ordinary',
    slug: 'out-of-the-ordinary',
    name: 'Out of the Ordinary',
    brochurePage: 5,
    heroImage: '/images/brochure/wine-glass-painting.webp',
    tagline: 'Playful, unexpected creative experiences that step joyfully outside ordinary canvas bounds.',
    description:
      'From painting terracotta planters to stuffing cuddly teddy bears and decorating funky sunglasses, these offbeat crafts bring pure joy and quirky creativity to every participant.',
    inclusions: [
      'Terracotta planters, plush bear shells with cloud stuffing, sunglasses frames',
      'Waterproof terracotta paints, embellishments, and craft accessories',
      'Heart-warming adoption certificate / packaging for plushies',
    ],
    specialNotes: [
      'A huge hit for date afternoons, friend circles, and creative kids',
      'Take home functional and heartwarming handmade items',
    ],
    enquiryType: 'out-of-the-ordinary',
    items: [
      {
        id: 'pot-painting',
        name: 'Pot Painting',
        description: 'Terracotta and ceramic plant pots hand-painted with cheerful geometric bands, botanical leaf motifs, or whimsical characters.',
        image: '/images/brochure/pot-painting.webp',
        badge: 'Home & Garden',
      },
      {
        id: 'plushie-stuffing',
        name: 'Plushie Stuffing',
        description: 'Hand-stuff your own soft teddy bear, fluff it to perfection, place a wish inside, and dress it with sweet ribbon bowties.',
        image: '/images/brochure/plushie-stuffing.webp',
        badge: 'Cuddly Companion',
      },
      {
        id: 'diy-sunglasses',
        name: 'DIY Sunglasses',
        description: 'Trendy sunglasses frames customized with colorful pearls, daisy embellishments, funky patterns, and hand-painted rims.',
        image: '/images/brochure/diy-sunglasses.webp',
        badge: 'Funky Accessory',
      },
    ],
  },
  {
    id: 'personalised-memoirs',
    slug: 'personalised-memoirs',
    name: 'Personalised Memoirs',
    brochurePage: 5,
    heroImage: '/images/diy_2.webp',
    tagline: 'Custom handcrafted keepsakes infused with intimacy, sentiment, and cherished moments.',
    description:
      'Create heirloom-quality keepsakes — stringing charm bracelets, painting wine glasses for a toast, sculpting clay memories, or curating sentimental scrapbook pages with your favorite photos.',
    inclusions: [
      'Jewelry wire, clasps, enamel charms, and glass beads',
      'Natural terracotta clay, modeling tools, and smooth sponge blocks',
      'Taper candles, glassware, brass floating frames, and scrapbook albums',
      'Stickers, washi tapes, metallic gel pens, and archival glues',
    ],
    specialNotes: [
      'Ideal for celebrating anniversaries, friendships, and memorable life milestones',
      'Bring your own printed photos to create unforgettable scrapbook pages and frames',
    ],
    enquiryType: 'personalised-memoirs',
    items: [
      {
        id: 'charm-bracelet',
        name: 'Charm Bracelet',
        description: 'Beaded charm bracelet custom-strung with colorful enameled beads, gold spacers, and symbolic charms reflecting your personality.',
        image: '/images/brochure/charm-bracelet.webp',
        badge: 'Jewelry Making',
      },
      {
        id: 'clay-art',
        name: 'Clay Art',
        description: 'Tactile terracotta hand-building sculpting expressive little characters, beloved pets, miniature figurines, or decorative pots.',
        image: '/images/brochure/clay-art.webp',
        badge: 'Clay Sculpture',
      },
      {
        id: 'candle-painting',
        name: 'Candle Painting',
        description: 'Elegant dinner taper candles delicately hand-painted with pastel daisies, cherries, vines, or delicate patterns using melted wax paints.',
        image: '/images/brochure/candle-painting.webp',
        badge: 'Cozy Decor',
      },
      {
        id: 'metallic-frame',
        name: 'Metallic Frame',
        description: 'Vintage brass floating glass frame curated with pressed dried botanicals, florals, and personal photo arrangements.',
        image: '/images/brochure/metallic-frame.webp',
        badge: 'Botanical Display',
      },
      {
        id: 'wine-glass-painting',
        name: 'Wine Glass Painting',
        description: 'Stemmed glassware hand-painted with swirling marble patterns, botanical leaves, or celebratory monograms using glass-safe paints.',
        image: '/images/brochure/wine-glass-painting.webp',
        badge: 'Celebration Glassware',
      },
      {
        id: 'scrapbook-making',
        name: 'Scrapbook Making',
        description: 'Artistic memory album album crafted with polaroid snapshots, washi tape borders, journal prompts, and sentimental stickers.',
        image: '/images/brochure/scrapbook-making.webp',
        badge: 'Memory Book',
      },
    ],
  },
  {
    id: 'resin-reflections',
    slug: 'resin-reflections',
    name: 'Resin Reflections',
    brochurePage: 6,
    heroImage: '/images/diy.webp',
    tagline: 'High-gloss epoxy crystal creations, geode wall clocks, and shimmering wearable resin art.',
    description:
      'Master the mesmerizing art of resin — mixing liquid epoxies with rich mica pigments, gold leafing, and botanical inclusions to craft glass-smooth functional art pieces.',
    inclusions: [
      'Two-part clear art epoxy resin and hardener',
      'Mica powders, liquid color drops, and metallic leaf flakes',
      'Silicone coaster/tray molds, clock mechanism, keyrings, and jewelry hardware',
      'Safety gloves, respirators/masks, and precision heat tools',
    ],
    specialNotes: [
      'Guided step-by-step with all protective gear provided',
      'Resin requires 24-hour curing time before collection or pickup',
    ],
    enquiryType: 'resin-reflections',
    items: [
      {
        id: 'resin-jewellery',
        name: 'Resin Jewellery',
        description: 'Delicate pendant necklaces preserving pressed botanicals, gold foil, and translucent tints in clear glass-like resin cabochons.',
        image: '/images/brochure/resin-jewellery.webp',
        badge: 'Wearable Resin',
      },
      {
        id: 'resin-earrings',
        name: 'Resin Earrings',
        description: 'Ornate handcrafted statement jhumka and drop earrings embellished with shimmering resin stones and pearl accents.',
        image: '/images/brochure/resin-earrings.webp',
        badge: 'Statement Jewelry',
      },
      {
        id: 'alphabet-keyrings',
        name: 'Alphabet Keyrings',
        description: 'Custom initial alphabet keyrings cast in crystal resin with glitters, pressed flowers, and metallic foils.',
        image: '/images/brochure/alphabet-keyrings.webp',
        badge: 'Personalized Keyring',
      },
      {
        id: 'resin-clock',
        name: 'Resin Clock',
        description: 'Luxurious geode-style wall clock crafted with crushed quartz crystals, metallic veins, deep emerald pigments, and silent gold hands.',
        image: '/images/brochure/resin-clock.webp',
        badge: 'Geode Wall Clock',
      },
      {
        id: 'resin-coasters-tray-set',
        name: 'Resin Coaster / Tray / Set',
        description: 'Serving trays and coaster sets capturing fluid malachite marbling, sea foam lacing, or metallic geode borders.',
        image: '/images/brochure/resin-coasters-tray-set.webp',
        badge: 'Luxury Serveware',
      },
    ],
  },
  {
    id: 'decoupage-stories',
    slug: 'decoupage-stories',
    name: 'Decoupage Stories',
    brochurePage: 6,
    heroImage: '/images/brochure/deco-coasters-trays-set.webp',
    tagline: 'Vintage paper collage, botanical prints, and lacquer craftsmanship transformed onto functional decor.',
    description:
      'Discover decoupage — the classic art of decorating objects with intricate paper cutouts, specialized adhesives, crackle effects, and multi-layered protective varnish coats.',
    inclusions: [
      'Glass bottles, wooden serving trays, and wooden coaster bases',
      'Designer botanical napkins, rice papers, and vintage motifs',
      'Decoupage adhesives (mod-podge), sponge brushes, and satin clear varnishes',
    ],
    specialNotes: [
      'A deeply relaxing craft with timeless vintage elegance',
      'Finished pieces are sealed with water-resistant protective finishes',
    ],
    enquiryType: 'decoupage-stories',
    items: [
      {
        id: 'deco-bottles',
        name: 'Deco Bottles',
        description: 'Upcycled decorative glass bottles adorned with botanical florals, vintage typography, and textured rustic varnishes.',
        image: '/images/brochure/deco-bottles.webp',
        badge: 'Upcycled Decor',
      },
      {
        id: 'deco-coasters-trays-set',
        name: 'Deco Coasters / Trays / Set',
        description: 'Wooden serving trays and matching monstera leaf coasters decoupaged with lush green foliage and clear lacquer coats.',
        image: '/images/brochure/deco-coasters-trays-set.webp',
        badge: 'Botanical Set',
      },
    ],
  },
  {
    id: 'soft-play',
    slug: 'soft-play',
    name: 'Soft Play',
    brochurePage: 7,
    heroImage: '/images/brochure/soft-play-real.webp',
    tagline: 'Safe, joyful play arenas and curated birthday celebrations for children and families.',
    description:
      'Step into KaSaa’s dedicated Soft Play zone at Vega Circle Mall — offering safe cushioned fun for children, unlimited play time, and complete birthday package coordination.',
    inclusions: [
      'Unlimited soft play access with safe cushioned obstacles',
      'Access to interactive Magnetic Board, Pause Area, and Photo Booth',
      'Dedicated studio coordination and kid-friendly atmosphere',
    ],
    specialNotes: [
      'Entry is unlimited for Kids and Adults',
      'Entry fee is applicable for food-only guests; NO entry fee for activity participants',
      'Birthday packages customizable according to activity & food with no time boundations',
    ],
    enquiryType: 'soft-play',
    items: [
      {
        id: 'studio-entry',
        name: 'Studio Entry & Lounge Access',
        description: 'Unlimited access to KaSaa’s lounge, Magnetic Board, Pause Area, and Photo Booth. Applicable for food-only guests (no entry fee for activity participants).',
        image: '/images/brochure/soft-play-entry.webp',
        badge: 'Unlimited Access',
        note: 'No entry fee for workshop participants',
      },
      {
        id: 'soft-play-zone',
        name: 'Soft Play Arena',
        description: 'Unlimited, safe, cushioned play area for toddlers and young children to crawl, climb, slide, and explore joyfully.',
        image: '/images/brochure/soft-play-kids.webp',
        badge: 'Unlimited Play',
      },
      {
        id: 'birthday-package-1',
        name: 'Birthday Package (Kids): Play + Food + Games',
        description: 'Comprehensive kids birthday package including unlimited Soft Play access, delicious party food, and curated party games with no time boundations.',
        image: '/images/brochure/soft-play-birthday.webp',
        badge: 'Birthday Package',
        note: 'Customisable with no time boundations',
      },
      {
        id: 'birthday-package-2',
        name: 'Birthday Package (Kids): Play + Activity + Food + Games',
        description: 'All-inclusive celebration featuring Soft Play access, a hands-on creative craft activity for each child, party food, and hosted games.',
        image: '/images/brochure/soft-play-birthday.webp',
        badge: 'All-Inclusive Package',
        note: 'Customisable according to activity & food',
      },
    ],
  },
  {
    id: 'bespoke-celebrations',
    slug: 'bespoke-celebrations',
    name: 'Bespoke Celebrations',
    brochurePage: 8,
    heroImage: '/images/painting_3.webp',
    tagline: 'Private setups, cooking dates, proposal milestones, and fully planned signature experiences.',
    description:
      'From custom decor and tailored art activities to intimate cooking dates and unforgettable proposals — KaSaa plans and hosts your occasions from start to finish.',
    inclusions: [
      'Custom thematic decor and ambient studio styling',
      'Curated hands-on creative activities for all guests',
      'Dedicated host coordination and private area reservation',
      'Complimentary assistance for cakes, photography, and music',
    ],
    specialNotes: [
      'Planning a Birthday, Kitty Party, Date Night, or Anniversary? Leave it on us!',
      'Additional services will be provided to a group of 10+ people',
      'From décor and activities to moments and memories — your occasions, fully planned by us',
    ],
    enquiryType: 'bespoke-celebrations',
    items: [
      {
        id: 'private-setups',
        name: 'Private Setups',
        description: 'Exclusive studio area styled with romantic ambient decor, private art stations, and dedicated host support for intimate celebrations.',
        image: '/images/brochure/bespoke-gathering.webp',
        badge: 'Private Ambience',
      },
      {
        id: 'cooking-dates',
        name: 'Cooking Dates',
        description: 'Interactive culinary bonding session where couples prepare delicious food together in a fun, relaxed, and guided setting.',
        image: '/images/brochure/bespoke-gathering.webp',
        badge: 'Couples Experience',
      },
      {
        id: 'proposal-setups',
        name: 'Proposal Setups',
        description: 'Romantic, picture-perfect proposal styling with candlelight, fairy lights, florals, and personalized keepsake activities.',
        image: '/images/brochure/bespoke-hands.webp',
        badge: 'Romantic Milestone',
      },
      {
        id: 'group-gatherings',
        name: 'Group Gatherings (4–10 People)',
        description: 'Curated creative gathering for friend groups, kitty parties, or birthdays with shared art workshops, games, and cozy seating.',
        image: '/images/brochure/signature-celebration.webp',
        badge: 'Group Outing',
        note: 'Additional services provided for groups of 10+',
      },
      {
        id: 'signature-experiences',
        name: 'Signature Experiences',
        description: 'Complete end-to-end occasion management. From theme conception and decor styling to activities and memory keeping — we handle every detail.',
        image: '/images/brochure/signature-cake.webp',
        badge: 'Full Planning',
        note: 'Theme, decor & activities fully planned',
      },
    ],
  },
];

/**
 * Builds prefilled WhatsApp message for an activity category or specific item
 */
export function buildBrochureWhatsAppMessage({ categoryName, itemName = '' }) {
  if (itemName) {
    return `Hi KaSaa! I'm interested in the "${itemName}" experience under "${categoryName}" from your Activity Brochure. Could you please share slot availability and session details at your Vega Circle Mall studio in Siliguri?`;
  }
  return `Hi KaSaa! I'd like to enquire about "${categoryName}" experiences from your Activity Brochure at your Vega Circle Mall studio in Siliguri. Could you please share slot availability and booking details?`;
}

/**
 * Generates WhatsApp URL using configurable number
 */
export function getBrochureWhatsAppUrl(messageText, customNumber = '') {
  const number = (
    customNumber ||
    import.meta.env.VITE_WHATSAPP_NUMBER ||
    siteConfig?.contact?.whatsappNumber ||
    '919239607100'
  ).replace(/[^\d]/g, '');

  if (!number) return null;
  const params = new URLSearchParams();
  params.set('text', messageText);
  return `https://wa.me/${number}?${params.toString()}`;
}

/**
 * Lookup helper by slug or ID
 */
export function getBrochureCategory(slug) {
  return BROCHURE_CATEGORIES.find(
    (cat) => cat.slug === slug || cat.id === slug
  );
}

export default BROCHURE_CATEGORIES;
