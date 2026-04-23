import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FlashSpot } from "@/components/landing/FlashSpot";
import { ForOwners } from "@/components/landing/ForOwners";
import { Cities } from "@/components/landing/Cities";
import { Testimonials } from "@/components/landing/Testimonials";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main>
      <Hero />
      <HowItWorks />
      <FlashSpot />
      <ForOwners />
      <Cities />
      <Testimonials />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default Index;
