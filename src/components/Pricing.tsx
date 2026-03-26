"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export function Pricing() {
  const { t } = useLanguage();
  const plans = t('pricing.plans');

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-headline font-bold text-3xl md:text-6xl mb-6">{t('pricing.title')}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan: any, idx: number) => (
            <Card 
              key={idx} 
              className={cn(
                "glass-dark border-white/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group overflow-hidden relative",
                plan.highlight && "border-primary/50 shadow-2xl shadow-primary/10 ring-1 ring-primary/30"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 p-4">
                  <Badge className="bg-primary text-white hover:bg-primary font-bold">
                    {t('pricing.recommended')}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pt-8 md:pt-10">
                <CardTitle className="font-headline text-xl mb-2 opacity-80">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold font-headline">${plan.price}</span>
                  <span className="text-muted-foreground text-sm font-medium">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-8">
                <Button 
                  asChild 
                  variant={plan.highlight ? "default" : "outline"} 
                  className={cn(
                    "w-full h-12 rounded-xl font-bold",
                    plan.highlight ? "shadow-lg shadow-primary/20" : "border-white/10 hover:bg-white/5"
                  )}
                >
                  <a href="#contact">
                    {t('pricing.cta')}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}