const HowItWorks = () => {
  const guideSteps = [
    {
      numberCount: 1,
      title: "Choose Your",
			subtitle: "Food",
      description:
        "Open the OishiFood app and browse the available options. Pick the dishes you want and add them to your cart, exploring a variety of delicious meals tailored to your cravings.",
      image: "/images/step-one-guide.png",
    },
    {
      numberCount: 2,
      title: "Review and",
			subtitle: "Customize",
      description:
        "Review your order and make any necessary adjustments, like changing toppings or spice levels. If you have any specific preferences, feel free to add special instructions for the kitchen. Then, proceed to checkout.",
      image: "/images/step-two-guide.png",
      stepsPosition: "flex-row-reverse",
      classname: "pl-48",
    },
    {
      numberCount: 3,
      title: "Payment and",
			subtitle: "Delivery",
      description:
        "Enter your address, choose a payment method, and confirm your order. Our friendly rider will deliver your meal and may call you upon arrival to ensure a smooth handoff! You'll be able to track your order in real-time for added convenience.",
      image: "/images/step-one-guide.png",
    },
  ];
  return (
    <div
      id="how-it-works"
      className="max-w-[1440px] mx-auto w-full flex flex-col justify-center items-center lg:gap-32 gap-5 mt-[-2rem] md:mt-0 2xl:px-[75px] xl:px-7 px-6"
    >
      <div className="flex flex-col gap-2">
        <p className="font-bold capitalize text-secondary sm:text-xl text-lg tracking-wider">
          How It Works
        </p>
        <p className="lg:text-5xl md:text-4xl text-5xl lg:font-semibold sm:font-bold font-black sm:leading-tight">
          Your Quick Dining <span className="text-secondary">Guide</span>
        </p>
      </div>
      <div className="flex flex-col gap-20">
        {guideSteps?.map((step) => {
          return (
            <div
              className={`flex w-full h-[30rem] px-10 ${
                step.stepsPosition ? step.stepsPosition : "flex-row"
              }`}
            >
              <div
                className={`flex flex-col justify-center w-full h-full gap-3 text-left ${
                  step.classname ? step.classname : "pl-0"
                }`}
              >
                <p className="text-secondary/50 dark:text-secondary text-[6rem] font-bold leading-none">
                  0{step.numberCount}
                </p>
                <p className="text-5xl font-bold capitalize">{step.title} <span className="dark:text-tertiary text-secondary">{step.subtitle}</span></p>
                <p className="text-medium text-xl mt-7 leading-relaxed opacity-85 max-w-[36.5rem] w-full">
                  {step.description}
                </p>
              </div>
              <div className="flex justify-center items-center w-[45rem] h-full relative">
                <div className="w-[380px] h-[380px] rounded-full bg-secondary opacity-10 z-10 absolute"></div>
                <div className="w-[293px] h-[293px] rounded-full bg-secondary opacity-40 z-20 absolute"></div>
                <div className="absolute z-30">
                  <img
                    src={step.image}
                    className="w-[238px] h-[482px] object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
