import { RiMotorbikeFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex md:flex-row flex-col justify-between pb-10 max-w-[1440px] w-full mx-auto 2xl:px-[75px] xl:px-7 px-6 relative overflow-x-hidden overflow-y-scroll no-scrollbar"
    >
      <div className="absolute top-[-70rem] right-[-70rem] ">
        <img src="/images/ellipse.svg" className="w-full bg-cover" />
      </div>

      <div className="flex flex-col text-left gap-4 xl:pt-[250px] lg:pt-48 md:pt-32 sm:pt-48 pt-36">
        <div className="flex justify-center items-center gap-2 py-2 px-3 bg-secondary/10 w-fit rounded-full lg:mb-3 sm:mb-0 mb-2">
          <div className="bg-secondary rounded-full p-1">
            <RiMotorbikeFill className="text-white lg:text-sm text-[12px]" />
          </div>
          <p className="text-secondary dark:text-white lg:text-sm text-sm pr-2">
            Bike Delivery
          </p>
        </div>
        <div className="max-w-[36rem] w-full">
          <p className="font-black xl:text-[3.7rem] lg:text-[3.3rem] md:text-[2.4rem] tracking-tight sm:tracking-normal sm:text-[3.5rem] text-[2.9rem] lg:leading-[4.7rem] md:leading-[3.5rem] sm:leading-[4.5rem]">
            Your Favourite Food Delivered{" "}
            <span className="text-secondary">Hot</span> &{" "}
            <span className="text-tertiary">Fresh</span>.
          </p>
          <img
            src="/favicons/underline-icon.svg"
            className="xl:max-w-[13rem] lg:max-w-[12rem] md:max-w-[8.5rem] sm:max-w-[13rem] w-full max-w-[13rem]"
          />
        </div>
        <div className="lg:max-w-[28rem] 2xl:max-w-[32rem] md:max-w-[18rem] sm:max-w-[30rem] w-full lg:mt-7 sm:mt-4 mt-6 sm:pr-0 pr-6">
          <p className="xl:text-xl lg:text-lg md:text-sm sm:text-lg text-[17px] opacity-90">
            Delicious Japanese cuisine, made fresh by expert chefs. Delivered
            hot to your doorstep in just 60 minutes!
          </p>
        </div>
        <div className="flex lg:gap-4 gap-3 xl:text-lg lg:text-lg md:text-sm text-lg lg:mt-7 sm:mt-4 mt-6">
          <button className="w-full h-12 lg:max-w-[10.5rem] lg:h-[3.2rem] sm:max-w-[9.5rem] sm:h-[3rem] md:max-w-[7rem] md:h-[2.5rem] rounded-full bg-secondary text-white">
            <p>Order Now</p>
          </button>
          <button className="w-full h-12 lg:max-w-[10.5rem] lg:h-[3.2rem] sm:max-w-[9.5rem] sm:h-[3rem] md:max-w-[7rem] md:h-[2.5rem] rounded-full border border-secondary dark:border-white text-secondary dark:text-white">
            <p>Learn More</p>
          </button>
        </div>
      </div>

      <div className="relative xl:pt-44 lg:pt-[190px] pt-36">
        <div className="w-full max-w-full xl:pr-10 xl:pt-0 lg:pt-4 md:flex hidden">
          <img
            src="/images/sample.png"
            className="w-full h-full relative z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
