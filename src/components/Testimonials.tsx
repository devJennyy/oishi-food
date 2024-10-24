import { FaStar } from "react-icons/fa";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex items-center max-w-[1440px] w-full mx-auto lg:py-20 py-12 gap-12 xl:gap-32 lg:gap-16 px-5 md:px-14 sm:px-16 lg:px-0 lg:pr-10 2xl:pr-[7.5rem] xl:pr-[4rem]"
    >
      <div className="hidden lg:block relative w-full max-w-[600px] h-full">
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
        <div className="z-50 xl:ml-10 ml-7">
          <img
            src="/images/sample.png"
            alt="Sample Dish"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full items-center lg:items-start gap-2">
        <p className="font-bold capitalize text-secondary sm:text-xl text-lg tracking-wider">
          Testimonials
        </p>
        <p className="sm:font-bold font-black xl:max-w-[400px] lg:max-w-[350px] text-4xl sm:text-5xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] sm:leading-tight leading-[2.7rem]">
          What Our Clients<span className="text-secondary"> Say</span>
        </p>

        <div className="flex items-center gap-8 mt-8 lg:mt-5 xl:mt-8">
          <button className="hidden lg:hidden md:flex justify-center items-center max-w-[2.8rem] w-full h-[2.8rem] bg-secondary/40 dark:bg-midnightBlue/40 rounded-full">
            <MdOutlineArrowBack size={18} className="text-white" />
          </button>

          <div className="flex flex-col gap-4 w-full rounded-[2rem] p-7 border border-secondary">
            <img
              src="/favicons/quotation-mark.svg"
              className="w-10 xl:w-10 md:w-8"
            />
            <p className="text-start xl:text-lg md:text-[16px] sm:text-lg">
              OmniFood serves the best ramen I've ever tasted! The broth was
              rich and savory, with just the right balance of flavors. The
              noodles were perfectly chewy, and the toppings—especially the
              soft-boiled egg and chashu pork—were exceptional. Every bowl is a
              comforting experience that keeps me coming back for more!
            </p>
            <div className="flex items-center gap-5 mt-5 xl:mt-5 md:mt-3">
              <div className="rounded-full p-7 xl:p-9 bg-secondary w-fit"></div>
              <div className="flex flex-col text-start">
                <div className="flex items-center gap-1 text-amberGlow mb-[1px]">
                  <FaStar className="text-sm xl:text-[15px]" />
                  <p className="font-black leading-tight text-[15px] xl:text-lg md:text-[16px] sm:text-lg mt-[2px]">
                    5.0
                  </p>
                </div>
                <p className="font-black leading-tight text-sm xl:text-lg md:text-[16px] sm:text-lg">
                  Jane Ipsum Doe
                </p>
                <p className="font-bold opacity-70 tracking-wide text-sm xl:text-[16px] md:text-sm sm:text-[16px]">
                  Customer
                </p>
              </div>
            </div>
          </div>
          <button className="hidden lg:hidden md:flex justify-center items-center max-w-[2.8rem] w-full h-[2.8rem] bg-secondary/90 dark:bg-midnightBlue rounded-full">
            <MdOutlineArrowForward size={18} className="text-white" />
          </button>
        </div>

        <div className="flex justify-between items-center w-full mt-5 lg:mt-2 px-5">
          <div className="flex gap-2 items-center justify-center lg:justify-start w-full">
            <div className="p-[6px] xl:p-[7px] bg-secondary/40 rounded-full"></div>
            <div className="p-[6px] xl:p-[7px] bg-secondary rounded-full"></div>
            <div className="p-[6px] xl:p-[7px] bg-secondary/40 rounded-full"></div>
          </div>
          <div className="hidden lg:flex gap-2">
            <button className="flex justify-center items-center w-[2.3rem] h-[2.3rem] bg-secondary/40 dark:bg-midnightBlue/40 rounded-full">
              <MdOutlineArrowBack className="text-white xl:text-[18px]" />
            </button>
            <button className="flex justify-center items-center w-[2.3rem] h-[2.3rem] bg-secondary/90 dark:bg-midnightBlue rounded-full">
              <MdOutlineArrowForward className="text-white xl:text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
