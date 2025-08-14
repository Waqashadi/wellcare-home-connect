import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const normalized = sanitizePhone(phone || envPhone || "+923106881824");
  const telUrl = `tel:${normalized}`;

  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    // Dark background → light text; hover slightly darker, keep contrast
    primary: "bg-accent-pink text-white hover:bg-accent-pink/90 shadow-lg hover:shadow-xl focus:ring-accent-pink/50",
    // Light background → accent pink text; hover fills accent pink with white text
    secondary: "bg-white text-[hsl(var(--accent-pink))] hover:bg-[hsl(var(--accent-pink))] hover:text-white shadow-lg hover:shadow-xl focus:ring-accent-pink/50",
    // Outline on dark sections: white text; hover fills white with accent pink text
    outline: "border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--accent-pink))] shadow-lg hover:shadow-xl focus:ring-accent-pink/40"
  } as const;

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`;

  const getLabel = () => {
    switch (type) {
      case 'consultation':
        return 'Call Us Now';
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

  if (type === 'appointment') {
    return (
      <Link to="/appointment" aria-label={`${getLabel()} - Open appointment page`} className={classes}>
        {getIcon()}
        {getLabel()}
      </Link>
    );
  }

  return (
    <a href={telUrl} aria-label={`${getLabel()} - Call ${normalized}`} className={classes}>
      {getIcon()}
      {getLabel()}
    </a>
  );
}
