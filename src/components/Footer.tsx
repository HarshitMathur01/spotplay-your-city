import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto container-px py-14">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center font-display font-bold text-accent-foreground text-xl shadow-accent">S</div>
            <span className="font-display text-2xl font-bold">SpotPlay</span>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">
            Your Game, Your Spot, Your City. Book turfs, courts and grounds across India in 60 seconds. No calls. No hassle.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/search" className="hover:text-accent transition-colors">Find Venues</Link></li>
            <li><Link to="/list-venue" className="hover:text-accent transition-colors">For Venue Owners</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wa.me/919999999999" aria-label="WhatsApp" className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-primary-foreground/60">
        <p>© {new Date().getFullYear()} SpotPlay. Made for players, by players.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
