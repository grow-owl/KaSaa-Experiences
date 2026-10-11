import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Copy, Check, Calendar, Users, Heart, AlertCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildEnquiryMessage, getWhatsAppUrl, copyToClipboard } from '../utils/whatsapp';

export default function EnquiryModal({
  isOpen,
  onClose,
  initialActivity = 'pottery', // 'pottery' | 'painting' | 'karaoke' | 'date' | 'celebration' | 'general'
  initialOccasion = '',
}) {
  const [activity, setActivity] = useState(initialActivity);
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState('2');
  const [occasion, setOccasion] = useState(initialOccasion);
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [showReviewStep, setShowReviewStep] = useState(false);
  const [customizedMessage, setCustomizedMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  // Sync initial activity and occasion on opening
  useEffect(() => {
    if (isOpen) {
      setActivity(initialActivity || 'pottery');
      setOccasion(initialOccasion || '');
      setShowReviewStep(false);
      setValidationError('');
      setIsCopied(false);

      // Default date to tomorrow if unset
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const isoDate = tomorrow.toISOString().split('T')[0];
      setDate(isoDate);

      // Save previous active element for accessible return of focus
      triggerRef.current = document.activeElement;
    }
  }, [isOpen, initialActivity, initialOccasion]);

  // Trap focus and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Auto-focus the close button or first interactive element
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Return focus to triggering element
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Minimum date allowed is today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleProceedToReview = (e) => {
    e.preventDefault();

    if (date && date < todayStr) {
      setValidationError('Please select today or a future date for your enquiry.');
      return;
    }

    setValidationError('');
    const generated = buildEnquiryMessage({
      type: activity,
      date,
      participants,
      occasion,
      requirements: notes,
    });
    setCustomizedMessage(generated);
    setShowReviewStep(true);
  };

  const handleCopyMessage = async () => {
    const success = await copyToClipboard(customizedMessage);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const whatsAppUrl = getWhatsAppUrl(customizedMessage);
  const isWhatsAppReady = siteConfig.contact.isWhatsAppConfigured;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#242824]/65 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      ref={modalRef}
    >
      <div className="relative w-full max-w-lg bg-[#F8F4EB] rounded-2xl shadow-2xl border border-[#E2DDD0] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F1ECE1] border-b border-[#E2DDD0]">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#245449] text-[#F8F4EB]">
              <MessageCircle className="w-4 h-4" />
            </span>
            <div>
              <h2 id="enquiry-modal-title" className="font-serif font-bold text-lg text-[#242824]">
                {showReviewStep ? 'Review Your Enquiry' : 'Plan Your Creative Visit'}
              </h2>
              <p className="text-xs text-[#4D534D]">KaSaa Experiences · Vega Circle Mall, Siliguri</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close enquiry dialog"
            className="p-2 rounded-lg text-[#4D534D] hover:text-[#242824] hover:bg-[#E5DEC9] transition-colors focus-visible:ring-2 focus-visible:ring-[#245449]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!showReviewStep ? (
            <form onSubmit={handleProceedToReview} className="space-y-4">
              {/* Activity Selection */}
              <div>
                <label htmlFor="modal-activity" className="block text-xs font-bold uppercase tracking-wider text-[#242824] mb-1.5">
                  Experience / Occasion
                </label>
                <select
                  id="modal-activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEBF] rounded-xl text-sm text-[#242824] font-medium focus:border-[#245449] focus:ring-1 focus:ring-[#245449] outline-hidden"
                >
                  <option value="pottery">Pottery & Wheel Throwing (Primary Workshop)</option>
                  <option value="painting">Canvas & Guided Painting (Primary Workshop)</option>
                  <option value="karaoke">Karaoke & Recreation Lounge (Supporting)</option>
                  <option value="date">Date or Anniversary Experience</option>
                  <option value="celebration">Birthday or Private Group Celebration</option>
                  <option value="general">General Studio Enquiry</option>
                </select>
              </div>

              {/* Date & Participants row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-bold uppercase tracking-wider text-[#242824] mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#963E23]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="modal-date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEBF] rounded-xl text-sm text-[#242824] focus:border-[#245449] focus:ring-1 focus:ring-[#245449] outline-hidden"
                  />
                </div>
                <div>
                  <label htmlFor="modal-participants" className="block text-xs font-bold uppercase tracking-wider text-[#242824] mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#963E23]" />
                    Guest Count
                  </label>
                  <select
                    id="modal-participants"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEBF] rounded-xl text-sm text-[#242824] focus:border-[#245449] focus:ring-1 focus:ring-[#245449] outline-hidden"
                  >
                    <option value="1 person (Solo Creator)">1 person (Solo)</option>
                    <option value="2 people (Couple / Friends)">2 people (Couple / Pair)</option>
                    <option value="3-4 people (Small Group)">3–4 people (Small Group)</option>
                    <option value="5-8 people (Celebration)">5–8 people (Group)</option>
                    <option value="8+ people (Private Event)">8+ people (Large Group)</option>
                  </select>
                </div>
              </div>

              {/* Special Occasion if date or celebration */}
              {(activity === 'date' || activity === 'celebration') && (
                <div>
                  <label htmlFor="modal-occasion" className="block text-xs font-bold uppercase tracking-wider text-[#242824] mb-1.5 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#963E23]" />
                    Special Occasion (Optional)
                  </label>
                  <input
                    type="text"
                    id="modal-occasion"
                    placeholder="e.g. Birthday, Anniversary, Creative Date Surprise"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEBF] rounded-xl text-sm text-[#242824] placeholder:text-[#4D534D]/60 focus:border-[#245449] focus:ring-1 focus:ring-[#245449] outline-hidden"
                  />
                </div>
              )}

              {/* Optional Notes */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs font-bold uppercase tracking-wider text-[#242824] mb-1.5">
                  Optional Questions / Preferences
                </label>
                <textarea
                  id="modal-notes"
                  rows="2"
                  placeholder="e.g. Preferred time slot, beginner guidance..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEBF] rounded-xl text-sm text-[#242824] placeholder:text-[#4D534D]/60 focus:border-[#245449] focus:ring-1 focus:ring-[#245449] outline-hidden resize-none"
                />
              </div>

              {validationError && (
                <div className="flex items-center gap-2 p-3 text-xs text-red-900 bg-red-50 border border-red-300 rounded-xl" role="alert">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Notice */}
              <div className="p-3 bg-[#FAF7F0] border border-[#E2DDD0] rounded-xl text-xs text-[#4D534D] leading-relaxed">
                <strong className="text-[#242824]">Enquiry Notice:</strong> Submitting this enquiry does not confirm a booking automatically. The KaSaa team will check station availability and message back to confirm your slot.
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  aria-label="Proceed to review WhatsApp message"
                  className="w-full py-3.5 px-5 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 active:scale-99"
                >
                  <span>Review Enquiry Message</span>
                  <MessageCircle className="w-4 h-4 text-[#E9BF69]" />
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#EBF1E9] border border-[#DCE6D9] rounded-xl text-xs text-[#193B33] leading-relaxed flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#245449] shrink-0" />
                <span>You can review and edit your enquiry text below before sending.</span>
              </div>

              <div>
                <label htmlFor="review-message" className="block text-xs font-bold uppercase tracking-wider text-[#242824] mb-1.5">
                  Pre-filled WhatsApp Enquiry Message
                </label>
                <textarea
                  id="review-message"
                  rows="4"
                  value={customizedMessage}
                  onChange={(e) => setCustomizedMessage(e.target.value)}
                  className="w-full p-3.5 bg-white border border-[#D5CEBF] rounded-xl text-sm text-[#242824] font-mono leading-relaxed focus:border-[#245449] focus:ring-1 focus:ring-[#245449] outline-hidden resize-none"
                />
              </div>

              {/* Fallback state when WhatsApp number is not yet supplied */}
              {!isWhatsAppReady && (
                <div className="p-4 bg-[#FFF8E7] border border-[#E9BF69] rounded-xl text-xs text-[#7A5B18] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#61450C]">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#963E23]" />
                    Official WhatsApp Number Setup In Progress
                  </div>
                  <p>
                    The official WhatsApp business number will be linked by the studio shortly. You can copy this enquiry message right now with one click and share it with the studio!
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                {isWhatsAppReady && whatsAppUrl ? (
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open prefilled enquiry in WhatsApp"
                    className="flex-1 py-3.5 px-4 bg-[#245449] hover:bg-[#193B33] text-[#F8F4EB] font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  aria-label="Copy enquiry message to clipboard"
                  className={`flex-1 py-3.5 px-4 font-semibold text-sm rounded-xl transition-all border flex items-center justify-center gap-2 ${
                    isCopied
                      ? 'bg-[#245449] text-[#F8F4EB] border-[#245449]'
                      : 'bg-white hover:bg-[#F1ECE1] text-[#242824] border-[#D5CEBF]'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-[#E9BF69]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#4D534D]" />
                      <span>Copy Enquiry Message</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => setShowReviewStep(false)}
                  className="text-xs text-[#4D534D] hover:text-[#242824] underline transition-colors"
                >
                  ← Edit details (date, guests, activity)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
