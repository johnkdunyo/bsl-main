import React from "react";
import Image from "next/image";

export interface IBordData {
  name: string;
  portfolio: string;
  description: string;
  imageURL: string;
}

const BoardData: IBordData[] = [
  {
    name: "Razak Awudulai",
    portfolio: "Chief Executive Officer",
    description:
      "Razak is an accomplished business leader with 20+ years. of experience in creating enabling environments and building high-performance teams. He is passionate about the technology ecosystem and has helped to grow many tech businesses both in the public and private sectors globally. More specifically, he has extensive experience working with and helping to provide unique and innovative digital solutions to boost Africa’s digital economy.",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/razak-main_i8hbjw.png",
  },
  {
    name: "Nana Dwemoh Benneh",
    portfolio: "Chairman",
    description:
      "Nana has 20+ years of local and international expertise in banking in various management roles across several countries in Africa and the UK. Nana has successfully led the team in significantly growing market share and profitability across the Bank’s Personal and Business Banking franchises. In January 2021, Nana was appointed Managing Director of UMB Bank.",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/nana-main_wla7ns.png",
  },
  {
    name: "Kris Senanu",
    portfolio: "Member",
    description:
      "Kris is an accomplished business leader with 20+ years of extensive experience working with and helping to grow Startups, FinTech, and Tertiary Educational Institutions. Kris is a transformational leader and ICT champion with a passion for finding, grooming, and coaching talent, and can navigate ambiguity within multi-level and matrixed organizations.",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1698322180/bsl-website/bsl/board/kris_hjmkob.png",
  },
  {
    name: "Edward Abrokwah",
    portfolio: "Member",
    description:
      "Edward has 20+ years, first as a Technical Consultant and currently as a Principal Economist within the Ministry of Finance, Ghana. He has worked in various capacities and divisions in the Ministry including the Oil and Gas, Debt Management Division, Public Infrastructure Investments Division, the Economic Research, Forecasting Division, and the Research Desk of the Tax Policy Unit.",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/c_crop,w_2000,h_3556,ar_9:16,g_auto/v1698322179/bsl-website/bsl/board/edward_d7maaa.jpg",
  },
];

export const SingleLeadershipComponent = ({
  name,
  portfolio,
  description,
  imageURL,
  type = "management",
}: {
  name: string;
  portfolio: string;
  description: string;
  imageURL: string;
  type?: "board" | "management";
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
        <h1
          className={`text-md mt-1 sm:text-xl font-medium ${
            type === "board" ? "text-[#82AEC9]" : "text-secondary"
          }`}
        >
          {portfolio}
        </h1>
        <p className="text-sm  font-light sm:text-base  border-red-500">
          {description}
        </p>
      </div>
    </div>
  );
};

const ExperiencedBoard = () => {
  return (
    <div className="py-20 z-10 relative">
      <div className="  custom-container sm:mt-16 sm:-mb-8 sm:hidden">
        <h1 className="text-secondary text-center font-bold h-full uppercase  text-[3.4rem] sm:text-[10rem]    leading-[3.5rem]  opacity-30   ">
          Experienced Board
        </h1>
      </div>

      {/* big screens */}
      <div className="hidden sm:block  sm:-mt-10  sm:-mb-8 w-full  text-center">
        <h1 className="text-secondary text-center font-bold h-full uppercase  sm:text-[7rem]  whitespace-pre-line leading-[7.0rem]  opacity-30   ">
          Experienced Board
        </h1>
      </div>

      <div className="w-full  custom-container  relative mt-6 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-20">
          {BoardData &&
            BoardData.map((data, _x) => (
              <SingleLeadershipComponent
                key={_x}
                name={data.name}
                type="board"
                portfolio={data.portfolio}
                description={data.description}
                imageURL={data.imageURL}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencedBoard;
