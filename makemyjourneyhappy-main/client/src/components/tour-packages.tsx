import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Mountain, Heart, Sun } from "lucide-react";

const packages = [
  {
    title: "RAM Circuit",
    icon: Mountain,
    description: "Experience the divine journey of Lord Rama through Ayodhya, Chitrakoot, and other sacred places mentioned in the Ramayana.",
    destinations: "Ayodhya, Chitrakoot, Nasik, Hampi",
    image: "https://github.com/Jatind13/Assets-at-NavDotDev/blob/29e2b6f8368d24947cc354ef8c8085a0fcaf249e/ChatGPT%20Image%20Aug%2020%2C%202025%2C%2007_43_05%20PM.png",
    alt: "Ram temple with traditional architecture"
  },
  {
    title: "Buddha Circuit",
    icon: Heart,
    description: "Follow the enlightened path of Buddha through Bodh Gaya, Sarnath, Kushinagar, and other places where he lived and taught.",
    destinations: "Bodh Gaya, Sarnath, Kushinagar, Rajgir",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Buddha statue in meditation with lotus",
    popular: true
  },
  {
    title: "Shiva Circuit",
    icon: Sun,
    description: "Discover the power of Lord Shiva through the 12 Jyotirlingas and other sacred shrines dedicated to the destroyer and transformer.",
    destinations: "Kashi, Kedarnath, Somnath, Ujjain",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Ancient Shiva temple with intricate carvings"
  }
];

export default function TourPackages() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Sacred Circuit Packages
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Choose from our specially curated spiritual circuits designed to provide authentic experiences of India's divine heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white z-10">
                    Most Popular
                  </Badge>
                )}
                <div className="overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="text-white text-lg" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-secondary">
                      {pkg.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-6">
                    {pkg.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-neutral-600">
                      <MapPin className="text-primary mr-2 h-4 w-4" />
                      {pkg.destinations}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button 
                      onClick={scrollToContact}
                      className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
