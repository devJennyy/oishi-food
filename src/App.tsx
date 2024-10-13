import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";


function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto w-full pt-48 px-32">
        <DarkModeToggle />

        <div className="text-primary dark:text-primaryDark mt-8">
          <h1>Welcome to OishiFood</h1>
        </div>
      </div>
    </>
  );
}

export default App;
