
"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/context/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-[#0d0e12]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-4">{t('faq.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('faq.desc')}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t('faq.items').map((faq: any, idx: number) => (
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
