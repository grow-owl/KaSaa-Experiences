import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Palette,
  MapPin,
  ArrowRight,
  MessageCircle,
  Coffee,
  CheckCircle2,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export default function OurStoryPage({ onOpenEnquiry }) {
  const handleGeneralEnquiry = () => {
    if (typeof onOpenEnquiry === 'function') {
      onOpenEnquiry('general', 'Our Story / Studio Visit');
      return;
    }
    window.open(siteConfig.location.directionsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
      <SEOHead
        title="Our Story & Philosophy | KaSaa Experiences Siliguri"
        description="Learn about the journey behind KaSaa Experiences — a creative sanctuary at Vega Circle Mall in Siliguri for pottery, painting, celebrations, and meaningful screen-free moments."
        canonicalPath="/our-story"
      />

      {/* -------------------------------------------------------------
          1. HERO STORY HEADER
          ------------------------------------------------------------- */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-[#242824] tracking-tight leading-[1.15]">
          Less Scrolling. <br />
          <span className="text-[#963E23] italic font-normal">More Living.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#535953] leading-relaxed max-w-2xl mx-auto">
          In a world that rarely looks up from screens, KaSaa was created as a creative sanctuary in Siliguri — a place where you slow down, get your hands messy, and make memories that last.
        </p>
      </div>

      {/* -------------------------------------------------------------
          2. FEATURE EDITORIAL STORY GRID
          ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Visual Collage */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-[#EAE5D9]">
            <img
              src="/images/gallery-studio-interior.webp"
              alt="KaSaa Experiences studio interior at Vega Circle Mall"
              className="w-full h-80 sm:h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E9BF69]" />
                5th Floor, Vega Circle Mall · Siliguri
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E2DDD0] bg-white p-3 space-y-1">
              <img
                src="/images/wheel-pottery-real.jpg"
                alt="Hands shaping clay on pottery wheel"
                className="w-full h-32 object-cover rounded-xl"
                loading="lazy"
              />
              <p className="text-[11px] font-semibold text-[#242824] text-center pt-1">
                Pottery Wheel Throwing
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E2DDD0] bg-white p-3 space-y-1">
              <img
                src="/images/painting.webp"
                alt="Guided canvas painting workshop"
                className="w-full h-32 object-cover rounded-xl"
                loading="lazy"
              />
              <p className="text-[11px] font-semibold text-[#242824] text-center pt-1">
                Guided Canvas Painting
              </p>
            </div>
          </div>
        </div>

        {/* Right Story Copy */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#963E23]">
              Why We Started
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#242824] leading-snug">
              A Pause from the Routine, Built for Everyone.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            Most of our weekends look the same: another dinner, another cinema ticket, another afternoon spent looking at phones. We wanted something different — an experience where friends, couples, and families could genuinely connect.
          </p>

          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            Whether it is feeling the cool clay center between your palms on the pottery wheel, watching acrylic colors swirl into marbled patterns, or stringing nostalgic keepsakes together — KaSaa was designed so you don't need any prior art experience to feel the joy of creating.
          </p>

          {/* Key Differentiators */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#245449] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#242824]">Zero Experience Needed</h4>
                <p className="text-xs text-[#535953]">All sessions are beginner-friendly with patient, step-by-step guidance from studio hosts.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#245449] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#242824]">All Materials Included</h4>
                <p className="text-xs text-[#535953]">Aprons, easels, canvases, clay, pigments, and tools — we take care of everything so you just show up.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#245449] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-[#242824]">Take Home Your Creation</h4>
                <p className="text-xs text-[#535953]">Every piece you craft is yours to keep — a tangible souvenir of time well spent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          3. OUR THREE PILLARS
          ------------------------------------------------------------- */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#245449]">
            The Experience
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
            What Makes KaSaa Special
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 rounded-3xl bg-white border border-[#E2DDD0] shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#245449]">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#242824]">12 Hands-on Categories</h3>
            <p className="text-xs sm:text-sm text-[#535953] leading-relaxed">
              From classic canvas painting and fluid bear marbling to Lippan mirror art, textured 3D moons, resin clocks, and fabric art — an entire universe of mindful crafts.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E2DDD0] shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#963E23]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#242824]">Meaningful Togetherness</h3>
            <p className="text-xs sm:text-sm text-[#535953] leading-relaxed">
              Private date corners, anniversary setups, family weekends, and kids party arenas. We plan and host occasions so you can celebrate without stress.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E2DDD0] shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#7D5B18]">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#242824]">Studio Cafe & Comfort</h3>
            <p className="text-xs sm:text-sm text-[#535953] leading-relaxed">
              Creativity meets comfort. Enjoy freshly made momos, pizzas, sandwiches, ramen bowls, and cooling drinks while your artwork dries.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          4. INVITATION & CTA SECTION
          ------------------------------------------------------------- */}
      <div className="rounded-3xl bg-[#FAF7F0] border border-[#E2DDD0] p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto shadow-xs">
        <div className="space-y-3">
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#242824]">
            Come Visit Us on the 5th Floor
          </h2>
          <p className="text-sm sm:text-base text-[#535953] leading-relaxed max-w-xl mx-auto">
            We are open daily at Vega Circle Mall in Siliguri. Walk in to explore or book your creative slot on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/activities"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#245449] hover:bg-[#193B33] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore All Activities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={handleGeneralEnquiry}
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
