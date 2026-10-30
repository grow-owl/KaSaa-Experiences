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
      <div className="space-y-4 pb-6 sm:pb-8 border-b border-[#E2DDD0] text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-semibold">Gallery</span>
        </div>

        <h1 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-[#242824] tracking-tight">
          A Glimpse Inside KaSaa Experiences
        </h1>

        <p className="text-sm sm:text-base text-[#535953] leading-relaxed max-w-2xl mx-auto">
          From the centering of natural clay on electric wheels to vibrant acrylic brushwork and shared celebration moments, here is a peek at life inside our Vega Circle Mall studio in Siliguri.
        </p>
      </div>

      {/* Filter Tabs Centered */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center justify-center gap-2 flex-wrap min-w-full px-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
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
