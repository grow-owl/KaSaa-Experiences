import React from 'react';
import { ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SEOHead
        title="Privacy Policy"
        description="Privacy practices for KaSaa Experiences. Clear transparency regarding communication and enquiry data."
        canonicalPath="/privacy-policy"
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-[#535953]">
          <Link to="/" className="hover:text-[#245449] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#242824] font-medium">Privacy Policy</span>
        </div>

        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#535953]">Last updated: October 2026</p>
      </div>

      {/* Legal Review Notice */}
      <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#E9BF69] flex items-start gap-3 text-xs text-[#7A5B18]">
        <AlertCircle className="w-5 h-5 text-[#C86F50] shrink-0 mt-0.5" />
        <div>
          <strong className="block text-[#61450C] font-semibold">Business & Legal Review Pending</strong>
          <span>
            This document outlines the standard operational privacy practices of KaSaa Experiences and is subject to formal owner and legal confirmation before official commercial launch.
          </span>
        </div>
      </div>

      {/* Body content */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DDD0] space-y-6 text-sm text-[#535953] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">1. Overview</h2>
          <p>
            At {siteConfig.businessName}, we respect your personal privacy. Our website is an informational showcase and direct enquiry tool. We do not operate invasive user tracking engines, customer accounts, or third-party marketing databases.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">2. WhatsApp Enquiries</h2>
          <p>
            When you initiate an enquiry through our website, you are redirected to WhatsApp. The message details (such as preferred date, number of participants, and activity preferences) are transmitted directly via WhatsApp between you and the KaSaa Experiences team. We do not store your enquiry data on external web servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">3. Analytics & Cookies</h2>
          <p>
            This website does not load third-party behavioral advertising cookies. Any future analytics integrations will strictly serve aggregate website performance and usability measurements without selling personal user information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-xl text-[#242824]">4. Contact & Inquiries</h2>
          <p>
            For any questions regarding our privacy practices or studio policies, please reach out to our team at our studio located at {siteConfig.location.fullAddress}.
          </p>
        </section>
      </div>
    </div>
  );
}
