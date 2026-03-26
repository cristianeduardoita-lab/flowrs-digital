
"use client";

import React, { useState } from 'react';
import { suggestWebsiteFeatures, type AiWebsiteFeatureSuggesterOutput } from '@/ai/flows/ai-website-feature-suggester';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, Lightbulb } from 'lucide-react';

export function ProjectIdeaGenerator() {
  const [businessType, setBusinessType] = useState('');
  const [businessGoals, setBusinessGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AiWebsiteFeatureSuggesterOutput | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !businessGoals) return;
    
    setLoading(true);
    try {
      const result = await suggestWebsiteFeatures({ businessType, businessGoals });
      setSuggestions(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 container mx-auto px-6">
      <div className="glass-dark border-white/10 rounded-[2rem] p-6 md:p-12 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-bold mb-4 md:mb-6">
              <Sparkles size={14} className="md:w-4 md:h-4" />
              AI Powered Concept Lab
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-5xl mb-4">Not sure what you need?</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Input your business details and our AI will suggest high-impact features specifically for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <form onSubmit={handleGenerate} className="lg:col-span-2 space-y-5 md:space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground">Business Type</label>
                <Input 
                  placeholder="e.g. Local Pizza Shop, Yoga Instructor" 
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="bg-white/5 border-white/10 h-12 focus:ring-primary text-sm md:text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Goals</label>
                <Textarea 
                  placeholder="e.g. Get more phone calls, showcase student work" 
                  value={businessGoals}
                  onChange={(e) => setBusinessGoals(e.target.value)}
                  className="bg-white/5 border-white/10 min-h-[100px] md:min-h-[120px] focus:ring-primary text-sm md:text-base"
                  required
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-14 rounded-xl font-bold gap-2 text-base md:text-lg">
                {loading ? <Loader2 className="animate-spin" /> : <Lightbulb size={20} />}
                Generate Ideas
              </Button>
            </form>

            <div className="lg:col-span-3 min-h-[250px] md:min-h-[300px] flex flex-col">
              {!suggestions && !loading ? (
                <div className="flex-1 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-8 md:p-12 opacity-30">
                  <Sparkles size={40} className="mb-4 md:w-12 md:h-12" />
                  <p className="text-sm md:text-base">Your AI suggestions will appear here</p>
                </div>
              ) : loading ? (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4 py-12">
                  <Loader2 className="animate-spin text-primary" size={32} />
                  <p className="text-muted-foreground animate-pulse text-sm md:text-base">Consulting the digital oracle...</p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-right duration-500">
                  {suggestions?.suggestions.map((item, idx) => (
                    <Card key={idx} className="bg-white/5 border-white/10 hover:border-accent/30 transition-colors">
                      <CardHeader className="pb-2 p-4 md:p-6">
                        <CardTitle className="text-accent font-headline text-base md:text-lg">{item.featureName}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                        <p className="text-xs md:text-sm text-foreground/90 mb-2 leading-relaxed">{item.description}</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground italic leading-relaxed">Why: {item.relevanceReason}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
