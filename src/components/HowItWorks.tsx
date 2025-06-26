// components/HowItWorks.tsx
import { howItWorks } from "../constants/data";
import SectionHeader from "./shared/SectionHeader";
import AnimatedImage from "./ui/AnimatedImage";

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="flex flex-col justify-center items-center max-w-[1440px] mx-auto w-full lg:py-16 py-12 lg:gap-32 sm:gap-10 gap-5 2xl:px-[75px] xl:px-7 px-5"
    >
      <SectionHeader
        label="How It Works"
        title="Your Quick Dining"
        highlight="Guide"
      />

      <div className="flex flex-col xl:gap-20 sm:gap-0 gap-10 w-full">
        {howItWorks?.map((step, index) => (
          <div
            key={index}
            className={`flex w-full xl:h-[30rem] lg:h-[28rem] sm:h-[24rem] h-[37rem] xl:px-10 ${
              step.stepsPosition ? step.stepsPosition : "sm:flex-row flex-col"
            }`}
          >
            {/* Text Content */}
            <div
              className={`flex flex-col justify-center w-full h-full lg:gap-4 gap-2 text-left ${
                step.classname ? step.classname : "pl-0"
              }`}
            >
              <p className="text-accent/50 dark:text-accent xl:text-[5.8rem] lg:text-[4.5rem] text-[3.7rem] font-black leading-none">
                0{step.numberCount}
              </p>
              <p className="xl:text-[2.5rem] lg:text-[2rem] text-2xl font-black capitalize">
                {step.title}{" "}
                <span className="dark:text-tertiary text-accent">
                  {step.subtitle}
                </span>
              </p>
              <p className="text-medium xl:text-xl xl:mt-7 lg:mt-4 mt-3 leading-relaxed opacity-85 xl:max-w-[36.5rem] max-w-[29rem] w-full lg:text-[16px] text-sm">
                {step.description}
              </p>
            </div>

            {/* Image Section */}
            <div
              className={`flex justify-center items-center xl:w-[45rem] w-full h-full relative sm:mt-0 mt-5 ${step.padding}`}
            >
              <div className="xl:w-[380px] xl:h-[380px] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] rounded-full bg-accent opacity-10 z-10 absolute"></div>
              <div className="xl:w-[293px] xl:h-[293px] lg:w-[233px] lg:h-[233px] w-[195px] h-[195px] rounded-full bg-accent opacity-40 z-20 absolute"></div>
              <div className="absolute z-30">
                <AnimatedImage
                  src={step.image}
                  className="xl:w-[238px] xl:h-[482px] lg:w-[185px] lg:h-[375px] w-[155px] h-[345px] xl:object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
