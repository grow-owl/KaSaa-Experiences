import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Lightbox({
  isOpen,
  items = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) {
  const lightboxRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  const currentItem = items[currentIndex];

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          onPrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          onNext();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
          triggerRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      ref={lightboxRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#242824]/90 backdrop-blur-md transition-opacity"
    >
      {/* Close button */}
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-[#193B33]/80 hover:bg-[#193B33] text-[#F8F4EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#E9BF69]"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 z-40 p-2 sm:p-3 rounded-full bg-[#193B33]/80 hover:bg-[#193B33] text-[#F8F4EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#E9BF69]"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 z-40 p-2 sm:p-3 rounded-full bg-[#193B33]/80 hover:bg-[#193B33] text-[#F8F4EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#E9BF69]"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main card */}
      <div className="relative max-w-4xl w-full max-h-[85vh] bg-[#F8F4EB] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#E2DDD0]">
        <div className="relative flex-1 overflow-hidden bg-[#242824] flex items-center justify-center min-h-[300px] max-h-[60vh]">
          <ImagePlaceholder
            src={`/images/${currentItem.filename}`}
            alt={currentItem.alt || currentItem.title}
            title={currentItem.title}
            type={currentItem.category === 'pottery-painting' ? 'pottery' : currentItem.category}
            aspectRatio={currentItem.aspectRatio || '16/10'}
            className="w-full h-full object-contain rounded-none border-none"
            showBadge={false}
          />
        </div>

        {/* Caption & metadata strip */}
        <div className="p-5 sm:p-6 bg-[#F8F4EB] border-t border-[#E2DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#DCE6D9] text-[#245449]">
                <Tag className="w-3 h-3 text-[#C86F50]" />
                {currentItem.categoryLabel || 'KaSaa Studio'}
              </span>
              <span className="text-xs text-[#535953]">
                {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#242824]">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#535953] max-w-2xl">
              {currentItem.caption}
            </p>
          </div>

          <div className="text-xs text-[#535953] italic">
            Use ← / → keys to navigate
          </div>
        </div>
      </div>
    </div>
  );
}
