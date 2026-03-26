
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Badge variant="outline" className="bg-white/5 border-white/10 px-4 py-1.5 rounded-full text-secondary flex items-center gap-2">
              <Globe size={14} className="animate-pulse" />
              Bilingual Support: English & Spanish
            </Badge>
          </div>
          
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <span className="text-gradient">I build modern websites</span> and digital tools.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Clean design, premium presentation, and pages created to help local businesses look more professional and get more leads.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base font-semibold shadow-xl shadow-primary/20 group">
              <Link href="#contact" className="flex items-center gap-2">
                Request a Website <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-semibold border-white/10 hover:bg-white/5">
              <Link href="#portfolio">
                View Sample Work
              </Link>
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center justify-center font-headline font-bold text-xl">MODERN DESIGN</div>
            <div className="flex items-center justify-center font-headline font-bold text-xl">FAST DELIVERY</div>
            <div className="flex items-center justify-center font-headline font-bold text-xl">PREMIUM UX</div>
            <div className="flex items-center justify-center font-headline font-bold text-xl">LEAD FOCUSED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
