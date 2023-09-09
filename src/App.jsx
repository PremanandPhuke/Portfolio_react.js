import { useState ,useContext, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.scss";
import Hero from "./assets/New-file (1).gif";
import MainComponent from "./components/MainComponent";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import { DarkModeContext } from "./context/DarkModeContext";
import Regards from "./components/Regards";


function App() {
  const [count, setCount] = useState(0);
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  const [rightbar, setRightBar] = useState(true);
  // const toggleRightBar = () => {
  //   setRightBar(!rightbar);
  // };

  const checkWindowSize = () => {
    setRightBar(window.innerWidth > 960); // You can adjust the resolution threshold as needed (e.g., 768 for mobile screens)
  };

  // Add event listener to handle window resize
  useEffect(() => {
    checkWindowSize(); // Set the initial state based on the current window size
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <>
      <div  className={`theme-${darkMode ? "light" : "dark"}`}>
        <Navbar rightbar={rightbar} setRightBar={setRightBar}/>
        <MainComponent />
        <About />
        <Skills />
        <Projects />
        <Connect />
        <Regards/>
      </div>
    </>
  );
}

export default App;
