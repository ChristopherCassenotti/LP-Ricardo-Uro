import AboutSection from "@/components/sections/AboutSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import Header from "@/components/sections/HeaderSection";
import Hero from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import StructureSection from "@/components/sections/StructureSection";
import UnitsSection from "@/components/sections/UnitsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <main className="flex w-full flex-col">
        <Header />
        <Hero/>
        <PartnersSection/>
        <AboutSection />
        <StructureSection/>
        <DifferentialsSection/>
        <UnitsSection/>
      </main>
    </div>
  );
}