import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Testing Labs", href: "/testing-labs" },
    { label: "Partners", href: "/partners" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return false; // Handle scroll-to sections differently
    }
    return location.pathname === href;
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="logo.png" 
              alt="VALCON - Value Concrete Solutions" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary group ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            <Button 
              variant="hero" 
              size="sm" 
              className="ml-4"
              onClick={handleDownloadBrochure}
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-foreground hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full mt-4"
                onClick={handleDownloadBrochure}
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;