import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Leaf, Award } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Indian Agricultural Products"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                  <Leaf className="w-4 h-4 mr-2" />
                  Premium Quality • Global Reach
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                  Connecting{' '}
                  <span className="text-gradient">Indian Farms</span>
                  {' '}to Global Markets
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  PARTHAJ ORCHARD Pvt. Ltd. - Your trusted partner for premium Indian agricultural exports. 
                  We bring the finest fruits, vegetables, grains, oil seeds, and spices from local farms 
                  to international markets with unwavering commitment to quality and sustainability.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-light hover:shadow-hover transition-smooth group"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  Download Catalog
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Quality</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Export</h3>
                <p className="text-muted-foreground text-sm">
                  Connecting premium Indian agricultural products to markets worldwide with reliable logistics.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Certified Quality</h3>
                <p className="text-muted-foreground text-sm">
                  All products meet international quality standards with proper certifications and documentation.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sustainable Farming</h3>
                <p className="text-muted-foreground text-sm">
                  Supporting local farmers with sustainable practices that protect our environment.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
                <ArrowRight className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Direct Supply</h3>
                <p className="text-muted-foreground text-sm">
                  Farm-to-export supply chain ensuring freshness and competitive pricing for global buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;