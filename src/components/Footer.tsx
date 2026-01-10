import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import homeNursingLogo2 from '../assets/homeNursingLogo2.jpg';

const Footer = () => {
  return (
    <footer className="bg-medical-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center ml-2 ">
              <img
                src={homeNursingLogo2}
                alt="WellCare Home Nursing"
                className="h-16 w-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-sm:text-sm">
              Providing compassionate, professional home nursing care with a commitment to helping you live well every day.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1B3DFY1jfi/" className="text-gray-300 hover:text-accent-pink hover:scale-110 transition-all duration-300 cursor-pointer">
                <Facebook className="h-6 w-6" />
              </a>

              <a href="https://www.instagram.com/wellcareshomenursing?igsh=eWZsaDB6anllMzZh" className="text-gray-300 hover:text-accent-pink hover:scale-110 transition-all duration-300 cursor-pointer">
                <Instagram className="h-6 w-6" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 max-sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Our Location
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 max-sm:text-lg">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/skilled-nursing-care" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Skilled Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/services/post-surgical-care" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Post-Surgical Care
                </Link>
              </li>
              <li>
                <Link to="/services/medication-management" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link to="/services/wound-care" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Wound Care
                </Link>
              </li>
              <li>
                <Link to="/services/physical-therapy" className="text-gray-300 hover:text-accent-pink transition-colors text-sm max-sm:text-xs">
                  Physical Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 max-sm:text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent-pink" />
                <div>
                  <p className="text-gray-300 text-md">0310-688-1824</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-accent-pink" />
                <p className="text-gray-300 text-sm max-sm:text-xs">infowellcares@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent-pink" />
                <p className="text-gray-300 text-sm max-sm:text-xs">Healthcare <br />Islamabad, Rawalpindi</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-accent-pink" />
                <div>
                  <p className="text-gray-300 text-sm max-sm:text-xs">Mon - Fri: 8AM - 6PM</p>
                  <p className="text-gray-300 text-sm max-sm:text-xs">24/7 Emergency Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm max-sm:text-xs">
              © 2024 WellCare Home Nursing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-pink text-sm transition-colors max-sm:text-xs">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent-pink text-sm transition-colors max-sm:text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-xs md:text-sm sm:text-center sm:my-4">
          Developed By:{" "}
          <a href="https://www.linkedin.com/in/waqashadi" target="_blank" rel="noopener noreferrer" className="hover:text-accent-pink font-bold">
            Muhammad Waqas
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
