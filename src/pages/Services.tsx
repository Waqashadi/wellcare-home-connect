import { Heart, Shield, Clock, Stethoscope, Pill, Bandage, User, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import servicesBg from '@/assets/services-bg.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: Heart,
      title: "Skilled Nursing Care",
      description: "Comprehensive nursing care including wound care, medication management, and health monitoring by licensed professionals.",
      features: [
        "Wound care and dressing changes",
        "IV therapy and injections",
        "Vital signs monitoring",
        "Disease management"
      ]
    },
    {
      icon: Shield,
      title: "Post-Surgical Care",
      description: "Specialized recovery care to ensure optimal healing and recovery after surgical procedures.",
      features: [
        "Surgical site monitoring",
        "Pain management",
        "Mobility assistance",
        "Recovery education"
      ]
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Professional oversight of medication regimens to ensure safety and effectiveness.",
      features: [
        "Medication administration",
        "Drug interaction monitoring",
        "Compliance tracking",
        "Family education"
      ]
    },
    {
      icon: Stethoscope,
      title: "Chronic Disease Management",
      description: "Ongoing care and support for patients with chronic conditions like diabetes, COPD, and heart disease.",
      features: [
        "Blood sugar monitoring",
        "Respiratory therapy",
        "Cardiac care",
        "Nutrition counseling"
      ]
    },
    {
      icon: Bandage,
      title: "Wound Care Specialists",
      description: "Expert wound care services for complex wounds, pressure sores, and healing complications.",
      features: [
        "Advanced wound assessment",
        "Specialized dressings",
        "Infection prevention",
        "Healing progress monitoring"
      ]
    },
    {
      icon: User,
      title: "Personal Care Services",
      description: "Assistance with daily living activities to maintain independence and dignity.",
      features: [
        "Bathing and grooming",
        "Meal preparation",
        "Light housekeeping",
        "Companionship"
      ]
    }
  ];

  const specialtyServices = [
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock availability for urgent healthcare needs and emergencies."
    },
    {
      title: "Physical Therapy",
      description: "In-home rehabilitation services to improve mobility and strength."
    },
    {
      title: "Occupational Therapy",
      description: "Helping patients regain independence in daily activities and self-care."
    },
    {
      title: "Palliative Care",
      description: "Comfort-focused care to improve quality of life for patients with serious illnesses."
    },
    {
      title: "Pediatric Home Care",
      description: "Specialized nursing care for children with complex medical needs."
    },
    {
      title: "Hospice Care",
      description: "Compassionate end-of-life care focusing on comfort and dignity."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-medical-blue to-accent-pink py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${servicesBg})` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Healthcare Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Comprehensive home nursing services designed to meet your unique healthcare needs 
              with professional expertise and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Core Nursing Services
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Our certified nurses provide a full range of medical services in the comfort 
              and privacy of your own home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-accent-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-medical-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-medical-gray">
                        <div className="w-2 h-2 bg-accent-pink rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Specialty Care Services
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Additional specialized services to address specific healthcare needs and conditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-medical-blue mb-3">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Our Care Process
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              We follow a systematic approach to ensure you receive the best possible care 
              tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Comprehensive evaluation of your healthcare needs and home environment."
              },
              {
                step: "02",
                title: "Care Plan Development",
                description: "Creating a personalized care plan with input from you, your family, and your physician."
              },
              {
                step: "03",
                title: "Care Implementation",
                description: "Our certified nurses begin providing care according to your personalized plan."
              },
              {
                step: "04",
                title: "Ongoing Monitoring",
                description: "Regular assessments and plan adjustments to ensure optimal outcomes."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-accent-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-4">
                  {step.title}
                </h3>
                <p className="text-medical-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to schedule a consultation and learn how our services 
            can benefit you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-medical-blue"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-medical-blue hover:bg-white/90"
            >
              <Link to="/nurses">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;