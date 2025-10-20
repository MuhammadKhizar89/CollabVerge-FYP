import { Hero, TrustedPartners, InfluencerMarketingSuite } from "@/components/landingpage";
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TrustedPartners />
      <InfluencerMarketingSuite />
    </div>
  );
}
