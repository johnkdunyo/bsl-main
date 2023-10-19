import SiteLayout from "@/components/Layout/SiteLayout";
import CustomBackground1 from "@/components/animations/CustomBackground1";
import ExperiencedBoard from "@/components/managementPage/ExperiencedBoard";
import ManagementBoard from "@/components/managementPage/ManagementBoard";
import React from "react";

const Management = () => {
  return (
    <SiteLayout pageName={"About"}>
      <>
        <section className="bg-[#0C233E] relative sm:py-16 ">
          <CustomBackground1 />
          <ExperiencedBoard />
          <ManagementBoard />
        </section>
      </>
    </SiteLayout>
  );
};

export default Management;
