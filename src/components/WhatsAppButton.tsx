type WhatsAppButtonProps = {
  phone?: string; // E.164 without '+' preferred (e.g., +923106881824)
  message?: string;
  className?: string;
};

function sanitizePhone(raw: string): string {
  return (raw || "").replace(/[^0-9]/g, "");
}

export default function WhatsAppButton({
  phone,
  message = "Hello! I would like to know more about your home nursing services.",
  className,
}: WhatsAppButtonProps) {
  const envPhone = (import.meta as any)?.env?.VITE_WHATSAPP_NUMBER as string | undefined;
  const normalized = sanitizePhone(phone || envPhone || "+923106881824");
  const url = `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-[9999] inline-flex items-center justify-center h-12 w-12 bg-green-600 rounded-full bg-accent-pink hover:scale-110 transition-all shadow-lg shadow-[#25D366]/30 ring-1 ring-black/5 ${className || ""}`}
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1rem + env(safe-area-inset-right, 0px))",
      }}
    >
      <img
        src={new URL('../assets/whatsapp.png', import.meta.url).href}
        alt="WhatsApp"
        className="h-12 w-auto rounded-full"
      />
    </a>
  );
}


