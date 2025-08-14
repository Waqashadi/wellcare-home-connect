import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import AppointmentButton from '@/components/AppointmentButton';
import Services from './Services';

// Smooth easing for counters
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  durationMs?: number;
  start?: boolean; // when true, begin the animation
  className?: string;
};

function AnimatedCounter({
  target,
  suffix = '',
  durationMs = 1500,
  start = false,
  className,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * target);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, durationMs]);

  return <span className={className}>{value.toLocaleString()}{suffix}</span>;
}

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Skilled Nursing Care",
      description: "Professional nursing care delivered with compassion in your home environment."
    },
    {
      icon: Shield,
      title: "Post-Surgical Care",
      description: "Specialized recovery care to ensure optimal healing after medical procedures."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and monitoring for peace of mind."
    },
    {
      icon: Users,
      title: "Family-Centered Care",
      description: "Involving family members in care plans for comprehensive support."
    }
  ];

  const stats = [
    { target: 500, suffix: "+", label: "Families Served" },
    { target: 50, suffix: "+", label: "Certified Nurses" },
    { target: 10, suffix: "+", label: "Years Experience" },
    { target: 99, suffix: "%", label: "Satisfaction Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daughter of Patient",
      content: "WellCare's nurses provided exceptional care for my mother. Their professionalism and compassion made all the difference during her recovery.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Family Caregiver",
      content: "The peace of mind knowing that qualified nurses are available 24/7 is invaluable. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Patient's Wife",
      content: "Professional, caring, and reliable. WellCare Home Nursing exceeded our expectations in every way.",
      rating: 5
    }
  ];

  // Hero background slider images with alt text (local assets from public/)
  const heroImages = [
    {
      src: new URL('../assets/herobg (1).jpg', import.meta.url).href,
      alt: 'Nurse providing compassionate home care to an elderly patient'
    },
    {
      src: new URL('../assets/herobg (2).jpg', import.meta.url).href,
      alt: 'Home nursing consultation with medical professional and patient'
    },
    {
      src: new URL('../assets/herobg (3).jpg', import.meta.url).href,
      alt: 'Caregiver assisting senior with supportive and friendly attention'
    },
  ] as const;

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsInView, setStatsInView] = useState(false);

  // Autoplay background change
  useEffect(() => {
    // Preload images for smoother transitions
    heroImages.forEach((img) => {
      const preload = new Image();
      preload.src = encodeURI(img.src);
    });

    const intervalId = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5s per slide
    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  // Start counters when stats section enters the viewport
  useEffect(() => {
    if (!statsRef.current) return;
    const element = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with background slider */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[80vh]">
        {/* Sliding background images */}
        <div className="absolute inset-0">
          {heroImages.map((imgData, index) => (
            <img
              key={imgData.src}
              src={encodeURI(imgData.src)}
              alt={imgData.alt}
              loading={index === activeHeroIndex ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === activeHeroIndex ? 'opacity-100 kenburns' : 'opacity-0'
              }`}
              aria-hidden={index !== activeHeroIndex}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                // First fallback to a high-quality placeholder (distinct per index)
                const fallbacks = [
                  new URL('../assets/about-bg.jpg', import.meta.url).href,
                  new URL('../assets/services-bg.jpg', import.meta.url).href,
                  new URL('../assets/blog-bg.jpg', import.meta.url).href,
                ];
                if (!(target as any)._fallbackStage) {
                  (target as any)._fallbackStage = 1;
                  target.src = encodeURI(fallbacks[index % fallbacks.length]);
                } else if ((target as any)._fallbackStage === 1) {
                  (target as any)._fallbackStage = 2;
                  target.src = encodeURI('/placeholder.svg');
                }
              }}
            />
          ))}
          {/* Gradient overlay for brand tint and contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/60 via-medical-blue/40 to-medical-pink/40" />
          {/* Subtle dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveHeroIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeHeroIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-shadow-lg">
                Compassionate
                <span className="block text-accent-pink text-shadow-lg">Home Nursing</span>
                Care
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Professional healthcare services delivered in the comfort of your home. 
                Our certified nurses provide personalized care to help you live well every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AppointmentButton 
                  type="consultation"
                  size="lg"
                  variant="primary"
                  className="rounded-lg"
                />
                <AppointmentButton 
                  type="appointment"
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-white text-white hover:bg-white hover:text-[hsl(var(--accent-pink))]"
                />
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent-pink rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-medical-blue">24/7 Emergency Care</h3>
                  <p className="text-medical-gray">Call us anytime for immediate assistance</p>
                  <p className="text-3xl font-bold text-medical-blue">0310-688-1824</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-medical-light-blue">
        <div className="container mx-auto px-4" ref={statsRef}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  start={statsInView}
                  durationMs={4000}
                  className="text-4xl lg:text-5xl font-bold text-medical-blue mb-2 inline-block"
                />
                <div className="text-medical-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className=''>
         <Services/>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center w-full mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Our Healthcare Services
            </h2>
          
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-accent-pink/40"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-pink/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <CardContent className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-accent-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-accent-pink/20">
                    <service.icon className="h-8 w-8 text-accent-pink transition-transform duration-300 group-hover:scale-110 accent-on-hover-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue mb-2 transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <span className="mb-4 block h-0.5 w-8 mx-auto bg-accent-pink transform origin-center transition-transform duration-300 group-hover:scale-x-125 accent-on-hover-pink" />
                  <p className="text-medical-gray leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-medical-blue mb-8">
                Why Choose WellCare Home Nursing?
              </h2>
              <div className="space-y-6">
                {[
                  "Licensed and certified nursing professionals",
                  "Personalized care plans for each patient",
                  "24/7 emergency support and monitoring",
                  "Comprehensive insurance coverage accepted",
                  "Family involvement in care decisions",
                  "Regular progress reports and updates"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent-pink flex-shrink-0 mt-1" />
                    <p className="text-medical-gray text-lg">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-medical-blue hover:bg-medical-blue/90"
                >
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="mb-8 bg-white rounded-2xl p-8 shadow-xl">
              <img
                  src={new URL('../assets/herobg (2).jpg', import.meta.url).href}
                  alt="WellCare nurse providing attentive home care"
                  loading="lazy"
                  className="w-full max-h-[380px] rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
                />
                <h3 className="text-2xl mt-4 font-bold text-medical-blue mb-6">
                  Request a Free Consultation
                </h3>
                <p className="text-medical-gray mb-6">
                  Let us assess your needs and create a personalized care plan for you or your loved one.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground"
                >
                   <a href="mailto:infowellcares@gmail.com?subject=Schedule%20Consultation">Schedule Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              What Our Families Say
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Read testimonials from families who have experienced our compassionate care firsthand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-medical-gray mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-medical-blue">{testimonial.name}</p>
                    <p className="text-medical-gray text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Quality Home Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss your healthcare needs and learn how we can help you or your loved one live well every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              variant="outline"
                                className="border-white text-accent-pink hover:bg-white hover:text-medical-blue"
            >
                             <a href="mailto:infowellcares@gmail.com?subject=Get%20Started">Get Started Today</a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-medical-blue hover:bg-white/90"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;