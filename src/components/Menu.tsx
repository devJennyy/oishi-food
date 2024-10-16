const ramenMenu = [
  {
    image: "/images/ramen-dish-one.svg",
    title: "Spicy Garlic Ramen",
    description:
      "Chunky rayu broth, roasted pork, spring onion, bamboo shoots, bonito, marinated egg and noodles.",
  },
  {
    image: "/images/ramen-dish-two.svg",
    title: "Sesame Veggie Ramen",
    description:
      "Spicy miso broth, tofu, coriander, spring onion, bamboo shoots, marinated egg and noodles.",
    imageSize: "320px",
  },
  {
    image: "/images/ramen-dish-three.svg",
    title: "Spicy Kimchi Ramen",
    description:
      "Shoyu broth, roasted pork, spring onion, coriander, kimchi, marinated egg and noodles.",
  },
];

const Menu = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:gap-8 gap-5 mt-[-2rem] md:mt-0">
      <p className="lg:text-5xl md:text-4xl text-5xl font-semibold">What’s on our Plate</p>
      <div className="lg:max-w-[48rem] md:max-w-[38rem] max-w-[30rem] w-full">
        <p className="text-lg opacity-80">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="flex lg:gap-7 gap-5 mt-4">
        <div className="px-5 py-2 rounded-full lg:border-2 border border-secondary bg-secondary text-white tracking-wide">
          <p className="lg:text-[16px] text-sm">Ramen</p>
        </div>
        <div className="px-5 py-2 rounded-full lg:border-2 border border-primary/40 tracking-wide text-primary/50">
          <p className="lg:text-[16px] text-sm">Desserts</p>
        </div>
        <div className="px-5 py-2 rounded-full lg:border-2 border border-primary/40 tracking-wide text-primary/50">
          <p className="lg:text-[16px] text-sm">Lunch</p>
        </div>
      </div>

      <div className="md:flex justify-center items-center xl:gap-20 md:gap-12 w-full h-full xl:mt-16 mt-10 hidden">
        {ramenMenu.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[320px] gap-4"
          >
            <div className="flex items-center lg:h-[320px] h-[210px]">
              <img
                src={item.image}
                className={`h-fit object-cover ${
                  item.imageSize || "xl:w-[295px] lg:w-[270px] md:w-[190px]"
                }`}
              />
            </div>
            <p className="text-secondary text-2xl font-semibold xl:mt-9 lg:mt-3 mt-3 lg:h-9 h-16">
              {item.title}
            </p>
            <p className="lg:max-w-[243px] lg:text-[16px] text-sm h-20">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
