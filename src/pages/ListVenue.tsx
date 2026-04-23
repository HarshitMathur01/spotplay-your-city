import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { CITIES, SPORTS } from "@/data/venues";
import { Check, Clock, Calendar, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const ListVenue = () => {
  const [sportsSel, setSportsSel] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleSport = (s: string) =>
    setSportsSel((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Application received! 🚀", { description: "We'll call you within 24 hours." });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />

      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container mx-auto container-px relative">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            For Venue Owners
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            List Your Venue in <span className="text-accent">5 Minutes</span>
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Zero setup fee. Zero subscription. Pay only when you get bookings.
          </p>
        </div>
      </section>

      <main className="container mx-auto container-px py-12 md:py-16 flex-1">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="h-16 w-16 rounded-full bg-success grid place-items-center mx-auto mb-5">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">You're in! 🎉</h2>
                <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                  Our onboarding team will WhatsApp you within 24 hours to verify and get your venue live.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold mb-2">Tell us about your venue</h2>

                <div>
                  <label className="text-sm font-semibold mb-1.5 block">Venue name</label>
                  <input required className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-accent focus:outline-none" placeholder="e.g. Greenfield Box Cricket Arena" />
                </div>

                <div>
                  <label className="text-sm font-semibold mb-1.5 block">City</label>
                  <select required className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-accent focus:outline-none">
                    <option value="">Select your city</option>
                    {CITIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Sports offered</label>
                  <div className="flex flex-wrap gap-2">
                    {SPORTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleSport(s)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                          sportsSel.includes(s)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border hover:border-accent"
                        }`}
                      >
                        {sportsSel.includes(s) && <Check className="inline h-3.5 w-3.5 mr-1" />}
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Phone number</label>
                    <input required type="tel" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-accent focus:outline-none" placeholder="+91 9XXXX XXXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">WhatsApp number</label>
                    <input required type="tel" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-accent focus:outline-none" placeholder="+91 9XXXX XXXXX" />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Get Started Free →
                </Button>
                <p className="text-xs text-muted-foreground text-center">By submitting you agree to our terms. We'll never spam you.</p>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6">What happens next</h3>
            <ol className="space-y-5">
              {[
                { icon: Check, t: "We verify (24h)", d: "Our team calls to verify your venue and helps with your first listing." },
                { icon: Calendar, t: "You set up slots", d: "Add availability, pricing, and photos. Takes 10 minutes max." },
                { icon: TrendingUp, t: "Bookings start coming", d: "Players find you instantly. You earn directly to your bank." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4 bg-card rounded-2xl p-5 border border-border shadow-card">
                  <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-accent grid place-items-center font-display font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{step.t}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 bg-gradient-field text-primary-foreground rounded-2xl p-6">
              <Clock className="h-8 w-8 text-accent mb-3" />
              <p className="font-display font-bold text-lg">Average venue earns ₹65,000 extra/month</p>
              <p className="text-primary-foreground/70 text-sm mt-1">After joining SpotPlay's network.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default ListVenue;
