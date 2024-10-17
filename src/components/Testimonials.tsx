import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex items-center gap-32 h-[601px] max-w-[1440px] w-full mx-auto"
    >
      <div className="max-w-[600px] w-full h-full relative">
        <div className="absolute bottom-[5rem] left-[-3rem] z-[-1]">
          <div className="bg-[#FDC55E]/90 w-[20rem] h-[20rem] rounded-full blur-[10rem]"></div>
        </div>
        <div className="absolute left-[-4rem] z-20">
          <img
            src="/images/bg-style.svg"
            alt="Background Style"
            className="max-w-none"
          />
        </div>
        <div className="z-50 ml-10">
          <img
            src="/images/sample.png"
            alt="Sample Dish"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-start w-full h-full gap-4">
        <p className="uppercase font-semibold text-lg tracking-wider text-secondary">
          Testimonials
        </p>
        <p className="font-black text-[2.5rem] max-w-[400px] text-start leading-tight">
          What Our Customers Say About Us
        </p>
        <div className="flex justify-center items-center gap-8 mt-8">
          <div className="flex flex-col gap-4 max-w-[550px] w-full rounded-[2rem] p-7 border border-secondary">
            <img src="/favicons/quotation-mark.svg" className="w-10" />
            <p className="text-start text-lg">
              OmniFood serves the best ramen I've ever tasted! The broth was
              rich and savory, with just the right balance of flavors. The
              noodles were perfectly chewy, and the toppings—especially the
              soft-boiled egg and chashu pork—were exceptional. Every bowl is a
              comforting experience that keeps me coming back for more!
            </p>
            <div className="flex items-center gap-4 text-start mt-5">
              <div className="rounded-full p-9 bg-secondary w-fit"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amberGlow">
                  <FaStar size={15} />
                  <p className="font-black text-lg leading-tight">5.0</p>
                </div>
                <p className="font-black text-lg leading-tight">
                  Jane Ipsum Doe
                </p>
                <p className="font-bold opacity-70">Customer</p>
              </div>
            </div>
          </div>
          <button className="p-3 rounded-full bg-secondary/70 hover:bg-secondary w-fit h-fit">
            <IoIosArrowForward size={24} className="text-white"/>
          </button>
        </div>
        {/* <div className="flex justify-center items-center gap-3 w-full mt-3">
          <div className="p-[6px] bg-secondary/40 rounded-full"></div>
          <div className="p-[6px] bg-secondary rounded-full"></div>
          <div className="p-[6px] bg-secondary/40 rounded-full"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
