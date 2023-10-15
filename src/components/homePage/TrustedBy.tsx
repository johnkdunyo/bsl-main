import React, { HTMLAttributes } from "react";
import { Animate } from "../animations/ScrollAnimator";

const SinglePartner = ({
  imageName,
  className,
}: {
  imageName: string;
  className: string;
}) => {
  return (
    <div className="w-full  flex justify-center items-center">
      <img
        src={`/assets/icons/partners/${imageName}`}
        className={className + ``}
        alt={imageName}
      />
    </div>
  );
};

const TrustedBy = () => {
  return (
    <section className=" bg-[#FFFFFF]">
      <div className="py-20 flex flex-col justify-center items-center ">
        <div className="relative w-full flex justify-center">
          <div className="w-full border border-[#1D365A]" />
          <h1 className="text-[#1D365A] uppercase text-center font-medium tracking-widest text-lg  sm:text-2xl w-fit px-12 absolute -top-3 bg-white">
            Trusted by
          </h1>
        </div>

        {/* mobile */}
        <div className="sm:hidden mt-14 custom-container flex flex-col  w-full gap-10">
          <div className="flex w-full justify-center gap-6">
            <Animate.ScaleIn>
              <img src={"/assets/icons/partners/gcb.svg"} />
            </Animate.ScaleIn>
            <Animate.ScaleIn>
              <img src={"/assets/icons/partners/mtn.svg"} />
            </Animate.ScaleIn>
            <Animate.ScaleIn>
              <img src={"/assets/icons/partners/nhis.svg"} />
            </Animate.ScaleIn>
          </div>

          <Animate.ScaleIn>
            <div className="flex w-full justify-center gap-4">
              <img src={"/assets/icons/partners/nedco.svg"} />
            </div>
          </Animate.ScaleIn>
        </div>

        {/* destkop */}

        <Animate.ScaleIn>
          <div className="hidden mt-14 custom-container sm:flex flex-col  w-full gap-10">
            <div className="flex w-full justify-center gap-20 ">
              <img src={"/assets/icons/partners/nedco.svg"} />
              <img src={"/assets/icons/partners/gcb.svg"} className=" p-5" />
              <img src={"/assets/icons/partners/mtn.svg"} />
              <img src={"/assets/icons/partners/nhis.svg"} />
            </div>

            <div className="grid grid-cols-5 w-full gap-10 ">
              <SinglePartner imageName="angola_cables.png" className="" />
              <SinglePartner imageName="afdb.jpeg" className="h-16" />
              <SinglePartner imageName="airteltigo.png" className="" />
              <SinglePartner imageName="china-machinery.png" className="h-16" />
              <SinglePartner imageName="bog.png" className=" h-12" />
            </div>

            <div className="grid grid-cols-4 w-full gap-10 lg:px-8">
              <SinglePartner imageName="cmec.png" className=" h-12" />
              <SinglePartner imageName="Dell-PhotoRoom.png" className=" h-12" />
              <SinglePartner imageName="mofa.png" className=" h-12" />
              <SinglePartner imageName="moc.jpeg" className=" h-12" />
            </div>

            <div className="grid grid-cols-6 w-full gap-10">
              <SinglePartner imageName="melcom.png" className=" h-12" />
              <SinglePartner imageName="cisco.png" className=" h-12" />
              <SinglePartner imageName="NCA.png" className=" h-16" />
              <SinglePartner
                imageName="Mensin-Gold-Bibiani.png"
                className=" h-12"
              />
              <SinglePartner imageName="mof.png" className=" h-12" />
              <SinglePartner imageName="dolphin.png" className=" h-12" />
            </div>
          </div>
        </Animate.ScaleIn>
      </div>
    </section>
  );
};

export default TrustedBy;
