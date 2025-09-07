import { Bandage, Users, Clock, Shield, CheckCircle, Phone, Mail, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AppointmentButton from '@/components/AppointmentButton';

const WoundCare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../../assets/herobg (1).jpg', import.meta.url).href}
            alt="Wound Care"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-3 max-sm:text-3xl">
              Wound Care
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-sm:text-sm">
              Professional wound care and treatment services to promote healing and prevent complications.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Bandage className="h-12 w-12 text-medical-blue mr-4 max-sm:hidden" />
                <h2 className="text-3xl font-bold text-medical-blue max-sm:text-lg">Specialized Wound Treatment</h2>
              </div>
              <p className="text-gray-600 text-lg max-sm:text-sm">
                Our wound care services provide expert treatment for various types of wounds, using advanced techniques 
                and sterile procedures to ensure optimal healing and prevent infections.
              </p>
            </div>

            {/* What We Offer */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-pink mr-3 max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue max-sm:text-lg">Our Wound Care Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Wound Assessment</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Comprehensive evaluation of wound type and severity</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Wound Cleaning</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Sterile cleaning and debridement procedures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Dressing Changes</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Regular dressing changes with appropriate materials</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Infection Prevention</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Monitoring and preventing wound infections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Healing Progress</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Tracking wound healing and progress</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Patient Education</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Teaching proper wound care techniques</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Types of Wounds */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center mb-6">
                  <Activity className="h-8 w-8 text-accent-pink mr-3 max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue max-sm:text-lg">Types of Wounds We Treat</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Surgical Wounds</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Post-operative incision care and monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pressure Ulcers</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Bed sores and pressure injury treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Diabetic Wounds</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Foot ulcers and diabetic wound care</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Trauma Wounds</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Accident-related injuries and lacerations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Burns</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Minor burn treatment and care</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Chronic Wounds</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Non-healing wounds and ulcers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Process */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold text-medical-blue mb-6 max-sm:text-lg">Our Treatment Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Assessment</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">Evaluate wound type, size, and condition</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cleaning</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">Sterile cleaning and debridement</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Treatment</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">Apply appropriate dressings and medications</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Monitoring</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">Track healing progress and prevent complications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold text-medical-blue mb-6 max-sm:text-lg">Benefits of Professional Wound Care</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Faster Healing</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Professional care promotes optimal healing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Infection Prevention</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Reduced risk of wound infections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pain Management</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Proper care reduces pain and discomfort</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Scar Minimization</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Proper care reduces scarring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Expert Assessment</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Professional evaluation of healing progress</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Home Convenience</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Receive care in the comfort of your home</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="mb-8">
              <CardContent className="p-4 text-center">
                <h3 className="text-2xl font-bold text-medical-blue mb-4 max-sm:text-lg">Need Professional Wound Care?</h3>
                <p className="text-gray-600 mb-6 max-sm:text-sm">
                  Contact us to arrange specialized wound care services for yourself or your loved one.
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
                    className="bg-medical-blue whitespace-nowrap text-white"
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

export default WoundCare;
