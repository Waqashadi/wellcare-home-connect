import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const APPOINTMENT_EMAIL = 'infowellcares@gmail.com';
const APPOINTMENT_PHONE_DISPLAY = '0310-688-1824';
const APPOINTMENT_PHONE_TEL = '+923106881824';
const WHATSAPP_NUMBER_SANITIZED = '923106881824';

const Appointment = () => {
  const mailtoHref = `mailto:${APPOINTMENT_EMAIL}?subject=${encodeURIComponent('Appointment Request')}&body=${encodeURIComponent('Hello WellCare Team,%0D%0A%0D%0AI would like to book an appointment. Please contact me back.%0D%0A%0D%0AThanks!')}`;
  const telHref = `tel:${APPOINTMENT_PHONE_TEL}`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER_SANITIZED}?text=${encodeURIComponent('Hello! I would like to book an appointment with WellCare Home Nursing.')}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={encodeURI('/herobg (2).jpg')} alt="Appointment" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl text-white/90">No forms, no backend—reach us instantly using any method below.</p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-accent-pink">
                  <Mail className="h-8 w-8 text-accent-pink transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-2">Email</h3>
                <p className="text-medical-gray mb-6">We usually reply within a few hours.</p>
                <Button asChild className="bg-accent-pink hover:bg-accent-pink/90">
                  <a href={mailtoHref}>Mail Us</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-accent-pink">
                  <Phone className="h-8 w-8 text-accent-pink transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-2">Call</h3>
                <p className="text-medical-gray mb-6">For fastest response during business hours.</p>
                <Button asChild className="bg-medical-blue hover:bg-medical-blue/90">
                  <a href={telHref}>Call {APPOINTMENT_PHONE_DISPLAY}</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-accent-pink">
                  <MessageCircle className="h-8 w-8 text-accent-pink transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-2">WhatsApp</h3>
                <p className="text-medical-gray mb-6">Chat with us on WhatsApp right away.</p>
                <Button asChild className="bg-[#25D366] hover:bg-[#1EBE59] text-white">
                  <a href={waHref} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;


