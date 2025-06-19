
import ServicesHero from "@/components/services/ServicesHero";
import InteriorDetailing from "@/components/services/InteriorDetailing";
import ExteriorDetailing from "@/components/services/ExteriorDetailing";
import CeramicCoating from "@/components/services/CeramicCoating";
import AddOnServices from "@/components/services/AddOnServices";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />
      <InteriorDetailing />
      <ExteriorDetailing />
      <CeramicCoating />
      <AddOnServices />
      <ServicesCTA />
    </div>
  );
};

export default Services;
