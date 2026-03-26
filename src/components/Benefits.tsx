
"use client";

import React from 'react';
import { ShieldCheck, Smartphone, Zap, MessageSquare, PlusCircle } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck className="text-primary" />,
      title: "Premium Visual Style",
      desc: "Modern, high-end design that builds instant credibility and trust with your customers."
    },
    {
      icon: <Smartphone className="text-secondary" />,
      title: "Mobile-First Design",
      desc: "Your site will look and work perfectly on every device, especially phones."
    },
    {
      icon: <MessageSquare className="text-accent" />,
      title: "Bilingual Support",
      desc: "Full English and Spanish communication and content creation for your brand."
    },
    {
      icon: <Zap className="text-primary" />,
      title: "Fast Turnaround",
      desc: "Get your digital presence launched in as little as 48 hours."
    },
    {
      icon: <PlusCircle className="text-secondary" />,
      title: "Scalable Tech",
      desc: "Built with modern frameworks that grow as your business grows."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline font-bold text-4xl md:text-6xl mb-8 leading-tight">
              Why <span className="text-gradient">Flowrs Digital?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
              I specialize in helping local businesses bridge the gap between their physical work and their digital presentation.
            </p>
            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-[3.5rem] overflow-hidden relative border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
              <div className="absolute inset-0 flex items-center justify-center text-9xl font-headline font-black text-white/5 select-none tracking-tighter">
                FLOWRS
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-16">
                <div className="bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl animate-pulse">
                  <div className="flex gap-4 mb-6">
                    <div className="w-16 h-3 rounded-full bg-primary/30" />
                    <div className="w-10 h-3 rounded-full bg-secondary/30" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-5 rounded-lg bg-white/5" />
                    <div className="w-5/6 h-5 rounded-lg bg-white/5" />
                    <div className="w-2/3 h-5 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
