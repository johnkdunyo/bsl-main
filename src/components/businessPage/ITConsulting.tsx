import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const ITConsulting = () => {
  return (
    <section className=" bg-white pb-40 ">
      <div className="custom-container h-full flex flex-col lg:flex-row justify-between py-10 md:py-20 gap-10  ">
        <div className=" w-full md:h-[45rem]  border-black  -mt-20 sm:-mt-[10rem] lg:-mt-[0rem] z-20 ">
          <Image
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/info-mgt_l5n7ac.jpg"
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686141784/bsl-website/bsl/business/info-mgt_l5n7ac.jpg"
            placeholder="blur"
            className="w-full md:h-full object-cover   h-[30rem] z-20  border-red-600 "
            alt="info mgt"
            style={{ objectPosition: "30% 75%" }}
            width={805}
            height={1204}
            unoptimized
          />
        </div>
        <div className="  w-full flex justify-start items-start text-[#1D365A] ">
          <div className="flex flex-col gap-6 lg:mt-[20%] ">
            <h1 className="headerText1">
              <Animate.FadeUp>IT Consulting</Animate.FadeUp>
            </h1>
            <p className=" paragraphText1">
              Partner with our seasoned experts for strategic IT consultation.
              Benefit from tailor-made roadmaps that guide your digital
              transformation journey, aligning technology with your business
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITConsulting;
