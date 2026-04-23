import { Link } from "react-router-dom";
import { Clock, Flame, MapPin, ArrowRight } from "lucide-react";
import { FLASH_DEALS, type FlashDeal } from "@/data/venues";
import { useCountdown } from "@/hooks/useCountdown";

const FlashCard = ({ deal }: { deal: FlashDeal }) => {
  const { hours, minutes, seconds, expired } = useCountdown(deal.endsAt);
  const off = Math.round(((deal.originalPrice - deal.discountedPrice) / deal.originalPrice) * 100);

  return (
    <Link
      to={`/venue/${deal.venueId}`}
      className="group flex-shrink-0 w-72 sm:w-80 bg-card rounded-2xl overflow-hidden shadow-card lift-card border border-border"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={deal.image}
          alt={deal.venueName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-gradient-flash text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
          <Flame className="h-3.5 w-3.5" /> {off}% OFF
        </div>
        <div className={`absolute top-3 right-3 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 ${expired ? "bg-muted-foreground/80" : "bg-foreground/70"}`}>
          <Clock className="h-3.5 w-3.5" />
          {expired ? "Expired" : `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`}
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide">{deal.sport}</p>
        <h3 className="font-display font-bold text-foreground text-lg leading-tight mt-1 group-hover:text-primary transition-colors">
          {deal.venueName}
        </h3>
        <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin className="h-3.5 w-3.5" /> {deal.area}, {deal.city}
        </p>
        <p className="text-sm font-medium text-foreground mt-2">{deal.slot}</p>

        <div className="flex items-end justify-between mt-3 pt-3 border-t border-border">
          <div>
            <span className="text-sm text-muted-foreground line-through mr-2">₹{deal.originalPrice}</span>
            <span className="text-2xl font-display font-bold text-destructive">₹{deal.discountedPrice}</span>
          </div>
          <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Grab it <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export const FlashSpot = () => (
  <section className="py-20 md:py-24 bg-background-soft">
    <div className="container mx-auto container-px">
      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-flash text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="h-3.5 w-3.5" /> FlashSpot
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Last-minute deals.<br className="sm:hidden" /> <span className="text-muted-foreground">Going fast.</span>
          </h2>
        </div>
        <Link to="/search" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          See all deals <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 pb-2">
          {FLASH_DEALS.map((d) => (
            <FlashCard key={d.venueId + d.slot} deal={d} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
