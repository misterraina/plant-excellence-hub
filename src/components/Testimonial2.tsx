import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

// Import all the logos
import amayraGroupLogo from "/src/assets/logos/Amayra-Group-Logo-1.png";
import btmLogo from "/src/assets/logos/btm-logo.png";
import imagesLogo1 from "/src/assets/logos/images (1).png";
import imagesLogo2 from "/src/assets/logos/images (2).png";
import imagesLogo3 from "/src/assets/logos/images (3).png";
import imagesLogo4 from "/src/assets/logos/images (4).png";
import imagesLogo from "/src/assets/logos/images.png";
import logoGeneric from "/src/assets/logos/logo.png";
import m1128u93Logo from "/src/assets/logos/m1128u93.jpg";
import screenshotLogo from "/src/assets/logos/Screenshot 2025-08-17 122457.png";
import tajHotelsLogo from "/src/assets/logos/Taj_Hotels_logo.svg.png";
import visionIndiaLogo from "/src/assets/logos/visionindia_1653033826_282.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Exceptional quality and on-time delivery. A valuable partner for our ongoing projects.",
      author: "Future Heights",
      company: "Sanjeev Agarwal - Owner",
      rating: 5
    },
    {
      id: 2,
      quote: "Their technical expertise and support during the construction phase made a significant difference to our project.",
      author: "SNJ Construction",
      company: "Sanjay Kumar - Owner", 
      rating: 5
    },
    {
      id: 3,
      quote: "Valcon has consistently delivered high-quality concrete solutions that meet our stringent project requirements.",
      author: "Amayra Group",
      company: "Project Manager",
      rating: 5
    }
  ];

  const partnerLogos = [
    { name: "Amayra Group", logo: amayraGroupLogo },
    { name: "BTM", logo: btmLogo },
    { name: "Vision India", logo: visionIndiaLogo },
    { name: "Taj Hotels", logo: tajHotelsLogo },
    { name: "Arista City Center", logo: imagesLogo1 },
    { name: "Uber Mews Gate", logo: imagesLogo2 },
    { name: "Raj Cycles", logo: imagesLogo3 },
    { name: "Jubilee", logo: imagesLogo4 },
    { name: "Generic Logo", logo: logoGeneric },
    { name: "Future Heights", logo: m1128u93Logo },
    { name: "STL group", logo: imagesLogo },
    { name: "ALP", logo: screenshotLogo },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value the feedback and appreciation from our clients, which motivates us to continuously 
            enhance our products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logos Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Trusted Partners</h3>
          <p className="text-gray-600">Building strong relationships with industry leaders</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;