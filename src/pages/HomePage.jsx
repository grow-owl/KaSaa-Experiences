import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Star,
  ArrowRight,
  Heart,
  Users,
  PartyPopper,
  Calendar,
  MessageCircle,
  Clock,
  Compass,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Music,
  Phone,
  Utensils,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ActivityCard from '../components/ActivityCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Accordion from '../components/Accordion';
import { siteConfig } from '../data/siteConfig';
import { activities } from '../data/activities';
import { celebrationOfferings } from '../data/celebrations';
import { reviews, bookingSteps } from '../data/reviews';
import { faqs } from '../data/faqs';
import { galleryItems, galleryCategories } from '../data/gallery';
import { landingMenuFeatured, allDishes } from '../data/menuData';

export default function HomePage({ onOpenEnquiry }) {
  // Gallery filtering state
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('all');

  const primaryActivities = activities.filter((a) => a.category === 'primary');
  const supportingActivity = activities.find((a) => a.id === 'karaoke');

  const filteredGallery =
    selectedGalleryCategory === 'all'
      ? galleryItems.slice(0, 6)
      : galleryItems.filter((item) => item.category === selectedGalleryCategory).slice(0, 6);

  const dateOffering = celebrationOfferings.find((c) => c.id === 'dates');
  const friendsOffering = celebrationOfferings.find((c) => c.id === 'friends');
  const familyOffering = celebrationOfferings.find((c) => c.id === 'family');
  const birthdayOffering = celebrationOfferings.find((c) => c.id === 'birthdays');

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Pottery, Painting & Creative Moments in Siliguri"
        description="Discover hands-on pottery workshops, canvas painting, and memorable creative time together for couples, friends, and celebrations at Vega Circle Mall, Siliguri."
        canonicalPath="/"
      />

      {/* -------------------------------------------------------------
          1. HERO SECTION (Editorial Desktop / Compact Mobile)
          ------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 xl:py-32 min-h-[75vh] lg:min-h-[82vh] flex items-center border-b border-[#E8E0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions (Desktop ~48%, 6 cols in 12-col grid) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Main Heading */}
              <h1 className="font-serif font-bold text-3.5xl sm:text-5xl lg:text-6xl text-[#242824] tracking-tight leading-[1.12]">
                Make Something. <br />
                <span className="text-[#963E23] italic font-normal">Make Memories.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-[#4D534D] leading-relaxed max-w-xl">
                Discover pottery, painting, and creative experiences that bring people together. Step away from the usual routine, get your hands creative, and enjoy meaningful moments with the people who matter.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href="#experiences"
                  aria-label="Explore hands-on pottery and painting experiences"
                  className="px-6 py-3.5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group hover:shadow-md active:scale-98"
                >
                  <span>Explore Pottery & Painting</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#together"
                  aria-label="View creative date and celebration options"
                  className="px-6 py-3.5 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
                >
                  <Heart className="w-4 h-4 text-[#963E23]" />
                  <span>Dates & Celebrations</span>
                </a>
              </div>

              {/* Verified Rating */}
              <div className="pt-4 border-t border-[#E8E0D0] flex items-center gap-2.5 text-xs text-[#4D534D]">
                <div className="flex items-center text-[#E9BF69]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E9BF69]" />
                  ))}
                </div>
                <span className="font-bold text-[#242824] text-sm">4.9 / 5.0</span>
                <span className="text-[#6D756D]">· Verified Customer Rating</span>
              </div>
            </div>

            {/* Right Column: Editorial Photo Collage (Desktop ~52%, 6 cols in 12-col grid) */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
                {/* Large Main Feature Card (Pottery focus) */}
                <div className="col-span-8 sm:col-span-8 space-y-2.5">
                  <ImagePlaceholder
                    src="/images/hero-pottery-hands.webp"
                    alt="Hands shaping wet clay on an electric pottery wheel at KaSaa Experiences"
                    title="Pottery Wheel Sessions"
                    type="pottery"
                    aspectRatio="4/3"
                    objectPosition="center bottom"
                    priority={true}
                    className="shadow-md border-2 border-white rounded-2xl"
                  />
                </div>

                {/* Supporting Compact Cards - made smaller */}
                <div className="col-span-4 sm:col-span-4 space-y-2.5">
                  <div className="space-y-1">
                    <ImagePlaceholder
                      src="/images/painting.webp"
                      alt="Guided canvas painting workshop at KaSaa Experiences"
                      title="Canvas Painting"
                      type="painting"
                      aspectRatio="4/3"
                      className="shadow-xs border-2 border-white rounded-xl"
                    />
                    <div className="text-[10px] sm:text-[11px] font-medium text-[#6D756D] text-center truncate">
                      Canvas Painting
                    </div>
                  </div>

                  <div className="space-y-1">
                    <ImagePlaceholder
                      src="/images/collection_of_work.webp"
                      alt="Finished handcrafted ceramic pottery and artwork on display"
                      title="Handcrafted Art"
                      type="general"
                      aspectRatio="4/3"
                      className="shadow-xs border-2 border-white rounded-xl"
                    />
                    <div className="text-[10px] sm:text-[11px] font-medium text-[#6D756D] text-center truncate">
                      Finished Art
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Tag */}
              <div className="absolute -bottom-3 right-1 bg-[#F8F4EB] border border-[#E2DDD0] px-3 py-1 rounded-xl shadow-md text-xs font-semibold text-[#193B33] hidden sm:flex items-center gap-1.5">
                <span className="text-sm">✨</span>
                <span>Less scrolling. More living.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. EXPLORE EXPERIENCES — PRIMARY CONTENT SECTION
          ------------------------------------------------------------- */}
      <section id="experiences" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#963E23]">
            Creative Hands-On Workshops
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
            Discover Your Creative Side
          </h2>
          <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
            Our primary focus is hands-on pottery and painting. Try something tactile, center your mind, and create a piece you will cherish.
          </p>
        </div>

        {/* Priority 1 & 2: Primary Large Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {primaryActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onEnquire={(type) => onOpenEnquiry(type)}
            />
          ))}
        </div>

        {/* Priority 3: Supporting Activity — Karaoke & Recreation Lounge (No image, matching white card styling) */}
        {supportingActivity && (
          <div
            id="karaoke"
            className="rounded-3xl bg-white border border-[#E2DDD0] shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 lg:p-10 space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#DCE6D9] text-[#193B33] border border-[#BFD0BC]">
                  <Music className="w-3.5 h-3.5 text-[#245449]" />
                  <span>Supporting Activity</span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824]">
                  {supportingActivity.title}
                </h3>
                <p className="font-serif italic text-sm text-[#963E23]">
                  {supportingActivity.tagline}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('karaoke')}
                  aria-label="Ask about karaoke and recreation lounge availability"
                  className="py-3 px-5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 shadow-xs active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
                  <span>{supportingActivity.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed max-w-3xl">
              {supportingActivity.fullDescription}
            </p>
          </div>
        )}

      </section>

      {/* -------------------------------------------------------------
          3. TOGETHERNESS / DATES & CELEBRATIONS SECTION
          ------------------------------------------------------------- */}
      <section id="together" className="py-16 lg:py-24 bg-[#EBF1E9] border-y border-[#DCE6D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#245449]">
              Meaningful Moments Together
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              Time Well Spent, Together
            </h2>
            <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
              Step away from the usual dinner-and-movie routine. Experience side-by-side creativity for romantic dates, friend reunions, and memorable group milestones.
            </p>
          </div>

          {/* 1. FEATURED: DATES & ANNIVERSARIES SPOTLIGHT (Full-width horizontal card, perfectly balanced) */}
          {dateOffering && (
            <div className="bg-white rounded-3xl border border-[#D5CEBF] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              {/* Image Column */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <ImagePlaceholder
                  src="/images/daiting_1.webp"
                  alt="Couple enjoying pottery and painting together on a date"
                  title="Creative Date Outing"
                  type="together"
                  aspectRatio="4/3"
                  objectPosition="center 25%"
                  className="shadow-md rounded-2xl w-full"
                />
              </div>

              {/* Text & Action Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C86F50]/15 text-[#963E23]">
                  <Heart className="w-3.5 h-3.5 fill-[#C86F50]" />
                  <span>Couples & Special Occasions</span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#242824]">
                    {dateOffering.title}
                  </h3>
                  <p className="font-serif italic text-sm sm:text-base text-[#963E23] mt-1">
                    {dateOffering.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
                  {dateOffering.description}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('date', 'Date or Anniversary Experience')}
                    aria-label="Plan a Date or Anniversary experience enquiry via WhatsApp"
                    className="py-3.5 px-6 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-98"
                  >
                    <Heart className="w-4 h-4 text-[#E9BF69]" />
                    <span>Plan a Date or Anniversary</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. GROUP EXPERIENCES (Friends, Family & Milestones in a balanced 3-column row) */}
          <div className="space-y-6 pt-4">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h3 className="font-serif font-bold text-2xl text-[#242824]">
                Friends & Group Celebrations
              </h3>
              <p className="text-xs sm:text-sm text-[#4D534D]">
                Shared tables, guided creative workshops, and screen-free bonding for every gathering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Friends Card */}
              {friendsOffering && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5CEBF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#DCE6D9] text-[#193B33] border border-[#BFD0BC]">
                        Friends & Groups
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#963E23]">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#242824]">
                        {friendsOffering.title}
                      </h4>
                      <p className="font-serif italic text-xs text-[#963E23] mt-1">
                        {friendsOffering.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {friendsOffering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1ECE1] mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('celebration', 'Friends Group Outing')}
                      aria-label="Plan a Friends Outing enquiry via WhatsApp"
                      className="w-full py-3 px-4 bg-[#DCE6D9] hover:bg-[#C2D2BD] text-[#193B33] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-[#245449]" />
                      <span>Plan a Friends Outing</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Family Card */}
              {familyOffering && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5CEBF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EBF0E7] text-[#245449] border border-[#BFD0BC]">
                        Family & All Ages
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#E9BF69]">
                        <Sparkles className="w-4 h-4 text-[#963E23]" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#242824]">
                        {familyOffering.title}
                      </h4>
                      <p className="font-serif italic text-xs text-[#963E23] mt-1">
                        {familyOffering.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {familyOffering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1ECE1] mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('celebration', 'Family Creative Time')}
                      aria-label="Plan a Family Outing enquiry via WhatsApp"
                      className="w-full py-3 px-4 bg-[#F8F4EB] hover:bg-[#EAE4D5] text-[#193B33] border border-[#D5CEBF] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-[#245449]" />
                      <span>Plan Family Outing</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Birthday Card */}
              {birthdayOffering && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5CEBF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C86F50]/15 text-[#963E23] border border-[#C86F50]/30">
                        Milestones & Private Events
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#E2DDD0] flex items-center justify-center text-[#963E23]">
                        <PartyPopper className="w-4 h-4 text-[#963E23]" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#242824]">
                        {birthdayOffering.title}
                      </h4>
                      <p className="font-serif italic text-xs text-[#963E23] mt-1">
                        {birthdayOffering.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {birthdayOffering.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1ECE1] mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry('celebration', 'Birthday / Private Celebration')}
                      aria-label="Plan a Celebration enquiry via WhatsApp"
                      className="w-full py-3 px-4 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-98 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
                      <span>Plan a Celebration</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. CURATED GALLERY PREVIEW
          ------------------------------------------------------------- */}
      <section id="gallery" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#963E23]">
              Visual Showcase
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              A Little Peek Inside KaSaa
            </h2>
            <p className="text-sm text-[#4D534D] max-w-lg">
              Authentic glimpses of clay spinning on wheels, fresh acrylic canvases, and visitors creating together on the 5th floor of Vega Circle Mall.
            </p>
          </div>

          {/* Category Filter Chips (3 on line 1, 2 on line 2 on mobile) */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2" role="tablist" aria-label="Gallery category filters">
            {/* Mobile Line 1: 3 filters */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {galleryCategories.slice(0, 3).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedGalleryCategory === cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                    selectedGalleryCategory === cat.id
                      ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                      : 'bg-[#F1ECE1] hover:bg-[#E5DEC9] text-[#4D534D]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile Line 2: 2 filters */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {galleryCategories.slice(3, 5).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedGalleryCategory === cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                    selectedGalleryCategory === cat.id
                      ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                      : 'bg-[#F1ECE1] hover:bg-[#E5DEC9] text-[#4D534D]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white border border-[#E2DDD0] shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <ImagePlaceholder
                src={`/images/${item.filename}`}
                alt={item.alt}
                title={item.title}
                type={item.category === 'pottery-painting' ? 'pottery' : item.category}
                aspectRatio={item.aspectRatio || '3/4'}
                className="rounded-b-none"
              />
              <div className="p-4 bg-white border-t border-[#F1ECE1] flex items-center justify-between mt-auto">
                <div className="min-w-0 pr-2">
                  <h3 className="font-serif font-semibold text-sm text-[#242824] truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4D534D] line-clamp-1">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] font-semibold text-sm rounded-xl transition-all shadow-xs"
          >
            <span>View All Photos & Studio Captions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
          FOOD MENU PREVIEW SECTION (EXACTLY 3 IMAGES + SHOW MORE)
          Placed directly above "Loved by People Who Visit"
          ------------------------------------------------------------- */}
      {/* -------------------------------------------------------------
          FOOD MENU SHOWCASE (HERO MENU CARD + RIGHT DESCRIPTION)
          Placed directly above "Loved by People Who Visit"
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] border border-[#E2DDD0] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs hover:shadow-sm transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Food Menu Card (Bada Size) */}
            <div className="lg:col-span-5 flex justify-center">
              <Link
                to="/menu"
                className="group relative block w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-[#141814] border border-[#3E473E]"
              >
                <picture>
                  <source srcSet="/images/menu/menu_page_1.webp" type="image/webp" />
                  <img
                    src="/images/menu/menu_page_1.jpg"
                    alt="KaSaa Food Menu Card"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                </picture>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#245449]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#242824] text-xs sm:text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Click to Explore Menu</span>
                    <ArrowRight className="w-4 h-4 text-[#245449]" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Right: Rich Minimal Description & Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] text-xs font-bold tracking-wider border border-[#E9BF69]/30">
                  <Utensils className="w-3.5 h-3.5 text-[#B37B15]" />
                  <span>FOOD IS OUR LOVE LANGUAGE</span>
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#242824] tracking-tight leading-tight">
                  Food Like Never Before
                </h2>

                <p className="font-serif italic text-base sm:text-lg text-[#963E23]">
                  "Good vibe, great food. The best conversations happen over food."
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#4D534D] leading-relaxed">
                At KaSaa Experiences, creativity and taste come together. Whether you are spinning clay on the pottery wheel, 
                painting a canvas, or enjoying an intimate date or birthday celebration, our studio cafe offers freshly made street 
                favorites, hot momos, crisp grilled sandwiches, artisan pizzas, comforting ramen bowls, desserts, and refreshing coolers.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#343A34]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>41 Handcrafted Dishes & Drinks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>Street Favs to Artisan Pizzas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>Freshly Prepared While You Create</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#245449] shrink-0" />
                  <span>Custom Menus for 10+ Guests</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#245449] hover:bg-[#1B4037] text-white font-semibold text-sm rounded-xl transition-all shadow-sm hover:shadow-md active:scale-98"
                >
                  <span>View Complete Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. CUSTOMER REVIEWS + COMPACT BOOKING EXPLAINER
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 bg-[#F2EDE2] border-y border-[#E2DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Reviews Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#245449]">
              Verified Feedback
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              Loved by People Who Visit
            </h2>
            <p className="text-sm text-[#4D534D]">
              Authentic feedback left by visitors who spent creative afternoons with us in Siliguri.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-[#E2DDD0] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-[#E9BF69]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E9BF69]" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-[#242824] leading-relaxed italic">
                    "{rev.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#F1ECE1] mt-4 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#242824]">{rev.author}</p>
                    <p className="text-[11px] text-[#4D534D]">{rev.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Read more on GBP */}
          <div className="text-center">
            <a
              href={siteConfig.social.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read verified reviews on Google Business Profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] text-xs font-semibold shadow-xs"
            >
              <span>Read Verified Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#4D534D]" />
            </a>
          </div>

          {/* Compact Three-Step Booking Strip */}
          <div className="pt-8 border-t border-[#E2DDD0]">
            <div className="text-center mb-8">
              <h3 className="font-serif font-bold text-2xl text-[#242824]">
                How Booking an Experience Works
              </h3>
              <p className="text-xs sm:text-sm text-[#4D534D] mt-1">
                Straightforward coordination directly with the studio team via WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bookingSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/85 p-6 rounded-2xl border border-[#E2DDD0] relative overflow-hidden"
                >
                  <span className="font-serif font-bold text-4xl text-[#DCE6D9] absolute -top-1 right-3 select-none pointer-events-none">
                    {step.step}
                  </span>
                  <div className="relative z-10 space-y-1.5">
                    <span className="text-xs font-bold text-[#963E23] uppercase tracking-wider">
                      Step {step.step}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-[#242824]">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4D534D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. FAQS ACCORDION (Side-by-side on desktop)
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#963E23]">
              Helpful Information
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#4D534D] leading-relaxed">
              Clear, honest answers about our workshops, beginner sessions, reservations, and location.
            </p>

            <div className="pt-4 border-t border-[#E8E0D0] space-y-2">
              <p className="text-xs font-semibold text-[#242824]">Still have a question?</p>
              <button
                type="button"
                onClick={() => onOpenEnquiry('general')}
                aria-label="Ask custom question via WhatsApp enquiry"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#245449] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat with our studio team on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. VISIT US SECTION
          ------------------------------------------------------------- */}
      <section className="py-16 lg:py-20 bg-[#FAF7F0] border-t border-[#E8E0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Address & Hours details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#245449]">
                  Studio Location & Hours
                </span>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824]">
                  Plan Your Visit to KaSaa
                </h2>
                <p className="text-sm text-[#4D534D] leading-relaxed">
                  Located comfortably inside Vega Circle Mall on Sevoke Road, Siliguri. Enjoy ample mall parking, escalators, and a calm artistic sanctuary on the 5th floor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location card */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2DDD0] flex flex-col justify-between space-y-3 shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 text-[#245449] mb-2">
                      <MapPin className="w-4 h-4 text-[#963E23]" />
                      <h3 className="font-serif font-bold text-base text-[#242824]">Studio Address</h3>
                    </div>
                    <p className="text-xs text-[#4D534D] leading-relaxed">
                      {siteConfig.location.fullAddress}
                    </p>
                  </div>

                </div>

                {/* Hours & Contact card */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2DDD0] flex flex-col justify-between space-y-3 shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 text-[#245449] mb-2">
                      <Clock className="w-4 h-4 text-[#8C6A1E]" />
                      <h3 className="font-serif font-bold text-base text-[#242824]">Studio Hours</h3>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <p className="text-base font-bold text-[#242824]">
                        {siteConfig.hours.display}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-[#F1ECE1] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[#245449] font-semibold">
                      <Phone className="w-3.5 h-3.5 text-[#245449]" />
                      <span>Call / WhatsApp:</span>
                    </div>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-[#242824] hover:text-[#245449] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to KaSaa Experiences on Google Maps"
                  className="px-5 py-3 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-xs font-semibold rounded-xl flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#E9BF69]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry('general')}
                  aria-label="Enquire about visit timings via WhatsApp"
                  className="px-5 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp: {siteConfig.contact.phone}</span>
                </button>
              </div>
            </div>

            {/* Visual Studio Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-3xl border border-[#E2DDD0] shadow-xs space-y-4">
                <ImagePlaceholder
                  src="/images/gallery-studio-interior.webp"
                  alt="KaSaa Experiences studio space at Vega Circle Mall Siliguri"
                  title="5th Floor Studio Space"
                  type="space"
                  aspectRatio="16/10"
                />

                <div className="space-y-1.5 text-xs text-[#4D534D]">
                  <p className="font-semibold text-[#242824]">
                    How to find us inside Vega Circle Mall:
                  </p>
                  <p>
                    Take the main atrium elevators or escalators up to the <strong>5th Floor</strong> near INOX cinema. Follow signs for KaSaa Experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
