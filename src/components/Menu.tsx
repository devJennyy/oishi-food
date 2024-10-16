const ramenMenu = [
  {
    image: "/images/sample-3.svg",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    image: "/images/sample-3.svg",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    imageSize: "320px",
  },
  {
    image: "/images/sample-3.svg",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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

      <div className="md:flex justify-center items-center md:gap-12 w-full h-full xl:mt-16 mt-10 hidden">
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
            <p className="text-secondary text-2xl font-semibold xl:mt-5 mt-3">
              {item.title}
            </p>
            <p className="lg:max-w-[243px] lg:text-[16px] text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
