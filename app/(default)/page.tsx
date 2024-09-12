export const metadata = {
  title: "XCelsior AI: GPT for Sheets™ - Boost Your Efficiency with AI",
  description: "Enhance your Google Sheets™ experience with XCelsior AI. Leverage AI-driven insights and automation for smarter, data-driven decisions.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
// import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      {/* <Workflows /> */}
      <Features />
      <Testimonials />
      {/* <Cta /> */}
    </>
  );
}
