import { MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppointmentButton from '@/components/AppointmentButton';

const Locations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={new URL('../assets/herobg (1).jpg', import.meta.url).href}
            alt="WellCare service area"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/80 to-accent-pink/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Locations
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We currently serve patients across Rawalpindi and Islamabad with fast response times.
            </p>
          </div>
        </div>
      </section>

             {/* Combined Location Card */}
       <section className="py-16 bg-medical-light-blue">
         <div className="container mx-auto px-4">
           <div className=" mx-auto">
             <Card className="border-0 shadow-lg">
               <CardContent className="p-0">
                 <div className="p-8">
                                       <h3 className="text-3xl font-bold text-medical-blue mb-4 text-center">
                      Pakistan - Rawalpindi & Islamabad Service Areas
                    </h3>
                   <div className="grid md:grid-cols-2 gap-8 mb-6">
                     <div className="text-center">
                       <div className="flex items-center justify-center text-medical-gray mb-2">
                         <MapPin className="h-6 w-6 text-accent-pink mr-2" />
                         <span className="text-lg font-semibold">Rawalpindi Office</span>
                       </div>
                       <p className="text-medical-gray">Rawalpindi, Pakistan</p>
                     </div>
                     <div className="text-center">
                       <div className="flex items-center justify-center text-medical-gray mb-2">
                         <MapPin className="h-6 w-6 text-accent-pink mr-2" />
                         <span className="text-lg font-semibold">Islamabad Office</span>
                       </div>
                       <p className="text-medical-gray">Islamabad, Pakistan</p>
                     </div>
                   </div>
                   <div className="flex items-center justify-center text-medical-gray mb-6">
                     <Phone className="h-6 w-6 text-accent-pink mr-2" />
                     <span className="text-xl font-semibold">+923106881824</span>
                   </div>
                 </div>
                                   <div className="h-[400px] w-full">
                    <iframe
                      title="Pakistan Map with Rawalpindi & Islamabad Service Areas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sPakistan!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                                   <div className="p-8 text-center">
                    <Button asChild className="bg-medical-blue hover:bg-medical-blue/90">
                      <a href="https://www.google.com/maps?q=Pakistan&markers=color:red%7Clabel:I%7C33.6844,73.0479&markers=color:blue%7Clabel:R%7C33.5651,73.0169" target="_blank" rel="noopener noreferrer">
                        Open Pakistan Map with Service Areas
                      </a>
                    </Button>
                  </div>
               </CardContent>
             </Card>
           </div>
         </div>
       </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Care in Your Area?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to schedule a consultation and learn how we can provide 
            professional home nursing care in your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppointmentButton 
              type="consultation"
              size="lg"
              variant="outline"
              className="rounded-lg"
            />
            <AppointmentButton 
              type="appointment"
              size="lg"
              variant="secondary"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;


