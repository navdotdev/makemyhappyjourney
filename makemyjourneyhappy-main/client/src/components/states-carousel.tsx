import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const states = [
  {
    name: "Uttar Pradesh",
    destinations: "Varanasi, Ayodhya, Mathura, Vrindavan",
    count: "15+ Destinations",
    image :"https://Jatind13.github.io/Assets-at-NavDotDev/ChatGPT%20Image%20Aug%2020%2C%202025%2C%2007_43_05%20PM.png",
    alt: "Varanasi ghats in Uttar Pradesh"
  },
  {
    name: "Bihar",
    destinations: "Bodh Gaya, Nalanda, Rajgir, Patna",
    count: "8+ Destinations",
    image :"https://Jatind13.github.io/Assets-at-NavDotDev/ChatGPT%20Image%20Aug%2020%2C%202025%2C%2007_47_11%20PM.png",
    alt: "Bodh Gaya temple in Bihar"
  },
  {
    name: "Himachal Pradesh",
    destinations: "Dharamshala, Manali, Shimla",
    count: "12+ Destinations",
    image :"https://Jatind13.github.io/Assets-at-NavDotDev/ChatGPT%20Image%20Aug%2020%2C%202025%2C%2007_52_30%20PM.png",
    alt: "Himalayan temple in Himachal Pradesh"
  },
  {
    name: "Uttarakhand",
    destinations: "Rishikesh, Haridwar, Kedarnath",
    count: "10+ Destinations",
    image :"https://Jatind13.github.io/Assets-at-NavDotDev/ChatGPT%20Image%20Aug%2020%2C%202025%2C%2008_50_37%20PM.png",
    alt: "Rishikesh on river Ganges in Uttarakhand"
  }
];

export default function StatesCarousel() {
  return (
    <section id="states" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Explore Sacred Destinations
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Journey through India's most spiritual states and discover ancient temples, holy rivers, and divine experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {states.map((state, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="overflow-hidden">
                <img 
                  src={state.image}
                  alt={state.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                  {state.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {state.destinations}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    {state.count}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-orange-600 transition-colors p-0">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
