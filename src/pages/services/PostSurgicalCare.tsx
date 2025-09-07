import { Bandage, Users, Clock, Shield, CheckCircle, Phone, Mail, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AppointmentButton from '@/components/AppointmentButton';

const PostSurgicalCare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../../assets/herobg (1).jpg', import.meta.url).href}
            alt="Post-Surgical Care"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-3 max-sm:text-2xl">
              Post-Surgical Care
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-sm:text-sm">
              Specialized care and support during your recovery period after surgery, ensuring optimal healing and comfort.
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
                <h2 className="text-3xl font-bold text-medical-blue max-sm:text-lg">Comprehensive Post-Surgical Support</h2>
              </div>
              <p className="text-gray-600 text-lg max-sm:text-sm">
                Our post-surgical care services provide specialized medical attention and support during your recovery period, 
                helping you heal faster and more comfortably in your own home.
              </p>
            </div>

            {/* What We Offer */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-pink mr-3 max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue max-sm:text-lg">Our Post-Surgical Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Wound Care & Dressing</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Professional wound cleaning and dressing changes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pain Management</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Medication administration and pain relief strategies</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Vital Signs Monitoring</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Regular monitoring of blood pressure, temperature, and pulse</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Mobility Assistance</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Help with safe movement and positioning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Infection Prevention</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Monitoring for signs of infection and complications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Recovery Guidance</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Education on post-surgical care and recovery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recovery Phases */}
            <Card className="mb-8">
              <CardContent className="p-2">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-accent-pink mr-3 max-sm:hidden" />
                  <h3 className="text-2xl font-bold text-medical-blue max-sm:text-lg">Recovery Phases We Support</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Immediate Post-Op</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">First 24-48 hours after surgery with intensive monitoring</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Early Recovery</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">Days 3-7 with wound care and mobility support</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Continued Healing</h4>
                    <p className="text-gray-600 text-sm max-sm:text-xs">Ongoing support until full recovery is achieved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold text-medical-blue mb-6 max-sm:text-lg">Benefits of Home Post-Surgical Care</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Faster Recovery</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Heal in familiar, comfortable surroundings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Reduced Complications</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Professional monitoring prevents issues</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Family Support</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Keep loved ones close during recovery</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Cost Effective</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">More affordable than extended hospital stays</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Personalized Care</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Tailored to your specific surgery and needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                        <p className="text-gray-600 text-sm max-sm:text-xs">Emergency care available when needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="mb-8">
              <CardContent className="p-2 text-center">
                <h3 className="text-2xl font-bold text-medical-blue mb-4 max-sm:text-lg">Plan Your Post-Surgical Care</h3>
                <p className="text-gray-600 mb-6 max-sm:text-xs">
                  Contact us to arrange specialized post-surgical care for yourself or your loved one.
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

export default PostSurgicalCare;
