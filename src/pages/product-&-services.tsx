import SiteLayout from "@/components/Layout/SiteLayout";
import ComputingNetworkingSection from "@/components/businessPage/ComputingNetworkingSection";
import DataCenterSection from "@/components/businessPage/DeploymentServices";
import HeroSection from "@/components/businessPage/HeroSection";
import ITConsulting from "@/components/businessPage/ITConsulting";
import SupportServicesSection from "@/components/businessPage/SupportServicesSection";
import React from "react";
import ManagedServices from "@/components/businessPage/ManagedServices";

const Business = () => {
  return (
    <SiteLayout pageName={"Product & Services"}>
      <>
        <HeroSection />
        <ITConsulting />
        <DataCenterSection />
        <SupportServicesSection />
        {/* <ComputingNetworkingSection /> */}
        <ManagedServices />
      </>
    </SiteLayout>
  );
};

export default Business;
