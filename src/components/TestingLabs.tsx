import { Beaker, CheckCircle, Microscope, Settings, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TestingLabs = () => {
  const services = [
    {
      icon: Beaker,
      title: "On-Site Testing Facilities",
      description: "Mobile labs equipped for field sampling and testing with certified testing labs",
      features: ["Field sampling", "Quick analysis", "Certified results"]
    },
    {
      icon: Microscope,
      title: "Quality Control Laboratory",
      description: "Advanced software and analytics to interpret results and optimize mix designs",
      features: ["Mix design optimization", "Data analytics", "Quality assurance"]
    },
    {
      icon: Settings,
      title: "Technical Expertise",
      description: "Expert team with decades of industry experience and academic excellence",
      features: ["Expert consultation", "Technical support", "Industry standards"]
    },
    {
      icon: Shield,
      title: "Strength Testing",
      description: "Comprehensive strength testing including compressive, tensile, and flexural strength",
      features: ["Compressive testing", "Tensile strength", "Durability analysis"]
    },
    {
      icon: Zap,
      title: "Performance Analysis",
      description: "Complete performance evaluation for durability, workability, and sustainability",
      features: ["Durability testing", "Workability assessment", "Environmental impact"]
    },
    {
      icon: CheckCircle,
      title: "Quality Certification",
      description: "Testing procedures ensuring reliability and accuracy",
      features: ["Certified procedures", "Accurate reporting"]
    }
  ];

  const concreteTypes = [
    {
      name: "Standard Concrete",
      description: "General-purpose concrete for foundations, slabs, and structural elements",
      strength: "20-40 MPa",
      applications: ["Foundations", "Slabs", "General construction"]
    },
    {
      name: "High-Strength Concrete",
      description: "Enhanced strength for high-rise buildings, bridges, and heavy-duty structures",
      strength: "40-100 MPa",
      applications: ["High-rise buildings", "Bridges", "Industrial structures"]
    },
    {
      name: "Lightweight Concrete",
      description: "Reduced weight for seismic-resistant buildings and insulated structures",
      strength: "5-10 MPa",
      applications: ["Multi-story buildings", "Insulation", "Weight reduction"]
    },
    {
      name: "Self-Compacting Concrete",
      description: "Highly flowable concrete for complex geometries and dense reinforcement",
      strength: "25-80 MPa",
      applications: ["Complex structures", "Dense reinforcement", "Architectural elements"]
    }
  ];

  return (
    <section id="testing" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Testing <span className="text-primary">Laboratories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art testing facilities ensuring the highest quality standards 
            for all our concrete solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Concrete Types Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Concrete <span className="text-teal">Offerings</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {concreteTypes.map((type, index) => (
              <div key={index} className="p-6 border border-border rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-foreground">{type.name}</h4>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {type.strength}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {type.description}
                </p>
                
                <div>
                  <h5 className="font-medium text-foreground mb-2">Applications:</h5>
                  <div className="flex flex-wrap gap-2">
                    {type.applications.map((app, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Features */}
        <div className="mt-20 text-center">
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
      </div>
    </section>
  );
};

export default TestingLabs;