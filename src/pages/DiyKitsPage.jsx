import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function DiyKitsPage({ onOpenEnquiry }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEOHead
        title="DIY Kits — Coming Soon | KaSaa Experiences"
        description="KaSaa DIY Kits are coming soon."
        canonicalPath="/diy-kits"
      />

      <div className="text-center max-w-lg mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9BF69]/20 text-[#7D5B18] text-xs sm:text-sm font-bold tracking-wider border border-[#E9BF69]/30">
          <Clock className="w-4 h-4 text-[#B37B15]" />
          <span>COMING SOON</span>
        </div>

        <h1 className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl text-[#242824] tracking-tight">
          DIY Kits
        </h1>

        <p className="text-base sm:text-lg text-[#4D534D] leading-relaxed">
          Our curated DIY art & craft kits are coming soon. Stay tuned!
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#245449] hover:bg-[#193B33] text-white font-semibold text-sm transition-all shadow-xs active:scale-95 text-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {typeof onOpenEnquiry === 'function' && (
            <button
              type="button"
              onClick={() => onOpenEnquiry('general', 'DIY Kits Enquiry')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#FAF7F0] text-[#242824] border border-[#D5CEBF] font-semibold text-sm transition-all shadow-xs active:scale-95 cursor-pointer text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#245449]" />
              <span>Enquire on WhatsApp</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
