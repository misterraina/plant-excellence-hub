import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCarousel from "@/components/EventCarousel";
import About from "@/components/About";
import TestingLabs from "@/components/TestingLabs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EventCarousel />
      <About />
      <TestingLabs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
