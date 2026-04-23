import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Find Venues", to: "/search" },
  { label: "For Venue Owners", to: "/list-venue" },
  { label: "Dashboard", to: "/dashboard" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onDark = pathname === "/";

  return (
    <header className={`sticky top-0 z-40 w-full ${onDark ? "bg-primary/80 backdrop-blur-xl border-b border-white/10" : "bg-background/85 backdrop-blur-xl border-b border-border"}`}>
      <div className="container mx-auto container-px flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-accent grid place-items-center font-display font-bold text-accent-foreground text-lg shadow-accent group-hover:rotate-6 transition-transform">
            S
          </div>
          <span className={`font-display text-xl font-bold ${onDark ? "text-primary-foreground" : "text-foreground"}`}>
            SpotPlay
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                onDark ? "text-primary-foreground/80 hover:text-accent hover:bg-white/5" : "text-foreground/70 hover:text-foreground hover:bg-secondary"
              } ${pathname === it.to ? (onDark ? "text-accent" : "text-foreground") : ""}`}
            >
              {it.label}
            </Link>
          ))}
          <Link to="/search">
            <Button variant="hero" size="sm" className="ml-3">Book Now</Button>
          </Link>
        </nav>

        <button
          className={`md:hidden p-2 rounded-lg ${onDark ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto container-px py-4 flex flex-col gap-2">
            {navItems.map((it) => (
              <Link key={it.to} to={it.to} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg hover:bg-secondary text-foreground font-medium">
                {it.label}
              </Link>
            ))}
            <Link to="/search" onClick={() => setOpen(false)}>
              <Button variant="hero" className="w-full mt-2">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
