import { CheckCircle, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">VALCON</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading manufacturer and supplier of ready-mix concrete with a strong presence 
            in the construction industry
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Excellence in Concrete Solutions
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Value Concrete Solutions (Valcon) is a leading manufacturer and supplier of ready-mix 
              concrete with a strong presence in the construction industry. We have tailored solutions to 
              meet the diverse needs of the construction industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a legacy of excellence and innovation, we are committed to delivering superior products and services that drive your 
              projects to success. Established in 2022, we have consistently provided high-quality concrete 
              solutions for residential, commercial, and industrial projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">State-of-the-art manufacturing facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Quality-focused delivery and services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Eco-friendly and sustainable practices</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80"
                alt="Modern Construction"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-card to-secondary/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a trusted partner in the construction industry by providing eco-friendly, authentic, and 
              innovative ready-mix concrete solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-card to-secondary/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We aim to build strong foundations by combining leading-edge technology, expert 
              knowledge, and exceptional customer service. Our goal is to contribute to the creation of 
              resilient infrastructure and sustainable growth for our clients and communities.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-teal rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">2300+</div>
              <div className="text-white/80">Cubic Meters Daily Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2</div>
              <div className="text-white/80">Manufacturing Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Quality Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;