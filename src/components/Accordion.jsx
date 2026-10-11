import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items = [] }) {
  // Keep first open by default or all collapsed
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="divide-y divide-[#E2DDD0] border-y border-[#E2DDD0]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-btn-${item.id || index}`;
        const panelId = `faq-panel-${item.id || index}`;

        return (
          <div key={item.id || index} className="py-4 sm:py-5">
            <h3 className="text-base sm:text-lg">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full text-left font-serif font-bold text-[#242824] flex items-center justify-between gap-4 py-1 hover:text-[#245449] transition-colors focus-visible:ring-2 focus-visible:ring-[#245449] rounded-lg"
              >
                <span>{item.question}</span>
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? 'bg-[#245449] text-[#F8F4EB] rotate-180'
                      : 'bg-[#DCE6D9] text-[#245449]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`pt-3 text-sm sm:text-base text-[#535953] leading-relaxed transition-all duration-200 ${
                isOpen ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <p className="max-w-3xl">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
