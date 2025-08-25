import { Flower2, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Flower2 className="text-white text-lg" />
              </div>
              <span className="font-heading font-bold text-xl">Make My Journey Happy</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Your trusted partner for spiritual and cultural journeys across India. Experience the divine with comfort and authenticity.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("packages")}
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("states")}
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Circuits */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Sacred Circuits</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">RAM Circuit</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Buddha Circuit</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Shiva Circuit</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Custom Packages</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary transition-colors">Group Tours</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-primary mr-3">📞</span>
                <span className="text-neutral-300">+91 92147 71641</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary mr-3">✉️</span>
                <span className="text-neutral-300">makemyjourneyhappy.info@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary mr-3">📍</span>
                <span className="text-neutral-300">Varanasi, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-300">
            © 2025 Make My Journey Happy. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}
