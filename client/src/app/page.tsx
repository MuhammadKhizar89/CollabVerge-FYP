import { Hero, TrustedPartners, InfluencerMarketingSuite, FeaturedCreators, HowItWorks, WhyChooseUs } from "@/components/landingpage";
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TrustedPartners />
      <InfluencerMarketingSuite />
      <HowItWorks/>
      <FeaturedCreators/>
      <WhyChooseUs/>
    </div>
  );
}
