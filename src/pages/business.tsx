import SiteLayout from "@/components/Layout/SiteLayout";
import CloudStorageSection from "@/components/businessPage/ManagedServices";
import ComputingNetworkingSection from "@/components/businessPage/ComputingNetworkingSection";
import DataCenterSection from "@/components/businessPage/DeploymentServices";
import HeroSection from "@/components/businessPage/HeroSection";
import InfoMageSystems from "@/components/businessPage/ITConsulting";
import React from "react";

const Business = () => {
  return (
    <SiteLayout pageName={"Business"}>
      <>
        <HeroSection />
        <InfoMageSystems />
        <DataCenterSection />
        <ComputingNetworkingSection />
        <CloudStorageSection />
      </>
    </SiteLayout>
  );
};

export default Business;
