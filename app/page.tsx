import { BrandBrain } from "@/components/brand-brain";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PlatformStrip } from "@/components/platform-strip";
import { Showcase } from "@/components/showcase";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

/* Header and footer come from the root layout, so every page gets them. */
export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformStrip />
      <Features />
      <BrandBrain />
      <HowItWorks />      
      <Showcase />
      <Stats />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}
