import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Process } from '@/components/Process';
import { Benefits } from '@/components/Benefits';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Benefits />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </main>
  );
}