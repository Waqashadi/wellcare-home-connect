import { Activity, Users, Clock, Shield, CheckCircle, Phone, Mail, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AppointmentButton from '@/components/AppointmentButton';

const PhysicalTherapy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../../assets/herobg (1).jpg', import.meta.url).href}
            alt="Physical Therapy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Physical Therapy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Professional physical therapy services to restore mobility, strength, and function in the comfort of your home.
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
                <Activity className="h-12 w-12 text-medical-blue mr-4" />
                <h2 className="text-3xl font-bold text-medical-blue">Home-Based Physical Therapy</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Our physical therapy services help patients recover from injuries, surgeries, and medical conditions 
                through personalized exercise programs and therapeutic techniques delivered in your home environment.
              </p>
            </div>

            {/* What We Offer */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Our Physical Therapy Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Mobility Assessment</h4>
                        <p className="text-gray-600 text-sm">Comprehensive evaluation of movement and function</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Exercise Programs</h4>
                        <p className="text-gray-600 text-sm">Customized strengthening and flexibility exercises</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Pain Management</h4>
                        <p className="text-gray-600 text-sm">Therapeutic techniques to reduce pain and discomfort</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Balance Training</h4>
                        <p className="text-gray-600 text-sm">Fall prevention and stability exercises</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Gait Training</h4>
                        <p className="text-gray-600 text-sm">Walking and movement pattern improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Home Safety</h4>
                        <p className="text-gray-600 text-sm">Assessment and recommendations for home modifications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conditions We Treat */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Conditions We Treat</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Post-Surgical Recovery</h4>
                        <p className="text-gray-600 text-sm">Rehabilitation after orthopedic surgeries</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Stroke Recovery</h4>
                        <p className="text-gray-600 text-sm">Neurological rehabilitation and mobility training</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Arthritis Management</h4>
                        <p className="text-gray-600 text-sm">Joint mobility and pain relief exercises</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Balance Disorders</h4>
                        <p className="text-gray-600 text-sm">Fall prevention and stability training</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Chronic Pain</h4>
                        <p className="text-gray-600 text-sm">Pain management and functional improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Elderly Care</h4>
                        <p className="text-gray-600 text-sm">Age-related mobility and strength training</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Process */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-6">Our Treatment Process</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Assessment</h4>
                    <p className="text-gray-600 text-sm">Evaluate mobility, strength, and functional abilities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Plan</h4>
                    <p className="text-gray-600 text-sm">Develop personalized treatment goals and plan</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Treatment</h4>
                    <p className="text-gray-600 text-sm">Implement therapeutic exercises and techniques</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <span className="text-2xl font-bold text-medical-blue">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Progress</h4>
                    <p className="text-gray-600 text-sm">Monitor improvement and adjust treatment as needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-6">Benefits of Home Physical Therapy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Convenience</h4>
                        <p className="text-gray-600 text-sm">Receive therapy in your familiar environment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Personalized Care</h4>
                        <p className="text-gray-600 text-sm">Tailored to your specific needs and goals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Family Involvement</h4>
                        <p className="text-gray-600 text-sm">Include family members in the recovery process</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Better Compliance</h4>
                        <p className="text-gray-600 text-sm">Higher adherence to exercise programs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Real Environment</h4>
                        <p className="text-gray-600 text-sm">Practice in your actual living space</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Cost Effective</h4>
                        <p className="text-gray-600 text-sm">Often more affordable than clinic visits</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-medical-blue mb-4">Start Your Recovery Journey</h3>
                <p className="text-gray-600 mb-6">
                  Contact us to arrange physical therapy services and begin your path to improved mobility and function.
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
                    className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Contact Us</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-medical-blue mr-3" />
                      <span className="text-gray-700">0310-688-1824</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-medical-blue mr-3" />
                      <span className="text-gray-700">infowellcares@gmail.com</span>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-semibold">Service Areas:</p>
                    <p>Rawalpindi & Islamabad, Pakistan</p>
                    <p className="text-sm mt-2">24/7 Emergency Care Available</p>
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

export default PhysicalTherapy;
