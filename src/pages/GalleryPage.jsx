import React, { useState } from 'react';
import { ArrowLeft, Tag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SEOHead
        title="Studio Gallery & Moments"
        description="View glimpses of our pottery wheels, canvas painting easels, interior atmosphere, and creative moments at KaSaa Experiences in Siliguri."
        canonicalPath="/gallery"
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-medium">Gallery</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-[#242824] tracking-tight">
          A Glimpse Inside KaSaa Experiences
        </h1>

        <p className="text-base sm:text-lg text-[#535953] leading-relaxed">
          From the centering of natural clay on electric wheels to vibrant acrylic brushwork and shared celebration moments, here is a peek at life inside our Vega Circle Mall studio in Siliguri.
        </p>
      </div>

      {/* Filter Tabs (3 on line 1, 2 on line 2 on mobile) */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 pb-2 border-b border-[#E8E0D0]">
        {/* Mobile Line 1: 3 filters */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {galleryCategories.slice(0, 3).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                  : 'bg-white hover:bg-[#F1ECE1] text-[#535953] border border-[#E2DDD0]'
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
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                  : 'bg-white hover:bg-[#F1ECE1] text-[#535953] border border-[#E2DDD0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden bg-white border border-[#E2DDD0] shadow-xs hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="overflow-hidden">
              <ImagePlaceholder
                src={`/images/${item.filename}`}
                alt={item.alt}
                title={item.title}
                type={item.category === 'pottery-painting' ? 'pottery' : item.category}
                aspectRatio={item.aspectRatio || '3/4'}
                className="rounded-b-none"
              />
            </div>

            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#245449] bg-[#EBF1E9] px-2.5 py-0.5 rounded-full">
                    <Tag className="w-3 h-3 text-[#C86F50]" />
                    {item.categoryLabel}
                  </span>
                </div>

                <h2 className="font-serif font-bold text-base sm:text-lg text-[#242824]">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#535953] leading-relaxed line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
