import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import homeNursingLogo2 from '../assets/homeNursingLogo2.jpg';

const Footer = () => {
  return (
    <footer className="bg-medical-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center ml-2">
              <img 
                src={homeNursingLogo2} 
                alt="WellCare Home Nursing" 
                className="h-16 w-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing compassionate, professional home nursing care with a commitment to helping you live well every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-pink hover:scale-110 transition-all duration-300 cursor-pointer">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-pink hover:scale-110 transition-all duration-300 cursor-pointer">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-pink hover:scale-110 transition-all duration-300 cursor-pointer">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-pink hover:scale-110 transition-all duration-300 cursor-pointer">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Our Location
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/skilled-nursing-care" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Skilled Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/services/post-surgical-care" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Post-Surgical Care
                </Link>
              </li>
              <li>
                <Link to="/services/medication-management" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link to="/services/wound-care" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Wound Care
                </Link>
              </li>
              <li>
                <Link to="/services/physical-therapy" className="text-gray-300 hover:text-accent-pink transition-colors text-sm">
                  Physical Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent-pink" />
                <div>
                  <p className="text-gray-300 text-sm">0310-688-1824</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-accent-pink" />
                <p className="text-gray-300 text-sm">infowellcares@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent-pink" />
                <p className="text-gray-300 text-sm">Healthcare <br />Rawalpindi, Islamabad</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-accent-pink" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Fri: 8AM - 6PM</p>
                  <p className="text-gray-300 text-sm">24/7 Emergency Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WellCare Home Nursing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-pink text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent-pink text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;