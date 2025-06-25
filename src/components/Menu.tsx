import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ramenMenu } from "../constants/data";
import SectionHeader from "./shared/SectionHeader";

const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center max-w-[1440px] mx-auto w-full py-12 lg:gap-8 gap-5 2xl:px-[75px] xl:px-7 md:px-5"
    >
      <SectionHeader
        label={"Menu"}
        title={"What’s on our"}
        highlight={"Plate"}
      />

      <p className="lg:max-w-[48rem] md:max-w-[38rem] max-w-[30rem] w-full px-5 sm:text-lg opacity-80">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <div className="flex lg:gap-7 gap-5 mt-4">
        <button className="px-5 py-2 rounded-full lg:border-2 border border-accent text-accent dark:text-white tracking-wide">
          <p className="lg:text-[16px] text-sm">Ramen</p>
        </button>
        <button className="px-5 py-2 rounded-full lg:border-2 border border-primary/40 dark:border-white/40 tracking-wide text-primary/50 dark:text-white/50">
          <p className="lg:text-[16px] text-sm">Desserts</p>
        </button>
        <button className="px-5 py-2 rounded-full lg:border-2 border border-primary/40 dark:border-white/40 tracking-wide text-primary/50 dark:text-white/50">
          <p className="lg:text-[16px] text-sm">Lunch</p>
        </button>
      </div>

      <div className="md:flex justify-center items-center xl:gap-20 md:gap-12 w-full h-full xl:mt-16 mt-10 hidden">
        {ramenMenu?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[320px] gap-4"
          >
            <div className="flex items-center lg:h-[320px] h-[210px]">
              <img
                src={item.image}
                className={`h-fit object-cover ${
                  item.imageSize || "xl:w-[295px] lg:w-[270px] md:w-[190px]"
                }`}
              />
            </div>
            <p className="text-accent text-2xl font-semibold xl:mt-9 lg:mt-3 mt-3 lg:h-9 h-16">
              {item.title}
            </p>
            <p className="lg:max-w-[243px] lg:text-[16px] text-sm h-20 capitalize">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        spaceBetween={10}
        speed={400}
        effect="slide"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper md:hidden menu-swiper"
      >
        {ramenMenu.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="sm:w-1/2 w-full sm:mx-10 mx-8 flex flex-col justify-center items-center h-[300px] border border-accent/5 shadow-md  gap-4 rounded-[40px] mt-24 mb-8  
             hover:bg-gradient-to-b from-accent/20 to-white bg-no-repeat active:border-none dark:border-accent transition-all duration-500 ease-in-out"
              >
                <div className="flex items-center h-[190px] w-[190px] mt-[-4.5rem]">
                  <img src={item.image} className="h-fit object-cover" />
                </div>
                <div className="flex flex-col items-center justify-between w-full gap-2 mt-2">
                  <div className="flex justify-center items-center gap-1 text-amberGlow h-3">
                    <FaStar size={15} />
                    <p className="font-semibold leading-3">{item.rating}</p>
                  </div>
                  <p className="text-accent font-bold text-[17px]">
                    {item.title}
                  </p>
                  <p className="text-[12px] tracking-wide max-w-[10rem] w-full">
                    {item.description}
                  </p>
                </div>
                <button className="py-[10px] px-8 bg-accent w-fit rounded-full mt-1">
                  <p className="capitalize text-white text-sm font-light tracking-wider">
                    Order Now
                  </p>
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Menu;
