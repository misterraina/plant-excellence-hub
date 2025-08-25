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

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("to", "xyz@gmail.com");
      formDataToSend.append("from_name", "Website Contact Form");
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      title: "Unit I - Kheri",
      address: "Hadbast No-362, Village Kheri, SAS Nagar, Zirakpur, Punjab - 140603",
      phone: "8447662077",
      email: "valueconcretesolutions@gmail.com"
    },
    {
      title: "Unit II - Kurali",
      address: "Industrial Area, Building No. A8-B Chanalon, Focal Point, Kurali, SAS Nagar, Punjab",
      phone: "8447662077",
      email: "valueconcretesolutions@gmail.com"
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
                <div className="space-y-6">
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
                        disabled={isLoading}
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
                        disabled={isLoading}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    variant="hero" 
                    size="lg" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
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
                      <p className="text-white/90">+91 8447662077</p>
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
                        <div className="space-y-1 mb-3">
                          <p className="text-sm text-foreground">
                            <span className="font-medium">Phone:</span> {location.phone}
                          </p>
                          <p className="text-sm text-foreground">
                            <span className="font-medium">Email:</span> {location.email}
                          </p>
                        </div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          <MapPin className="w-4 h-4 mr-1" />
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-20">
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-teal text-white">
              <CardTitle className="text-2xl font-bold flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                Find Us on the Map
              </CardTitle>
              <p className="text-white/90 mt-2">Our locations across the Tricity region</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96">
                {/* Google Maps Embed - Shows Zirakpur area where both locations are */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27642.823691776814!2d76.79445!3d30.65321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906dde17c9%3A0x52e1d007b35d3b73!2sZirakpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1703234567890!5m2!1sen!2sin"
                  width="100%"
                  height="384"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Value Concrete Solutions Locations"
                  className="w-full h-full"
                />
                
                {/* Overlay with location info */}
                <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs border">
                  <h4 className="font-semibold text-foreground mb-2">Our Locations</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span>Unit I - Kheri, Zirakpur</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Unit II - Kurali</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Map Access Cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{location.title}</h4>
                    <p className="text-sm text-muted-foreground">Quick Map Access</p>
                  </div>
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 no-underline"
                  >
                    Google Maps
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir//${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 no-underline"
                  >
                    Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;