import React from 'react';
import ActivityDetailPageLayout from './ActivityDetailPageLayout';
import { getBrochureCategory } from '../../data/brochureActivities';

export default function SoftPlayPage({ onOpenEnquiry, customWhatsAppNumber }) {
  const category = getBrochureCategory('soft-play');

  return (
    <ActivityDetailPageLayout
      category={category}
      onOpenEnquiry={onOpenEnquiry}
      customWhatsAppNumber={customWhatsAppNumber}
    />
  );
}
