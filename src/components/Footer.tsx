import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Download, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadBrochure = () => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = '/src/assets/Valcon Brochure.pdf';
    link.download = 'Valcon Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Testing Labs", href: "testing-labs" },
    { label: "Partners", href: "/partners" },
    { label: "Contact Us", href: "/contact" },
  ];

  const services = [
    "Standard Concrete",
    "High-Strength Concrete", 
    "Lightweight Concrete",
    "Self-Consolidating Concrete",
    "Fiber-Reinforced Concrete",
    "Quality Testing"
  ];

  // Phone numbers array for better organization
  const phoneNumbers = [
    "+91 8447662077",
    "+91 6283280650",
    "+91 6283280651",
    "+91 6283280652"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="VALCON Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                    (img.nextSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-12 h-12 bg-white/10 rounded-lg items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              Leading manufacturer and supplier of eco-friendly, durable concrete solutions 
              with state-of-the-art manufacturing facilities in the Tricity region.
            </p>

            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={handleDownloadBrochure}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 hover:text-white transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="space-y-4">
                {/* Unit I - Kheri */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/90 text-sm font-semibold">Unit I - Kheri</p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Hadbast No-362, Village Kheri, SAS Nagar, Zirakpur, Punjab - 140603
                    </p>
                  </div>
                </div>

                {/* Unit II - Kurali */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/90 text-sm font-semibold">Unit II - Kurali</p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Industrial Area, Building No. A8-B Chanalon, Focal Point, Kurali, SAS Nagar, Punjab
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers - Improved Mobile-Friendly Format */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phoneNumbers.map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:${phone}`}
                        className="text-white/90 text-sm hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:valueconcretesolutions@gmail.com"
                  className="text-white/90 hover:text-white transition-colors duration-200 hover:underline"
                >
                  valueconcretesolutions@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            {/* <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/80 text-sm">
                © 2024 VALCON - Value Concrete Solutions. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Established 2022 | Leading the Construction Industry with Quality & Innovation
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;