import { 
  Plane, 
  Train, 
  Hotel, 
  Car, 
  FileText, 
  Shield, 
  Headphones, 
  Route 
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Domestic and international flight reservations with best prices"
  },
  {
    icon: Train,
    title: "Train Reservations",
    description: "Confirmed railway bookings across India with preferred berths"
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Comfortable accommodations near pilgrimage sites"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Private vehicles and local transport arrangements"
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Documentation and visa processing support"
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for worry-free journeys"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance during your travel"
  },
  {
    icon: Route,
    title: "Custom Packages",
    description: "Tailored itineraries based on your preferences"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            From flights to accommodations, we handle every detail of your spiritual journey with care and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white text-2xl" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
