import { RiMotorbikeFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div
        id="hero"
        className="flex lg:flex-row flex-col justify-between pb-10 max-w-[1440px] w-full mx-auto xl:px-[75px] px-6"
      >
        <div className="flex flex-col text-left gap-4 pt-[250px]">
          <div className="flex justify-center items-center gap-2 py-2 px-3 bg-secondary/10 w-fit rounded-full mb-3">
            <div className="bg-secondary rounded-full p-1">
              <RiMotorbikeFill className="text-white" />
            </div>
            <p className="text-secondary dark:text-white text-sm pr-2">
              Bike Delivery
            </p>
          </div>
          <div className="max-w-[36rem] w-full">
            <p className="font-black xl:text-[3.7rem] lg:text-[3rem] leading-[4.7rem]">
              Your Favourite Food Delivered{" "}
              <span className="text-secondary">Hot</span> &{" "}
              <span className="text-tertiary">Fresh</span>.
            </p>
            <img src="/favicons/underline-icon.svg" />
          </div>
          <div className="lg:max-w-[30rem] 2xl:max-w-[32rem] w-full mt-7">
            <p className="text-xl opacity-90">
            Delicious Japanese cuisine, made fresh by expert chefs. Delivered hot to your doorstep in just 60 minutes!
            </p>
          </div>
          <div className="flex gap-5 text-lg mt-7">
            <button className="py-3 px-8 rounded-full bg-secondary text-white">
              <p>Order Now</p>
            </button>
            <button className="py-3 px-8 rounded-full border border-secondary dark:border-white text-secondary dark:text-white">
              <p>Learn More</p>
            </button>
          </div>
        </div>

        <div className="relative pt-44">
          {/* <div className="flex absolute right-0 top-[-5rem]">
            <img src="/images/fire-one.svg" className="" />
            <img src="/images/fire-two.svg" className="mt-5 ml-10" />
            <img src="/images/fire-three.svg" className="mt-32" />
          </div> */}
          <img
            src="/images/sample.png"
            className="w-full h-full object-contain relative z-20 mr-10"
          />
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
