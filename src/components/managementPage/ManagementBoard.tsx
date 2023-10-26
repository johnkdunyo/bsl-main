import React from "react";
import Image from "next/image";
import { IBordData, SingleLeadershipComponent } from "./ExperiencedBoard";

const ManagementData: IBordData[] = [
  {
    name: "Razak Awudulai",
    portfolio: "Chief Executive Officer",
    description:
      "Razak is an accomplished business leader with 20+ Years of experience in creating enabling environments and building high- performance teams in both the public and private sectors globally. (BSL, SPL, ISG, BDP, and Agrospectrum)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1686065715/bsl-website/bsl/board/razak-main_i8hbjw.png",
  },
  {
    name: "Samuel Osew-Kwatia",
    portfolio: "Group CFO",
    description:
      "Samuel has 20+ years of professional experience in finance, accounting, taxation, and banking in multinational, regional, and local backgrounds in Ghana and beyond. (BSL, SPL, ISG, BDP, and Agrospectrum)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/c_crop,w_1148,h_2040,ar_9:16,g_auto/v1697785137/bsl-website/bsl/management/SAM_OSEW_KWATIA_ma98pa.jpg",
  },
  {
    name: "Priscilla Abban",
    portfolio: "Group Head - HR & Admin",
    description:
      "Priscilla is a visionary HR Generalist with 20+ years of experience in leading reports through a collaborative management style and creating equitable opportunities for underrepresented employee group across Ghana. (BSL, SPL, ISG, BDP, and Agrospectrum)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697785135/bsl-website/bsl/management/PRISCILLA_ABBAN_uubwrj.jpg",
  },
  {
    name: "Harriet Dodoo",
    portfolio: "Group Legal/Compliance",
    description:
      "Harriet has extensive management and leadership experience, altogether, over 10 years of experience in non-profit, banking and finance, and legal practice. (AMLRO, BSL, SPL, ISG, BDP, and Agrospectrum)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/c_crop,w_1148,h_2040,ar_9:16,g_auto/v1697785133/bsl-website/bsl/management/HARRIET_eioxar.jpg",
  },
  {
    name: "Lovestone Mamattah",
    portfolio: "Group CTO",
    description:
      "Lovestone is an experienced professional with 25+ years working in West Africa in the design, implementation, and operations of technology solutions working in both Enterprise and service provider environments. ",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1698322179/bsl-website/bsl/board/lovestone_t22qmq.png",
  },
  {
    name: "Nana Kwabena Aduhene",
    portfolio: "Group Head - PMO",
    description:
      "Nana is a seasoned senior Telecommunications and   IT executive with 18+ years of experience involved in projects covering end-to-end telecom functions and   infrastructure management in Africa and beyond",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697785642/bsl-website/bsl/nopic_ifo8il.jpg",
  },
  {
    name: "Castro Antwi-Danso",
    portfolio: "General Manager (AgroSpectrum)",
    description:
      "Castro is an experienced expert with 20+ years experience working in IT and agricultural industry. His extensive experience, makes him an invaluable asset in project management, sales marketing, finance and Agriculture (AgroSpectrum)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697785642/bsl-website/bsl/nopic_ifo8il.jpg",
  },
  {
    name: "Richard Adiase",
    portfolio: "Manager, Enterprise Business",
    description:
      "Richard is an Enterprise professional with 15+ years of building business units from scratch, developing, launching, building strong brands, and driving cross-functional teams to execute key project deliverables (Spectrum Fibre)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697785144/bsl-website/bsl/management/RICHARD_ADIASE_tksps5.jpg",
  },
  {
    name: "Morenike Ayodele",
    portfolio: "Manager, Marketing and Corp. Communications",
    description:
      "Morenike is an accomplished and enthusiastic professional with 6+ years of managing corporate communications, marketing, and public relations functions.",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/c_crop,w_1148,h_2040,ar_9:16,g_auto/v1697785139/bsl-website/bsl/management/MORENIKE_AYODELE_kvka9n.jpg",
  },
  {
    name: "Joseph Yawson",
    portfolio: "Head, Deployment and maintenance",
    description:
      "Joseph is an accomplished professional with 18+ years of experience in Information Systems, Technology, and Project Management. He holds diplomas in Information Systems Management (IMIS, UK), a BSc (Hons) in Computing & Information Systems from the University of Portsmouth, UK, and an M.A. in Information & Telecommunication Technology from KAIST. Currently, he serves as the Technical Deployment Manager at Broadspectrum Ghana Limited, leading project planning and quality management. (ISG)",
    imageURL:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697785133/bsl-website/bsl/management/JOSEPH_YAWSON_z33al8.jpg",
  },
];

const ManagementBoard = () => {
  return (
    <div className="py-20 z-10 relative">
      <div className="  custom-container sm:mt-16 sm:-mb-8 sm:hidden">
        <h1 className="text-secondary text-center font-bold h-full uppercase  text-[3.4rem] sm:text-[10rem]    leading-[3.5rem]  opacity-30   ">
          Management Team
        </h1>
      </div>

      {/* big screens */}
      <div className="hidden sm:block  sm:-mt-10  sm:-mb-8 w-full  text-center">
        <h1 className="text-secondary text-center font-bold h-full uppercase  sm:text-[7rem]  whitespace-pre-line leading-[7.0rem]  opacity-30   ">
          Management Team
        </h1>
      </div>

      <div className="w-full  custom-container  relative mt-6 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-20">
          {ManagementData &&
            ManagementData.map((data, _x) => (
              <SingleLeadershipComponent
                key={_x}
                name={data.name}
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

export default ManagementBoard;
