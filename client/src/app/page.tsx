import Hero from "@/components/landingpage/Hero";
import TrustedPartners from "@/components/landingpage/TrustedPartners";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TrustedPartners />
    </div>
  );
}
