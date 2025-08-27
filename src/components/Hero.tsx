import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroPlant from "@/assets/truck.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  const downloadBrochure = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/src/assets/Valcon Brochure.pdf';
    link.download = 'Valcon Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroPlant}
          alt="VALCON Manufacturing Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-teal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Delivering Excellence in
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Construction Solutions
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading manufacturer and supplier of eco-friendly, durable concrete solutions 
            with state-of-the-art manufacturing facilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={goToContact}
            >
              Get Quote Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
              onClick={downloadBrochure}
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">23+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;