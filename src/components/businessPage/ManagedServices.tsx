import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const ManagedServices = () => {
  return (
    <section className=" bg-white pb-40 ">
      <div className="custom-container h-full flex flex-col lg:flex-row justify-between py-0 lg:py-20 gap-10  ">
        <div className="w-full md:h-[45rem]  border-black  -mt-10 lg:-mt-[10rem] z-20 lg:order-last">
          <Image
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/datacenter2_dnkm3j.jpg"
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/datacenter2_dnkm3j.jpg"
            width={1920}
            height={1080}
            alt="data center"
            placeholder="blur"
            className="w-full md:h-full object-cover h-[30rem]"
          />
        </div>
        <div className="  w-full flex justify-start text-[#1D365A] ">
          <div className="flex flex-col gap-6  ">
            <Animate.FadeUp>
              <h1 className="headerText1">Managed Services</h1>
            </Animate.FadeUp>

            <p className="paragraphText1">
              Unburden your it team with our comprehensive managed services.
              from network monitoring to cybersecurity management, we handle the
              complexities, allowing your team to focus on innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedServices;
