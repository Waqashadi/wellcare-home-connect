import { Heart, Shield, Clock, Stethoscope, Pill, Bandage, User, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import servicesBg from '@/assets/services-bg.jpg';
import { ServiceSectionBase } from '@/components/services';
import AppointmentButton from '@/components/AppointmentButton';
import { Helmet } from "react-helmet-async";

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
    <>

    <Helmet>
        <title>Our Home Nursing Services | WellCare Home Nursing</title>
        <meta
          name="description"
          content="Explore WellCare Home Nursing's wide range of professional healthcare services — including skilled nursing care, post-surgical recovery, wound care, physical therapy, and more — all delivered at your home."
        />
        <meta
          name="keywords"
          content="home nursing services, WellCare Home Nursing, skilled nursing care, wound care, physical therapy, Pakistan home healthcare"
        />
        <link rel="canonical" href="https://wellcareshomenursing.com/services" />
      </Helmet>

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in max-sm:text-3xl">
              Our Healthcare Services
            </h1>
          </div>
        </div>
      </section>
      {/* Dedicated Sections */}
      <ServiceSectionBase
        id="home-injection"
        title="Home Injection Services"
        description="Safe, hygienic, and professional injection administration in the comfort of your home by licensed nurses."
        features={[
          'Intramuscular and subcutaneous injections',
          'Antibiotic and vitamin shots',
          'Insulin administration and education',
          'Aseptic technique and sharps safety',
        ]}
        imageSrc={new URL('../assets/HISimg.jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-doctor"
        title="Home Doctor Visit"
        description="Experienced physicians available for in-home consultations, assessments, and prescriptions."
        features={[
          'Comprehensive physical exams',
          'Acute and chronic condition management',
          'Care coordination and referrals',
          'On-site diagnostics guidance',
        ]}
        imageSrc={new URL('../assets/herobg (2).jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-elderly"
        title="Home Elderly Care"
        description="Dignified, compassionate support for seniors to promote independence and safety at home."
        features={[
          'ADL assistance and mobility support',
          'Fall risk reduction and monitoring',
          'Medication reminders',
          'Family updates and education',
        ]}
        imageSrc={new URL('../assets/HCSimg.jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-icu"
        title="Home ICU Care"
        description="Advanced critical care setup at home with trained staff and monitoring equipment."
        features={[
          'Ventilator and oxygen therapy support',
          'Cardiac monitoring',
          'Skilled nursing 24/7',
          'Emergency escalation protocols',
        ]}
        imageSrc={new URL('../assets/HICOimg.jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-lab"
        title="Home Lab Test Services"
        description="Convenient at-home sample collection for a wide range of laboratory tests."
        features={[
          'Blood, urine, and swab collections',
          'Partnered accredited labs',
          'Fast results turnaround',
          'Doctor review and follow-up',
        ]}
        imageSrc={new URL('../assets/LabTestimg.jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-equipment"
        title="Home Medical Equipment"
        description="Rental and purchase of high-quality medical equipment with setup and training."
        features={[
          'Hospital beds, wheelchairs, walkers',
          'Suction machines and nebulizers',
          'CPAP/BiPAP and oxygen concentrators',
          'Delivery, setup, and maintenance',
        ]}
        imageSrc={new URL('../assets/HMimg.jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-nursing"
        title="Home Nursing Care"
        description="Comprehensive nursing services tailored to your medical needs at home."
        features={[
          'Vital monitoring and care plans',
          'Wound and catheter care',
          'Medication administration',
          'Education and caregiver support',
        ]}
        imageSrc={new URL('../assets/herobg (3).jpg', import.meta.url).href}
      />

      <ServiceSectionBase
        id="home-pharmacy"
        title="Home Pharmacy Services"
        description="Doorstep delivery of prescribed medicines and pharmacy counseling."
        features={[
          'Prescription review',
          'Drug interaction checks',
          'Adherence packaging (e.g., blister packs)',
          'Scheduled refills and delivery',
        ]}
        imageSrc={new URL('../assets/mission.jpg', import.meta.url).href}
      />




      {/* Specialty Services Section */}
      <section className="py-20 bg-medical-light-blue max-sm:py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6 max-sm:text-2xl">
              Specialty Care Services
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto max-sm:text-sm">
              Additional specialized services to address specific healthcare needs and conditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-medical-blue mb-3 max-sm:text-md">
                    {service.title}
                  </h3>
                  <p className="text-medical-gray leading-relaxed max-sm:text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 max-sm:py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6 max-sm:text-2xl">
              Our Care Process
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto max-sm:text-sm">
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
                <h3 className="text-xl font-bold text-medical-blue mb-4 max-sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-medical-gray leading-relaxed max-sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white max-sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 max-sm:text-2xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 max-sm:text-sm">
            Contact us today to schedule a consultation and learn how our services 
            can benefit you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppointmentButton 
              type="consultation"
              size="lg"
              variant="outline"
              className="rounded-lg"
            />
            <AppointmentButton 
              type="appointment"
              size="lg"
              variant="secondary"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;