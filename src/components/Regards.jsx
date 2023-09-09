import React, { useEffect, useState } from "react";
import "./regards.scss";
import Hero from "../assets/regards.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion, useAnimation } from "framer-motion";



export default function Regards() {

  const [offSet, setOffsetY] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
      if (window.scrollY < 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      });
      
    } else {
      controls.start({
        y: -100,
        opacity: 0,
        transition: { duration: 1, delay: 2},
      });
      
    }
  }, [isVisible, controls]);


  return (
    <div className="regards" align="center">
      <motion.h1
       className="animated-text"
       initial={{ y: -100, opacity: 0 }}
       animate={controls}
      >THANKS FOR VISITING...😁</motion.h1>
      <div align="center">
      <img src={Hero} alt="" />
      </div>

      <div className="social" align="center">
        <a href="https://github.com/PremanandPhuke" target="_blank"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/premanand-phuke/" target="_blank"><LinkedInIcon/></a>
        <a href="https://twitter.com/PhukePremanand" target="_blank"><TwitterIcon/></a>
        <a href="https://www.instagram.com/persistent_prema/" target="_blank"><InstagramIcon/></a>

        
      </div>
    </div>
  )
}
