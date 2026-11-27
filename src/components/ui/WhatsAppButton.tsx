import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de saber mais sobre o Bindzu One ERP.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgb(0_0_0/0.2)] transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
