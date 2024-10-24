const PromotionalOffer = () => {
  return (
    <div
      id="promotional-offer"
      className="flex flex-col justify-center items-center max-w-[1440px] mx-auto w-full lg:py-20 py-12 lg:gap-32 sm:gap-10 gap-5 2xl:px-[75px] xl:px-7 px-5"
    >
      <div className="flex sm:flex-row flex-col w-full xl:h-[614px] lg:h-[500px] md:h-[370px] sm:h-[340px] h-full sm:rounded-[30px] rounded-2xl bg-secondary/5 relative overflow-hidden">
        <div className="flex flex-col sm:justify-center sm:items-start items-center h-full w-full xl:max-w-[32rem] lg:max-w-[29rem] md:max-w-[20rem] sm:max-w-[15.5rem] xl:gap-4 lg:gap-3 sm:gap-2 gap-3 sm:text-left text-center xl:pl-24 lg:pl-16 md:pl-12 sm:pl-10 p-7 sm:p-0">
          <p className="font-bold xl:text-xl lg:text-lg md:text-[16px] sm:text-sm tracking-widest text-secondary">
            Try for Free
          </p>
          <p className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-3xl xl:leading-[3.5rem] md:leading-normal leading-tight">
            Claim your free first meal today!
          </p>
          <p className="font-medium xl:text-lg md:text-[16px] sm:text-[13px] xl:py-4 py-3">
            Savor the best hot & tasty ramen with OmniFood, delivered straight
            to your door in no time!
          </p>
          <button className="xl:px-7 xl:py-4 lg:px-6 lg:py-3 md:px-5 sm:py-2 sm:px-4 px-5 py-[11px] bg-secondary/90 rounded-full w-fit">
            <p className="xl:text-xl lg:text-lg md:text-[16px] sm:text-[13px] text-white">
              Get The App
            </p>
          </button>
        </div>

        <div className="sm:flex justify-center items-center hidden">
          <img
            src="/images/step-one-guide.png"
            className="xl:w-[352px] xl:h-[715px] lg:w-[275px] lg:h-[565px] md:w-[185px] w-[165px] h-full md:object-cover absolute lg:right-[3rem] right-[2rem] top-[3.5rem]"
          />
          <img
            src="/images/order-food-ui.png"
            className="xl:w-[352px] xl:h-[715px] lg:w-[275px] lg:h-[565px] md:w-[185px] w-[165px] h-full md:object-cover absolute xl:top-[12rem] xl:right-[15rem] lg:top-[10rem] lg:right-[12rem] 
            top-[7.5rem] right-[8rem]"
          />
          <img
            src="/favicons/yum-icon.svg"
            className="object-cover z-20 absolute top-5 right-7 lg:w-9 w-7"
          />
          <img
            src="/favicons/wire-vector.svg"
            className="object-cover lg:w-11 md:w-8 w-6 z-20 absolute xl:top-[10rem] xl:right-[35rem] lg:top-[8rem] lg:right-[27rem] md:top-[6.2rem] md:right-[17.5rem] 
            top-[6.5rem] right-[16.5rem]"
          />
          <img
            src="/favicons/circle-medium.svg"
            className="md:w-[10px] w-2 object-cover z-20 absolute xl:top-[6rem] xl:right-[27rem] lg:right-[22rem] top-[5rem] md:right-[15rem] right-[13.5rem]"
          />
          <img
            src="/favicons/circle-small.svg"
            className="object-cover z-20 absolute top-[10rem] lg:right-5 right-4"
          />
          <img
            src="/favicons/circle-yellow.svg"
            className="object-cover z-20 absolute xl:bottom-[11rem] xl:right-[43rem] lg:bottom-[9.5rem] lg:right-[33.5rem] md:bottom-[7.5rem] md:right-[23rem] right-[21rem] bottom-[5.5rem]"
          />
          <div
            className="w-fit lg:py-3 lg:px-7 py-2 px-4 bg-white rounded-full drop-shadow-md z-10 absolute xl:bottom-24 xl:right-[33.5rem] lg:bottom-20 lg:right-[26.5rem]
          md:bottom-16 md:right-[17rem] bottom-10 right-[16.5rem]"
          >
            <p className="text-secondary font-medium 2xl:text-[22px] xl:text-xl lg:text-[16px] md:text-sm text-[10px]">
              Never cook again!
            </p>
          </div>
          <img
            src="/favicons/noto-fire.svg"
            className="xl:w-8 lg:w-7 w-5 object-cover z-20 absolute 2xl:right-[46.5rem] xl:right-[45.5rem] lg:right-[36.5rem] md:right-[25rem] right-[22.5rem] xl:bottom-[8.5rem] lg:bottom-[7rem] md:bottom-[5.5rem]
            bottom-16"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffer;
