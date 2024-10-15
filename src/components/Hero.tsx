import { RiMotorbikeFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div
        id="hero"
        className="flex md:flex-row flex-col justify-between pb-10 max-w-[1440px] w-full mx-auto 2xl:px-[75px] xl:px-7 px-6 relative"
      >
        <div className="absolute top-[-70rem] right-[-70rem] ">
          <img src="/images/ellipse.svg" className="w-full bg-cover"/>
        </div>
        <div className="flex flex-col text-left gap-4 lg:pt-[250px] pt-32">
          <div className="flex justify-center items-center gap-2 py-2 px-3 bg-secondary/10 w-fit rounded-full lg:mb-3">
            <div className="bg-secondary rounded-full p-1">
              <RiMotorbikeFill className="text-white lg:text-sm text-[12px]" />
            </div>
            <p className="text-secondary dark:text-white lg:text-sm text-[12px] pr-2">
              Bike Delivery
            </p>
          </div>
          <div className="max-w-[36rem] w-full">
            <p className="font-black xl:text-[3.7rem] lg:text-[3.3rem] md:text-[2.4rem] lg:leading-[4.7rem] leading-[3.5rem]">
              Your Favourite Food Delivered{" "}
              <span className="text-secondary">Hot</span> &{" "}
              <span className="text-tertiary">Fresh</span>.
            </p>
            <img src="/favicons/underline-icon.svg" />
          </div>
          <div className="lg:max-w-[28rem] 2xl:max-w-[32rem] w-full lg:mt-7 mt-4">
            <p className="xl:text-xl lg:text-[16px] text-sm opacity-90">
            Delicious Japanese cuisine, made fresh by expert chefs. Delivered hot to your doorstep in just 60 minutes!
            </p>
          </div>
          <div className="flex lg:gap-5 gap-3 xl:text-lg lg:text-[16px] text-sm lg:mt-7 mt-4">
            <button className="lg:py-3 py-2 px-6 lg:px-8 rounded-full bg-secondary text-white">
              <p>Order Now</p>
            </button>
            <button className="lg:py-3 py-2 px-6 lg:px-8 rounded-full border border-secondary dark:border-white text-secondary dark:text-white">
              <p>Learn More</p>
            </button>
          </div>
        </div>

        <div className="relative lg:pt-44 pt-36">
          {/* <div className="flex absolute right-0 top-[-5rem]">
            <img src="/images/fire-one.svg" className="" />
            <img src="/images/fire-two.svg" className="mt-5 ml-10" />
            <img src="/images/fire-three.svg" className="mt-32" />
          </div> */}
          <div className="w-full max-w-full xl:pr-10 xl:pt-0 lg:pt-4">
          <img
            src="/images/sample.png"
            className="w-full h-full relative z-20"
          />
          </div>
          {/* <img
            src="/images/shrimp-one.svg"
            alt=""
            className="absolute object-contain z-10 bottom-[-3rem] left-[-1rem]"
          />
          <img
            src="/images/shrimp-two.svg"
            alt=""
            className="absolute object-contain right-0 bottom-[-4rem] z-10"
          /> */}
        </div>
      </div>
  );
};

export default Hero;
