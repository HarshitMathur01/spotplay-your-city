import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Trophy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CITIES, SPORTS } from "@/data/venues";
import heroTurf from "@/assets/hero-turf.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("Dhanbad");
  const [sport, setSport] = useState("Cricket");

  const handleSearch = () => {
    navigate(`/search?city=${city}&sport=${sport}`);
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* bg image */}
      <div className="absolute inset-0">
        <img
          src={heroTurf}
          alt="SpotPlay sports turf at sunset with players"
          className="w-full h-full object-cover opacity-25"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
      </div>

      {/* glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative container mx-auto container-px pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary-foreground/90 text-xs sm:text-sm font-medium mb-6 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Live now in 6 cities • 500+ venues
          </div>

          <h1 className="font-display text-primary-foreground text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up">
            Book Any Turf in{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">60 Seconds</span>
              <span className="absolute inset-x-0 bottom-1.5 h-3 md:h-5 bg-accent/25 -skew-x-3 -z-0" />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up">
            No calls. No haggling. Find your spot, lock the slot, and just play. Cricket, Football, Badminton — all in one place.
          </p>

          {/* Search card */}
          <div className="mt-10 bg-white rounded-2xl shadow-hero p-3 sm:p-4 max-w-3xl mx-auto animate-scale-in">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-secondary border-0 text-foreground font-semibold focus:ring-2 focus:ring-accent focus:outline-none appearance-none cursor-pointer"
                  aria-label="Select city"
                >
                  {CITIES.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-secondary border-0 text-foreground font-semibold focus:ring-2 focus:ring-accent focus:outline-none appearance-none cursor-pointer"
                  aria-label="Select sport"
                >
                  {SPORTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <Button onClick={handleSearch} variant="hero" size="lg" className="h-14 px-7 group">
                Find Slots
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* trust strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/85 text-sm sm:text-base font-medium animate-fade-in">
            <span className="flex items-center gap-2"><span className="text-accent font-bold">500+</span> Venues</span>
            <span className="h-1 w-1 rounded-full bg-primary-foreground/30" />
            <span className="flex items-center gap-2"><span className="text-accent font-bold">10,000+</span> Bookings</span>
            <span className="h-1 w-1 rounded-full bg-primary-foreground/30" />
            <span className="flex items-center gap-2"><span className="text-accent font-bold">₹0</span> Cancellation Fee</span>
          </div>
        </div>
      </div>
    </section>
  );
};
