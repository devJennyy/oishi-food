import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ramenMenu = [
  {
    image: "/images/ramen-dish-one.svg",
    title: "Sesame Veggie Ramen",
    description:
      "Chunky rayu broth, roasted pork, spring onion, bamboo shoots, bonito, marinated egg and noodles.",
    rating: "5.0",
  },
  {
    image: "/images/ramen-dish-two.svg",
    title: "Sesame Veggie Ramen",
    description:
      "Spicy miso broth, tofu, coriander, spring onion, bamboo shoots, marinated egg and noodles.",
    imageSize: "320px",
  },
  {
    image: "/images/ramen-dish-three.svg",
    title: "Spicy Kimchi Ramen",
    description:
      "Shoyu broth, roasted pork, spring onion, coriander, kimchi, marinated egg and noodles.",
  },
];

const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center max-w-[1440px] mx-auto w-full py-12 lg:gap-8 gap-5 2xl:px-[75px] xl:px-7 md:px-5"
    >
      <div className="flex flex-col gap-2">
        <p className="font-bold capitalize text-secondary sm:text-xl text-lg tracking-wider">
          Menu
        </p>
        <p className="lg:text-5xl md:text-4xl sm:text-5xl text-4xl lg:font-semibold sm:font-bold font-black sm:leading-tight leading-[2.7rem] sm:max-w-full max-w-[20rem] w-full">
          What’s on our <span className="text-secondary">Plate</span>
        </p>
      </div>
      <div className="lg:max-w-[48rem] md:max-w-[38rem] max-w-[30rem] w-full px-5">
        <p className="sm:text-lg opacity-80">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="flex lg:gap-7 gap-5 mt-4">
        <button className="px-5 py-2 rounded-full lg:border-2 border border-secondary text-secondary dark:text-white tracking-wide">
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
            <p className="text-secondary text-2xl font-semibold xl:mt-9 lg:mt-3 mt-3 lg:h-9 h-16">
              {item.title}
            </p>
            <p className="lg:max-w-[243px] lg:text-[16px] text-sm h-20 capitalize">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center items-center w-fit h-full mt-16 md:hidden gap-7">
        {ramenMenu.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[253px] h-[300px] border border-secondary/5 shadow-md  gap-4 rounded-[30px] mt-20 
            hover:bg-gradient-to-b from-secondary/10 to-white bg-no-repeat hover:border-none active:scale-95 transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center h-[190px] w-[190px] mt-[-4.5rem]">
              <img src={item.image} className="h-fit object-cover" />
            </div>
            <div className="flex flex-col items-center justify-between w-full gap-2 mt-2">
              <div className="flex justify-center items-center gap-1 text-amberGlow h-3">
                <FaStar size={15}/>
                <p className="font-semibold leading-3">
                  {item.rating}
                </p>
              </div>
              <p className="text-secondary font-bold text-[17px]">
                {item.title}
              </p>
              <p className="text-[12px] tracking-wide max-w-[10rem] w-full">
                {item.description}
              </p>
            </div>
            <button className="py-[10px] px-8 bg-secondary w-fit rounded-full mt-1">
              <p className="capitalize text-white text-sm font-light tracking-wider">
                Order Now
              </p>
            </button>
          </div>
        ))}
      </div> */}

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
        className="mySwiper sm:hidden menu-swiper"
      >
        {ramenMenu.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="test flex flex-col justify-center items-center w-[253px] h-[300px] border border-secondary/5 shadow-md  gap-4 rounded-[30px] mt-24 mb-8  
             hover:bg-gradient-to-b from-secondary/10 to-white bg-no-repeat hover:border-none active:scale-95 transition-all duration-500 ease-in-out"
              >
                <div className="flex items-center h-[190px] w-[190px] mt-[-4.5rem]">
                  <img src={item.image} className="h-fit object-cover" />
                </div>
                <div className="flex flex-col items-center justify-between w-full gap-2 mt-2">
                  <div className="flex justify-center items-center gap-1 text-amberGlow h-3">
                    <FaStar size={15} />
                    <p className="font-semibold leading-3">{item.rating}</p>
                  </div>
                  <p className="text-secondary font-bold text-[17px]">
                    {item.title}
                  </p>
                  <p className="text-[12px] tracking-wide max-w-[10rem] w-full">
                    {item.description}
                  </p>
                </div>
                <button className="py-[10px] px-8 bg-secondary w-fit rounded-full mt-1">
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
