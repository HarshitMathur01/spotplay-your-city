import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Our weekday slots used to be dead. Now they're booked solid. Revenue is up nearly 50% in three months.",
    name: "Rohit Sinha",
    role: "Owner, Greenfield Box Cricket",
    city: "Dhanbad",
    isOwner: true,
  },
  {
    quote: "I book my Sunday football match in literally 30 seconds now. No more group chats trying to coordinate calls.",
    name: "Aman Verma",
    role: "Player",
    city: "Ranchi",
    isOwner: false,
  },
  {
    quote: "WhatsApp booking management changed everything. I run my turf from my phone while my kids play.",
    name: "Priya Das",
    role: "Owner, Smash Academy",
    city: "Jamshedpur",
    isOwner: true,
  },
];

export const Testimonials = () => (
  <section className="py-20 md:py-28 bg-gradient-field text-primary-foreground relative overflow-hidden">
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

    <div className="container mx-auto container-px relative">
      <div className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
          Real talk
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Players love it. Owners love it more.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-300 hover:-translate-y-1"
          >
            <Quote className="h-8 w-8 text-accent mb-4" />
            <p className="text-base leading-relaxed text-primary-foreground/95">"{t.quote}"</p>

            <div className="flex gap-0.5 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-accent grid place-items-center text-accent-foreground font-display font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-primary-foreground/60">{t.role} • {t.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
