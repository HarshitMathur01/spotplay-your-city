import { Link } from "react-router-dom";
import { Check, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/owner-dashboard-mockup.jpg";

const benefits = [
  "Auto-fill empty slots with FlashSpot deals",
  "Manage every booking right from WhatsApp",
  "Real-time revenue dashboard, anytime",
];

export const ForOwners = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto container-px">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            For Venue Owners
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Grow your turf revenue by{" "}
            <span className="relative inline-block">
              <span className="relative z-10">40%</span>
              <span className="absolute inset-x-0 bottom-1 h-3 md:h-5 bg-accent/40 -skew-x-3 -z-0" />
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
            Stop losing money on empty slots. SpotPlay fills your calendar automatically, handles bookings, and pays you faster.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 text-foreground">
                <span className="h-6 w-6 mt-0.5 rounded-full bg-accent grid place-items-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-accent-foreground stroke-[3]" />
                </span>
                <span className="text-base sm:text-lg">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4 items-center">
            <Link to="/list-venue">
              <Button variant="hero" size="lg" className="group">
                List Your Venue Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <span className="text-muted-foreground text-sm">No commitment. Cancel anytime.</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-accent rounded-[3rem] opacity-20 blur-3xl" />
          <div className="relative bg-gradient-hero rounded-3xl p-6 sm:p-10 shadow-hero overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5" /> +42% MoM
            </div>
            <img
              src={dashboardMockup}
              alt="Owner dashboard showing bookings & revenue"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full max-w-sm mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
