import React, { useState, useEffect, useRef } from 'react';

/**
 * ImagePlaceholder component
 * Handles real image loading when supplied in public/images/,
 * with graceful fallback to a polished, tactile SVG placeholder.
 * Strictly maintains aspect ratio to prevent Cumulative Layout Shift (CLS).
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  title = '',
  type = 'pottery', // 'pottery' | 'painting' | 'karaoke' | 'together' | 'space' | 'general'
  aspectRatio = '16/10',
  className = '',
  priority = false,
  showBadge = true,
  objectPosition = 'center',
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // If a real src is provided and hasn't errored out yet
  const shouldAttemptImage = Boolean(src) && !hasError;

  // Handle cached images immediately on mount/src change
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  // Icon / abstract illustration based on category
  const renderIllustration = () => {
    switch (type) {
      case 'pottery':
        return (
          <svg className="w-16 h-16 text-[#C86F50]/60 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="32" cy="50" rx="20" ry="6" stroke="#245449" strokeWidth="2.5" fill="#DCE6D9" fillOpacity="0.4" />
            <path d="M22 22 C22 22, 26 20, 32 20 C38 20, 42 22, 42 22 C42 22, 40 28, 44 34 C47 38, 44 46, 38 48 C36 49, 28 49, 26 48 C20 46, 17 38, 20 34 C24 28, 22 22, 22 22 Z" fill="#C86F50" fillOpacity="0.25" stroke="#C86F50" strokeWidth="2" />
            <path d="M27 30 C30 35, 34 35, 37 30" stroke="#C86F50" strokeWidth="1.5" />
            <ellipse cx="32" cy="22" rx="10" ry="2.5" stroke="#C86F50" strokeWidth="1.5" />
          </svg>
        );
      case 'painting':
        return (
          <svg className="w-16 h-16 text-[#C86F50]/60 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 10 L16 54 M32 10 L48 54 M24 38 L40 38 M32 10 L32 20" stroke="#245449" strokeWidth="2" />
            <rect x="20" y="16" width="24" height="20" rx="1.5" fill="#F8F4EB" stroke="#C86F50" strokeWidth="2" />
            <path d="M24 28 C28 22, 34 32, 38 25" stroke="#E9BF69" strokeWidth="2" />
            <circle cx="25" cy="22" r="1.5" fill="#C86F50" />
            <circle cx="35" cy="22" r="1.5" fill="#245449" />
          </svg>
        );
      case 'karaoke':
        return (
          <svg className="w-16 h-16 text-[#245449]/60 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="26" y="14" width="12" height="22" rx="6" fill="#DCE6D9" stroke="#245449" strokeWidth="2" />
            <path d="M20 26 C20 34, 44 34, 44 26" stroke="#245449" strokeWidth="2" />
            <line x1="32" y1="38" x2="32" y2="48" stroke="#245449" strokeWidth="2" />
            <line x1="24" y1="48" x2="40" y2="48" stroke="#245449" strokeWidth="2" />
            <path d="M44 14 C46 16, 48 18, 50 16 M48 22 C50 24, 52 26, 54 24" stroke="#C86F50" strokeWidth="1.5" />
          </svg>
        );
      case 'together':
        return (
          <svg className="w-16 h-16 text-[#C86F50]/60 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 22 C19 16, 10 21, 10 28 C10 37, 24 46, 24 46 C24 46, 38 37, 38 28 C38 21, 29 16, 24 22 Z" fill="#C86F50" fillOpacity="0.18" stroke="#C86F50" strokeWidth="2" />
            <path d="M40 26 C36 21, 29 25, 29 30 C29 38, 40 45, 40 45 C40 45, 51 38, 51 30 C51 25, 44 21, 40 26 Z" fill="#245449" fillOpacity="0.15" stroke="#245449" strokeWidth="1.8" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-[#245449]/50" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="14" y="14" width="36" height="36" rx="4" stroke="#245449" strokeWidth="2" fill="#DCE6D9" fillOpacity="0.3" />
            <circle cx="26" cy="26" r="4" fill="#C86F50" />
            <path d="M16 42 L28 30 L40 42 L48 34" stroke="#245449" strokeWidth="2" />
          </svg>
        );
    }
  };

  // Convert aspect ratio string like "16/10" or "4/3" or "3/4" to CSS style
  const aspectStyle = { aspectRatio: aspectRatio.replace('/', ' / ') };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#EDF2EA] rounded-2xl border border-[#E2DDD0] group flex items-center justify-center select-none ${className}`}
      style={aspectStyle}
    >
      {shouldAttemptImage ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={objectPosition ? { objectPosition } : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Tactile SVG Fallback when image is not present or pending */}
      {(!shouldAttemptImage || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F5F1E6] via-[#EBF0E7] to-[#F1EADB]">
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
            backgroundImage: `radial-gradient(#245449 1px, transparent 1px)`,
            backgroundSize: '18px 18px'
          }} />

          <div className="relative z-10 flex flex-col items-center justify-center max-w-xs">
            {renderIllustration()}
            {title && (
              <h4 className="mt-3 font-serif font-semibold text-[#242824] text-sm md:text-base leading-snug line-clamp-1">
                {title}
              </h4>
            )}
            {showBadge && (
              <span className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#FFFFFF] text-[#193B33] border border-[#BFD0BC] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AF5B3E] animate-pulse" />
                KaSaa Photography Slot
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
