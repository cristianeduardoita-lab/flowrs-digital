"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const [logoError, setLogoError] = useState(false);
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.cta'), href: '#contact' }
  ];

  return (
    <footer className="bg-[#0a0b0e] pt-20 md:pt-32 pb-12 md:pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="sm:col-span-2 space-y-6 md:space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 md:h-12 md:w-12 group-hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                {!logoError ? (
                  <Image
                    src="/logo.png"
                    alt="Flowrs Digital Studio logo"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold text-xl">
                    F
                  </div>
                )}
              </div>
              <span className="font-headline font-bold text-2xl md:text-3xl">
                Flowrs Digital <span className="text-secondary">Studio</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-lg md:text-xl max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4 md:gap-5">
              <Link href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Twitter size={20} className="md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Instagram size={20} className="md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Linkedin size={20} className="md:w-5 md:h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Github size={20} className="md:w-5 md:h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg md:text-xl mb-6 md:mb-8">{t('footer.navTitle')}</h4>
            <ul className="space-y-4 md:space-y-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-base md:text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg md:text-xl mb-6 md:mb-8">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4 md:space-y-5 text-muted-foreground text-base md:text-lg">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:flowrsdigital@gmail.com" className="hover:text-white transition-colors break-all">
                  flowrsdigital@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <a href="tel:15072306024" className="hover:text-white transition-colors">
                  (507) 230-6024
                </a>
              </li>
              <li>{t('footer.available')}</li>
              <li className="text-secondary font-bold">{t('footer.support')}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 md:pt-12 border-t border-white/5 gap-6 md:gap-8">
          <p className="text-muted-foreground text-sm md:text-base text-center md:text-left order-2 md:order-1">
            © {new Date().getFullYear()} Flowrs Digital Studio.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-muted-foreground order-1 md:order-2">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-white transition-colors font-bold"
            >
              {t('footer.backToTop')} <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}