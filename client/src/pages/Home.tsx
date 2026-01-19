import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <AboutSection />
        <VideoSection />
        <InstitutionsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
