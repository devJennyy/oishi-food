import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperNavButtons from "./ui/SwiperNavButtons";
import { testimonalsData } from "../constants/data";
import SectionHeader from "./shared/SectionHeader";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="overflow-visible flex justify-center items-center max-w-[1440px] w-full mx-auto lg:py-20 2xl:gap-32 lg:gap-16 lg:px-10 md:px-32 2xl:pr-[7.5rem] xl:pr-[4rem]"
    >
      <div className="hidden lg:block relative w-full h-full">
        <div className="absolute bottom-[5rem] left-[-3rem] z-[-1]">
          <div className="w-[20rem] h-[20rem] bg-[#FDC55E]/90 rounded-full blur-[10rem]" />
        </div>
        <div className="absolute left-[-4rem] z-20">
          <img
            src="/images/bg-style.svg"
            alt="Background Style"
            className="max-w-none"
          />
        </div>
        <div className="z-50 xl:ml-10">
          <img
            src="/images/sample.png"
            alt="Sample Dish"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col xl:w-[596px] lg:w-[450px] w-full h-full items-center lg:items-start gap-2">
        <SectionHeader
          label={"Testimonials"}
          title={"What Our Clients"}
          highlight={"Say"}
        />

        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={false}
          loop={true}
          spaceBetween={50}
          speed={400}
          effect="slide"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper md:px-0 sm:px-12 px-5"
        >
          {testimonalsData?.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4 w-full rounded-[2rem] p-7 border border-accent md:mb-0 mb-14 cursor-grab">
                  <img
                    src="/favicons/quotation-mark.svg"
                    className="w-10 xl:w-10 md:w-8"
                  />
                  <p className="text-start xl:text-lg md:text-[16px] sm:text-lg">
                    {data.feedback}
                  </p>
                  <div className="flex items-center gap-5 mt-5 xl:mt-5 md:mt-3">
                    <div className="w-16 h-16">
                      <img
                        src={data.image}
                        className="w-full h-full rounded-full object-cover"
                        alt="Profile Image"
                      />
                    </div>
                    <div className="flex flex-col text-start">
                      <div className="flex items-center gap-1 text-amberGlow sm:mb-0 mb-[2px]">
                        <FaStar className="text-sm xl:text-[15px]" />
                        <p className="font-black leading-3 text-[15px] xl:text-[17px] sm:text-lg">
                          {data.rating}
                        </p>
                      </div>
                      <p className="font-black leading-1 text-sm xl:text-lg md:text-[16px] sm:text-lg sm:mt-[-5px]">
                        {data.name}
                      </p>
                      <p className="font-bold opacity-70 tracking-wide text-sm xl:text-[16px] md:text-sm sm:text-[16px] mt-[-2px]">
                        {data.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
