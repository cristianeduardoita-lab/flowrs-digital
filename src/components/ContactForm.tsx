
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Inquiry Sent!",
      description: "I'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto glass rounded-[3rem] p-16 text-center shadow-2xl">
            <div className="w-24 h-24 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-10">
              <CheckCircle size={48} />
            </div>
            <h2 className="font-headline font-bold text-5xl mb-6">Message Received!</h2>
            <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
              Thank you for reaching out to Flowrs Digital Studio. I'll review your project details and contact you very soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full h-14 px-8 font-bold">
              Send another message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="font-headline font-bold text-5xl md:text-7xl mb-8">Let's build <span className="text-gradient">something great.</span></h2>
            <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
              Ready to take your business to the next level? Fill out the form below and I'll get back to you with a professional plan.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-secondary font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">Expert Consultation</h4>
                  <p className="text-muted-foreground text-lg">Free 15-minute discovery call to explore your project and goals.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-secondary font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">Fast Proposals</h4>
                  <p className="text-muted-foreground text-lg">Receive a detailed quote and timeline within 24 hours of our talk.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-dark border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                  <Input placeholder="John Doe" required className="bg-white/5 border-white/10 h-14 text-base focus:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 h-14 text-base focus:ring-primary/50" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Business Type</label>
                <Input placeholder="e.g. Local Restaurant, Contractor" required className="bg-white/5 border-white/10 h-14 text-base focus:ring-primary/50" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">How can I help?</label>
                <Textarea placeholder="Tell me about your vision..." required className="bg-white/5 border-white/10 min-h-[160px] text-base focus:ring-primary/50" />
              </div>
              <Button type="submit" className="w-full h-16 rounded-2xl text-xl font-bold gap-3 group">
                Send Inquiry <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
