import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CTASection from "@/components/sections/CTASection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import FAQSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";
import Hero from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StructureSection from "@/components/sections/StructureSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import UnitsSection from "@/components/sections/UnitsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-background">
      <main className="flex w-full flex-col">
        <Header />
        <Hero/>
        <PartnersSection/>
        <AboutSection />
        <StructureSection/>
        <DifferentialsSection/>
        <UnitsSection/>
        <ProcessSection/>
        <TargetAudienceSection/>
        <BenefitsSection/>
        <FAQSection/>
        <CTASection/>
        <FooterSection/>
      </main>
    </div>
  );
}