import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-6">
      <SEOHead
        title="Page Not Found (404)"
        description="The page you were looking for could not be found."
        noIndex={true}
      />

      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DCE6D9] text-[#245449] font-serif font-bold text-2xl">
        404
      </div>

      <div className="space-y-2">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#242824]">
          Looks like this path is unshaped
        </h1>
        <p className="text-sm sm:text-base text-[#535953] leading-relaxed">
          The page or workshop link you were looking for doesn't exist or has moved. Let's get you back to our studio.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/activities"
          className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-[#F1ECE1] text-[#242824] border border-[#D5CEBF] text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <Compass className="w-4 h-4 text-[#C86F50]" />
          <span>Explore Experiences</span>
        </Link>
      </div>
    </div>
  );
}
