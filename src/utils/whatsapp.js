import { siteConfig } from '../data/siteConfig';

/**
 * Builds standard prefilled messages according to context
 */
export function buildEnquiryMessage({
  type = 'general', // 'pottery' | 'painting' | 'karaoke' | 'date' | 'celebration' | 'general'
  date = '',
  participants = '',
  occasion = '',
  requirements = '',
  customMessage = '',
} = {}) {
  const formattedDate = date ? new Date(date).toLocaleDateString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : '';

  const details = [
    formattedDate ? `Date: ${formattedDate}` : '',
    participants ? `Participants: ${participants}` : '',
    occasion ? `Occasion: ${occasion}` : '',
    requirements ? `Note: ${requirements}` : '',
  ].filter(Boolean).join(' | ');

  const detailsSuffix = details ? ` (${details})` : '';

  switch (type) {
    case 'pottery':
      return `Hi KaSaa! I'd like to book a pottery workshop session at your Vega Circle Mall studio.${detailsSuffix} Could you please share available slots and pricing details?`;

    case 'painting':
      return `Hi KaSaa! I'd like to book a canvas painting session at your studio.${detailsSuffix} Could you please share available session timings and what's included?`;

    case 'karaoke':
      return `Hi KaSaa! I'd like to enquire about your karaoke and recreation lounge.${detailsSuffix} Could you please share availability and session details?`;

    case 'date':
      return `Hi KaSaa! I'm planning a creative date / anniversary experience at KaSaa.${detailsSuffix} Could you please share available slots and suggested experiences?`;

    case 'celebration':
      return `Hi KaSaa! I'd like to enquire about a special celebration / group outing.${detailsSuffix} Could you please share package options and availability?`;

    default:
      if (customMessage) return customMessage;
      return `Hi KaSaa! I'd like to enquire about creative experiences (pottery, painting) at your Vega Circle Mall studio in Siliguri.${detailsSuffix} Could you please share available session timings and how to book a slot?`;
  }
}

/**
 * Clean sanitization of telephone digits
 */
export function sanitizePhoneNumber(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d]/g, '');
}

/**
 * Generates official wa.me link with URLSearchParams or returns null if not configured
 */
export function getWhatsAppUrl(messageText) {
  const number = sanitizePhoneNumber(siteConfig.contact.whatsappNumber);
  if (!number) return null;

  const params = new URLSearchParams();
  params.set('text', messageText);

  return `https://wa.me/${number}?${params.toString()}`;
}

/**
 * Clipboard helper with promise resolution
 */
export async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // Fallback below
    }
  }

  // Fallback for non-https or older browser compatibility
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    textArea.remove();
    return successful;
  } catch (err) {
    textArea.remove();
    return false;
  }
}
