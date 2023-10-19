import React, { useRef, useState } from "react";
import CustomBackground1 from "../animations/CustomBackground1";
import Link from "next/link";
import Image from "next/image";

const SingleLeadershipComponent = ({
  name,
  portfolio,
  description,
  imageURL,
}: {
  name: string;
  portfolio: string;
  description: string;
  imageURL: string;
}) => {
  return (
    <div className="flex justify-between gap-2 sm:gap-3 w-full ">
      <div className=" w-[240px] sm:w-[450px] relative">
        <Image
          src={imageURL}
          placeholder="blur"
          blurDataURL={imageURL}
          className="w-full rounded-[20px] sm:rounded-[30px] sm:h-[360px] object-cover"
          height={616}
          width={400}
          alt={name}
        />
      </div>
      <div className=" w-full sm:mt-10">
        <h1 className="text-xl sm:text-2xl font-medium">{name}</h1>
        <h1 className="text-[#82AEC9] text-md mt-1 sm:text-xl font-medium">
          {portfolio}
        </h1>
        <p className="text-sm  font-light sm:text-base  border-red-500">
          {description}
        </p>
      </div>
    </div>
  );
};

const LeadershipTeam = () => {
  return (
    <section className="bg-[#0C233E] relative sm:py-16  ">
      <CustomBackground1 />
      <div className="py-10 z-10 relative">
        <div className="  custom-container sm:mt-16 sm:-mb-8 sm:hidden">
          <h1 className="text-[#82AEC9] font-bold h-full  text-[3.7rem] sm:text-[10rem] sm:whitespace-nowrap whitespace-pre-line leading-[3.5rem]  opacity-30   ">
            Leadership Team
          </h1>
        </div>
        {/* big screens */}
        <div className="hidden sm:block  sm:mt-16 sm:-mb-8 w-full  text-center">
          <h1 className="text-[#82AEC9] font-bold h-full  text-[3.7rem] sm:text-[10rem] sm:whitespace-nowrap whitespace-pre-line leading-[3.5rem]  opacity-30   ">
            Leadership Team
          </h1>
        </div>

        <div className="w-full  custom-container  relative mt-6 sm:mt-24">
          <div className=" flex  flex-col lg:flex-row justify-between gap-10 w-full">
            <SingleLeadershipComponent
              name="Razak Awudulai"
              portfolio="Chief Executive Officer"
              imageURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/razak-main_i8hbjw.png"
              description="Razak is an accomplished business leader with 20+ years. of experience in creating enabling environments and building high-performance teams. He is passionate about the technology ecosystem and has helped to grow many tech businesses both in the public and private sectors globally. More specifically, he has extensive experience working with and helping to provide unique and innovative digital solutions to boost Africa’s digital economy."
            />

            <SingleLeadershipComponent
              name="Nana Dwemoh Benneh"
              portfolio="Chairman"
              imageURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/razak-main_i8hbjw.png"
              description="Nana has 20+ years of local and international expertise in banking in various management roles across several countries in Africa and the UK. Nana has successfully led the team in significantly growing market share and profitability across the Bank’s Personal and Business Banking franchises. In January 2021, Nana was appointed Managing Director of UMB Bank."
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-20">
          <button className="custom-button1">
            <Link href="/about/management">See full team</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
