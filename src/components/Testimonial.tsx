import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import InfiniteMarquee from './InfiniteScrollMarquee'; // Import your separate component

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
    },
    {
      id: 4,
      quote: "Outstanding service quality and professional approach. They exceeded our expectations in every aspect.",
      author: "BuildTech Solutions",
      company: "Rajesh Sharma - Director",
      rating: 5
    },
    {
      id: 5,
      quote: "Reliable, efficient, and cost-effective solutions. Valcon is our go-to partner for all concrete needs.",
      author: "Metro Infrastructure",
      company: "Priya Mehta - Project Lead",
      rating: 5
    },
    {
      id: 6,
      quote: "The team's attention to detail and commitment to quality is remarkable. Highly recommended!",
      author: "Elite Constructions",
      company: "Amit Gupta - CEO",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value the feedback and appreciation from our clients, which motivates us to continuously 
            enhance our products and services.
          </p>
        </div>

        {/* Main Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center mb-3">
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

        {/* Additional Testimonials Scroll - Optional */}
        {testimonials.length > 3 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">More Success Stories</h3>
              <p className="text-gray-600">Hear from our growing family of satisfied clients</p>
            </div>
            
            <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl shadow-sm py-8">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div 
                className="flex items-center hover:[animation-play-state:paused] gap-6"
                style={{
                  animation: 'testimonial-scroll 35s linear infinite',
                }}
              >
                {/* Original testimonials */}
                {testimonials.slice(3).map((testimonial) => (
                  <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 min-w-[320px] max-w-[320px] mx-3 border border-gray-100">
                    <Quote className="w-6 h-6 text-green-600 mb-3" />
                    <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="border-t pt-3">
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
                      <p className="text-xs text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate for seamless loop */}
                {testimonials.slice(3).map((testimonial) => (
                  <div key={`dup-${testimonial.id}`} className="bg-white rounded-lg shadow-md p-6 min-w-[320px] max-w-[320px] mx-3 border border-gray-100">
                    <Quote className="w-6 h-6 text-green-600 mb-3" />
                    <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="border-t pt-3">
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
                      <p className="text-xs text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Partner Logos Section - Using your separate InfiniteMarquee component */}
        <InfiniteMarquee 
          title="Our Trusted Partners"
          subtitle="Building strong relationships with industry leaders"
          speed={25}
          pauseOnHover={true}
        />

    

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help bring your construction project to life with our quality concrete solutions.
            </p>
            <button onClick={()=>{}} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get a Free Quote
            </button>
          </div>
        </div> */}
      </div>

      {/* CSS for testimonial scroll animation */}
      <style>
        {`
          @keyframes testimonial-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;