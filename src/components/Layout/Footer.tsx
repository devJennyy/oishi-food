import { ReactNode } from "react";

const Footer = () => {
  const footerData = [
    {
      width: "w-[190px]",
      header: "Contact us",
      content: [
        "162 Fairview, 3rd Floor, Oishi Land, OF 2212",
        "162-222-2212 bestramen@oishifood.com",
      ],
    },
    {
      header: "Account",
      content: ["Create Account", "Sign in", "iOS app", "Android app"],
    },
    {
      header: "Company",
      content: ["About OishiFood", "Cooking Partners", "Branch", "Careers"],
    },
  ];
  const ParagraphComponent = ({ children }: { children: ReactNode }) => {
    return <p>{children}</p>;
  };
  return (
    <div className="w-full border-t border-lightGray">
      <div className="flex h-[413px] max-w-[1440px] mx-auto w-full 2xl:px-[75px] xl:px-7 px-6 gap-20">
        <div className="flex flex-col justify-center gap-4 max-w-[295px] w-full">
          <div className="h-fit">
            <img
              src="/oishi-food-text-logo.svg"
              alt="Oishi Food Logo"
              className="xl:w-52 lg:w-36 w-32 dark:hidden"
            />
            <img
              src="/dark-oishi-food-text-logo.svg"
              alt="Oishi Food Logo"
              className="xl:44 lg:w-36 w-32 hidden dark:flex"
            />
          </div>
          <div className="max-w-[320px] w-full">
            <p className="text-justify text-primary/60 text-sm">
              A landing page for Oishifood, showcasing delicious dishes with a
              sleek and responsive design across all devices.
            </p>
          </div>
          <div className="grid grid-cols-5 h-[46px] mt-3">
            <div className="w-[46px] rounded-xl h-full bg-secondary/10"></div>
            <div className="w-[46px] rounded-xl h-full bg-secondary/10"></div>
            <div className="w-[46px] rounded-xl h-full bg-secondary/10"></div>
            <div className="w-[46px] rounded-xl h-full bg-secondary/10"></div>
            <div className="w-[46px] rounded-xl h-full bg-secondary/10"></div>
          </div>
        </div>
        <div className="flex gap-16 mt-[7.3rem]">
          {footerData?.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col h-full text-left gap-4 ${
                data.width ? data.width : "w-[135px]"
              }`}
            >
              <p className="font-bold text-lg mb-1">{data.header}</p>
              <div className="flex flex-col gap-4 text-primary/60 text-sm">
                {data.content.map((item, idx) => (
                  <ParagraphComponent key={idx}>{item}</ParagraphComponent>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col h-full text-left gap-4 w-[200px]">
            <p className="font-bold text-lg mb-1">Get app</p>
            <div className="flex flex-col gap-3 text-primary/60 text-sm">
              <button className="flex justify-center items-center h-[3rem] w-full bg-primary rounded-lg text-white ">
                <img
                  src="/images/download-app-store.svg"
                  alt="download-on-app-store"
                  className="object-cover"
                />
              </button>
              <button className="flex justify-center items-center h-[3rem] w-full bg-primary rounded-lg text-white ">
                <img
                  src="/images/download-app-google-play.svg"
                  alt="download-on-app-google-play"
                  className="object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-t from-secondary/10 to-secondary/5 h-[52px] w-full text-sm">
        <p className="text-primary/80">
          Designed & Developed by{" "}
          <span className="text-primary font-semibold">Jenny Pieloor</span> |{" "}
          <span className="text-secondary font-semibold">
            All Rights Reserved
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
