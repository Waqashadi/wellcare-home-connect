import { Users, Award, Heart, Shield, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutBg from '@/assets/about-bg.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We provide care with genuine empathy and understanding for each patient's unique situation."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through reliable, professional, and confidential healthcare services."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality care standards in every interaction."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Involving families in care decisions to ensure comprehensive support for all."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Martinez",
      role: "Director of Nursing",
      credentials: "RN, MSN, 15+ years experience",
      description: "Leading our team with expertise in home health and patient advocacy."
    },
    {
      name: "Jennifer Thompson",
      role: "Care Coordinator",
      credentials: "RN, BSN, 10+ years experience",
      description: "Specializing in care plan development and family education."
    },
    {
      name: "Michael Rodriguez",
      role: "Clinical Supervisor",
      credentials: "RN, 12+ years experience",
      description: "Ensuring quality standards and continuous improvement in patient care."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-medical-blue to-accent-pink py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${aboutBg})` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About WellCare Home Nursing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              With over a decade of experience, we've been providing compassionate, 
              professional home nursing care to families in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-medical-blue mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-medical-gray leading-relaxed mb-6">
                At WellCare Home Nursing, our mission is to provide exceptional, compassionate 
                healthcare services in the comfort and privacy of your own home. We believe 
                that quality healthcare should be accessible, personalized, and delivered with 
                the highest level of professionalism.
              </p>
              <p className="text-lg text-medical-gray leading-relaxed mb-8">
                We are committed to helping individuals and families navigate their healthcare 
                journey with dignity, respect, and peace of mind. Our goal is to enhance the 
                quality of life for our patients while supporting their families through 
                challenging times.
              </p>
              <div className="space-y-4">
                {[
                  "Patient-centered care approach",
                  "Evidence-based nursing practices",
                  "Continuous quality improvement",
                  "Family education and support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent-pink" />
                    <span className="text-medical-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-medical-light-blue rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-medical-blue mb-2">10+</div>
                    <div className="text-medical-gray">Years Serving</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-medical-blue mb-2">500+</div>
                    <div className="text-medical-gray">Families Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-medical-blue mb-2">50+</div>
                    <div className="text-medical-gray">Certified Nurses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-medical-blue mb-2">99%</div>
                    <div className="text-medical-gray">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the way 
              we deliver care to our patients and families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-4">
                    {value.title}
                  </h3>
                  <p className="text-medical-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Meet the experienced healthcare professionals who lead our organization 
              and ensure the highest quality of care for every patient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-medical-blue to-accent-pink rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-pink font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-medical-gray text-sm mb-4">
                    {member.credentials}
                  </p>
                  <p className="text-medical-gray leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Accreditations & Certifications
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              We maintain the highest standards of care through continuous education, 
              certification, and adherence to healthcare regulations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Joint Commission",
                description: "Accredited for Home Care Services"
              },
              {
                title: "Medicare Certified",
                description: "Approved Medicare Provider"
              },
              {
                title: "State Licensed",
                description: "Licensed Home Health Agency"
              },
              {
                title: "HIPAA Compliant",
                description: "Privacy & Security Standards"
              }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-medical-blue mb-2">
                  {cert.title}
                </h3>
                <p className="text-medical-gray text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;