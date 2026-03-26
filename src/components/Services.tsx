
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout, Zap, Code, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  const icons = [<Layout key="1" className="text-primary" />, <Zap key="2" className="text-secondary" />, <Code key="3" className="text-accent" />];
  
  const services = t('services.items').map((s: any, i: number) => ({
    ...s,
    icon: icons[i]
  }));

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-headline font-bold text-3xl md:text-6xl mb-6">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t('services.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {t('services.highlights').map((h: string) => (
              <span key={h} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/5 bg-white/5 text-secondary">
                {h}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service: any, index: number) => (
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
                  {service.features.map((feature: string, i: number) => (
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
