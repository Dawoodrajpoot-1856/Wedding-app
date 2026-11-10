import AllThemes from "@/components/AllThemes";
import CardsMarquee from "@/components/CardsMarquee";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <AllThemes />
      <CardsMarquee />
      <HowItWorks />
      <Faq />
    </>
  );
}
