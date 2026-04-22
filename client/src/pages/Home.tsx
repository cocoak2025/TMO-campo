import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickContactSection } from "@/components/sections/QuickContactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TarifsSection } from "@/components/sections/TarifsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ZonesSection } from "@/components/sections/ZonesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <QuickContactSection />
        <ProcessSection />
        <ServicesSection />
        <TarifsSection />
        <AboutSection />
        <VideoSection />
        <ZonesSection />
        <TestimonialsSection />
        <InstitutionsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCallButton />
    </div>
  );
}
