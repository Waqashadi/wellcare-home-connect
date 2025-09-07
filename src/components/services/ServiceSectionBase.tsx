import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceSectionBaseProps = {
  id: string;
  title: string;
  description: string;
  features?: string[];
  imageSrc?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ServiceSectionBase({
  id,
  title,
  description,
  features = [],
  imageSrc,
  ctaHref = "/appointment",
  ctaLabel = "Book This Service",
}: ServiceSectionBaseProps) {
  return (
    <section id={id} className="py-16 scroll-mt-header max-sm:py-6">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-medical-blue mb-3 max-sm:text-xl">
              {title}
            </h2>
            <p className="text-lg text-medical-gray leading-relaxed mb-6 max-sm:text-sm">
              {description}
            </p>
            {features.length > 0 && (
              <div className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent-pink flex-shrink-0 mt-0.5" />
                    <span className="text-medical-gray max-sm:text-sm">{f}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent-pink hover:bg-accent-pink/90 rounded-lg">
                <Link to={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <img
                src={imageSrc || new URL('../../assets/herobg (3).jpg', import.meta.url).href}
                alt={title}
                loading="lazy"
                className="w-full max-h-[360px] rounded-xl object-cover ring-1 ring-black/5"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  if (!(t as any)._fallback) {
                    (t as any)._fallback = true;
                    t.src = "/placeholder.svg";
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


