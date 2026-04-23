import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Filter, MapPin, Search as SearchIcon, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { VenueCard } from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { CITIES, SPORTS, VENUES } from "@/data/venues";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const city = params.get("city") || "";
  const sport = params.get("sport") || "";
  const maxPrice = Number(params.get("maxPrice") || 2000);

  const update = (k: string, v: string) => {
    const next = new URLSearchParams(params);
    if (v) next.set(k, v); else next.delete(k);
    setParams(next);
  };

  const filtered = useMemo(() => {
    return VENUES.filter((v) =>
      (!city || v.city === city) &&
      (!sport || v.sports.includes(sport as any)) &&
      v.pricePerHour <= maxPrice,
    );
  }, [city, sport, maxPrice]);

  return (
    <div className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />

      {/* search header */}
      <section className="bg-primary text-primary-foreground py-8 md:py-10">
        <div className="container mx-auto container-px">
          <h1 className="font-display text-2xl md:text-4xl font-bold">
            {filtered.length} spots {city && `in ${city}`} {sport && `for ${sport}`}
          </h1>
          <p className="text-primary-foreground/70 mt-1">Tap a venue to see slots & book in seconds.</p>
        </div>
      </section>

      {/* filter bar */}
      <div className="sticky top-16 z-30 bg-background border-b border-border">
        <div className="container mx-auto container-px py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <Button variant="outline" size="sm" onClick={() => setShowFilters(true)} className="md:hidden flex-shrink-0">
            <Filter className="h-4 w-4" /> Filters
          </Button>

          <div className="hidden md:flex items-center gap-2 flex-wrap">
            <select value={city} onChange={(e) => update("city", e.target.value)} className="h-10 px-3 rounded-lg border border-input bg-background text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-none">
              <option value="">All cities</option>
              {CITIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
            <select value={sport} onChange={(e) => update("sport", e.target.value)} className="h-10 px-3 rounded-lg border border-input bg-background text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-none">
              <option value="">All sports</option>
              {SPORTS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <input type="date" defaultValue={new Date().toISOString().slice(0, 10)} className="h-10 px-3 rounded-lg border border-input bg-background text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-none" />
            <div className="h-10 px-3 rounded-lg border border-input bg-background flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Max ₹</span>
              <input type="range" min={300} max={2000} step={50} value={maxPrice} onChange={(e) => update("maxPrice", e.target.value)} className="accent-accent" />
              <span className="font-semibold w-12">{maxPrice}</span>
            </div>
            {(city || sport) && (
              <Button variant="ghost" size="sm" onClick={() => setParams({})}>
                <X className="h-4 w-4" /> Clear
              </Button>
            )}
          </div>

          <div className="ml-auto flex-shrink-0 hidden sm:flex">
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4" /> Map view
            </Button>
          </div>
        </div>
      </div>

      {/* mobile filter sheet */}
      {showFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setShowFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl p-6 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display text-xl font-bold">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="p-2"><X /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold mb-1.5 block">City</label>
                <select value={city} onChange={(e) => update("city", e.target.value)} className="w-full h-12 px-3 rounded-lg border border-input bg-background">
                  <option value="">All cities</option>
                  {CITIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block">Sport</label>
                <select value={sport} onChange={(e) => update("sport", e.target.value)} className="w-full h-12 px-3 rounded-lg border border-input bg-background">
                  <option value="">All sports</option>
                  {SPORTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block">Max price: ₹{maxPrice}/hr</label>
                <input type="range" min={300} max={2000} step={50} value={maxPrice} onChange={(e) => update("maxPrice", e.target.value)} className="w-full accent-accent" />
              </div>
              <Button variant="hero" className="w-full" onClick={() => setShowFilters(false)}>Show {filtered.length} venues</Button>
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto container-px py-8 md:py-10 flex-1">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold">No spots match those filters</h3>
            <p className="text-muted-foreground mt-2">Try widening your search.</p>
            <Button variant="hero" className="mt-6" onClick={() => setParams({})}>Reset filters</Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) => <VenueCard key={v.id} venue={v} />)}
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Search;
