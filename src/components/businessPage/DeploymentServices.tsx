import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const DeploymentServices = () => {
  return (
    <section className="bg-[#AB2346] pb-16 md:pb-0">
      <div className="custom-container ">
        <div className="flex flex-col lg:flex-row gap-10 justify-between ">
          <div className=" -mt-28 md:-my-16 w-full lg:order-last     ">
            <Image
              src="https://res.cloudinary.com/diek2uivi/image/upload/v1697779407/bsl-website/bsl/business/Business-data-center_a6rvhs.png"
              blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697779407/bsl-website/bsl/business/Business-data-center_a6rvhs.png"
              width={1920}
              height={1080}
              alt="data center img"
              className="w-full  object-contain h-[30rem] md:h-full"
              placeholder="blur"
              // className="w-full md:h-full object-cover   h-[30rem] z-20  "
              style={{ objectPosition: "60% 75%" }}
              unoptimized
            />
          </div>
          <div className="w-full flex justify-start items-start  my-0 md:my-24">
            <div className=" flex flex-col gap-6 md:gap-10">
              <Animate.FadeUp>
                <h1 className="headerText1">Deployment Services</h1>
              </Animate.FadeUp>
              <Animate.FadeUp>
                <p className="paragraphText1">
                  Our deployment services ensure that new technologies integrate
                  smoothly into your existing infrastructure, minimizing
                  disruptions and maximizing ROI
                </p>
              </Animate.FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentServices;
