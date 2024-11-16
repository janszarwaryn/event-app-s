import { HeroSection } from "@/components/hero-section";
import { FeaturedEvents } from "@/components/featured-events";
import { UpcomingEvents } from "@/components/upcoming-events";
import { AuthCTA } from "@/components/auth-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedEvents />
      <UpcomingEvents />
      <AuthCTA />
    </>
  );
}