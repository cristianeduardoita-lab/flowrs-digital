
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Process() {
  const { t } = useLanguage();
  
  const steps = t('process.steps').map((s: any, i: number) => ({
    ...s,
    num: `0${i + 1}`
  }));

  return (
    <section id="process" className="py-20 md:py-32 bg-[#0d0e12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-headline font-bold text-3xl md:text-6xl mb-6">{t('process.title')}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t('process.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12">
          {steps.map((step: any, index: number) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-headline font-bold text-white/5 mb-6 md:mb-8 group-hover:text-primary/30 transition-all duration-700">
                  {step.num}
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
