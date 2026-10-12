import React from 'react';
import ActivityDetailPageLayout from './ActivityDetailPageLayout';
import { getBrochureCategory } from '../../data/brochureActivities';

export default function TheArtisanEditPage({ onOpenEnquiry, customWhatsAppNumber }) {
  const category = getBrochureCategory('the-artisan-edit');

  return (
    <ActivityDetailPageLayout
      category={category}
      onOpenEnquiry={onOpenEnquiry}
      customWhatsAppNumber={customWhatsAppNumber}
    />
  );
}
