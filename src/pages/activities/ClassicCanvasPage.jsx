import React from 'react';
import ActivityDetailPageLayout from './ActivityDetailPageLayout';
import { getBrochureCategory } from '../../data/brochureActivities';

export default function ClassicCanvasPage({ onOpenEnquiry, customWhatsAppNumber }) {
  const category = getBrochureCategory('classic-canvas');

  return (
    <ActivityDetailPageLayout
      category={category}
      onOpenEnquiry={onOpenEnquiry}
      customWhatsAppNumber={customWhatsAppNumber}
    />
  );
}
