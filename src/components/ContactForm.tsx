
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
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto glass rounded-[2.5rem] p-12 text-center">
            <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} />
            </div>
            <h2 className="font-headline font-bold text-4xl mb-4">Message Received!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for reaching out to Cristian Digital Studio. I'll review your project details and contact you very soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
              Send another message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline font-bold text-5xl md:text-6xl mb-6">Let's build <span className="text-gradient">something great.</span></h2>
            <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
              Ready to take your business to the next level? Fill out the form and I'll be in touch to discuss your project.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-secondary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Expert Consultation</h4>
                  <p className="text-muted-foreground">Free 15-minute discovery call to explore your project.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Fast Proposals</h4>
                  <p className="text-muted-foreground">Receive a detailed quote and timeline within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-dark border-white/10 rounded-[2.5rem] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" required className="bg-white/5 border-white/10 h-14" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 h-14" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Type</label>
                <Input placeholder="e.g. Local Restaurant, Law Firm" required className="bg-white/5 border-white/10 h-14" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                <Textarea placeholder="Tell me about your vision..." required className="bg-white/5 border-white/10 min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-bold gap-2 group">
                Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
