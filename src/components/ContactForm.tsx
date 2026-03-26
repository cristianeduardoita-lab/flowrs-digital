"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, Phone, MessageSquare, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { t } = useLanguage();

  const phoneNumber = "15072306024";
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: t('contact.form.successTitle'),
      description: t('contact.form.successDesc'),
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto glass rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 text-center shadow-2xl">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10">
              <CheckCircle className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-5xl mb-6">{t('contact.form.successTitle')}</h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
              {t('contact.form.successDesc')}
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full h-14 px-8 font-bold">
              {t('contact.form.successAction')}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="font-headline font-bold text-3xl md:text-7xl mb-6 md:mb-8 leading-tight">
              {t('contact.title').split(' ').map((word: string, i: number, arr: string[]) => 
                i >= arr.length - 2 ? <span key={i} className="text-gradient"> {word}</span> : i === 0 ? word : ` ${word}`
              )}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 md:mb-12 leading-relaxed">
              {t('contact.desc')}
            </p>

            {/* Quick Quote Highlight */}
            <div className="mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 inline-block">
              <p className="text-primary font-bold text-lg flex items-center gap-3">
                <MessageSquare className="animate-pulse" size={20} />
                {t('contact.quickQuote')}
              </p>
            </div>
            
            <div className="space-y-8 md:space-y-10 mb-12">
              {t('contact.steps').map((step: any, idx: number) => (
                <div key={idx} className="flex gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-secondary font-bold text-lg md:text-xl">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl md:text-2xl mb-1 md:mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-base md:text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Options */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <h4 className="font-headline font-bold text-xl mb-4 text-white/50 uppercase tracking-widest text-sm">
                {t('contact.directContact')}
              </h4>
              <div className="flex flex-wrap gap-4 md:gap-8">
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-lg md:text-xl font-bold hover:text-primary transition-colors">
                  <Phone size={20} className="text-secondary" />
                  (507) 230-6024
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg md:text-xl font-bold hover:text-primary transition-colors">
                  <MessageSquare size={20} className="text-[#25D366]" />
                  WhatsApp
                </a>
                <a href="mailto:flowrsdigital@gmail.com" className="flex items-center gap-3 text-lg md:text-xl font-bold hover:text-primary transition-colors">
                  <Mail size={20} className="text-secondary" />
                  flowrsdigital@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-dark border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact.form.name')}</label>
                  <Input placeholder={t('contact.form.placeholderName')} required className="bg-white/5 border-white/10 h-12 md:h-14 text-sm md:text-base focus:ring-primary/50" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact.form.email')}</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 h-12 md:h-14 text-sm md:text-base focus:ring-primary/50" />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact.form.businessType')}</label>
                <Input placeholder={t('contact.form.placeholderBusiness')} required className="bg-white/5 border-white/10 h-12 md:h-14 text-sm md:text-base focus:ring-primary/50" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact.form.help')}</label>
                <Textarea placeholder={t('contact.form.placeholderHelp')} required className="bg-white/5 border-white/10 min-h-[140px] md:min-h-[160px] text-sm md:text-base focus:ring-primary/50" />
              </div>
              <Button type="submit" className="w-full h-14 md:h-16 rounded-2xl text-lg md:text-xl font-bold gap-3 group">
                {t('contact.form.submit')} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}