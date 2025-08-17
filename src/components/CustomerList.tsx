import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Factory, Users, Home, Star, CheckCircle } from "lucide-react";
import { useState } from "react";

const CustomerList = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const customerCategories = [
    {
      title: "Real Estate & Developers",
      icon: <Building className="w-6 h-6" />,
      customers: [
        "Mohali Citi Centre",
        "Arista Citi Centre", 
        "Taj Vivanta (Kuldeep Singh & Bros.)",
        "Motia Dwarka Riverfront",
        "Amayra Emporio",
        "Amayra Greens",
        "Nirwana Greens",
        "Nirwana Square",
        "Future Heights"
      ]
    },
    {
      title: "Industrial & Commercial",
      icon: <Factory className="w-6 h-6" />,
      customers: [
        "ALP Nishikawa Pvt Ltd",
        "Glass India Pvt Ltd",
        "Guru Nanak Forging",
        "R.D. Forging"
      ]
    },
    {
      title: "Government & Public Sector",
      icon: <Users className="w-6 h-6" />,
      customers: [
        "Punjab Small Industries & Export Corporation",
        "Punjab University, Chandigarh",
        "Chandigarh Administration",
        "RCL Chandigarh"
      ]
    },
    {
      title: "Individual & Small Builders",
      icon: <Home className="w-6 h-6" />,
      description: "Numerous independent contractors and small-scale builders trust us for their residential and small project needs."
    }
  ];

  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "500+", label: "Projects Delivered" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="customers" className="py-20 pt-5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
       
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Esteemed <span className="text-primary">Clientele</span>
          </h2>
          <p className="text-l text-muted-foreground max-w-3xl mx-auto">
            At Valcon, we are proud to have collaborated with a diverse range of customers across multiple 
            sectors. Our commitment to delivering premium ready-mix concrete has earned us the trust of 
            leading organizations and individuals in the construction industry.
          </p>
        </div>

        

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {customerCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-card text-muted-foreground hover:bg-secondary/50 shadow-md hover:shadow-lg hover:text-foreground'
              }`}
            >
              {category.icon}
              <span className="hidden sm:block">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          {customerCategories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeCategory === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8 absolute pointer-events-none'
              }`}
            >
              {activeCategory === index && (
                <Card className="bg-gradient-to-br from-card to-secondary/50 border-none shadow-xl overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        {React.cloneElement(category.icon, { className: "w-6 h-6 text-primary" })}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    {category.customers ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.customers.map((customer, customerIndex) => (
                          <div
                            key={customerIndex}
                            className="flex items-center space-x-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1"
                            style={{
                              animationDelay: `${customerIndex * 100}ms`,
                              animation: activeCategory === index ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                            }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground font-medium">{customer}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 text-center">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{category.description}</p>
                        <div className="inline-flex items-center space-x-2 text-primary font-medium">
                          <Star className="w-5 h-5" />
                          <span>Trusted by 50+ Individual Builders</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-primary to-teal rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the Valcon difference and become part of our growing family of satisfied customers.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Your Quote Today
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeInUp 0.6s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default CustomerList;