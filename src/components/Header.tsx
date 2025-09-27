import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft animate-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Parthaj Orchard" className="h-10 lg:h-12 w-auto hover-scale animate-bounce-gentle" />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-display font-semibold text-gradient">
                PARTHAJ ORCHARD
              </h1>
              <p className="text-xs text-muted-foreground">Premium Agricultural Exports</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-48 bg-muted/50 border-0"
              />
            </div>
            <Button className="bg-gradient-to-r from-primary to-primary-light hover:shadow-hover transition-smooth animate-pulse-glow">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-2 text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-light">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;