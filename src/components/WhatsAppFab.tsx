import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <a
    href="https://wa.me/919999999999?text=Hi%20SpotPlay%2C%20I%20want%20to%20book%20a%20slot"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Book via WhatsApp"
    className="fixed bottom-5 right-5 z-50 group"
  >
    <div className="absolute inset-0 rounded-full bg-[hsl(142_65%_42%)] animate-pulse-glow" />
    <div className="relative bg-[hsl(142_70%_42%)] hover:bg-[hsl(142_70%_38%)] text-white rounded-full px-4 py-3.5 shadow-2xl flex items-center gap-2 font-semibold transition-all duration-300 group-hover:scale-105 group-active:scale-95">
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm">Book via WhatsApp</span>
    </div>
  </a>
);
