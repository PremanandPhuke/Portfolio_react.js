import { useState, useContext, useEffect } from "react";
import "./navbar.scss";
import logo from "../assets/LOGO gif.gif";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Hero from "../assets/main-img1.jpg";
import { DarkModeContext } from "../context/DarkModeContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function Navbar({  rightbar, setRightBar }) {
  const { toggel, darkMode } = useContext(DarkModeContext);



  const handleButtonClick = () => {
    setRightBar(!rightbar);
    // setOverlayVisibility(prevState => !prevState);
    if(window.innerWidth < 960 && rightbar){
      document.getElementById("center").style.display="none";
    }
    else{
      document.getElementById("center").style.display="flex";
    }
  };



  return (
    <div className="navbar">
      <div className="left">
        <img
          src="https://i.pinimg.com/564x/41/7b/6c/417b6c7b3dec487b44e0d449916f7f60.jpg"
          alt=""
        />
        {/* <DarkModeOutlinedIcon/> */}
        <span>persistent_prema</span>
      </div>

      <div className="center" id="center">
        <a href="#">Home</a>
        <a href="#">Resume</a>
        <a href="#">Blog</a>
      </div>

      <div className="right">
        {darkMode ? (
          <WbSunnyOutlinedIcon style={{ height: "20px" }} onClick={toggel} />
        ) : (
          <DarkModeOutlinedIcon style={{ height: "20px" }} onClick={toggel} />
        )}

        <div className="menu">
          {rightbar ? (
            <CloseOutlinedIcon
              onClick={() => {
                handleButtonClick();
              }}
            />
          ) : (
            <MenuOutlinedIcon
              className="toggel"
              onClick={() => {
                handleButtonClick();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
