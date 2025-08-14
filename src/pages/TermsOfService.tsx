import { FileText, Shield, Users, Clock, Phone, Mail, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../assets/herobg (1).jpg', import.meta.url).href}
            alt="Terms of Service"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Please read these terms carefully before using our home nursing services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <FileText className="h-12 w-12 text-medical-blue mr-4" />
                <h2 className="text-3xl font-bold text-medical-blue">WellCare Home Nursing Terms of Service</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service govern your use of WellCare Home Nursing services. By using our services, 
                you agree to be bound by these terms and conditions.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Acceptance of Terms</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    By accessing or using our home nursing services, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                  <p className="text-gray-700">
                    We reserve the right to modify these terms at any time. Continued use of our services after changes 
                    constitutes acceptance of the modified terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Service Description</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    WellCare Home Nursing provides professional home healthcare services including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Skilled nursing care and medical assessments</li>
                    <li>Post-surgical care and wound management</li>
                    <li>Medication administration and management</li>
                    <li>Physical therapy and rehabilitation support</li>
                    <li>Elderly care and companionship services</li>
                    <li>Emergency medical response</li>
                    <li>Health monitoring and reporting</li>
                  </ul>
                  <p className="text-gray-700">
                    All services are provided by licensed healthcare professionals in accordance with applicable 
                    medical standards and regulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">User Responsibilities</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate and complete medical information</li>
                    <li>Follow prescribed treatment plans and medical advice</li>
                    <li>Maintain a safe environment for healthcare providers</li>
                    <li>Respect the privacy and professional boundaries of our staff</li>
                    <li>Notify us immediately of any changes in medical condition</li>
                    <li>Provide necessary access to your home for scheduled visits</li>
                    <li>Pay for services in accordance with agreed payment terms</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Payment Terms</h3>
                </div>
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Payment is due upon receipt of services unless otherwise agreed</li>
                    <li>We accept cash, bank transfers, and approved insurance payments</li>
                    <li>Late payments may result in service suspension</li>
                    <li>All fees are subject to change with 30 days notice</li>
                    <li>Insurance claims are processed on your behalf when applicable</li>
                    <li>Refunds are provided in accordance with our refund policy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Confidentiality */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Privacy and Confidentiality</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We are committed to protecting your privacy and maintaining the confidentiality of your medical information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>All medical information is kept strictly confidential</li>
                    <li>Information is shared only with authorized healthcare providers</li>
                    <li>We comply with all applicable privacy laws and regulations</li>
                    <li>Your consent is required for any information sharing</li>
                    <li>Security measures protect your personal and medical data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Limitation of Liability</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    While we strive to provide the highest quality care, we cannot guarantee specific outcomes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                    <li>Our liability is limited to the amount paid for services</li>
                    <li>We are not responsible for delays due to circumstances beyond our control</li>
                    <li>Medical outcomes depend on various factors beyond our control</li>
                    <li>Emergency situations may require immediate medical attention</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Cancellation Policy</h3>
                </div>
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>24-hour notice is required for appointment cancellations</li>
                    <li>Late cancellations may incur a cancellation fee</li>
                    <li>Emergency cancellations are handled on a case-by-case basis</li>
                    <li>We reserve the right to cancel services for safety reasons</li>
                    <li>Refunds are provided for prepaid services when appropriate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Termination of Services</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Services may be terminated under the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Non-payment of fees</li>
                    <li>Violation of these terms of service</li>
                    <li>Safety concerns for our staff</li>
                    <li>Inappropriate or abusive behavior</li>
                    <li>Medical condition requiring hospital care</li>
                    <li>Mutual agreement to discontinue services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Contact Information</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-medical-blue mr-3" />
                        <span className="text-gray-700">Phone: +923106881824</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-medical-blue mr-3" />
                        <span className="text-gray-700">Email: infowellcares@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-medical-blue mr-3" />
                        <span className="text-gray-700">Address: Rawalpindi & Islamabad, Pakistan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-4">Governing Law</h3>
                <p className="text-gray-700">
                  These Terms of Service are governed by the laws of Pakistan. Any disputes arising from these terms 
                  or our services will be resolved in accordance with Pakistani law and jurisdiction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
