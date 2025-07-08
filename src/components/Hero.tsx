import { RiMotorbikeFill } from "react-icons/ri";
import Button from "./shared/Button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="sm:pt-36 pt-24 flex md:flex-row flex-col justify-between max-w-[1440px] w-full mx-auto 2xl:px-[75px] xl:px-10 px-5 relative overflow-x-hidden overflow-y-scroll no-scrollbar sm:pb-10 pb-5"
    >
      <div className="md:w-1/2 w-full flex flex-col justify-center text-left gap-4">
        <div className="flex justify-center items-center gap-2 py-2 px-3 bg-accent/10 w-fit rounded-full lg:mb-3 sm:mb-0 mb-2">
          <div className="bg-accent rounded-full p-1">
            <RiMotorbikeFill className="text-white lg:text-sm text-[12px]" />
          </div>
          <p className="text-accent dark:text-white lg:text-sm text-sm pr-2">
            Fast Delivery
          </p>
        </div>

        <div className="sm:max-w-[36rem] max-w-[20rem] w-full">
          <p className="font-black xl:text-[3.7rem] lg:text-[3.3rem] md:text-[2.4rem] tracking-tight sm:tracking-normal sm:text-[3.5rem] text-[2.6rem] lg:leading-[4.7rem] md:leading-[3.5rem] sm:leading-[4.5rem]">
            Your Favourite Food Delivered{" "}
            <span className="text-accent">Hot</span> &{" "}
            <span className="text-tertiary">Fresh</span>.
          </p>
          <img
            src="/favicons/underline-icon.svg"
            className="xl:max-w-[13rem] lg:max-w-[12rem] md:max-w-[8.5rem] sm:max-w-[13rem] w-full max-w-[13rem]"
            alt="Underline Decoration"
          />
        </div>

        <div className="lg:max-w-[28rem] 2xl:max-w-[32rem] md:max-w-[18rem] sm:max-w-[30rem] w-full lg:mt-7 sm:mt-4 mt-6 sm:pr-0 pr-6">
          <p className="xl:text-xl lg:text-lg md:text-sm sm:text-lg text-[17px] opacity-90">
            Delicious Japanese cuisine, made fresh by expert chefs. Delivered
            hot to your doorstep in just 60 minutes!
          </p>
        </div>

        <div className="flex sm:flex-row flex-col lg:gap-4 gap-3 xl:text-lg lg:text-lg md:text-sm text-lg lg:mt-7 sm:mt-4 mt-6">
          <Button
            label={"Order Now"}
            href={"#promotional-offer"}
            style={"primary"}
            customClass="sm:w-44 w-full"
          />
          <Button
            label={"Explore Food"}
            href={"#menu"}
            style={"secondary"}
            customClass="sm:w-44 w-full"
          />
        </div>
      </div>

      <div className="w-1/2 pl-10 md:flex hidden">
        <img
          src="/images/sample.png"
          className="w-full h-full relative z-20"
          alt="Sample Food"
        />
      </div>
    </div>
  );
};

export default Hero;
