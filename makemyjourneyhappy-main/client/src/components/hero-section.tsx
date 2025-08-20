import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ThreeBackground from "./three-background";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Sacred
            <span className="block">India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl">
            Embark on spiritual journeys across India with our expertly crafted RAM, Buddha, and Shiva circuits. Experience divine destinations with comfort and authenticity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("packages")}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors"
            >
              Explore Packages
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors"
            >
              Plan Your Journey
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
