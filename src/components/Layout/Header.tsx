import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import { IoMdClose } from "react-icons/io";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <div className="flex justify-between xl:px-11 px-6 items-center w-full absolute top-0 left-0 py-5">
      <div className="h-full">
        <img
          src="/oishi-food-text-logo.svg"
          alt="oishi-food-text-logo"
          className="xl:w-full lg:w-36 w-32"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex justify-center items-center xl:text-lg xl:gap-10 lg:gap-7 tracking-wide">
        <a href="">Our Menu</a>
        <a href="">Testimonials</a>
        <a href="">Pricing</a>
        <a href="">How it Works</a>
        <div className="flex gap-4">
        <a href="" className="py-2 px-6 bg-secondary text-white rounded-full">
          <p>Download App</p>
        </a>
        <DarkModeToggle />
        </div>
      </div>

      <div className="lg:hidden">
        <RxHamburgerMenu className="text-3xl" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-2xl font-medium fixed inset-0 flex justify-center items-center backdrop-blur-md bg-[#FFA6A6]/20 p-5 rounded-lg shadow-lg z-50 flex-col gap-8 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            variants={variants}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-3xl font-bold text-black dark:text-white"
            >
              <IoMdClose />
            </button>

            {/* Mobile Links */}
            <a href="" onClick={toggleMenu}>
              Our Menu
            </a>
            <a href="" onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="" onClick={toggleMenu}>
              Pricing
            </a>
            <a href="" onClick={toggleMenu}>
              How it Works
            </a>
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
