import { MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Locations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={encodeURI('/herobg (1).jpg')}
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
              We currently serve patients across Lahore and Islamabad with fast response times.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Cards */}
      <section className="py-16 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              city: 'Lahore Office',
              address: 'Lahore, Pakistan',
              phone: '(+92) 300 841 2981',
              maps: 'https://www.google.com/maps?q=Lahore%20Pakistan&output=embed',
              link: 'https://www.google.com/maps?q=Lahore+Pakistan',
            },{
              city: 'Islamabad Office',
              address: 'Islamabad, Pakistan',
              phone: '(+92) 300 841 2981',
              maps: 'https://www.google.com/maps?q=Islamabad%20Pakistan&output=embed',
              link: 'https://www.google.com/maps?q=Islamabad+Pakistan',
            }].map((loc) => (
              <Card key={loc.city} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-medical-blue mb-1">{loc.city}</h3>
                    <div className="flex items-center text-medical-gray mb-2">
                      <MapPin className="h-5 w-5 text-accent-pink mr-2" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center text-medical-gray">
                      <Phone className="h-5 w-5 text-accent-pink mr-2" />
                      <span>{loc.phone}</span>
                    </div>
                  </div>
                  <div className="h-[260px] w-full">
                    <iframe
                      title={`${loc.city} Map`}
                      src={loc.maps}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="p-6">
                    <Button asChild className="bg-medical-blue hover:bg-medical-blue/90">
                      <a href={loc.link} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Region Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
            <div className="h-[480px] w-full">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps?q=Lahore%20Pakistan,Islamabad%20Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;


