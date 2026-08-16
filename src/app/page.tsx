import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { Team } from "@/components/landing/team";
import { AuthCta } from "@/components/landing/auth-cta";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Team />
      <AuthCta />
      <Footer />
    </>
  );
}