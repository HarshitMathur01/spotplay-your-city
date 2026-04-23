import { Search, Calendar, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Pick your city + sport",
    desc: "Tell us where you wanna play and what game's on. We'll surface every open slot in your area.",
  },
  {
    icon: Calendar,
    title: "Lock a slot you love",
    desc: "Live availability across hundreds of venues. Pick a turf, pick a time, see real prices upfront.",
  },
  {
    icon: CheckCircle2,
    title: "Pay & you're in",
    desc: "Instant confirmation on WhatsApp + email. Show up, scan, play. That's literally it.",
  },
];

export const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto container-px">
      <div className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          How it works
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Three taps. One game on.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Built for players who'd rather be on the field than on the phone.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative group bg-background-soft rounded-2xl p-7 lift-card border border-border"
          >
            <div className="absolute -top-3 -right-3 h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold shadow-md">
              {i + 1}
            </div>
            <div className="h-14 w-14 rounded-xl bg-accent/15 grid place-items-center mb-5 group-hover:bg-accent transition-colors">
              <s.icon className="h-7 w-7 text-primary group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
