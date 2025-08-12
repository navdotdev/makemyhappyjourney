import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatesCarousel from "@/components/states-carousel";
import TourPackages from "@/components/tour-packages";
import ServicesSection from "@/components/services-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <HeroSection />
      <StatesCarousel />
      <TourPackages />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
