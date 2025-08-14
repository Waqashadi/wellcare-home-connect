import { Pill, Users, Clock, Shield, CheckCircle, Phone, Mail, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AppointmentButton from '@/components/AppointmentButton';

const MedicationManagement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../../assets/herobg (1).jpg', import.meta.url).href}
            alt="Medication Management"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Medication Management
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Safe, accurate, and timely medication administration by qualified healthcare professionals in your home.
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
                <Pill className="h-12 w-12 text-medical-blue mr-4" />
                <h2 className="text-3xl font-bold text-medical-blue">Professional Medication Care</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Our medication management services ensure that you receive the right medication, at the right time, 
                in the right dose, with proper monitoring and documentation.
              </p>
            </div>

            {/* What We Offer */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Our Medication Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Medication Administration</h4>
                        <p className="text-gray-600 text-sm">Safe and accurate medication delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Dosage Verification</h4>
                        <p className="text-gray-600 text-sm">Double-checking medication doses and timing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Side Effect Monitoring</h4>
                        <p className="text-gray-600 text-sm">Watching for adverse reactions and interactions</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Medication Organization</h4>
                        <p className="text-gray-600 text-sm">Proper storage and pill organization</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Refill Coordination</h4>
                        <p className="text-gray-600 text-sm">Managing prescription renewals and refills</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Patient Education</h4>
                        <p className="text-gray-600 text-sm">Teaching about medications and their effects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Protocols */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Safety Protocols</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <AlertTriangle className="h-8 w-8 text-medical-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Five Rights</h4>
                    <p className="text-gray-600 text-sm">Right patient, medication, dose, time, and route</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <Clock className="h-8 w-8 text-medical-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Timely Administration</h4>
                    <p className="text-gray-600 text-sm">Strict adherence to medication schedules</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-medical-light-blue p-4 rounded-lg mb-4">
                      <CheckCircle className="h-8 w-8 text-medical-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Documentation</h4>
                    <p className="text-gray-600 text-sm">Complete records of all medication given</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Types of Medications */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-6">Types of Medications We Manage</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Oral Medications</h4>
                        <p className="text-gray-600 text-sm">Pills, tablets, capsules, and liquid medications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Injectable Medications</h4>
                        <p className="text-gray-600 text-sm">Insulin, blood thinners, and other injections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Topical Medications</h4>
                        <p className="text-gray-600 text-sm">Creams, ointments, and patches</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Inhalation Medications</h4>
                        <p className="text-gray-600 text-sm">Asthma inhalers and nebulizer treatments</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Eye & Ear Drops</h4>
                        <p className="text-gray-600 text-sm">Ophthalmic and otic medications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Suppositories</h4>
                        <p className="text-gray-600 text-sm">Rectal and vaginal medications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-6">Benefits of Professional Medication Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Medication Safety</h4>
                        <p className="text-gray-600 text-sm">Reduced risk of medication errors</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Improved Compliance</h4>
                        <p className="text-gray-600 text-sm">Better adherence to medication schedules</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Peace of Mind</h4>
                        <p className="text-gray-600 text-sm">Family members can rest assured</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Better Health Outcomes</h4>
                        <p className="text-gray-600 text-sm">Improved treatment effectiveness</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Professional Monitoring</h4>
                        <p className="text-gray-600 text-sm">Expert observation of medication effects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-pink mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">24/7 Availability</h4>
                        <p className="text-gray-600 text-sm">Emergency medication support when needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-medical-blue mb-4">Need Medication Management?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us to arrange professional medication management services for yourself or your loved one.
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
                      <span className="text-gray-700">+923106881824</span>
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

export default MedicationManagement;
