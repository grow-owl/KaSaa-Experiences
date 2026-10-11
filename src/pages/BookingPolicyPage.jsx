import React from 'react';
import { ArrowLeft, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export default function BookingPolicyPage() {
  return (
    <div className="py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SEOHead
        title="Booking & Rescheduling Terms"
        description="Booking, slot reservation, and rescheduling policy for KaSaa Experiences pottery and painting workshops in Siliguri."
        canonicalPath="/booking-cancellation-policy"
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-medium">Booking Policy</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824]">
          Booking, Rescheduling & Studio Policy
        </h1>
        <p className="text-xs text-[#535953]">Operational Guidelines for Studio Visitors</p>
      </div>

      {/* Legal Review Notice */}
      <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#E9BF69] flex items-start gap-3 text-xs text-[#7A5B18]">
        <AlertCircle className="w-5 h-5 text-[#C86F50] shrink-0 mt-0.5" />
        <div>
          <strong className="block text-[#61450C] font-semibold">Provisional Operational Terms</strong>
          <span>
            These guidelines describe standard workshop reservation procedures. Specific terms will be confirmed directly with the studio manager upon your WhatsApp enquiry.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD0] space-y-6 text-sm text-[#535953] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">1. Enquiry vs. Confirmed Reservation</h2>
          <p>
            Submitting a WhatsApp message or enquiry form through this website constitutes an <strong>enquiry</strong>, not an automatic instant booking. A reservation is officially confirmed once the KaSaa studio team reviews studio availability and coordinates timing with you.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">2. Arrival & Session Timing</h2>
          <p>
            Because potter's wheels and workshop stations have set time windows, we kindly request arriving 5–10 minutes before your scheduled slot. This ensures you receive the full allotted workshop time and hands-on guidance without feeling rushed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">3. Rescheduling & Cancellations</h2>
          <p>
            If your schedule changes, please inform our team via WhatsApp as early as possible so we may release the reserved wheel or easel to other visitors. We are always happy to help you reschedule to another open slot.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">4. Finished Artwork Collection</h2>
          <p>
            <strong>Canvas Paintings:</strong> You may take your acrylic painting home on the same day once it has dried sufficiently.<br />
            <strong>Pottery / Clay Creations:</strong> Wet clay pieces require natural drying time. Studio staff will advise you on whether your piece can be safely transported on the day or collected following standard drying/firing procedures.
          </p>
        </section>
      </div>
    </div>
  );
}
