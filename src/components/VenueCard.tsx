import { Link } from "react-router-dom";
import { MapPin, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Venue } from "@/data/venues";

const sportEmoji: Record<string, string> = {
  Cricket: "🏏",
  Football: "⚽",
  Badminton: "🏸",
  "Box Cricket": "🏏",
};

export const VenueCard = ({ venue }: { venue: Venue }) => (
  <Link to={`/venue/${venue.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-card lift-card border border-border">
    <div className="relative h-52 overflow-hidden">
      <img
        src={venue.image}
        alt={venue.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {venue.availableNow && (
        <div className="absolute top-3 left-3 bg-success text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
          <Zap className="h-3 w-3 fill-white" /> Available Now
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur text-foreground text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md">
        <Star className="h-3 w-3 fill-warning text-warning" /> {venue.rating}
        <span className="text-muted-foreground font-normal">({venue.reviews})</span>
      </div>
    </div>

    <div className="p-5">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {venue.sports.map((s) => (
          <span key={s} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-accent/15 text-primary">
            {sportEmoji[s]} {s}
          </span>
        ))}
      </div>
      <h3 className="font-display text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
        {venue.name}
      </h3>
      <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
        <MapPin className="h-3.5 w-3.5" /> {venue.area}, {venue.city}
      </p>

      <div className="flex items-end justify-between mt-4 pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">Starts at</p>
          <p className="font-display text-2xl font-bold text-foreground">
            ₹{venue.pricePerHour}<span className="text-sm font-normal text-muted-foreground">/hr</span>
          </p>
        </div>
        <Button variant="hero" size="sm" className="pointer-events-none">Book Now</Button>
      </div>
    </div>
  </Link>
);
