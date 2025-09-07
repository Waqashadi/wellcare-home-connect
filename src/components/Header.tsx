import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "Appointment", href: "/appointment" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleServicesEnter = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(
      () => setIsServicesOpen(true),
      120
    );
  };

  const handleServicesLeave = () => {
    if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setIsServicesOpen(false),
      240
    );
  };

  return (
    <>
      {/* Sticky Mini Top Header */}
      <div className="hidden md:block bg-gray-100 py-2 md:py-3 rounded-2xl md:m-4 sticky top-0 z-50">
        <div className="container mx-auto px-2 md:px-4 rounded-lg ">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm space-y-2 md:space-y-0 ">
            {/* Left Section - Location and Phone */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8">
              {/* Location */}
              <div className="flex items-center space-x-2 ">
                <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-lg">
                    Our Locations
                  </div>
                  <div className="text-gray-600 text-md">
                    Islamabad, Rawalpindi{" "}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-lg">
                    Phone Number
                  </div>
                  <div className="text-gray-600 text-md">0310-688-1824</div>
                </div>
              </div>
            </div>
<div className="flex items-center space-x-2 md:space-x-4">
  <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
    <a
      href="https://www.facebook.com/share/1B3DFY1jfi/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 border border-accent-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-pink hover:scale-110 transition-all duration-300 group"
    >
      <Facebook className="h-6 w-6 text-accent-pink group-hover:text-white transition-colors duration-300" />
    </a>

    <a
      href="https://www.instagram.com/wellcareshomenursing?igsh=eWZsaDB6anllMzZh"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 border border-accent-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-pink hover:scale-110 transition-all duration-300 group"
    >
      <Instagram className="h-6 w-6 text-accent-pink group-hover:text-white transition-colors duration-300" />
    </a>
  </div>
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
                <img
                  src={
                    new URL("../assets/homeNursingLogo2.jpg", import.meta.url)
                      .href
                  }
                  alt="Wellcare Logo"
                  className="h-20 w-auto max-sm:h-12 max-md:h-16"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 max-lg:space-x-2 max-lg:text-sm ">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={
                    item.name === "Services" ? handleServicesEnter : undefined
                  }
                  onMouseLeave={
                    item.name === "Services" ? handleServicesLeave : undefined
                  }
                >
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-[hsl(340,75%,65%)] transition-all duration-300 font-medium text-lg relative ${
                      isActive(item.href) ? "text-[hsl(340,75%,65%)]" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(340,75%,65%)] transition-all duration-300 ${
                        isActive(item.href) ? "w-full" : "group-hover:w-full"
                      }`}
                    ></span>
                  </Link>

                  {item.name === "Services" && (
                    <div
                      className={`${
                        isServicesOpen
                          ? "visible opacity-100"
                          : "invisible opacity-0"
                      } absolute left-0 top-full mt-3 w-[360px] bg-white rounded-xl shadow-2xl ring-1 ring-black/5 p-3 transition-opacity duration-200`}
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          {
                            id: "home-injection",
                            label: "Home injection services",
                          },
                          { id: "home-doctor", label: "Home doctor visit" },
                          { id: "home-elderly", label: "Home Elderly care" },
                          { id: "home-icu", label: "Home ICU care" },
                          { id: "home-lab", label: "Home lab test services" },
                          {
                            id: "home-equipment",
                            label: "Home Medical Equipment",
                          },
                          { id: "home-nursing", label: "Home Nursing care" },
                          {
                            id: "home-pharmacy",
                            label: "Home pharmacy services",
                          },
                        ].map((s) => (
                          <Link
                            key={s.id}
                            to={`/services#${s.id}`}
                            className="px-4 py-3 rounded-lg text-lg text-medical-blue hover:bg-medical-blue hover:text-white transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
            <div className="md:hidden border-t border-border animate-fade-in ">
              <nav className="py-4 space-y-4">
                {navigation.map((item, index) =>
                  item.name === "Services" ? (
                    <div
                      key={item.name}
                      className="px-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        className={`w-full text-left px-2 py-2 rounded-lg text-foreground hover:text-[hsl(340,75%,65%)] transition-all duration-300 font-medium`}
                        onClick={() => setIsServicesMobileOpen((v) => !v)}
                      >
                        Services
                      </button>
                      {isServicesMobileOpen && (
                        <div className="mt-1 ml-2 space-y-1">
                          {[
                            {
                              id: "home-injection",
                              label: "Home injection services",
                            },
                            { id: "home-doctor", label: "Home doctor visit" },
                            { id: "home-elderly", label: "Home Elderly care" },
                            { id: "home-icu", label: "Home ICU care" },
                            { id: "home-lab", label: "Home lab test services" },
                            {
                              id: "home-equipment",
                              label: "Home Medical Equipment",
                            },
                            { id: "home-nursing", label: "Home Nursing care" },
                            {
                              id: "home-pharmacy",
                              label: "Home pharmacy services",
                            },
                          ].map((s) => (
                            <Link
                              key={s.id}
                              to={`/services#${s.id}`}
                              className="block px-4 py-3 rounded-lg text-lg text-medical-blue hover:bg-medical-blue hover:text-white transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesMobileOpen(false);
                              }}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-foreground hover:text-[hsl(340,75%,65%)] transition-all duration-300 font-medium animate-fade-in ${
                        isActive(item.href)
                          ? "text-[hsl(340,75%,65%)] bg-secondary"
                          : ""
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
