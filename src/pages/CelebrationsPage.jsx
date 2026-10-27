import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  Heart,
  PartyPopper,
  Users,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2,
  Download,
  ChevronRight,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BESPOKE_CELEBRATIONS, SIGNATURE_EXPERIENCES } from '../data/celebrationsData';
import { siteConfig } from '../data/siteConfig';

const DATE_EXPERIENCES = [
  {
    id: 'table-setup-date',
    title: 'Table Setup Date',
    price: '5,000',
    description: 'A beautifully styled table with warm ambient candles, floral styling & priority studio service for your romantic dinner date.',
    image: '/images/brochure/bespoke-gathering.webp',
  },
  {
    id: 'pottery-date',
    title: 'Pottery Date for Two',
    price: '5,500',
    description: 'Get your hands messy and shape clay together on electric potter wheels with hands-on guidance and keepsake ceramic creations.',
    image: '/images/wheel-pottery-real.jpg',
  },
  {
    id: 'cooking-date',
    title: 'Interactive Cooking Date',
    price: '7,000',
    description: 'Chef aprons on! Prepare handmade gourmet pasta or pizza together, toss fresh ingredients, and enjoy your delicious creations.',
    image: '/images/brochure/bespoke-hands.webp',
  },
  {
    id: 'canopy-proposal',
    title: 'Dream Canopy & Proposal Setup',
    price: '10,000',
    description: 'Fairytale proposal with romantic canopy drapes, fairy lights, custom florals, celebration cake, and discrete music coordination.',
    image: '/images/brochure/signature-celebration.webp',
  },
];

const GROUP_CATEGORIES = [
  {
    id: 'birthdays',
    title: 'Birthdays & Milestones',
    description: 'Celebrate special birthdays with hands-on craft workshops, soft play, festive décor, and customized food menus.',
    badge: 'Most Popular',
  },
  {
    id: 'date-anniversary',
    title: 'Anniversaries & Dates',
    description: 'Intimate candlelit dinners, pottery wheel throwing for couples, and bespoke private table setups.',
    badge: 'Romantic Hit',
  },
  {
    id: 'kitty-parties',
    title: 'Kitty Parties & Friends Reunions',
    description: 'Laughter, fluid art crafts, hot momos, thin-crust pizzas, and thick shakes with zero time rush.',
    badge: 'Social Gathering',
  },
  {
    id: 'baby-bridal-showers',
    title: 'Baby & Bridal Showers',
    description: 'Thoughtful themed decorations, group canvas memory boards, custom mocktails, and personalized keepsake gifts.',
    badge: 'Milestone Shower',
  },
  {
    id: 'team-corporate',
    title: 'Team Bonding & Corporate Off-Sites',
    description: 'Step away from screens. Bond over tactile pottery, group canvas murals, and curated high-tea buffets.',
    badge: 'Team Outing',
  },
  {
    id: 'custom-celebration',
    title: 'Custom Curated Themes',
    description: 'Need to decide a theme? Need to plan everything from scratch? Tell us your vision and leave the rest to us!',
    badge: 'Fully Planned',
  },
];

export default function CelebrationsPage({ onOpenEnquiry }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleEnquiry = (title, price = '') => {
    if (typeof onOpenEnquiry === 'function') {
      onOpenEnquiry('celebration', `${title} ${price ? `(${price})` : ''}`);
      return;
    }
    const phone = siteConfig?.contact?.whatsappNumber || '919800000000';
    const text = encodeURIComponent(
      `Hi KaSaa! I would like to plan a celebration at your Vega Circle Mall studio: ${title} ${price ? `(${price})` : ''}. Could you share package availability?`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SEOHead
        title="Celebrations, Dates & Group Events | KaSaa Experiences Siliguri"
        description="Celebrate birthdays, romantic couple dates, cooking dates, and bespoke gatherings at KaSaa Experiences, Vega Circle Mall Siliguri. Full decor & event planning."
        canonicalPath="/celebrations"
      />

      {/* -------------------------------------------------------------
          1. HEADER (BREADCRUMB + TITLE + ACTION BUTTONS)
          ------------------------------------------------------------- */}
      <div className="space-y-4 pb-8 border-b border-[#E2DDD0] text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-semibold">Celebrations & Dates</span>
        </div>



        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
          Celebrate Moments That Matter
        </h1>

        <p className="text-sm sm:text-base text-[#535953] leading-relaxed max-w-2xl mx-auto">
          From private candlelit setups and couple cooking dates to birthday milestones and creative team outings — your occasions, fully planned by us.
        </p>

        {/* Quick Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handleEnquiry('Bespoke Celebration')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#245449] hover:bg-[#1A3D35] text-[#F8F4EB] text-xs sm:text-sm font-semibold shadow-xs transition-all active:scale-98 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
            <span>Enquire Custom Celebration</span>
          </button>

        </div>
      </div>

      {/* -------------------------------------------------------------
          2. BESPOKE CELEBRATIONS PACKAGES (PAGE 8 OF BROCHURE)
          ------------------------------------------------------------- */}
      <section id="celebrations" className="space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B37B15]">
            Brochure Featured Packages
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#242824] tracking-tight">
            Bespoke Celebrations
          </h2>
          <p className="text-xs sm:text-sm text-[#535953]">
            Curated private setups for intimate memories, romantic milestones, and exclusive friend groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BESPOKE_CELEBRATIONS.map((pkg) => (
            <article
              key={pkg.id}
              className="rounded-3xl bg-white border border-[#E2DDD0] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 group"
            >
              {/* Photo */}
              <div className="relative aspect-4/3 bg-[#EAE5D9] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-[#245449]/90 backdrop-blur-sm text-[#F8F4EB] text-[11px] font-bold tracking-tight shadow-xs">
                  {pkg.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-bold text-lg text-[#242824] group-hover:text-[#245449] transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#535953] leading-relaxed line-clamp-2">
                    {pkg.tagline}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-[#8C938C] uppercase tracking-wider block">
                      Package Price
                    </span>
                    <span className="font-serif font-bold text-xl text-[#245449]">
                      {pkg.priceDisplay}
                    </span>
                    <span className="text-[10px] text-[#7A827A] block">*exclusive of GST</span>
                  </div>

                  {/* Feature Highlights */}
                  <ul className="pt-2 space-y-1.5 border-t border-[#F1ECE1]">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#4A504A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#245449] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleEnquiry(pkg.title, pkg.priceDisplay)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8F4EB] hover:bg-[#245449] text-[#242824] hover:text-white border border-[#D5CEBF] hover:border-[#245449] text-xs font-semibold transition-all group-hover:border-[#245449]/40 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#B37B15] group-hover:text-white" />
                  <span>Reserve Package</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. DATE PLANS & ROMANTIC EXPERIENCES
          ------------------------------------------------------------- */}
      <section id="dates" className="space-y-8 bg-[#F5EFE4]/60 p-6 sm:p-10 rounded-3xl border border-[#E2DDD0] scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#963E23] text-xs font-bold border border-[#E2DDD0]">
            <Heart className="w-3.5 h-3.5 text-[#C86F50]" />
            <span>DATE PLANS, SORTED!</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824] tracking-tight">
            Curated Couple & Date Experiences
          </h2>
          <p className="text-xs sm:text-sm text-[#535953]">
            Skip ordinary restaurant routines. Create something meaningful together with art, food, and private ambiance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DATE_EXPERIENCES.map((dateExp) => (
            <div
              key={dateExp.id}
              className="bg-white rounded-2xl border border-[#E2DDD0] p-5 space-y-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="w-full h-36 rounded-xl overflow-hidden bg-[#EAE5D9]">
                  <img
                    src={dateExp.image}
                    alt={dateExp.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif font-bold text-base text-[#242824] pt-1">
                  {dateExp.title}
                </h3>
                <p className="text-xs text-[#535953] leading-relaxed line-clamp-3">
                  {dateExp.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F1ECE1] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#7A827A] block uppercase">Starts at</span>
                  <span className="font-bold text-base text-[#245449]">₹{dateExp.price}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleEnquiry(dateExp.title, `₹${dateExp.price}`)}
                  className="px-3 py-1.5 rounded-lg bg-[#245449] hover:bg-[#1A3D35] text-white text-xs font-semibold transition-colors"
                >
                  Book Date
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. PLANNING A GROUP EXPERIENCE? (10+ GUESTS)
          ------------------------------------------------------------- */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#245449]">
            Full Event Planning
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#242824] tracking-tight">
            Planning a Group Experience?
          </h2>
          <p className="text-xs sm:text-sm text-[#535953] leading-relaxed">
            From birthday parties and baby showers to team outings & reunions, we'll help you bring everyone together for an unforgettable time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-[#E2DDD0] p-6 space-y-3 hover:border-[#245449] transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md bg-[#FAF7F0] text-[#7D5B18] border border-[#E9BF69]/40">
                  {item.badge}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#242824]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#535953] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleEnquiry(item.title)}
                className="w-full pt-2 flex items-center justify-between text-xs font-semibold text-[#245449] hover:text-[#1A3D35] border-t border-[#F1ECE1]"
              >
                <span>Enquire Group Package</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. SIGNATURE EXPERIENCES BANNER (PAGE 8 THEME)
          ------------------------------------------------------------- */}
      <section className="rounded-3xl bg-[#193B33] text-[#F8F4EB] p-8 sm:p-12 border border-[#2F6D5F]/50 shadow-md">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#E9BF69] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE EXPERIENCES</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#F8F4EB] leading-tight">
            Planning a Birthday, Kitty Party, Date Night, or Anniversary?
          </h2>

          <p className="text-sm sm:text-base text-[#DCE6D9] leading-relaxed">
            Need to decide a theme? Need to plan everything? ... <strong>Leave it on us!</strong> From custom décor and interactive workshops to gourmet food menus and memories, we take care of it all.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleEnquiry('Signature Experience Planning')}
              className="px-8 py-3.5 rounded-2xl bg-[#E9BF69] hover:bg-[#D4A950] text-[#193B33] font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#193B33]" />
              <span>Connect on WhatsApp for Full Planning</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
