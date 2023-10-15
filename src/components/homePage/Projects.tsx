import React from "react";
import Image from "next/image";

const ProjectsData = [
  {
    title: "Integrated National Security Communications Enhancement Network",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378092/bsl-website/bsl/projects/ghana_cares.png",
  },
  {
    title: "Developed and implemented E- Agriculture Management Platform",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378093/bsl-website/bsl/projects/cmec.png",
  },
  {
    title:
      "Development of an Electronic Fertiliser Subsidy Redemption Management System",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378092/bsl-website/bsl/projects/mofa_q5ikop.png",
  },
  {
    title:
      "Installation of Software- Defined Wide Area Network (Switches and Routers)",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378093/bsl-website/bsl/projects/nhis_bogucq.png",
  },
  {
    title:
      "Installation and Support of Data Storage System and Related Services",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378093/bsl-website/bsl/projects/nhis2_fiihj9.png",
  },
  {
    title:
      "Installation of Software- Defined Wide Area Network (Switches and Routers)",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378091/bsl-website/bsl/projects/gcb1_ddxxbc.png",
  },
  {
    title: "Supply Contract for GCB Bank Mobile Wallet",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378091/bsl-website/bsl/projects/gcb1_ddxxbc.png",
  },
  {
    title:
      "Development, deployment, and management of an electronic payment system",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378091/bsl-website/bsl/projects/nedco.png",
  },
  {
    title: "Developed and implemented E- Agricultural Management Platform",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378092/bsl-website/bsl/projects/sapip.png",
  },
  {
    title:
      "Installation of Internet and Wide Area Network (WAN) Services to Melcom Limited",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378091/bsl-website/bsl/projects/melcom.png",
  },
  {
    title:
      "Installation of Internet and Wide Area Network (WAN) Services to Mensin Gold Limited",
    imgSRC:
      "https://res.cloudinary.com/diek2uivi/image/upload/v1697378094/bsl-website/bsl/projects/mensin_gold.png",
  },
];

const SingleProjectComponent = ({
  title,
  imgSRC,
}: {
  title: string;
  imgSRC: string;
}) => {
  return (
    <div className="w-full max-w-[390px] h-full flex flex-col justify-between border-2 border-gray-300  rounded-[16px] shadow-md">
      <div className=" w-full">
        {/* <Image
          alt="img"
          src={imgSRC}
          width={380}
          height={280}
          // fill
          unoptimized
          className="rounded-t-[14px]"
        /> */}
      </div>
      <div className="px-2  pt-3 pb-8 sm:pt-2 sm:pb-6   h-full">
        <h1 className="text-primary text-center font-medium text-lg">
          {title}
        </h1>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className=" bg-[#FFFFFF]">
      <div className="py-20 flex flex-col justify-center items-center gap-16  ">
        <div className="relative w-full flex justify-center">
          <div className="w-full border border-[#1D365A]" />
          <h1 className="text-[#1D365A] uppercase text-center font-medium tracking-widest text-lg  sm:text-2xl w-fit px-12 absolute -top-3 bg-white">
            Projects
          </h1>
        </div>

        {/* projects go here */}
        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {ProjectsData &&
            ProjectsData.map((data, _x) => (
              <SingleProjectComponent
                key={_x}
                title={data.title}
                imgSRC={data.imgSRC}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
