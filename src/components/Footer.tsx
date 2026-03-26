
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
    <footer className="bg-[#0a0b0e] pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-primary/20">
                F
              </div>
              <span className="font-headline font-bold text-3xl">
                Flowrs <span className="text-secondary">Digital</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xl max-w-sm leading-relaxed">
              Helping local businesses and entrepreneurs establish a premium digital presence that drives real results.
            </p>
            <div className="flex items-center gap-5">
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Twitter size={22} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Instagram size={22} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Linkedin size={22} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/30 transition-all text-white hover:scale-110">
                <Github size={22} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-8">Navigation</h4>
            <ul className="space-y-5">
              {['Services', 'Portfolio', 'Process', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-white transition-colors text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-xl mb-8">Contact</h4>
            <ul className="space-y-5 text-muted-foreground text-lg">
              <li className="hover:text-white transition-colors cursor-pointer">hello@flowrs.digital</li>
              <li className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</li>
              <li>Available 9AM - 6PM EST</li>
              <li className="text-secondary font-bold">Bilingual Support</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-muted-foreground text-base text-center md:text-left">
            © {new Date().getFullYear()} Flowrs Digital Studio. Built for growth.
          </p>
          <div className="flex gap-10 text-base text-muted-foreground">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-white transition-colors font-bold"
            >
              Back to top <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
