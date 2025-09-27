import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Apple, Wheat, Carrot, Droplet, Flower } from 'lucide-react';
import productsImage from '@/assets/products-showcase.jpg';

const Products = () => {
  const categories = [
    {
      name: 'Fresh Fruits',
      icon: Apple,
      items: ['Mangoes', 'Bananas', 'Grapes', 'Pomegranates', 'Oranges'],
      color: 'bg-red-100 text-red-700',
      description: 'Premium fresh fruits sourced directly from Indian orchards'
    },
    {
      name: 'Vegetables',
      icon: Carrot,
      items: ['Onions', 'Potatoes', 'Tomatoes', 'Peppers', 'Okra'],
      color: 'bg-green-100 text-green-700',
      description: 'Farm-fresh vegetables with extended shelf life'
    },
    {
      name: 'Grains & Cereals',
      icon: Wheat,
      items: ['Basmati Rice', 'Wheat', 'Millets', 'Pulses', 'Lentils'],
      color: 'bg-amber-100 text-amber-700',
      description: 'High-quality grains meeting international standards'
    },
    {
      name: 'Oil Seeds',
      icon: Droplet,
      items: ['Sesame', 'Mustard', 'Sunflower', 'Groundnut', 'Castor'],
      color: 'bg-yellow-100 text-yellow-700',
      description: 'Premium oil seeds with high oil content'
    },
    {
      name: 'Spices & Herbs',
      icon: Flower,
      items: ['Turmeric', 'Cumin', 'Coriander', 'Cardamom', 'Black Pepper'],
      color: 'bg-orange-100 text-orange-700',
      description: 'Aromatic spices and herbs with authentic flavors'
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Premium Product Range
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Product Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We export a diverse range of premium Indian agricultural products, 
              carefully selected and processed to meet international quality standards.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={productsImage}
                alt="Premium Indian Agricultural Products"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Premium Quality Guarantee
                </h3>
                <p className="text-white/90">
                  Every product undergoes rigorous quality checks and meets international export standards
                </p>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-hover transition-smooth cursor-pointer border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-2xl ${category.color} mr-4`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Ready to Import Premium Indian Products?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get in touch with our export team to discuss your requirements, 
              pricing, and delivery schedules for any of our product categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
                Request Product Catalog
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;