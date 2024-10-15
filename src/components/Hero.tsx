import { RiMotorbikeFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div
        id="hero"
        className="flex justify-between pt-56 pb-10 max-w-[1440px] w-full mx-auto px-16"
      >
        <div className="flex flex-col text-left gap-5">
          <div className="flex justify-center items-center gap-2 py-2 px-2 bg-secondary/10 w-fit rounded-full mb-3">
            <div className="bg-secondary rounded-full p-1">
              <RiMotorbikeFill className="text-white" />
            </div>
            <p className="text-secondary dark:text-white text-sm pr-2">
              Bike Delivery
            </p>
          </div>
          <div className="max-w-[38rem] w-full">
            <p className="font-black text-[4rem] leading-tight tracking-tight">
              Your Favourite Food Delivered{" "}
              <span className="text-secondary">Hot</span> &{" "}
              <span className="text-tertiary">Fresh</span>.
            </p>
            <img src="/favicons/underline-icon.svg" />
          </div>
          <div className="xl:max-w-[32rem] 2xl:max-w-[30rem] w-full mt-4">
            <p className="text-xl opacity-90">
              Best cooks and best delivery guys all at your service. Hot tasty
              food will reach you in 60 minutes.
            </p>
          </div>
          <div className="flex gap-4 text-lg mt-5">
            <div className="py-3 px-8 rounded-full bg-secondary text-white">
              <p>Order Now</p>
            </div>
            <div className="py-3 px-8 rounded-full border border-secondary dark:border-white text-secondary dark:text-white">
              <p>Learn More</p>
            </div>
          </div>
        </div>
        <div className="relative mr-8">
          <div className="flex absolute right-0 top-[-5rem]">
            <img src="/images/fire-one.svg" className="" />
            <img src="/images/fire-two.svg" className="mt-5 ml-10" />
            <img src="/images/fire-three.svg" className="mt-32" />
          </div>
          <img
            src="/images/hero-image.svg"
            className="w-full h-full object-contain pr-8 relative z-20"
          />
          <img
            src="/images/shrimp-one.svg"
            alt=""
            className="absolute object-contain z-10 bottom-[-3rem] left-[-1rem]"
          />
          <img
            src="/images/shrimp-two.svg"
            alt=""
            className="absolute object-contain right-0 bottom-[-4rem] z-10"
          />
        </div>
      </div>
  );
};

export default Hero;
