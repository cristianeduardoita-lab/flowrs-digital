
"use client";

import React from 'react';

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Tell me what you need",
      description: "We start with a quick call or message to discuss your goals, style, and requirements."
    },
    {
      num: "02",
      title: "I build the first version fast",
      description: "Within days, you'll see a working prototype of your site that we can start testing."
    },
    {
      num: "03",
      title: "We refine and polish",
      description: "Based on your feedback, I make adjustments until every detail is absolutely perfect."
    },
    {
      num: "04",
      title: "Your site goes live",
      description: "I handle the deployment and setup, ensuring your site is fast, secure, and ready for customers."
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-4">How it works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, streamlined process designed to get your business online without the headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl font-headline font-bold text-white/5 mb-6 group-hover:text-primary/20 transition-colors duration-500">
                  {step.num}
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
