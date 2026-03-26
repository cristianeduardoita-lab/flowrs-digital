
"use client";

import React from 'react';
import { ShieldCheck, Smartphone, Zap, MessageSquare, PlusCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Benefits() {
  const { t } = useLanguage();
  const icons = [
    <ShieldCheck key="1" className="text-primary" />,
    <Smartphone key="2" className="text-secondary" />,
    <MessageSquare key="3" className="text-accent" />,
    <Zap key="4" className="text-primary" />,
    <PlusCircle key="5" className="text-secondary" />
  ];

  const benefits = t('benefits.items').map((b: any, i: number) => ({
    ...b,
    icon: icons[i]
  }));

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="font-headline font-bold text-3xl md:text-6xl mb-6 md:mb-8 leading-tight">
              {t('benefits.title').split(' ').map((word: string, i: number) => 
                word === 'Digital?' ? <span key={i} className="text-gradient"> Digital?</span> : i === 0 ? word : ` ${word}`
              )}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 md:mb-12 leading-relaxed">
              {t('benefits.desc')}
            </p>
            <div className="space-y-6 md:space-y-8">
              {benefits.map((benefit: any, idx: number) => (
                <div key={idx} className="flex gap-4 md:gap-6 group">
                  <div className="mt-1 p-2.5 md:p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(benefit.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-1 md:mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
            <div className="aspect-square glass rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative border-white/10 max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
              <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-9xl font-headline font-black text-white/5 select-none tracking-tighter">
                FLOWRS
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-8 md:p-16">
                <div className="bg-background/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl animate-pulse">
                  <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-12 md:w-16 h-2 md:h-3 rounded-full bg-primary/30" />
                    <div className="w-8 md:w-10 h-2 md:h-3 rounded-full bg-secondary/30" />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="w-full h-4 md:h-5 rounded-lg bg-white/5" />
                    <div className="w-5/6 h-4 md:h-5 rounded-lg bg-white/5" />
                    <div className="w-2/3 h-4 md:h-5 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full blur-[80px] md:blur-[100px]" />
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-secondary/20 rounded-full blur-[80px] md:blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
