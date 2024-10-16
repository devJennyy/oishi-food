import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="flex justify-between 2xl:px-[75px] xl:px-7 px-6 items-center max-w-[1440px] w-full absolute top-0 py-9 z-50">
      <div className="h-full">
        <img
          src="/oishi-food-text-logo.svg"
          alt="Oishi Food Logo"
          className="xl:w-full lg:w-36 w-32 dark:hidden"
        />
        <img
          src="/dark-oishi-food-text-logo.svg"
          alt="Oishi Food Logo"
          className="xl:w-full lg:w-36 w-32 hidden dark:flex"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex justify-center items-center xl:text-lg xl:gap-9 lg:gap-7 tracking-wide">
        <a href="#">How It Works</a>
        <a href="#">Our Menu</a>
        <a href="#">Testimonials</a>
        <a href="#">Pricing</a>
        <div className="flex gap-4">
          <a
            href="#"
            className="py-[9px] px-4 bg-secondary text-white rounded-full"
          >
            <p>Download App</p>
          </a>
          <DarkModeToggle />
        </div>
      </div>

      <div className="lg:hidden">
        <RxHamburgerMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-white/30 p-5 shadow-xl z-50 flex-col gap-8 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            variants={variants}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-3xl font-bold text-black/80 dark:text-white/80"
            >
              <IoMdClose />
            </button>

            {/* Mobile Links */}
            <a href="#" onClick={toggleMenu} className="text-primary/90 dark:text-white/70 font-black text-2xl">
              Our Menu
            </a>
            <a href="#" onClick={toggleMenu} className="text-primary/90 dark:text-white/70 font-black text-2xl">
              Testimonials
            </a>
            <a href="#" onClick={toggleMenu} className="text-primary/90 dark:text-white/70 font-black text-2xl">
              Pricing
            </a>
            <a href="#" onClick={toggleMenu} className="text-primary/90 dark:text-white/70 font-black text-2xl">
              How It Works
            </a>
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
