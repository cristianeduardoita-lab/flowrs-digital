
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            {/* Placeholder for real logo */}
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-headline font-bold text-lg md:text-xl tracking-tight hidden sm:inline-block">
            Flowrs Digital <span className="text-secondary">Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-white/10" />
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="text-xs font-bold tracking-tighter hover:text-secondary transition-colors px-2 py-1 flex items-center gap-2"
            >
              <Globe size={14} className="text-muted-foreground" />
              <span className={cn(language === 'en' ? 'text-white' : 'text-muted-foreground')}>EN</span>
              <span className="text-muted-foreground">|</span>
              <span className={cn(language === 'es' ? 'text-white' : 'text-muted-foreground')}>ES</span>
            </button>
            <Button asChild variant="default" className="rounded-full px-6 font-bold">
              <Link href="#contact">{t('nav.cta')}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="text-xs font-bold px-2 py-1 flex items-center gap-2"
          >
            <span className={cn(language === 'en' ? 'text-white' : 'text-muted-foreground')}>EN</span>
            <span className="text-muted-foreground">|</span>
            <span className={cn(language === 'es' ? 'text-white' : 'text-muted-foreground')}>ES</span>
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full h-14 rounded-full font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="#contact">{t('nav.cta')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
