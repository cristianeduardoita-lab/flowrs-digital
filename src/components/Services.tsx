
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout, Zap, Code, CheckCircle2 } from 'lucide-react';

export function Services() {
  const highlights = ["Mobile-friendly", "Fast loading", "Conversion-focused", "Bilingual"];
  
  const services = [
    {
      title: "Websites for Local Businesses",
      description: "Simple, modern websites that help your business look professional and get more calls and customers.",
      icon: <Layout className="text-primary" size={36} />,
      features: ["Custom Lead Design", "SEO Foundation", "Professional Branding"]
    },
    {
      title: "Landing Pages in 24–48 Hours",
      description: "Fast one-page websites designed to turn visitors into calls and quote requests.",
      icon: <Zap className="text-secondary" size={36} />,
      features: ["Express Launch", "Ready-to-use CTA", "Mobile Optimization"]
    },
    {
      title: "Simple Apps & Automations",
      description: "Custom tools like quote forms, lead capture systems, and simple automations to help your business run better.",
      icon: <Code className="text-accent" size={36} />,
      features: ["Custom Quote Forms", "Lead Management", "Simple Workflows"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-headline font-bold text-3xl md:text-6xl mb-6">Service Offerings</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Direct, results-focused solutions to help your local business stand out and win more customers.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {highlights.map((h) => (
              <span key={h} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/5 bg-white/5 text-secondary">
                {h}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-dark border-white/5 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all" />
              <CardHeader className="pb-4">
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <CardTitle className="font-headline text-xl md:text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/90">
                      <CheckCircle2 size={18} className="text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
