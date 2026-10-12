import React from 'react';
import ActivityDetailPageLayout from './ActivityDetailPageLayout';
import { getBrochureCategory } from '../../data/brochureActivities';

export default function OutOfTheOrdinaryPage({ onOpenEnquiry, customWhatsAppNumber }) {
  const category = getBrochureCategory('out-of-the-ordinary');

  return (
    <ActivityDetailPageLayout
      category={category}
      onOpenEnquiry={onOpenEnquiry}
      customWhatsAppNumber={customWhatsAppNumber}
    />
  );
}
