import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import homeNursingLogo2 from '../../public/homeNursingLogo2.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/nurses' },
    { name: 'Appointment', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Sticky Mini Top Header */}
      <div className="hidden md:block bg-gray-100 py-2 md:py-3 rounded-2xl m-2 md:m-4 sticky top-0 z-50">
        <div className="container mx-auto px-2 md:px-4 rounded-lg m-1 md:m-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm space-y-2 md:space-y-0 ">
            {/* Left Section - Location and Phone */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8">
              {/* Location */}
              <div className="flex items-center space-x-2 ">
                <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-lg">Our Locations</div>
                  <div className="text-gray-600 text-md">Lahore, Islamabad</div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-lg">Phone Number</div>
                  <div className="text-gray-600 text-md">(+92) 300 841 2981</div>
                </div>
              </div>
            </div>

            {/* Right Section - Social Media and Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
                             {/* Social Media Icons - Hidden on very small screens */}
               <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
                 <div className="w-12 h-12 border border-accent-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-pink hover:scale-110 transition-all duration-300 group">
                   <Facebook className="h-6 w-6 text-accent-pink group-hover:text-white transition-colors duration-300" />
                 </div>
                 <div className="w-12 h-12 border border-accent-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-pink hover:scale-110 transition-all duration-300 group">
                   <Twitter className="h-6 w-6 text-accent-pink group-hover:text-white transition-colors duration-300" />
                 </div>
                 <div className="w-12 h-12 border border-accent-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-pink hover:scale-110 transition-all duration-300 group">
                   <Instagram className="h-6 w-6 text-accent-pink group-hover:text-white transition-colors duration-300" />
                 </div>
               </div>
              
              {/* Make Appointment Button */}
              <Button 
                className="bg-accent-pink hover:bg-pink-600 text-white font-bold p-6 rounded-lg text-lg"
              >
                <span className="hidden sm:inline">Make Appointment</span>
                <span className="sm:hidden">Appointment</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky on mobile, scrolls normally on desktop */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border p-1 transition-all duration-500 ease-in-out shadow-lg sticky md:static top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <Link to="/" className="">
              <div className=" flex items-center">
                <img src={homeNursingLogo2} alt="Wellcare Logo" className="h-20 w-auto" />
              </div>
              
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                                     className={`text-gray-700 hover:text-[hsl(340,75%,65%)] transition-all duration-300 font-medium text-lg relative group ${
                     isActive(item.href) ? 'text-[hsl(340,75%,65%)]' : ''
                   }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                                     <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(340,75%,65%)] transition-all duration-300 group-hover:w-full ${
                     isActive(item.href) ? 'w-full' : ''
                   }`}></span>
                </Link>
              ))}
            </nav>

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
                                         className={`block px-4 py-2 text-foreground hover:text-[hsl(340,75%,65%)] transition-all duration-300 font-medium animate-fade-in ${
                       isActive(item.href) ? 'text-[hsl(340,75%,65%)] bg-secondary' : ''
                     }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;