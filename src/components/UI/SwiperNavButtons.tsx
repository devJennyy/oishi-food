import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <>
      <div className="swiper-nav-btns md:flex hidden gap-2 justify-end items-center pr-5 mt-5">
        <button onClick={() => swiper.slidePrev()} className="swiper-button-next disabled:opacity-50 flex justify-center items-center w-[2.3rem] h-[2.3rem] rounded-full">
          <MdOutlineArrowBack className="text-white xl:text-[18px]" />
        </button>
        <button onClick={() => swiper.slideNext()} className="swiper-button-prev disabled:opacity-50 flex justify-center items-center w-[2.3rem] h-[2.3rem] rounded-full">
          <MdOutlineArrowForward className="text-white xl:text-[18px]" />
        </button>
      </div>
    </>
  );
}
