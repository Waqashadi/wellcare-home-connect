import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import contactBg from '@/assets/contact-bg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "24/7 Emergency Line",
      details: "(555) 123-4567",
      subtitle: "Available around the clock"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@wellcarehomenursing.com",
      subtitle: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "123 Healthcare Ave, Suite 100",
      subtitle: "Your City, ST 12345"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 8AM - 6PM",
      subtitle: "Weekend on-call available"
    }
  ];

  const services = [
    "Skilled Nursing Care",
    "Post-Surgical Care",
    "Medication Management",
    "Wound Care",
    "Chronic Disease Management",
    "Physical Therapy",
    "Palliative Care",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-medical-blue to-accent-pink py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${contactBg})` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Contact WellCare
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Ready to get started? Contact us today to schedule a consultation 
              and learn how we can help you or your loved one.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-medical-blue mb-6">
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-medical-gray mb-8">
                    Fill out the form below and one of our care coordinators will contact you 
                    within 24 hours to discuss your needs and schedule an assessment.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-medical-blue mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-medical-blue/20 focus:border-accent-pink"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-medical-blue mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-medical-blue/20 focus:border-accent-pink"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-medical-blue mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-medical-blue/20 focus:border-accent-pink"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-medical-blue mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-medical-blue/20 rounded-md focus:outline-none focus:border-accent-pink"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-medical-blue mb-2">
                        Tell us about your needs
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your healthcare needs, any specific requirements, or questions you have..."
                        className="border-medical-blue/20 focus:border-accent-pink"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-medical-blue mb-6">
                Get in Touch
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-accent-pink" />
                      </div>
                      <div>
                        <h3 className="font-bold text-medical-blue mb-1">
                          {info.title}
                        </h3>
                        <p className="text-medical-blue font-semibold mb-1">
                          {info.details}
                        </p>
                        <p className="text-medical-gray text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Emergency Notice */}
              <Card className="border-0 shadow-lg bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-700 mb-2">
                    Medical Emergency?
                  </h3>
                  <p className="text-red-600 text-sm mb-4">
                    If you're experiencing a medical emergency, please call 911 
                    immediately or go to your nearest emergency room.
                  </p>
                  <p className="text-red-600 text-sm">
                    For urgent but non-emergency situations, call our 24/7 line: 
                    <span className="font-semibold">(555) 123-4567</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              What to Expect When You Contact Us
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              We make the process of getting care as simple and comfortable as possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We'll discuss your needs and answer any questions during a free consultation call."
              },
              {
                step: "2",
                title: "Home Assessment",
                description: "Our nurse will visit to assess your environment and healthcare requirements."
              },
              {
                step: "3",
                title: "Care Plan & Start",
                description: "We'll create a personalized care plan and begin services as soon as possible."
              }
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-accent-pink rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-4">
                    {step.title}
                  </h3>
                  <p className="text-medical-gray leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-medical-blue mb-8">
                Insurance & Payment Options
              </h2>
              <p className="text-lg text-medical-gray leading-relaxed mb-6">
                We work with most major insurance providers and accept various payment methods 
                to make our services accessible to everyone who needs them.
              </p>
              <div className="space-y-4">
                {[
                  "Medicare and Medicaid accepted",
                  "Most private insurance plans",
                  "Veterans Affairs (VA) benefits",
                  "Private pay options available",
                  "Flexible payment plans",
                  "Insurance verification assistance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-pink" />
                    <span className="text-medical-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-medical-blue mb-6">
                    Insurance Verification
                  </h3>
                  <p className="text-medical-gray mb-6">
                    Not sure if your insurance covers home nursing services? 
                    Our team can help verify your benefits at no cost to you.
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-medical-blue hover:bg-medical-blue/90"
                  >
                    <a href="tel:(555)123-4567">Call for Benefits Check</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;