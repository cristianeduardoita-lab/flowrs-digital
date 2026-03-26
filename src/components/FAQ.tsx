
"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "What type of businesses do you work with?",
      a: "I primarily work with small businesses, local service providers (like contractors, repair services, or salons), and entrepreneurs who need a professional and effective digital presence."
    },
    {
      q: "Can you make bilingual websites?",
      a: "Absolutely! I offer full bilingual support in English and Spanish, from the development process to the final content on your website."
    },
    {
      q: "How fast can a site be ready?",
      a: "Standard landing pages can be ready in as little as 24–48 hours. More complex websites usually take 1–2 weeks from start to launch."
    },
    {
      q: "Can you also build small tools or custom features?",
      a: "Yes. I can create custom calculators, booking systems, quote forms, and simple automated workflows tailored to your specific business needs."
    },
    {
      q: "Do you provide hosting and maintenance?",
      a: "I will help you set up reliable hosting and can provide ongoing maintenance packages to ensure your site stays fast and secure."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0d0e12]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-4">Questions?</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about starting your project.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-white/5 bg-white/5 rounded-2xl px-6 border">
              <AccordionTrigger className="hover:no-underline font-headline text-lg py-6 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
