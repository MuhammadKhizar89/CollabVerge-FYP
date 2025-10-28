import { FeaturedCreators, HaveQuestionsForUs, Hero, HowItWorks, InfluencerMarketingSuite, TrustedPartners, WhyChooseUs } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TrustedPartners />
      <InfluencerMarketingSuite />
      <HowItWorks />
      <FeaturedCreators />
      <WhyChooseUs />
      <HaveQuestionsForUs />
    </div>
  );
}
