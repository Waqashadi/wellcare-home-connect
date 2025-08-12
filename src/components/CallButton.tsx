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
  variant = 'primary',
  size = 'md',
}: CallButtonProps) {
  const envPhone = (import.meta as any)?.env?.VITE_PHONE_NUMBER as string | undefined;
  const normalized = sanitizePhone(phone || envPhone || "03106881824");
  const telUrl = `tel:${normalized}`;

  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none   focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-accent-pink hover:bg-accent-pink/90 text-white shadow-lg hover:shadow-xl focus:ring-accent-pink/50",
    secondary: "bg-medical-blue hover:bg-medical-blue/90 text-white shadow-lg hover:shadow-xl focus:ring-medical-blue/50",
    floating: "fixed z-[9999] h-14 w-14 rounded-full bg-accent-pink hover:bg-accent-pink/90 text-white shadow-xl hover:shadow-2xl focus:ring-accent-pink/50 mb-16"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`;

  if (variant === 'floating') {
    return (
      <a
        href={telUrl}
        aria-label={`Call ${normalized}`}
        className={classes }
        style={{
          bottom: "calc(6rem + env(safe-area-inset-bottom, 0px))",
          right: "calc(1rem + env(safe-area-inset-right, 0px))",
        }}
      >
        <span className="absolute h-full w-full rounded-full bg-accent-pink/40 animate-ping" aria-hidden="true" />
                                   <svg
            className="relative h-24 w-24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={telUrl}
      aria-label={`Call ${normalized}`}
      className={classes}
    >
             <svg
         className="mr-2 h-5 w-5"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         aria-hidden="true"
       >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {label}
    </a>
  );
}
