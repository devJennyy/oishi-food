import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWOrks";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";

const MainPage = () => {
  return (
    <div
      id="homepage"
      className="flex flex-col pb-20 lg:gap-28 md:gap-20"
    >
      <Hero />
      <Menu />
      <Testimonials />
      <HowItWorks />
    </div>
  );
};

export default MainPage;
