
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout, Zap, Code, CheckCircle2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Websites for Local Businesses",
      description: "Modern sites that help small businesses look professional, build trust, and get more calls or leads.",
      icon: <Layout className="text-primary" size={32} />,
      features: ["Custom Design", "SEO Optimized", "Mobile First"]
    },
    {
      title: "Landing Pages in 24–48 Hours",
      description: "High-converting one-page websites for service businesses, promotions, personal brands, or quick launches.",
      icon: <Zap className="text-secondary" size={32} />,
      features: ["Fast Delivery", "Conversion Focused", "Analytics Setup"]
    },
    {
      title: "Simple Apps & Automations",
      description: "Useful tools like quote forms, calculators, lead capture systems, and custom automated workflows.",
      icon: <Code className="text-accent" size={32} />,
      features: ["Interactive Tools", "Workflow Automation", "API Integration"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-4">Service Offerings</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored digital solutions to help your business stand out and grow in a competitive market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-dark border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all" />
              <CardHeader className="pb-4">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-secondary" />
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
