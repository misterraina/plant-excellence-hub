import { CheckCircle, Target, Eye, Award, Building, Droplets, Shield, Thermometer, Phone } from "lucide-react";
import aboutHero from '@/assets/about.jpeg';

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
            Smart, sustainable construction solutions built for tomorrow
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Concrete by Design – Smart Solutions for Tomorrow
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Valcon, we do more than provide concrete—we deliver smart, sustainable construction 
              solutions built for tomorrow. We don't merely produce concrete—we design performance-based 
              solutions backed by advanced technology and in-depth understanding of material interactions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Guided by innovation, advanced engineering, and a strong sense of responsibility, we create 
              materials that support modern infrastructure, real estate, and industrial growth. Our concrete 
              properties can be customized to meet project needs with greater strength, faster development, 
              extended workability, and high fluidity for specialized applications.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Ultra-rapid hardening concrete for speed-critical projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Self-consolidating concrete (SCC) for better finish</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Pervious concrete for sustainable drainage</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">High-performance concretes for environmental challenges</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={aboutHero}
                alt="Modern Construction with Concrete"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Innovative Product Portfolio */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Innovative Product Portfolio
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Crack-Resistant Mixes</h4>
              <p className="text-muted-foreground text-sm">Low shrinkage concrete for enhanced durability and longevity.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-teal" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Architectural Concrete</h4>
              <p className="text-muted-foreground text-sm">Aesthetically pleasing solutions for design freedom and visual appeal.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Pervious Concrete</h4>
              <p className="text-muted-foreground text-sm">Sustainable drainage solutions for urban cooling and water management.</p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Thermal Mass Solutions</h4>
              <p className="text-muted-foreground text-sm">Energy-efficient concrete that reduces heating and cooling demands.</p>
            </div>
          </div>
        </div>

        {/* Application Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Application Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Infrastructure</h4>
              <p className="text-muted-foreground text-sm">High-performance mixes for bridges, highways, and industrial foundations.</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal/5 to-teal/10 p-6 rounded-xl border border-teal/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Real Estate</h4>
              <p className="text-muted-foreground text-sm">Durable, high-strength solutions for residential and commercial projects.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-6 rounded-xl border border-blue-500/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Water Management</h4>
              <p className="text-muted-foreground text-sm">Long-lasting, abrasion-resistant concrete for pipes, canals, and treatment plants.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-gradient-to-br from-card to-secondary/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where construction is smarter, greener, and more resilient. Our goal is to 
              provide reliable and sustainable concrete solutions that help shape stronger cities, safer 
              infrastructure, and better living spaces through expertise in ready-mix concrete, aggregates, 
              and modern building technologies.
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
              We are committed to creating long-term value for everyone connected to us—our people, 
              customers, partners, suppliers, and the communities we serve. We focus on delivering materials 
              that combine strength, durability, and efficiency, building progress that benefits both present 
              and future generations.
            </p>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Our Portfolio</h3>
          <div className="bg-gradient-to-br from-card to-secondary/30 p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              Our portfolio is built on a commitment to quality, innovation, and sustainability. We provide solutions 
              that go beyond products, supporting projects that shape stronger communities and modern cities.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Ready-Mix Concrete</h4>
                <p className="text-muted-foreground">Designed for consistency, strength, and adaptability to project needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-teal" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Aggregates</h4>
                <p className="text-muted-foreground">High-quality raw materials that ensure reliable performance in every build.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Sustainability Advantages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Durability</h4>
              <p className="text-muted-foreground text-sm">Longer service life with reduced repair and maintenance costs.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-teal" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Thermal Mass</h4>
              <p className="text-muted-foreground text-sm">Energy storage capabilities that reduce heating and cooling demands.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Environmental Resistance</h4>
              <p className="text-muted-foreground text-sm">Superior protection against aggressive environmental conditions.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-card to-secondary/30 p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Call Us Directly</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <a href="tel:+918447662077" className="bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-primary">+91 8447662077</div>
                <div className="text-sm text-muted-foreground mt-1">Primary Contact</div>
              </a>
              <a href="tel:6283280650" className="bg-teal/5 hover:bg-teal/10 border border-teal/20 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-teal">6283280650</div>
                <div className="text-sm text-muted-foreground mt-1">Support Line 1</div>
              </a>
              <a href="tel:6283280651" className="bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-blue-500">6283280651</div>
                <div className="text-sm text-muted-foreground mt-1">Support Line 2</div>
              </a>
              <a href="tel:6283280652" className="bg-green-500/5 hover:bg-green-500/10 border border-green-500/20 rounded-lg p-4 transition-colors duration-300">
                <div className="font-semibold text-green-500">6283280652</div>
                <div className="text-sm text-muted-foreground mt-1">Support Line 3</div>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-teal rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Building the Future Together</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Smart</div>
              <div className="text-white/80">Performance-Based Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Sustainable</div>
              <div className="text-white/80">Environmental Responsibility</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Reliable</div>
              <div className="text-white/80">Long-Term Value Creation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;