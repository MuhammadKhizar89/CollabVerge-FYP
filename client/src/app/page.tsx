import { Hero, TrustedPartners, InfluencerMarketingSuite, FeaturedCreators, HowItWorks, WhyChooseUs } from "@/components/landingpage";
import HaveQuestionsForUs from "@/components/landingpage/HaveQuestionsForUs";
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TrustedPartners />
      <InfluencerMarketingSuite />
      <HowItWorks/>
      <FeaturedCreators/>
      <WhyChooseUs/>
      <HaveQuestionsForUs/>
    </div>
  );
}
