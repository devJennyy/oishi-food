import { ReactNode } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { footerData } from "../../constants/data";

const Footer = () => {
  const ParagraphComponent = ({ children }: { children: ReactNode }) => {
    return (
      <p className="text-primary/60 hover:text-primary dark:text-white/60 hover:dark:text-white cursor-pointer hover:transition-all">
        {children}
      </p>
    );
  };
  const socialIcons = [
    <FaTwitter />,
    <FaPinterestP />,
    <FaFacebookF />,
    <FaInstagram />,
    <FaGithub />,
  ];
  const downloadButton = [
    {
      image: "/images/download-app-store.svg",
      alt: "download-on-app-store",
    },
    {
      image: "/images/download-app-google-play.svg",
      alt: "download-on-google-play",
    },
  ];
  return (
    <div className="w-full border-t border-lightGray dark:border-lightGray/10">
      <div className="flex md:flex-row flex-col lg:h-[413px] md:h-[313px] max-w-[1440px] mx-auto w-full 2xl:px-[75px] xl:px-7 lg:px-10 px-5 lg:gap-16 gap-8 lg:mb-0 mb-12">
        <div className="flex flex-col justify-center gap-4 lg:max-w-[295px] md:max-w-[190px] max-w-[250px] w-full mt-12 lg:mt-0">
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
            <p className="lg:text-justify text-left text-primary/60 dark:text-white/60 lg:text-sm text-[12px]">
              A landing page for OishiFood, showcasing delicious dishes with a
              sleek and responsive design across all devices.
            </p>
          </div>
          <div className="grid grid-cols-5 sm:mt-3 xl:gap-0 lg:gap-4">
            {socialIcons?.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center xl:w-[46px] xl:h-[46px] lg:w-[40px] lg:h-[40px] md:w-[31px] md:h-[31px] w-[40px] h-[40px] lg:rounded-xl md:rounded-lg rounded-xl text-accent bg-accent/10 dark:bg-accent/0 dark:border-accent dark:border cursor-pointer hover:scale-110 transition-all active:scale-95 duration-300 ease-in-out"
                >
                  {icon}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between xl:gap-16 lg:gap-11 md:gap-5 sm:gap-10 gap-5 xl:mt-[7.3rem] lg:mt-[6.7rem] md:mt-[5.7rem]">
          {footerData?.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col h-full text-left gap-4 ${
                data.width
                  ? data.width
                  : "xl:w-[135px] lg:w-[100px] sm:w-[97px] w-[95px]"
              }`}
            >
              <p className="font-bold sm:text-lg sm:mb-1">{data.header}</p>
              <div className="flex flex-col xl:gap-4 gap-3 xl:text-sm text-[12px]">
                {data.content.map((item, index) => (
                  <ParagraphComponent key={index}>{item}</ParagraphComponent>
                ))}
              </div>
            </div>
          ))}
          <div className="sm:flex flex-col h-full text-left gap-4 xl:w-[200px] lg:w-[160px] w-[130px] hidden">
            <p className="font-bold text-lg mb-1">Get app</p>
            <div className="flex flex-col lg:gap-3 gap-2 text-primary/60 dark:text-white/60 text-sm">
              {downloadButton?.map((button, index) => {
                return (
                  <button
                    key={index}
                    className="flex justify-center items-center xl:h-[3rem] lg:h-[2.5rem] lg:w-full md:w-[7.5rem] h-[2.3rem] bg-primary rounded-lg text-white active:scale-95 transition-all duration-400 ease-in-out"
                  >
                    <img
                      src={button.image}
                      alt={button.alt}
                      className="object-cover xl:w-[103px] lg:w-24 sm:w-20 w-24"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:gap-3 gap-2 text-primary/60 dark:text-white/60 text-sm sm:hidden mt-4">
          {downloadButton?.map((button, index) => {
            return (
              <button
                key={index}
                className="flex justify-center items-center xl:h-[3rem] lg:h-[2.5rem] lg:w-full md:w-[7.5rem] sm:h-[2.3rem] h-[2.9rem] bg-primary rounded-lg text-white active:scale-95 transition-all duration-400 ease-in-out"
              >
                <img
                  src={button.image}
                  alt={button.alt}
                  className="object-cover xl:w-[103px] lg:w-24 sm:w-20 w-24"
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-t from-secondary/10 to-secondary/5 xl:h-[52px] h-[42px] w-full xl:text-sm sm:text-[12px] text-[10px]">
        <p className="text-primary/80 dark:text-white/80 tracking-wider">
          Designed & Developed by{" "}
          <span className="text-primary dark:text-white/80 font-semibold">
            Jenny Pieloor
          </span>{" "}
          |{" "}
          <span className="text-accent font-semibold">All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
