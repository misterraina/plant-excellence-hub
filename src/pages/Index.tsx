import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import About from "@/components/About";
import CompletedProjects from "@/components/CompletedProjects";
import CustomerList from "@/components/CustomerList";
import Testimonials from "@/components/Testimonial";
import TestingLabs from "@/components/TestingLabs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Beaker, CheckCircle, Microscope, Settings, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EventCarousel />
      {/* <About /> */}
      <CompletedProjects />
      <CustomerList />
      <Testimonials />
      {/* <TestingLabs /> */}
      <div className="pb-20 mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Why Choose Our Testing Labs?</h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto">
                <Microscope className="w-8 h-8 text-teal" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Advanced Equipment</h4>
              <p className="text-muted-foreground">
                Latest testing equipment and automated systems for precise results
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Certified Standards</h4>
              <p className="text-muted-foreground">
                All testing follows international standards and certification protocols
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Quick Turnaround</h4>
              <p className="text-muted-foreground">
                Fast testing and reporting to keep your projects on schedule
              </p>
            </div>
          </div>
        </div>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;