
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-36 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Badge variant="outline" className="bg-white/5 border-white/10 px-5 py-2 rounded-full text-secondary flex items-center gap-2 text-sm">
              <Globe size={16} className="animate-pulse" />
              English & Spanish Support
            </Badge>
          </div>
          
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            I build modern websites for small businesses <span className="text-gradient">that want more leads.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Clean, modern websites designed to help your business look professional and generate more calls, messages, and customers.
          </p>
          
          <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30 group">
                <Link href="#contact" className="flex items-center gap-2">
                  Get My Website <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold border-white/10 hover:bg-white/5">
                <Link href="#portfolio">
                  View Sample Work
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-primary font-bold text-lg">
                Starting from $149 • Fast delivery • English / Spanish
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-medium opacity-60">
                Perfect for contractors, cleaners, small businesses, and local services.
              </p>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
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
