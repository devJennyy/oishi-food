import { FaFire, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { lunchMenu, ramenMenu, sushiMenu } from "../constants/data";
import SectionHeader from "./shared/SectionHeader";
import { LuUtensilsCrossed } from "react-icons/lu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string>("ramen");
  const [lastIndex, setLastIndex] = useState<number | null>(null);
const cardWidth = window.innerWidth > 1024 ? 340 + 72 : 280 + 56;



  const menu =
    activeMenu === "ramen"
      ? ramenMenu
      : activeMenu === "sushi"
      ? sushiMenu
      : lunchMenu;

  const middleIndex = Math.floor(menu.length / 2);
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const getChopstickX = () => {
    const menu =
      activeMenu === "ramen"
        ? ramenMenu
        : activeMenu === "sushi"
        ? sushiMenu
        : lunchMenu;

    const index = activeIndex !== null ? activeIndex : lastIndex;

    if (index === null) return 0;

    const centerOffset = Math.floor((menu.length - 1) / 2);
    return (index - centerOffset) * cardWidth;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center max-w-[1440px] mx-auto w-full py-12 lg:gap-8 gap-5 2xl:px-[75px] xl:px-7"
    >
      <SectionHeader
        label={"Menu"}
        title={"What’s on our"}
        highlight={"Plate"}
      />

      <p className="lg:max-w-[48rem] md:max-w-[38rem] max-w-[30rem] w-full px-5 sm:text-lg opacity-80">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <div className="flex lg:gap-7 gap-5 mt-4">
        {["ramen", "sushi", "lunch"].map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`px-5 py-[6px] rounded-full sm:border-2 border transition-all
            ${
              activeMenu === menu
                ? "border-accent text-accent dark:text-white"
                : "border-primary/40 text-primary/50 dark:border-white/40 dark:text-white/50"
            }
          `}
          >
            <p className="lg:text-base text-sm capitalize sm:font-medium tracking-wide">
              {menu}
            </p>
          </button>
        ))}
      </div>

      <motion.div
        className="hidden absolute w-full h-80 z-40 lg:flex justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          x: getChopstickX(),
          opacity: activeIndex === null ? 0 : 1,
          rotate: 10,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <img
          src="/images/chopstick.png"
          alt="chopstick"
          className="xl:w-[340px] w-[280px] h-full object-contain"
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMenu}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 40, transition: { duration: 0.4 } }}
          className="lg:flex custom:gap-14 gap-8 justify-center custom:mt-0 mt-[-1.5rem] hidden"
        >
          {(activeMenu === "ramen"
            ? ramenMenu
            : activeMenu === "sushi"
            ? sushiMenu
            : lunchMenu
          )?.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => {
                setActiveIndex(index);
                setLastIndex(index);
              }}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{ scale: activeIndex === index ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative custom:w-[340px] w-[300px] custom:h-[390px] h-[360px] rounded-[40px] flex flex-col border dark:border-accent !mt-48 shadow-lg"
            >
              <motion.div
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-b from-[#F547481F] to-transparent pointer-events-none rounded-[40px] z-0"
              />
              <div className="custom:h-[30%] w-full z-30 relative">
                <div className="w-full custom:h-[250px] h-[220px] mt-[-8rem]">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain z-30 relative"
                    animate={{ rotate: activeIndex === index ? 10 : 0 }}
                    transition={{ type: "tween", stiffness: 120, damping: 10 }}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-5 xl:p-7 p-5">
                <div className="flex flex-col items-center">
                  <p className="custom:text-2xl text-[22px] font-bold text-accent">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1 text-amberGlow sm:mb-0 mb-[2px]">
                    <FaStar className="text-sm custom:text-[15px]" />
                    <p className="font-black leading-3 text-[15px] sm:text-lg">
                      {item.rating}
                    </p>
                  </div>
                </div>

                <p className="text-left text-sm">{item.description}</p>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <FaFire />
                    <p>{item.calories} calories</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <LuUtensilsCrossed />
                    <p>NutriScore ® {item.nutriScore}</p>
                  </div>
                </div>
              </div>

              {activeIndex === index && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-[-1.5rem] left-0 right-0 mx-auto h-11 w-36 rounded-full bg-accent flex justify-center items-center"
                >
                  <p className="text-lg text-white">Order Now</p>
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMenu}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 40, transition: { duration: 0.4 } }}
          className="lg:hidden overflow-visible"
        >
          <Swiper
            className="w-full flex lg:hidden overflow-visible sm:mt-0 mt-[-1rem]"
            spaceBetween={1}
            slidesPerView={"auto"}
            centeredSlides={true}
            speed={500}
            initialSlide={middleIndex}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            modules={[Autoplay]}
          >
            {menu.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileInView={{ scale: currentIndex === index ? 1.05 : 0.95 }}
                  transition={{ type: "tween", duration: 0.4 }}
                  className="relative sm:w-[340px] w-[250px] sm:mx-5 mx-3 sm:h-[390px] h-[290px] rounded-[40px] flex flex-col border dark:border-accent sm:!mt-[150px] !mt-[120px] sm:mb-20 mb-12"
                >
                  {currentIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-b from-[#F54748]/10 to-transparent pointer-events-none rounded-[40px] z-0"
                    />
                  )}

                  <div className="sm:h-[30%] h-[25%] w-full z-30 relative">
                    <div className="w-full sm:h-[250px] h-[180px] sm:mt-[-8rem] mt-[-6.5rem]">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain z-30 relative"
                        animate={{ rotate: currentIndex === index ? 25 : 0 }}
                        transition={{
                          type: "tween",
                          stiffness: 120,
                          damping: 10,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col sm:gap-5 gap-3 sm:p-7 p-5">
                    <div className="flex flex-col items-center sm:gap-0 gap-1">
                      <p className="sm:text-2xl text-lg font-bold text-accent">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-1 text-amberGlow sm:mb-0 mb-[2px]">
                        <FaStar className="text-sm xl:text-[15px]" />
                        <p className="font-black leading-3 text-sm sm:text-lg">
                          {item.rating}
                        </p>
                      </div>
                    </div>

                    <p className="text-left sm:text-sm text-[12px]">
                      {item.description}
                    </p>

                    <div className="flex flex-col sm:gap-1 sm:text-base text-[12px]">
                      <div className="flex items-center gap-3">
                        <FaFire />
                        <p>{item.calories} calories</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <LuUtensilsCrossed />
                        <p>NutriScore ® {item.nutriScore}</p>
                      </div>
                    </div>
                  </div>

                  {currentIndex === index && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute sm:bottom-[-1.5rem] bottom-[-1.3rem] left-0 right-0 mx-auto sm:h-11 sm:w-36 h-[36px] w-28 rounded-full bg-accent flex justify-center items-center"
                    >
                      <p className="sm:text-lg text-[13px] text-white">
                        Order Now
                      </p>
                    </motion.button>
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Menu;
