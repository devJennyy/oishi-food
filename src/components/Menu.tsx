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
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <p className="text-5xl font-semibold">What’s on our Plate</p>
      <div className="max-w-[48rem] w-full">
        <p className="text-lg opacity-80">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="flex gap-7 mt-4">
        <div className="px-5 py-2 rounded-full border-2 border-secondary bg-secondary text-white tracking-wide">
          <p>Ramen</p>
        </div>
        <div className="px-5 py-2 rounded-full border-2 border-primary/40 tracking-wide text-primary/50">
          <p>Desserts</p>
        </div>
        <div className="px-5 py-2 rounded-full border-2 border-primary/40 tracking-wide text-primary/50">
          <p>Lunch</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-12 w-full h-full mt-20">
        {ramenMenu.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[320px] gap-4"
          >
            <div className="flex items-center h-[320px]">
              <img
                src={item.image}
                className={`h-fit object-cover ${
                  item.imageSize || "w-[295px]"
                }`}
              />
            </div>
            <p className="text-secondary text-2xl font-semibold mt-5">
              {item.title}
            </p>
            <p className="max-w-[243px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
