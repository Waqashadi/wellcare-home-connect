import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Skilled Nursing Care",
      description: "Professional nursing care delivered with compassion in your home environment."
    },
    {
      icon: Shield,
      title: "Post-Surgical Care",
      description: "Specialized recovery care to ensure optimal healing after medical procedures."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and monitoring for peace of mind."
    },
    {
      icon: Users,
      title: "Family-Centered Care",
      description: "Involving family members in care plans for comprehensive support."
    }
  ];

  const stats = [
    { number: "500+", label: "Families Served" },
    { number: "50+", label: "Certified Nurses" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daughter of Patient",
      content: "WellCare's nurses provided exceptional care for my mother. Their professionalism and compassion made all the difference during her recovery.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Family Caregiver",
      content: "The peace of mind knowing that qualified nurses are available 24/7 is invaluable. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Patient's Wife",
      content: "Professional, caring, and reliable. WellCare Home Nursing exceeded our expectations in every way.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-blue via-medical-blue to-medical-pink py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Compassionate
                <span className="block text-accent-pink">Home Nursing</span>
                Care
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Professional healthcare services delivered in the comfort of your home. 
                Our certified nurses provide personalized care to help you live well every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground shadow-xl"
                >
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-accent-pink hover:bg-white hover:text-medical-blue"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent-pink rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-medical-blue">24/7 Emergency Care</h3>
                  <p className="text-medical-gray">Call us anytime for immediate assistance</p>
                  <p className="text-3xl font-bold text-medical-blue">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-medical-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-medical-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Our Healthcare Services
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              We provide comprehensive home nursing services tailored to your unique needs, 
              ensuring quality care in the comfort of your own home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-accent-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-medical-gray leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-medical-blue mb-8">
                Why Choose WellCare Home Nursing?
              </h2>
              <div className="space-y-6">
                {[
                  "Licensed and certified nursing professionals",
                  "Personalized care plans for each patient",
                  "24/7 emergency support and monitoring",
                  "Comprehensive insurance coverage accepted",
                  "Family involvement in care decisions",
                  "Regular progress reports and updates"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-pink flex-shrink-0 mt-1" />
                    <p className="text-medical-gray text-lg">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-medical-blue hover:bg-medical-blue/90"
                >
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-medical-blue mb-6">
                  Request a Free Consultation
                </h3>
                <p className="text-medical-gray mb-6">
                  Let us assess your needs and create a personalized care plan for you or your loved one.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground"
                >
                  <Link to="/contact">Schedule Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              What Our Families Say
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Read testimonials from families who have experienced our compassionate care firsthand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-medical-gray mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-medical-blue">{testimonial.name}</p>
                    <p className="text-medical-gray text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Quality Home Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss your healthcare needs and learn how we can help you or your loved one live well every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="outline"
                                className="border-white text-accent-pink hover:bg-white hover:text-medical-blue"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-medical-blue hover:bg-white/90"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;