import Hero from "../components/Hero";
import Menu from "../components/Menu";

const MainPage = () => {
  return (
    <div
      id="homepage"
      className="flex flex-col pb-20 lg:gap-28 md:gap-20 max-w-[1440px] w-full mx-auto 2xl:px-[75px] xl:px-7 px-6 relative overflow-x-hidden overflow-y-scroll no-scrollbar"
    >
      <Hero />
      <Menu />
    </div>
  );
};

export default MainPage;
