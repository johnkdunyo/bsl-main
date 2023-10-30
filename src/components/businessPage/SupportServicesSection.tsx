import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const SupportServicesSection = () => {
  return (
    <div className="bg-[#0C233E] py-36">
      <div className="custom-container flex flex-col h-full  lg:flex-row justify-between py-0 md:py-20 gap-10 ">
        <div className=" w-full md:h-[45rem]  border-black  -mt-20 border sm:-mt-[10rem] lg:-mt-[0rem] z-20 ">
          <Image
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1698407453/bsl-website/bsl/_MG_1671_am5ak4.jpg"
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1698407453/bsl-website/bsl/_MG_1671_am5ak4.jpg"
            placeholder="blur"
            className="w-full md:h-full object-cover   h-[30rem] z-20  border-red-600 "
            alt="info mgt"
            style={{ objectPosition: "45% 70%" }}
            width={805}
            height={1204}
            unoptimized
          />
        </div>
        <div className="  w-full flex justify-start items-start text-white ">
          <div className="flex flex-col gap-6 lg:mt-[20%] ">
            <h1 className="headerText1">
              <Animate.FadeUp>Support Services</Animate.FadeUp>
            </h1>
            <p className=" paragraphText1">
              Experience uninterrupted operations with our 24/7 support
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServicesSection;
