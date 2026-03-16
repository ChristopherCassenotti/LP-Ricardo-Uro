import AboutSection from "@/components/sections/AboutSection";
import Header from "@/components/sections/HeaderSection";
import Hero from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <main className="flex w-full flex-col">
        <Header />
        <Hero/>
        <PartnersSection/>
        <AboutSection />
      </main>
    </div>
  );
}