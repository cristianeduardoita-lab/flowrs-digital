"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-56 md:pb-36 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Badge variant="outline" className="bg-white/5 border-white/10 px-4 md:px-5 py-2 rounded-full text-secondary flex items-center gap-2 text-xs md:text-sm">
              <Globe size={14} className="animate-pulse md:w-4 md:h-4" />
              {t('hero.badge')}
            </Badge>
          </div>
          
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t('hero.headline').split(' ').map((word: string, i: number) => 
              word === 'leads' || word === 'clientes' || word === 'prospectos' ? <span key={i} className="text-gradient"> {word}</span> : i === 0 ? word : ` ${word}`
            )}
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {t('hero.subheadline')}
          </p>
          
          <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 md:px-0">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30 group">
                <Link href="#contact" className="flex items-center gap-2 justify-center">
                  {t('hero.primaryCta')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 h-16 text-lg font-bold border-white/10 hover:bg-white/5">
                <Link href="#portfolio" className="justify-center">
                  {t('hero.secondaryCta')}
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center gap-3 md:gap-2">
              <p className="text-primary font-bold text-base md:text-lg text-center">
                {t('hero.pricing')}
              </p>
              <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-60 text-center px-4">
                {t('hero.target')}
              </p>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            {t('hero.features').map((feature: string) => (
              <div key={feature} className="flex items-center justify-center font-headline font-bold text-xs md:text-xl text-center">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}