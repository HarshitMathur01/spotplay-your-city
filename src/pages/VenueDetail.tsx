import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, MapPin, Star, Car, Lightbulb, Droplets, ShowerHead, Coffee, Heart, Share2, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { VENUES } from "@/data/venues";
import { toast } from "sonner";

const amenityIcon: Record<string, any> = {
  Parking: Car,
  Floodlights: Lightbulb,
  "Drinking Water": Droplets,
  "Changing Room": ShowerHead,
  Washroom: ShowerHead,
  Cafeteria: Coffee,
};

const SLOT_TIMES = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const VenueDetail = () => {
  const { id } = useParams();
  const venue = VENUES.find((v) => v.id === id) ?? VENUES[0];
  const [activeSport, setActiveSport] = useState(venue.sports[0]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  // pseudo-random booked state
  const isBooked = (day: number, time: string) => {
    const h = (day * 31 + time.length * 7) % 5;
    return h < 2;
  };

  const toggleSlot = (slot: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot],
    );
  };

  const total = selectedSlots.length * venue.pricePerHour;
  const platformFee = selectedSlots.length > 0 ? 25 : 0;

  return (
    <div className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[280px] sm:h-[400px]">
        <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <Link to="/search" className="absolute top-4 left-4 h-10 w-10 grid place-items-center rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-white">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="h-10 w-10 grid place-items-center rounded-full bg-white/90 backdrop-blur shadow-md"><Heart className="h-5 w-5" /></button>
          <button className="h-10 w-10 grid place-items-center rounded-full bg-white/90 backdrop-blur shadow-md"><Share2 className="h-5 w-5" /></button>
        </div>
        <div className="absolute bottom-6 left-0 right-0 container mx-auto container-px text-white">
          <div className="flex items-center gap-2 mb-2">
            {venue.availableNow && <span className="bg-success text-white text-xs font-bold px-3 py-1 rounded-full">Available Now</span>}
            <span className="bg-white/95 text-foreground text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Star className="h-3 w-3 fill-warning text-warning" /> {venue.rating} ({venue.reviews})
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">{venue.name}</h1>
          <p className="flex items-center gap-1.5 mt-1 text-white/90"><MapPin className="h-4 w-4" /> {venue.area}, {venue.city}</p>
        </div>
      </div>

      <main className="container mx-auto container-px py-8 lg:py-10 flex-1">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          <div>
            {/* Sport tabs */}
            <div className="flex gap-2 flex-wrap mb-6">
              {venue.sports.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSport(s)}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                    activeSport === s
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Calendar */}
            <div className="bg-card rounded-2xl shadow-card border border-border p-5 sm:p-6">
              <h2 className="font-display text-xl font-bold mb-4">Pick your slot</h2>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-5">
                {DAYS.map((d, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + i);
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDay(i)}
                      className={`flex-shrink-0 min-w-[68px] flex flex-col items-center py-2.5 px-2 rounded-xl transition-all ${
                        selectedDay === i
                          ? "bg-accent text-accent-foreground shadow-md"
                          : "bg-secondary text-foreground hover:bg-secondary/70"
                      }`}
                    >
                      <span className="text-xs font-semibold">{d}</span>
                      <span className="text-lg font-display font-bold">{date.getDate()}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {SLOT_TIMES.map((t) => {
                  const booked = isBooked(selectedDay, t);
                  const selected = selectedSlots.includes(t);
                  return (
                    <button
                      key={t}
                      disabled={booked}
                      onClick={() => toggleSlot(t)}
                      className={`relative px-3 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                        booked
                          ? "bg-muted text-muted-foreground border-transparent cursor-not-allowed line-through"
                          : selected
                          ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.03]"
                          : "bg-background text-foreground border-border hover:border-accent hover:bg-accent/5"
                      }`}
                    >
                      {selected && <Check className="absolute top-1 right-1 h-3.5 w-3.5" />}
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-6 bg-card rounded-2xl shadow-card border border-border p-6">
              <h2 className="font-display text-xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {venue.amenities.map((a) => {
                  const Icon = amenityIcon[a] ?? Check;
                  return (
                    <div key={a} className="flex items-center gap-2 text-foreground">
                      <span className="h-9 w-9 rounded-lg bg-accent/15 grid place-items-center text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{a}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 bg-card rounded-2xl shadow-card border border-border p-6">
              <h2 className="font-display text-xl font-bold mb-4">Location</h2>
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-muted">
                <iframe
                  title="Venue location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(venue.area + ", " + venue.city + ", India")}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-6 bg-card rounded-2xl shadow-card border border-border p-6">
              <h2 className="font-display text-xl font-bold mb-4">What players say</h2>
              <div className="space-y-4">
                {[
                  { n: "Vikash K.", r: 5, c: "Best turf in the area. Lights are amazing for night games. Will book again." },
                  { n: "Aditi M.", r: 4, c: "Clean, quick check-in, fair price. Wish parking was bigger but otherwise great." },
                ].map((r) => (
                  <div key={r.n} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-bold">{r.n[0]}</div>
                      <div>
                        <p className="font-semibold text-sm">{r.n}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < r.r ? "fill-warning text-warning" : "text-muted"}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{r.c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking summary sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-card rounded-2xl shadow-card border border-border p-6">
              <h3 className="font-display text-xl font-bold">Booking Summary</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {selectedSlots.length === 0 ? "Select slots to continue" : `${selectedSlots.length} slot${selectedSlots.length > 1 ? "s" : ""} selected`}
              </p>

              {selectedSlots.length > 0 && (
                <div className="mt-4 space-y-2">
                  {selectedSlots.map((s) => (
                    <div key={s} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{s} • {activeSport}</span>
                      <span className="font-semibold">₹{venue.pricePerHour}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 pt-5 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="flex justify-between font-display font-bold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span>₹{total + platformFee}</span>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full mt-5"
                disabled={selectedSlots.length === 0}
                onClick={() => toast.success("Booking confirmed! 🎉", { description: "Confirmation sent on WhatsApp." })}
              >
                Pay ₹{total + platformFee} • Confirm
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">Powered by Razorpay • UPI / Cards / Wallets</p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default VenueDetail;
