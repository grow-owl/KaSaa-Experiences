import React, { useState } from 'react';
import { ArrowLeft, Tag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Lightbox from '../components/Lightbox';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

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

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#E8E0D0]">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeCategory === cat.id
                ? 'bg-[#245449] text-[#F8F4EB] shadow-xs'
                : 'bg-white hover:bg-[#F1ECE1] text-[#535953] border border-[#E2DDD0]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(idx)}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-[#E2DDD0] shadow-xs hover:shadow-xl transition-all flex flex-col"
            tabIndex={0}
            role="button"
            aria-label={`View photo ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenLightbox(idx);
              }
            }}
          >
            <div className="overflow-hidden">
              <ImagePlaceholder
                src={`/images/${item.filename}`}
                alt={item.alt}
                title={item.title}
                type={item.category === 'pottery-painting' ? 'pottery' : item.category}
                aspectRatio={item.aspectRatio || '3/4'}
                className="rounded-b-none transition-transform duration-300 group-hover:scale-103"
              />
            </div>

            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#245449] bg-[#EBF1E9] px-2.5 py-0.5 rounded-full">
                    <Tag className="w-3 h-3 text-[#C86F50]" />
                    {item.categoryLabel}
                  </span>
                  <span className="text-[#AF5B3E] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to Expand ↗
                  </span>
                </div>

                <h2 className="font-serif font-bold text-base sm:text-lg text-[#242824] group-hover:text-[#245449] transition-colors">
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

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
