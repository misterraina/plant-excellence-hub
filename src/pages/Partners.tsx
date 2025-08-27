import { ArrowLeft, GraduationCap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Partners = () => {
  const managementTeam = [
    {
      name: "Ms. Savita Sharma",
      qualification: "B.A LLB",
      role: "Management Team",
      image: "/partners/Savita Sharma.jpeg",
      description: "Legal and business development expertise, ensuring compliance and strategic business growth."
    },
    {
      name: "Ms. Divya Goutam", 
      qualification: "MA English and B.Ed",
      role: "Management Team",
      image: "/partners/Divya-Goutam.jpeg",
      description: "Communications and administrative leadership, managing corporate communications and stakeholder relations."
    },
    {
      name: "Dr. Ruchi Paliwal",
      qualification: "PhD in Electronics and Communication Engineering",
      role: "Management Team",
      image: "/partners/Ruchi Paliwal.jpeg",
      description: "Technology innovation and research development, driving digital transformation in our operations."
    },
    
    {
      name: "Vijay Sharma",
      qualification: "B.E (Civil)",
      role: "Management Team",
      image: "/partners/Vijay Sharma.jpeg",
      description: "An experienced professional with 25 years of experience in project management and advanced construction techniques, specializing in delivering cost-efficient, sustainable, and quality-driven solutions."
    },
    {
      name: "Tushar Sharma",
      qualification: "B.E (Civil), M.Tech (Structural Engineering)",
      role: "Management Team",
      image: "/partners/Tushar Sharma.jpeg",
      description: "A structural engineer by education with over 25 years of expertise in Ready-Mix Concrete and concrete admixtures, recognized for strong command over mix design, concrete durability, and delivering innovative, performance-driven solutions."
    },
    {
      name: "Vikas Syal",
      qualification: "B.E (Civil)",
      role: "Management Team", 
      image: "/partners/Vijay Syal.jpeg",
      description: "A seasoned professional with over 25 years of experience in Ready-Mix Concrete (RMC) operations, specializing in production and end-to-end plant operations."
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
              Our <span className="text-accent">Management</span> Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence 
              in concrete solutions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Management Team Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Management Team</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {member.qualification}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium inline-block">
                      {member.role}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Leadership Message */}
        <div className="mt-20 bg-[#156a53] rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Leadership Excellence
            </h3>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our leadership team combines decades of technical expertise with innovative business acumen. 
              Together, we are committed to delivering exceptional concrete solutions while maintaining 
              the highest standards of quality, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Partners;