
"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0b0e] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                C
              </div>
              <span className="font-headline font-bold text-2xl">
                Cristian <span className="text-secondary">Digital</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
              Helping small businesses and entrepreneurs establish a premium digital presence that drives results.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors text-white">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Portfolio', 'Process', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>hello@cristiandigital.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available 9AM - 6PM EST</li>
              <li>Bilingual Support</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cristian Digital Studio. All rights reserved. Designed for results.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-white transition-colors"
            >
              Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
