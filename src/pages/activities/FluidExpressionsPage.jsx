import React from 'react';
import ActivityDetailPageLayout from './ActivityDetailPageLayout';
import { getBrochureCategory } from '../../data/brochureActivities';

export default function FluidExpressionsPage({ onOpenEnquiry, customWhatsAppNumber }) {
  const category = getBrochureCategory('fluid-expressions');

  return (
    <ActivityDetailPageLayout
      category={category}
      onOpenEnquiry={onOpenEnquiry}
      customWhatsAppNumber={customWhatsAppNumber}
    />
  );
}
