import { Calendar, Phone } from 'lucide-react';

type AppointmentButtonProps = {
  phone?: string;
  type?: 'appointment' | 'consultation';
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
};

function sanitizePhone(raw: string): string {
  return (raw || "").replace(/[^0-9]/g, "");
}

export default function AppointmentButton({
  phone,
  type = 'appointment',
  className,
  variant = 'primary',
  size = 'md',
  showIcon = true,
}: AppointmentButtonProps) {
  const envPhone = (import.meta as any)?.env?.VITE_PHONE_NUMBER as string | undefined;
  const normalized = sanitizePhone(phone || envPhone || "03106881824");
  const telUrl = `tel:${normalized}`;

  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-accent-pink hover:bg-accent-pink/90 text-white shadow-lg hover:shadow-xl focus:ring-accent-pink/50",
    secondary: "bg-medical-blue hover:bg-medical-blue/90 text-white shadow-lg hover:shadow-xl focus:ring-medical-blue/50",
    outline: "border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white shadow-lg hover:shadow-xl focus:ring-accent-pink/50"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`;

  const getLabel = () => {
    switch (type) {
      case 'consultation':
        return 'Schedule Consultation';
      case 'appointment':
      default:
        return 'Book Appointment';
    }
  };

  const getIcon = () => {
    if (!showIcon) return null;
    
    if (type === 'consultation') {
      return (
        <Phone className="mr-2 h-5 w-5" />
      );
    }
    
    return (
      <Calendar className="mr-2 h-5 w-5" />
    );
  };

  return (
    <a
      href={telUrl}
      aria-label={`${getLabel()} - Call ${normalized}`}
      className={classes}
    >
      {getIcon()}
      {getLabel()}
    </a>
  );
}
