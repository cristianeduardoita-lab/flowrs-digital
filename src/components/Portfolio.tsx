"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: "English Learning Demo",
      category: "Educational Web Tool",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageHint || 'language learning',
      description: "Interactive language learning platform with progress tracking and quizzes."
    },
    {
      title: "Contractor Lead Website",
      category: "Local Business",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-2')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'portfolio-2')?.imageHint || 'construction contractor',
      description: "High-performance site for a construction firm focused on capturing inquiries."
    },
    {
      title: "Computer Support Page",
      category: "Service Provider",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-3')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'portfolio-3')?.imageHint || 'computer repair',
      description: "Modern landing page for tech support services with automated booking."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-headline font-bold text-4xl md:text-5xl mb-4">Sample Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A collection of websites and tools built to deliver results and exceptional user experiences.
            </p>
          </div>
          <div className="flex items-center gap-2 text-secondary font-medium cursor-pointer group">
            View full portfolio <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
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
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">{project.category}</p>
                <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
