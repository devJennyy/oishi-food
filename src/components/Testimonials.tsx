import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperNavButtons from "./UI/SwiperNavButtons";

const Testimonials = () => {
  const testimonalsData = [
    {
      feedback:
        "OmniFood serves the best ramen I've ever tasted! The broth was rich and savory, with just the right balance of flavors. The noodles were perfectly chewy, and the toppings—especially the soft-boiled egg and chashu pork—were exceptional. Every bowl is a comforting experience that keeps me coming back for more!",
      rating: "5.0",
      name: "Frieren Elfwyn",
      title: "Customer",
      image: "/images/frieren-chibi.jfif",
    },
    {
      feedback:
        "I was impressed by how fast the delivery was, and the delivery person was so friendly—it really added a nice touch to the experience. Best of all, everything arrived hot and ready to enjoy, just like it was fresh from the kitchen. OishiFood has become my go-to for quick, tasty meals!",
      rating: "4.9",
      name: "Yor Forger",
      title: "Customer",
      image: "/images/yor-forger-chibi.jfif",
    },
    {
      feedback:
        "I recently tried OishiFood, and I’m thoroughly impressed! The ramen was rich and flavorful. The soup had a homemade feel. And to top it all off, the dessert was simply divine—a sweet ending that left me craving more. Highly recommend OishiFood for anyone looking for authentic and delicious flavors!",
      rating: "4.9",
      name: "Nezuko Kamado",
      title: "Customer",
      image: "/images/nezuko-chibi.jfif",
    },
  ];
  return (
    <div
      id="testimonials"
      className="flex justify-center items-center max-w-[1440px] w-full mx-auto lg:py-20 py-12 2xl:gap-32 lg:gap-16 px-5 lg:px-10 md:px-32 sm:px-16 2xl:pr-[7.5rem] xl:pr-[4rem]"
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
        <p className="font-bold capitalize text-secondary sm:text-xl text-lg tracking-wider">
          Testimonials
        </p>
        <p className="sm:font-bold font-black xl:max-w-[400px] lg:max-w-[350px] text-4xl sm:text-5xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] sm:leading-tight leading-[2.7rem]">
          What Our Clients<span className="text-secondary"> Say</span>
        </p>

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
          modules={[Pagination, Autoplay,]}
          className="mySwiper"
        >
          {testimonalsData?.map((data) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col gap-4 w-full rounded-[2rem] p-7 border border-secondary mb-14">
                  <img
                    src="/favicons/quotation-mark.svg"
                    className="w-10 xl:w-10 md:w-8"
                  />
                  <p className="text-start xl:text-lg md:text-[16px] sm:text-lg">
                    {data.feedback}
                  </p>
                  <div className="flex items-center gap-5 mt-5 xl:mt-5 md:mt-3">
                    <div className="">
                      <img src={data.image} className="w-16 h-16 rounded-full"/>
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
          <SwiperNavButtons/>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
