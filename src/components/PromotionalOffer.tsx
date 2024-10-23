const PromotionalOffer = () => {
  return (
    <div
      id="promotional-offer"
      className="max-w-[1440px] mx-auto w-full flex flex-col justify-center items-center lg:gap-32 sm:gap-10 gap-5 mt-[7rem] md:mt-10 2xl:px-[75px] xl:px-7 px-6"
    >
      <div className="flex w-full h-[614px] rounded-[30px] bg-secondary/5 relative overflow-hidden">
        <div className="flex flex-col justify-center h-full w-full max-w-[32rem] gap-4 text-left pl-24">
          <p className="font-bold text-xl tracking-widest text-secondary">
            Try for Free
          </p>
          <p className="font-bold text-5xl leading-[3.5rem]">
            Claim your free first meal today!
          </p>
          <p className="font-medium text-lg py-4">
            Savor the best hot & tasty ramen with OmniFood, delivered straight
            to your door in no time!
          </p>
          <button className="px-7 py-4 bg-secondary/90 rounded-full w-fit">
            <p className="text-xl text-white">Get The App</p>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/images/step-one-guide.png"
            className="w-[352px] h-[715px] absolute right-[3rem] top-[3.5rem]"
          />
          <img
            src="/images/order-food-ui.png"
            className="w-[352px] h-[715px] absolute top-[12rem] right-[15rem]"
          />
          <div className="w-fit py-3 px-7 bg-white rounded-full drop-shadow-md z-10 absolute bottom-24 right-[33.5rem]">
            <p className="text-secondary font-medium text-[22px]">
              Never cook again!
            </p>
          </div>
          <img src="/favicons/noto-fire.svg" className="object-cover z-20 absolute bottom-[8.5rem] left-[32rem]" />
          <img src="/favicons/yum-icon.svg" className="object-cover z-20 absolute top-5 right-7" />
          <img src="/favicons/wire-vector.svg" className="object-cover z-20 absolute top-[10rem] right-[35rem]" />
          <img src="/favicons/circle-medium.svg" className="object-cover z-20 absolute top-[6rem] right-[27rem]" />
          <img src="/favicons/circle-small.svg" className="object-cover z-20 absolute top-[10rem] right-5" />
          <img src="/favicons/circle-yellow.svg" className="object-cover z-20 absolute bottom-[11rem] left-[38rem]" />
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffer;
