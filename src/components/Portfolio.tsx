
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  
  const projects = t('portfolio.items').map((p: any, i: number) => {
    const imageData = PlaceHolderImages.find(img => img.id === `portfolio-${i + 1}`);
    return {
      ...p,
      image: imageData?.imageUrl,
      hint: imageData?.imageHint || 'web design'
    };
  });

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="font-headline font-bold text-3xl md:text-5xl mb-4">{t('portfolio.title')}</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              {t('portfolio.desc')}
            </p>
          </div>
          <div className="flex items-center gap-2 text-secondary font-medium cursor-pointer group w-fit">
            {t('portfolio.viewFull')} <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project: any, index: number) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-muted/20">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={project.hint}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    Preview Image Missing
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="w-12 h-12 rounded-full bg-white text-background flex items-center justify-center">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{project.category}</p>
                <h3 className="font-headline text-xl md:text-2xl group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
