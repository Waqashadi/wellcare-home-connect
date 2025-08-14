import { Phone } from 'lucide-react';

type CallButtonProps = {
  phone?: string; // E.164 without '+' preferred (e.g., 03106881824)
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'floating';
  size?: 'sm' | 'md' | 'lg';
};

function sanitizePhone(raw: string): string {
  return (raw || "").replace(/[^0-9]/g, "");
}

export default function CallButton({
  phone,
  label = "Call Us Now",
  className,
  variant = 'secondary',
  size = 'md',
}: CallButtonProps) {
  const envPhone = (import.meta as any)?.env?.VITE_PHONE_NUMBER as string | undefined;
  const normalized = sanitizePhone(phone || envPhone || "+923106881824");
  const telUrl = `tel:${normalized}`;

  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-accent-pink  hover:bg-accent-pink/90 text-black shadow-lg hover:shadow-xl focus:ring-accent-pink/50",
    secondary: "bg-medical-blue hover:bg-medical-blue/90 text-black shadow-lg hover:shadow-xl focus:ring-accent-pink/50",
    floating: "fixed z-[9999] inline-flex items-center justify-center h-12 w-12 rounded-full bg-[hsl(var(--accent-pink))] hover:scale-110 transition-all shadow-lg shadow-[hsl(var(--accent-pink))]/30 ring-1 ring-black/5 text-white"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`;

  if (variant === 'floating') {
    return (
      <a
        href={telUrl}
        aria-label={`Call ${normalized}`}
        className={variantClasses.floating}
        style={{
          bottom: "calc(4.5rem + env(safe-area-inset-bottom, 0px))",
          right: "calc(1rem + env(safe-area-inset-right, 0px))",
        }}
      >
        <Phone className="h-8 w-8 text-white" />
      </a>
    );
  }

  return (
    <a
      href={telUrl}
      aria-label={`Call ${normalized}`}
      className={classes}
    >
      <Phone className="mr-2 h-5 w-5" />
      {label}
    </a>
  );
}
