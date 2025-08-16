import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      title: "Unit I - Mohali",
      address: "Plot No. A8-8, Focal Point, Chanakya Industrial Area, Kurali SAS Nagar (Mohali) Punjab - 140103",
      phone: "0628 2280650",
      email: "valueconcretesolutions@gmail.com"
    },
    {
      title: "Unit II - Rurali",
      address: "FEZ Area, Village Khairi Pandwala, Mohankpur Road, SAS Nagar (Mohali) Punjab - 140507",
      phone: "0628 2280651",
      email: "valueconcretesolutions@gmail.com"
    },
    {
      title: "Head Office",
      address: "Corporate Headquarters, Tricity Region, Punjab",
      phone: "0628 2280652",
      email: "info@valueconcretesolutions.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team for 
            personalized concrete solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-32"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary to-teal text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get Quick Response</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Call us directly</p>
                      <p className="text-white/90">+91 628 2280650</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email us</p>
                      <p className="text-white/90">valueconcretesolutions@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-white/90">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Locations</h3>
              {locations.map((location, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{location.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {location.address}
                        </p>
                        <div className="space-y-1">
                          <p className="text-sm text-foreground">
                            <span className="font-medium">Phone:</span> {location.phone}
                          </p>
                          <p className="text-sm text-foreground">
                            <span className="font-medium">Email:</span> {location.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">Interactive Map</p>
                  <p className="text-muted-foreground">Find our locations across the Tricity region</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;