import { Users, Award, Star, Clock, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import nursesBg from '@/assets/nurses-bg.jpg';

const Nurses = () => {
  const nurses = [
    {
      name: "Dr. Sarah Martinez",
      role: "Director of Nursing",
      credentials: "RN, MSN",
      experience: "15+ Years",
      specialties: ["Critical Care", "Home Health", "Patient Education"],
      description: "Sarah leads our nursing team with extensive experience in critical care and home health services. She is passionate about patient advocacy and ensuring the highest quality of care."
    },
    {
      name: "Jennifer Thompson",
      role: "Senior Care Coordinator",
      credentials: "RN, BSN",
      experience: "12+ Years",
      specialties: ["Wound Care", "Diabetes Management", "Family Education"],
      description: "Jennifer specializes in complex wound care and chronic disease management. She works closely with families to develop comprehensive care plans."
    },
    {
      name: "Michael Rodriguez",
      role: "Clinical Supervisor",
      credentials: "RN, CEN",
      experience: "10+ Years",
      specialties: ["Emergency Care", "Cardiac Care", "Medication Management"],
      description: "Michael brings emergency nursing expertise to our home care team. He ensures clinical excellence and oversees our 24/7 emergency response protocols."
    },
    {
      name: "Lisa Chen",
      role: "Pediatric Specialist",
      credentials: "RN, BSN, CPN",
      experience: "8+ Years",
      specialties: ["Pediatric Care", "Family Support", "Development Assessment"],
      description: "Lisa is our certified pediatric nurse who provides specialized care for children with complex medical needs in their home environment."
    },
    {
      name: "Robert Johnson",
      role: "Wound Care Specialist",
      credentials: "RN, CWCN",
      experience: "14+ Years",
      specialties: ["Advanced Wound Care", "Pressure Ulcer Prevention", "Infection Control"],
      description: "Robert is our certified wound care specialist with extensive experience in treating complex wounds and preventing infections."
    },
    {
      name: "Maria Gonzalez",
      role: "Chronic Care Manager",
      credentials: "RN, CCM",
      experience: "11+ Years",
      specialties: ["COPD Care", "Heart Failure", "Palliative Care"],
      description: "Maria specializes in caring for patients with chronic conditions, helping them maintain their quality of life at home."
    }
  ];

  const qualifications = [
    {
      icon: Award,
      title: "Licensed Professionals",
      description: "All our nurses are licensed RNs with current state certifications"
    },
    {
      icon: Star,
      title: "Specialized Training",
      description: "Ongoing education in home health, safety protocols, and specialized care"
    },
    {
      icon: Shield,
      title: "Background Checked",
      description: "Comprehensive background checks and professional references verified"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Selected for their clinical expertise and caring, empathetic approach"
    }
  ];

  const stats = [
    { number: "50+", label: "Certified Nurses" },
    { number: "15", label: "Average Years Experience" },
    { number: "99%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-medical-blue to-accent-pink py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${nursesBg})` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Meet Our Nursing Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Our team of certified, experienced nurses is dedicated to providing 
              exceptional care with compassion and professionalism.
            </p>
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

      {/* Qualifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Why Our Nurses Are Different
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              We carefully select and train our nursing staff to ensure they meet 
              the highest standards of clinical expertise and compassionate care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <qual.icon className="h-8 w-8 text-accent-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-4">
                    {qual.title}
                  </h3>
                  <p className="text-medical-gray leading-relaxed">
                    {qual.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Meet some of our key nursing professionals who lead our care teams 
              and ensure excellent outcomes for every patient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nurses.map((nurse, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-medical-blue to-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-medical-blue mb-1">
                      {nurse.name}
                    </h3>
                    <p className="text-accent-pink font-semibold mb-1">
                      {nurse.role}
                    </p>
                    <p className="text-medical-gray text-sm">
                      {nurse.credentials} • {nurse.experience}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-medical-blue mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {nurse.specialties.map((specialty, specIndex) => (
                        <span 
                          key={specIndex}
                          className="bg-accent-pink/10 text-accent-pink text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-medical-gray text-sm leading-relaxed">
                    {nurse.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-medical-blue mb-8">
                Continuous Education & Training
              </h2>
              <p className="text-lg text-medical-gray leading-relaxed mb-6">
                Our nurses participate in ongoing education programs to stay current 
                with the latest healthcare practices, technologies, and safety protocols.
              </p>
              <div className="space-y-4">
                {[
                  "Monthly clinical training sessions",
                  "Certification maintenance programs",
                  "Safety and infection control updates",
                  "Specialized care technique workshops",
                  "Emergency response training",
                  "Patient communication skills development"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent-pink" />
                    <span className="text-medical-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-medical-blue mb-6">
                    Join Our Nursing Team
                  </h3>
                  <p className="text-medical-gray mb-6">
                    Are you a compassionate, skilled nurse looking to make a difference 
                    in patients' lives? We're always looking for qualified professionals 
                    to join our team.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                      <span className="text-sm text-medical-gray">Competitive compensation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                      <span className="text-sm text-medical-gray">Flexible scheduling options</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                      <span className="text-sm text-medical-gray">Continuing education support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                      <span className="text-sm text-medical-gray">Supportive team environment</span>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground"
                  >
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Our Professional Care
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Our experienced nursing team is ready to provide the compassionate, 
            professional care you or your loved one deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="outline"
                                className="border-white text-accent-pink hover:bg-white hover:text-medical-blue"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-medical-blue hover:bg-white/90"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nurses;