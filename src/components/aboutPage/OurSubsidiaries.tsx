import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Animate } from "../animations/ScrollAnimator";

const SingleSubsidiaryCard = ({
  imageURL,
  description,
  href,
  descriptionIntro,
  descriptionArrayList,
}: {
  descriptionIntro?: string;
  description: string;
  imageURL: string;
  descriptionArrayList?: string[];
  href: string;
}) => {
  return (
    <Animate.ScaleIn className="w-full">
      <div className="bg-[#FFFFFF] w-full  justify-between p-8 rounded-[50px] flex flex-col gap-6  h-full ">
        <div>
          <div className="h-20  flex items-start justify-start mb-4">
            <img src={imageURL} alt="spectrum" className="h-full  " />
          </div>
          <p className="text-primary font-semibold ">{descriptionIntro}</p>
          <p className="text-[#1D365A] paragraphText1">{description}</p>
          {descriptionArrayList && (
            <ol className="text-primary paragraphText1 ml-2">
              {descriptionArrayList.map((item, _x) => (
                <li key={_x}>- {item}</li>
              ))}
            </ol>
          )}
        </div>

        <div>
          <motion.button
            className="custom-button1"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <a target="_blank" href={href}>
              Learn More
            </a>
          </motion.button>
        </div>
      </div>
    </Animate.ScaleIn>
  );
};

const OurSubsidiaries = () => {
  return (
    <section className="bg-[#E8E8E8]">
      <div className="flex flex-col custom-container py-20 gap-10 max-w-6xl">
        <div className="flex flex-col justify-center text-center gap-4 ">
          <Animate.FadeUp>
            <h1 className="headerText1 text-[#1D365A]">Our Subsidiaries</h1>
          </Animate.FadeUp>
          <Animate.FadeUp>
            <p className="paragraphText1 text-[#1D365A]">
              Broadspectrum prides itself in carrying out its mandate through
              its various subsidiaries. With our qualified team of experts, we
              offer you a full circle service experience with the synergy of our
              subsidiaries in communication, connectivity, and application
              software.
            </p>
          </Animate.FadeUp>
        </div>

        <div className="flex flex-col  gap-10 sm:flex-row">
          <SingleSubsidiaryCard
            descriptionIntro="Connecting you at the speed of light"
            description="SFL has deployed and runs the second largest and most extensive nonpareil fibre optic backbone network in Ghana (+4000 Km)."
            imageURL="/assets/icons/spectrum.svg"
            href="https://sfl.com.gh/"
          />
          <SingleSubsidiaryCard
            description="Payment Service Provider (PSP) Licensed Business providing services for payment gateway and bill Payment – E.G. Northern Electricity Distribution Company (NedCo), Marketplace (E-Agric)"
            imageURL="/assets/icons/bdp.svg"
            href="http://bdp.com.gh/"
          />
        </div>
        <SingleSubsidiaryCard
          descriptionIntro="A well-resourced infrastructure service provider in IE & Telecoms"
          description="Infrastructure Services Ltd (ISG) is an infrastructure services company providing logistic deployment, maintenance, and support services in the power, telecommunication, and mine Support services sectors of Ghana. The services of ISG are internally leveraged by all affiliates for efficiency and control. Our Services include:"
          descriptionArrayList={[
            "Fiber infrastructure Deployment Microwave Radio Deployment LAN infrastructure deployments",
            "Data Centre build and management",
            "Service Maintenance and Support",
          ]}
          imageURL="/assets/icons/isg.svg"
          href="https://isg.com.gh/"
        />

        <SingleSubsidiaryCard
          descriptionIntro="AgroSpectrum"
          description="The Strategic Business Unit offers Agric Marketplace services which include Farm 2 Factory, Farm 2 Retail, Farm 2 Table, Planting for Food & Jobs, Subsidy programs, Insurance, Healthcare, loans for farmers, Weather & Agronomy services, Agric Value Chain actors, Cooperatives-Out-grower services. BSL has delivered an E- Agriculture Management Platform to the Ministry of Food and Agriculture (MoFA) which included the digital registration of 1.6Million farmers and the deployment of the first- ever electronic subsidy redemption program in Ghana."
          imageURL="/assets/icons/agro-main.png"
          href="https://isg.com.gh/"
        />
      </div>
    </section>
  );
};

export default OurSubsidiaries;
