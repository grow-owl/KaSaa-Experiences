import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function ActivityCard({ activity, onEnquire }) {
  const isPrimary = activity.category === 'primary';

  return (
    <article
      id={activity.id}
      aria-labelledby={`activity-heading-${activity.id}`}
      className={`group relative rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden ${
        isPrimary
          ? 'border-[#E2DDD0] shadow-md hover:shadow-xl hover:border-[#963E23]/40'
          : 'border-[#E2DDD0] shadow-xs hover:shadow-md bg-[#FAF7F0]'
      }`}
    >
      {/* Visual Image / Placeholder */}
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          src={`/images/${activity.imageSlot}`}
          alt={activity.title}
          title={activity.title}
          type={activity.id}
          aspectRatio={activity.aspectRatio || (isPrimary ? '4/3' : '16/9')}
          priority={isPrimary && activity.id === 'pottery'}
          objectPosition={activity.objectPosition || (activity.id === 'pottery' ? 'center bottom' : 'center')}
          className="rounded-b-none border-b border-[#E8E0D0]"
        />

        {/* Badge */}
        {activity.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs ${
                isPrimary
                  ? 'bg-[#245449] text-[#F8F4EB]'
                  : 'bg-[#DCE6D9] text-[#193B33] border border-[#BFD0BC]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#E9BF69]" />
              {activity.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-6 sm:p-8 flex-1 flex flex-col justify-between ${isPrimary ? 'space-y-6' : 'space-y-4'}`}>
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3
              id={`activity-heading-${activity.id}`}
              className={`font-serif font-bold text-[#242824] tracking-tight ${
                isPrimary ? 'text-2xl sm:text-3xl' : 'text-xl'
              }`}
            >
              {activity.title}
            </h3>
          </div>

          <p className="font-serif italic text-sm text-[#963E23] leading-snug">
            {activity.tagline}
          </p>

          <p className="text-sm text-[#4D534D] leading-relaxed">
            {activity.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#F1ECE1]">
          <button
            type="button"
            onClick={() => onEnquire(activity.enquiryType)}
            aria-label={`${activity.ctaLabel} for ${activity.title}`}
            className={`w-full py-3.5 px-5 font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md ${
              isPrimary
                ? 'bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] active:scale-99'
                : 'bg-[#DCE6D9] hover:bg-[#C2D2BD] text-[#193B33] active:scale-99'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
            <span>{activity.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
