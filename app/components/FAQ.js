"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How far in advance should I place a custom order?",
    answer:
      "For birthday and celebration cakes, reach out at least two to three weeks ahead. For wedding cakes, three to six months gives us time to design and hold the date.",
  },
  {
    question: "Do you offer allergy-friendly or dietary options?",
    answer:
      "We can make eggless and gluten-friendly versions of many flavours. Our kitchen also handles dairy, gluten, and nuts, so we cannot promise an allergen-free environment.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Each cake is quoted from size, tiers, and the complexity of the piping. Once you send an enquiry, we reply with a detailed quote.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes. We arrange pickup in Surrey and delivery across the city. Fees depend on distance and the size of the cake. Large tiered cakes are delivered by us so they arrive set and intact.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-10 text-center font-display text-4xl italic text-navy md:text-5xl">
        Questions
      </h2>
      <div className="divide-y divide-navy/10 border-y border-navy/10">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-display text-lg text-navy">
                  {faq.question}
                </span>
                <span className="ml-4 font-body text-gold">
                  {open ? "–" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-body leading-relaxed text-ink/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
