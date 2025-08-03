import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import wellcareLogo from '@/assets/wellcare-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Nurses', href: '/nurses' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-500 ease-in-out shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-primary-foreground">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Us: (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@wellcarehomenursing.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>24/7 Emergency Care Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={wellcareLogo} 
              alt="WellCare Home Nursing" 
              className="h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group ${
                  isActive(item.href) ? 'text-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-fade-in">
            <nav className="py-4 space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium animate-fade-in ${
                    isActive(item.href) ? 'text-primary bg-secondary' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2 animate-fade-in" style={{ animationDelay: '350ms' }}>
                <Button 
                  asChild
                  className="w-full bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground"
                >
                  <Link to="/contact">Book Consultation</Link>
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