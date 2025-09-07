import { Stethoscope, Users, Clock, Shield, CheckCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppointmentButton from '@/components/AppointmentButton';

const SkilledNursingCare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../../assets/herobg (1).jpg', import.meta.url).href}
            alt="Skilled Nursing Care"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-3 max-sm:text-2xl">
              Skilled Nursing Care
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-sm:text-sm">
              Professional nursing care delivered to your home by licensed and experienced healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-3">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-3">
                <Stethoscope className="h-12 w-12 text-medical-blue mr-4 max-sm:hidden" />
                <h2 className="text-3xl font-bold text-medical-blue max-sm:text-lg">Professional Home Nursing Care</h2>
              </div>
              <p className="text-gray-600 text-lg max-sm:text-sm">
                Our skilled nursing care services provide comprehensive medical care in the comfort of your home, 
                ensuring you receive the highest quality healthcare without leaving your familiar environment.
              </p>
            </div>

            {/* What We Offer */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-pink mr-3 max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue">What We Offer</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Medical Assessments</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Comprehensive health evaluations and monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Vital Signs Monitoring</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Regular blood pressure, temperature, and pulse checks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 max-sm:text-sm">Medication Administration</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Safe and timely medication delivery</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Wound Care</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Professional wound dressing and treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Catheter Care</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Proper catheter maintenance and hygiene</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Health Education</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Patient and family education on health management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Nurses */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-accent-pink mr-3   max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue max-sm:text-xl">Our Qualified Nurses</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <Shield className="h-8 w-8 text-medical-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Licensed Professionals</h4>
                    <p className="text-gray-600 text-sm">All nurses are licensed and certified by relevant authorities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <Clock className="h-8 w-8 text-medical-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Experienced Caregivers</h4>
                    <p className="text-gray-600 text-sm">Years of experience in home healthcare and patient care</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <Stethoscope className="h-8 w-8 text-medical-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Specialized Training</h4>
                    <p className="text-gray-600 text-sm">Continuous training in latest medical practices and protocols</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold text-medical-blue mb-6 max-sm:text-lg">Benefits of Home Nursing Care</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Comfort of Home</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Receive care in familiar surroundings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Personalized Care</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Tailored treatment plans for individual needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Family Involvement</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Keep family members informed and involved</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Cost Effective</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Often more affordable than hospital stays</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Reduced Infections</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Lower risk of hospital-acquired infections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">24/7 Availability</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Emergency care and support when needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="mb-8">
              <CardContent className="p-4 text-center">
                <h3 className="text-2xl font-bold text-medical-blue mb-4 max-sm:text-xl">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 max-sm:text-sm">
                  Contact us today to schedule a consultation and learn how our skilled nursing care can help you or your loved one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AppointmentButton
                    type="consultation"
                    size="lg"
                    variant="primary"
                  />
                  <AppointmentButton
                    type="appointment"
                    size="lg"
                    variant="outline"
                    className="bg-medical-blue text-white whitespace-nowrap"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 text-accent-pink mr-3 max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue max-sm:text-lg">Contact Us</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-medical-blue mr-3" />
                      <span className="text-gray-700 max-sm:text-sm">+923106881824</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-medical-blue mr-3" />
                      <span className="text-gray-700 max-sm:text-sm">infowellcares@gmail.com</span>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold mb-2">Service Areas:</p>
                    <p className='max-sm:text-xs'>Islamabad, Rawalpindi</p>
                    <p className="text-sm mt-2 max-sm:text-xs">24/7 Emergency Care Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkilledNursingCare;
