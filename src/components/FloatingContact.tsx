import { Phone } from "lucide-react";

type FloatingContactProps = {
  phoneTel?: string; // E.164 like +923106881824
  whatsappNumber?: string; // digits only, e.g., 923106881824
  whatsappMessage?: string;
  className?: string;
};

export default function FloatingContact({
  phoneTel,
  whatsappNumber,
  whatsappMessage = "Hello! I would like to book an appointment with WellCare Home Nursing.",
  className,
}: FloatingContactProps) {
  const envPhone = (import.meta as any)?.env?.VITE_PHONE_NUMBER as string | undefined;
  const envWa = (import.meta as any)?.env?.VITE_WHATSAPP_NUMBER as string | undefined;

  const telHref = `tel:${phoneTel || envPhone || "+923106881824"}`;
  const waNum = (whatsappNumber || envWa || "923106881824").replace(/[^0-9]/g, "");
  const waHref = `https://wa.me/${waNum}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`fixed right-0 bottom-6 z-[9999] flex flex-col ${className || ""}`}>
      {/* Top half (call) */}
      <a
        href={telHref}
        aria-label="Call us"
        className="inline-flex h-12 w-14 items-center justify-center rounded-l-full rounded-r-none shadow-xl ring-1 ring-black/5 transition-colors"
        style={{ backgroundColor: "hsl(var(--accent-pink))" }}
      >
        <Phone className="h-16 w-16 text-white" />
      </a>
      {/* Bottom half (WhatsApp) */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-22 w-24 items-center justify-center rounded-l-full rounded-r-none shadow-xl ring-1 ring-black/5 transition-colors"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.64c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.62.14-.19.27-.72.87-.88 1.05-.16.18-.32.2-.6.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.32-1.56-1.48-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.49.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.49.07-.75.34-.25.27-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.9.14.18 1.98 3.03 4.79 4.24.67.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.59-.65 1.82-1.28.23-.62.23-1.15.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M26.88 5.12C24.05 2.3 20.35.8 16.45.8 8.76.8 2.5 7.06 2.5 14.75c0 2.49.65 4.91 1.89 7.05L2 31.2l9.63-2.35c2.08 1.13 4.43 1.73 6.82 1.73h.01c7.69 0 13.95-6.26 13.95-13.95 0-3.89-1.51-7.59-4.43-10.51zm-10.43 24.2h-.01c-2.17 0-4.29-.58-6.14-1.68l-.44-.26-5.72 1.4 1.53-5.57-.29-.45c-1.19-1.85-1.82-3.99-1.82-6.19C3.56 7.67 9.37 1.86 16.46 1.86c3.4 0 6.59 1.32 8.99 3.72 2.4 2.4 3.72 5.59 3.72 8.99 0 7.09-5.81 12.9-12.72 12.9z" />
        </svg>
      </a>
    </div>
  );
}



