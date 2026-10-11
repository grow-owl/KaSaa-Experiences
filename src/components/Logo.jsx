import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Logo Component for KaSaa Experiences
 * Uses the authentic KaSaa script mark with "PLAY. PAUSE. PAINT." tagline.
 * Features automatic switching between dark variant for cream navbar and
 * light/cream variant for dark green footer.
 */
export default function Logo({ className = '', footer = false }) {
  return (
    <Link
      to="/"
      aria-label="KaSaa Experiences Home"
      className={`inline-flex items-center group transition-transform focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#245449] rounded-lg ${className}`}
    >
      <img
        src={footer ? '/images/logo-light.png' : '/images/logo.png'}
        alt="KaSaa - Play. Pause. Paint."
        className={`w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 ${
          footer ? 'h-11 sm:h-13' : 'h-10 sm:h-12'
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
