"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'es')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations: Record<Language, any> = {
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      faq: 'FAQ',
      cta: 'Get My Website',
    },
    hero: {
      badge: 'English & Spanish Support',
      headline: 'I build modern websites for small businesses that want more leads.',
      subheadline: 'Clean, modern websites designed to help your business look professional and generate more calls, messages, and customers.',
      primaryCta: 'Get My Website',
      secondaryCta: 'View Sample Work',
      pricing: 'Starting from $149 • Fast delivery • English / Spanish',
      target: 'Perfect for contractors, cleaners, small businesses, and local services.',
      features: ['MODERN DESIGN', 'FAST DELIVERY', 'PREMIUM UX', 'LEAD FOCUSED'],
    },
    services: {
      title: 'Service Offerings',
      desc: 'Direct, results-focused solutions to help your local business stand out and win more customers.',
      highlights: ["Mobile-friendly", "Fast loading", "Conversion-focused", "Bilingual"],
      items: [
        {
          title: "Websites for Local Businesses",
          description: "Simple, modern websites that help your business look professional and get more calls and customers.",
          features: ["Custom Lead Design", "SEO Foundation", "Professional Branding"]
        },
        {
          title: "Landing Pages in 24–48 Hours",
          description: "Fast one-page websites designed to turn visitors into calls and quote requests.",
          features: ["Express Launch", "Ready-to-use CTA", "Mobile Optimization"]
        },
        {
          title: "Simple Apps & Automations",
          description: "Custom tools like quote forms, lead capture systems, and simple automations to help your business run better.",
          features: ["Custom Quote Forms", "Lead Management", "Simple Workflows"]
        }
      ]
    },
    portfolio: {
      title: 'Sample Work',
      desc: 'A collection of websites and tools built to deliver results and exceptional user experiences.',
      viewFull: 'View full portfolio',
      items: [
        {
          title: "English Learning Demo",
          category: "Educational Web Tool",
          description: "Interactive language learning platform with progress tracking and quizzes."
        },
        {
          title: "Contractor Lead Website",
          category: "Local Business",
          description: "High-performance site for a construction firm focused on capturing inquiries."
        },
        {
          title: "Computer Support Page",
          category: "Service Provider",
          description: "Modern landing page for tech support services with automated booking."
        }
      ]
    },
    process: {
      title: 'How it works',
      desc: 'A simple, high-speed process designed to get your business online with zero headaches.',
      steps: [
        {
          title: "Tell me your goals",
          description: "A quick message or call to discuss your business needs and requirements."
        },
        {
          title: "Fast Prototyping",
          description: "I build the first version of your site in days, not weeks, so you can see results fast."
        },
        {
          title: "Refine & Polished",
          description: "We tweak the design and content until it perfectly represents your brand."
        },
        {
          title: "Live & Launch",
          description: "Your site goes live, fully optimized and ready to start generating new leads."
        }
      ]
    },
    benefits: {
      title: 'Why Flowrs Digital?',
      desc: 'I specialize in helping local businesses bridge the gap between their physical work and their digital presentation.',
      items: [
        { title: "Premium Visual Style", desc: "Modern, high-end design that builds instant credibility and trust with your customers." },
        { title: "Mobile-First Design", desc: "Your site will look and work perfectly on every device, especially phones." },
        { title: "Bilingual Support", desc: "Full English and Spanish communication and content creation for your brand." },
        { title: "Fast Turnaround", desc: "Get your digital presence launched in as little as 48 hours." },
        { title: "Scalable Tech", desc: "Built with modern frameworks that grow as your business grows." }
      ]
    },
    pricing: {
      title: "Simple pricing to get your business online",
      subtitle: "Start fast and grow with flexible monthly support",
      cta: "Choose Plan",
      recommended: "Recommended",
      plans: [
        {
          name: "Website Starter",
          price: "99",
          period: "once",
          features: ["Modern one-page website", "Mobile-friendly design", "Contact section", "Fast setup"]
        },
        {
          name: "Monthly Basic",
          price: "29",
          period: "month",
          features: ["Hosting", "Small updates", "Basic support"]
        },
        {
          name: "Monthly Growth",
          price: "49",
          period: "month",
          highlight: true,
          features: ["Everything in Basic", "Monthly improvements", "Content updates", "Optimization"]
        },
        {
          name: "Monthly Pro",
          price: "79",
          period: "month",
          features: ["Everything in Growth", "Simple performance reports", "Priority support", "Continuous improvements"]
        }
      ]
    },
    faq: {
      title: 'Questions?',
      desc: 'Everything you need to know about starting your project.',
      items: [
        { q: "What type of businesses do you work with?", a: "I primarily work with small businesses, local service providers (like contractors, repair services, or salons), and entrepreneurs who need a professional and effective digital presence." },
        { q: "Can you make bilingual websites?", a: "Absolutely! I offer full bilingual support in English and Spanish, from the development process to the final content on your website." },
        { q: "How fast can a site be ready?", a: "Standard landing pages can be ready in as little as 24–48 hours. More complex websites usually take 1–2 weeks from start to launch." },
        { q: "Can you also build small tools or custom features?", a: "Yes. I can create custom calculators, booking systems, quote forms, and simple automated workflows tailored to your specific business needs." },
        { q: "Do you provide hosting and maintenance?", a: "I will help you set up reliable hosting and can provide ongoing maintenance packages to ensure your site stays fast and secure." }
      ]
    },
    contact: {
      title: "Let's build something great.",
      desc: "Ready to take your business to the next level? Fill out the form below and I'll get back to you with a professional plan.",
      quickQuote: "Text or message me directly for a quick quote.",
      directContact: "Direct Contact",
      steps: [
        { title: "Expert Consultation", desc: "Free 15-minute discovery call to explore your project and goals." },
        { title: "Fast Proposals", desc: "Receive a detailed quote and timeline within 24 hours of our talk." }
      ],
      form: {
        name: "Name",
        email: "Email",
        businessType: "Business Type",
        help: "How can I help?",
        placeholderName: "John Doe",
        placeholderHelp: "Tell me about your vision...",
        placeholderBusiness: "e.g. Local Restaurant, Contractor",
        submit: "Send Inquiry",
        successTitle: "Message Received!",
        successDesc: "Thank you for reaching out to Flowrs Digital Studio. I'll review your project details and contact you very soon.",
        successAction: "Send another message"
      }
    },
    whatsapp: {
      message: "Hi, I'm interested in getting a website for my business."
    },
    footer: {
      tagline: "Helping local businesses and entrepreneurs establish a premium digital presence that drives real results.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      available: "Available 9AM - 6PM EST",
      support: "Bilingual Support",
      backToTop: "Back to top"
    }
  },
  es: {
    nav: {
      services: 'Servicios',
      portfolio: 'Portafolio',
      process: 'Proceso',
      faq: 'Preguntas',
      cta: 'Obtener Mi Web',
    },
    hero: {
      badge: 'Soporte en Inglés y Español',
      headline: 'Construyo sitios web modernos para pequeñas empresas que buscan más prospectos.',
      subheadline: 'Sitios web limpios y modernos diseñados para que tu negocio se vea profesional y genere más llamadas, mensajes y clientes.',
      primaryCta: 'Obtener Mi Web',
      secondaryCta: 'Ver Portafolio',
      pricing: 'Desde $149 • Entrega rápida • Inglés / Español',
      target: 'Ideal para contratistas, servicios de limpieza, pequeñas empresas y negocios locales.',
      features: ['DISEÑO MODERNO', 'ENTREGA RÁPIDA', 'UX PREMIUM', 'ENFOQUE EN VENTAS'],
    },
    services: {
      title: 'Nuestros Servicios',
      desc: 'Soluciones directas enfocadas en resultados para que tu negocio local destaque y gane más clientes.',
      highlights: ["Adaptado a móviles", "Carga rápida", "Enfocado en ventas", "Bilingüe"],
      items: [
        {
          title: "Webs para Negocios Locales",
          description: "Sitios web simples y modernos que ayudan a que tu negocio se vea profesional y consiga más llamadas y clientes.",
          features: ["Diseño para Prospectos", "Optimización SEO", "Branding Profesional"]
        },
        {
          title: "Landing Pages en 24–48 Horas",
          description: "Sitios de una sola página diseñados para convertir visitantes en llamadas y solicitudes de presupuesto.",
          features: ["Lanzamiento Exprés", "Llamadas a la Acción", "Optimización Móvil"]
        },
        {
          title: "Apps y Automatizaciones",
          description: "Herramientas personalizadas como formularios de presupuesto, captura de prospectos y flujos simples.",
          features: ["Formularios a Medida", "Gestión de Prospectos", "Flujos de Trabajo"]
        }
      ]
    },
    portfolio: {
      title: 'Trabajos Realizados',
      desc: 'Una colección de sitios y herramientas construidos para entregar resultados y experiencias excepcionales.',
      viewFull: 'Ver portafolio completo',
      items: [
        {
          title: "Demo de Aprendizaje Inglés",
          category: "Herramienta Educativa",
          description: "Plataforma interactiva con seguimiento de progreso y cuestionarios."
        },
        {
          title: "Web para Contratistas",
          category: "Negocio Local",
          description: "Sitio de alto rendimiento enfocado en capturar consultas de clientes."
        },
        {
          title: "Soporte Técnico Informático",
          category: "Proveedor de Servicios",
          description: "Landing page moderna con sistema de reserva automatizada."
        }
      ]
    },
    process: {
      title: 'Cómo trabajamos',
      desc: 'Un proceso simple y veloz diseñado para poner tu negocio en línea sin dolores de cabeza.',
      steps: [
        {
          title: "Tus Objetivos",
          description: "Un mensaje o llamada rápida para discutir las metas y requisitos de tu negocio."
        },
        {
          title: "Prototipado Rápido",
          description: "Construyo la primera versión de tu sitio en días, no semanas, para ver resultados pronto."
        },
        {
          title: "Refinado y Pulido",
          description: "Ajustamos el diseño y el contenido hasta que represente perfectamente a tu marca."
        },
        {
          title: "Lanzamiento en Vivo",
          description: "Tu sitio se lanza, totalmente optimizado y listo para generar nuevos prospectos."
        }
      ]
    },
    benefits: {
      title: '¿Por qué Flowrs Digital?',
      desc: 'Me especializo en ayudar a negocios locales a cerrar la brecha entre su trabajo físico y su presencia digital.',
      items: [
        { title: "Estilo Visual Premium", desc: "Diseño moderno que genera credibilidad y confianza instantánea con tus clientes." },
        { title: "Diseño Mobile-First", desc: "Tu sitio se verá y funcionará perfecto en cada dispositivo, especialmente celulares." },
        { title: "Soporte Bilingüe", desc: "Comunicación y creación de contenido completo en Inglés y Español para tu marca." },
        { title: "Entrega Rápida", desc: "Lanza tu presencia digital en tan solo 48 horas." },
        { title: "Tecnología Escalable", desc: "Construido con frameworks modernos que crecen con tu negocio." }
      ]
    },
    pricing: {
      title: "Precios simples para poner tu negocio en línea",
      subtitle: "Empieza rápido y crece con soporte mensual flexible",
      cta: "Elegir Plan",
      recommended: "Recomendado",
      plans: [
        {
          name: "Website Starter",
          price: "99",
          period: "pago único",
          features: ["Web moderna de una página", "Diseño para móviles", "Sección de contacto", "Configuración rápida"]
        },
        {
          name: "Plan Básico",
          price: "29",
          period: "mes",
          features: ["Alojamiento (Hosting)", "Pequeñas actualizaciones", "Soporte básico"]
        },
        {
          name: "Plan Crecimiento",
          price: "49",
          period: "mes",
          highlight: true,
          features: ["Todo lo del Básico", "Mejoras mensuales", "Actualización de contenido", "Optimización"]
        },
        {
          name: "Plan Pro",
          price: "79",
          period: "mes",
          features: ["Todo lo de Crecimiento", "Reportes de rendimiento", "Soporte prioritario", "Mejoras continuas"]
        }
      ]
    },
    faq: {
      title: '¿Dudas?',
      desc: 'Todo lo que necesitas saber antes de comenzar tu proyecto.',
      items: [
        { q: "¿Con qué tipo de negocios trabajas?", a: "Principalmente con pequeñas empresas, proveedores de servicios locales (contratistas, salones, limpieza) y emprendedores." },
        { q: "¿Haces sitios web bilingües?", a: "¡Claro! Ofrezco soporte completo en Inglés y Español, desde el desarrollo hasta el contenido final." },
        { q: "¿Qué tan rápido puede estar listo?", a: "Las landing pages pueden estar en 24–48 horas. Webs más complejas suelen tardar de 1 a 2 semanas." },
        { q: "¿Puedes crear herramientas personalizadas?", a: "Sí. Puedo crear calculadoras, sistemas de reserva, formularios de cotización y flujos automatizados." },
        { q: "¿Ofreces hosting y mantenimiento?", a: "Te ayudo a configurar un hosting confiable y ofrezco paquetes de mantenimiento para que tu web siga segura." }
      ]
    },
    contact: {
      title: "Construyamos algo grande.",
      desc: "Si estás listo para llevar tu negocio al siguiente nivel, llena el formulario y te contactaré con un plan profesional.",
      quickQuote: "Envíame un mensaje directo para una cotización rápida.",
      directContact: "Contacto Directo",
      steps: [
        { title: "Consulta Experta", desc: "Llamada gratuita de 15 minutos para explorar tu proyecto y objetivos." },
        { title: "Propuestas Rápidas", desc: "Recibe una cotización detallada y cronograma en menos de 24 horas." }
      ],
      form: {
        name: "Nombre",
        email: "Correo",
        businessType: "Tipo de Negocio",
        help: "¿Cómo puedo ayudarte?",
        placeholderName: "Juan Pérez",
        placeholderHelp: "Cuéntame sobre tu visión...",
        placeholderBusiness: "ej. Restaurante Local, Contratista",
        submit: "Enviar Consulta",
        successTitle: "¡Mensaje Recibido!",
        successDesc: "Gracias por contactar a Flowrs Digital Studio. Revisaré tus detalles y te contactaré muy pronto.",
        successAction: "Enviar otro mensaje"
      }
    },
    whatsapp: {
      message: "Hola, estoy interesado en obtener un sitio web para mi negocio."
    },
    footer: {
      tagline: "Ayudando a negocios locales y emprendedores a establecer una presencia digital premium que impulsa resultados.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      available: "Disponible 9AM - 6PM EST",
      support: "Soporte Bilingüe",
      backToTop: "Volver arriba"
    }
  }
};