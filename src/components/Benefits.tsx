
"use client";

import React from 'react';
import { ShieldCheck, Smartphone, Zap, MessageSquare, PlusCircle } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck className="text-primary" />,
      title: "Premium Visual Style",
      desc: "Modern, high-end design that builds instant credibility and trust."
    },
    {
      icon: <Smartphone className="text-secondary" />,
      title: "Mobile-First Design",
      desc: "Your site will look and work perfectly on every device, every time."
    },
    {
      icon: <MessageSquare className="text-accent" />,
      title: "Bilingual Support",
      desc: "English and Spanish communication and content creation for your brand."
    },
    {
      icon: <Zap className="text-primary" />,
      title: "Fast Turnaround",
      desc: "Get your digital presence launched in days, not months."
    },
    {
      icon: <PlusCircle className="text-secondary" />,
      title: "Flexible Upgrades",
      desc: "Built with modern tech that can grow as your business grows."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Why work with <span className="text-gradient">Cristian Digital Studio?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I specialize in helping small businesses bridge the gap between their physical excellence and their digital presence.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-[3rem] overflow-hidden relative border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-headline font-black text-white/5 select-none">
                PREMIUM
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-12">
                <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl animate-pulse">
                  <div className="flex gap-3 mb-4">
                    <div className="w-12 h-2 rounded-full bg-primary/20" />
                    <div className="w-8 h-2 rounded-full bg-secondary/20" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-4 rounded-lg bg-white/5" />
                    <div className="w-3/4 h-4 rounded-lg bg-white/5" />
                    <div className="w-1/2 h-4 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
