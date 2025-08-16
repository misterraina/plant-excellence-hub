import { ArrowLeft, GraduationCap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      name: "Vijay Sharma",
      qualification: "B.E (Civil)",
      role: "Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      description: "Expert in civil engineering with extensive experience in construction project management and concrete technology."
    },
    {
      name: "Vikas Syal",
      qualification: "B.E (Civil)",
      role: "Partner", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description: "Specialized in structural engineering and quality control systems with a focus on sustainable construction practices."
    },
    {
      name: "Tushar Sharma",
      qualification: "B.E (Civil), M.Tech (Structural Engineering)",
      role: "Technical Partner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      description: "Advanced expertise in structural engineering and research, leading our technical innovation and development initiatives."
    }
  ];

  const promoters = [
    {
      name: "Ms. Savita Sharma",
      qualification: "B.A LLB",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1559941479-e0fd76127e15?w=400&q=80",
      description: "Legal and business development expertise, ensuring compliance and strategic business growth."
    },
    {
      name: "Ms. Divya Gautam", 
      qualification: "MA English",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      description: "Communications and administrative leadership, managing corporate communications and stakeholder relations."
    },
    {
      name: "Dr. Ruchi Paliwal",
      qualification: "PhD in Electronics and Communication Engineering",
      role: "Promoter",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      description: "Technology innovation and research development, driving digital transformation in our operations."
    },
    {
      name: "Vikas Syal",
      qualification: "B.E (Civil)",
      role: "Promoter & Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description: "Dual role in technical operations and business development, bridging engineering excellence with strategic growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-accent">Partners</span> & Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence 
              in concrete solutions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Partners Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Technical Partners</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-primary/20">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {partner.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {partner.qualification}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium inline-block">
                      {partner.role}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Promoters Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Promoters</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promoters.map((promoter, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-teal/20">
                    <img
                      src={promoter.image}
                      alt={promoter.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {promoter.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-teal" />
                      <span className="text-xs font-medium text-teal text-center">
                        {promoter.qualification}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block">
                      {promoter.role}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {promoter.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Leadership Message */}
        <div className="mt-20 bg-gradient-to-br from-card to-secondary/50 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Leadership Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our leadership team combines decades of technical expertise with innovative business acumen. 
              Together, we are committed to delivering exceptional concrete solutions while maintaining 
              the highest standards of quality, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;