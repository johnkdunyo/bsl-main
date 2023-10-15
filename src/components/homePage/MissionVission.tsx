import React, { useRef } from "react";
import { Animate } from "../animations/ScrollAnimator";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

const SingleSlide = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className=" sm:-ml-[30%] ">
        <h1 className="font-bold  md:text-[14rem] text-[#AB2346]">{title}</h1>
        <p className="paragraphText1 text-2xl px-4 sm:px-0">
          To empower excellence through innovative <br /> communication and
          digital solutions.
        </p>
      </div>
    </div>
  );
};

const MissionVission = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <section className="carousel w-full  h-[60vh] bg-[#000A26]   hidden sm:flex">
      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={0}
        cssMode={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          prevEl: swiperNavPrevRef?.current,
          nextEl: swiperNavNextRef?.current,
        }}
        modules={[Navigation, Autoplay]}
        keyboard={true}
        className="w-full relative "
      >
        <SwiperSlide>
          <SingleSlide
            title="Vision"
            description="To be a world class communication and Digital partner of choice from African by Africans."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Mission"
            description="To empower excellence through innovative <br /> communication and
          digital solutions."
          />
        </SwiperSlide>

        <div className=" flex justify-between   absolute top-[20%] sm:top-[50%] bottom-[50%] w-full  px-10 sm:px-[15%]">
          <button
            className=" z-10 w-16 h-16 sm:w-16 sm:h-full"
            ref={swiperNavPrevRef}
            onClick={() => swiperRef!.current?.slidePrev()}
          >
            <img src={"/assets/icons/nav-left.svg"} className=" w-full " />
          </button>

          <button
            className=" z-10 w-16 h-16 sm:w-16 sm:h-full"
            ref={swiperNavNextRef}
            onClick={() => swiperRef!.current?.slideNext()}
          >
            <img src={"/assets/icons/nav-right.svg"} className="w-full" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default MissionVission;
