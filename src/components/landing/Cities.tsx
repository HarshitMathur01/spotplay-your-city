import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CITIES } from "@/data/venues";

export const Cities = () => (
  <section className="py-20 md:py-24 bg-background-soft">
    <div className="container mx-auto container-px">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          Where we're live
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Pick your city. Find your spot.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {CITIES.map((c, i) => (
          <Link
            key={c.name}
            to={`/search?city=${c.name}`}
            className="group relative aspect-square sm:aspect-[4/5] rounded-2xl bg-gradient-hero overflow-hidden flex flex-col justify-end p-5 lift-card"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90" />
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl group-hover:bg-accent/50 transition-colors" />
            <div className="relative">
              <MapPin className="h-5 w-5 text-accent mb-2" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">{c.name}</h3>
              <p className="text-primary-foreground/70 text-sm mt-0.5">{c.venues} venues</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
