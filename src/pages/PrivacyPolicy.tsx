import { Shield, Lock, Eye, Users, FileText, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
           src={new URL('../assets/herobg (1).jpg', import.meta.url).href}
            alt="Privacy Policy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your privacy and data security are our top priorities. Learn how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <Shield className="h-12 w-12 text-medical-blue mr-4" />
                <h2 className="text-3xl font-bold text-medical-blue">WellCare Home Nursing Privacy Policy</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-gray-700 leading-relaxed">
                At WellCare Home Nursing, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Information We Collect</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Name, address, and contact information</li>
                      <li>Medical history and health information</li>
                      <li>Emergency contact details</li>
                      <li>Insurance and payment information</li>
                      <li>Photographs or videos (with consent)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Information</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>IP address and device information</li>
                      <li>Website usage data and cookies</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">How We Use Your Information</h3>
                </div>
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide personalized home nursing care services</li>
                    <li>Coordinate with healthcare providers and family members</li>
                    <li>Process payments and insurance claims</li>
                    <li>Send appointment reminders and updates</li>
                    <li>Improve our services and customer experience</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Respond to emergencies and urgent situations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Information Sharing and Disclosure</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>With your consent:</strong> We will obtain your explicit permission before sharing your information</li>
                    <li><strong>Healthcare providers:</strong> To coordinate your care with doctors, hospitals, and other medical professionals</li>
                    <li><strong>Legal requirements:</strong> When required by law or to protect your safety and the safety of others</li>
                    <li><strong>Emergency situations:</strong> To respond to medical emergencies or urgent care needs</li>
                    <li><strong>Service providers:</strong> With trusted partners who help us deliver our services (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Data Security</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We implement comprehensive security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure access controls and authentication systems</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on privacy and security practices</li>
                    <li>Physical security measures for our facilities</li>
                    <li>Regular backup and disaster recovery procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Your Privacy Rights</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                    <li><strong>Restriction:</strong> Limit how we use your information</li>
                    <li><strong>Portability:</strong> Receive your information in a portable format</li>
                    <li><strong>Objection:</strong> Object to certain uses of your information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 text-accent-pink mr-3" />
                  <h3 className="text-2xl font-bold text-medical-blue">Contact Us</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

            {/* Updates to Policy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-4">Updates to This Policy</h3>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
