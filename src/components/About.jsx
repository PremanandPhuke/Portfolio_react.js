import React, { useEffect, useState } from "react";
import "./about.scss";
import Hero from "../assets/main-img1.jpg";
import { motion, useAnimation } from "framer-motion";

export default function About() {
  const [offSet, setOffsetY] = useState(0);
  // console.log(offSet)
  console.log(scrollY)
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Trigger animation when the component mounts
    setIsVisible(true);
  }, []);


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
        transition: { duration: offSet/100 },
      });
      imageControls.start({
        scale: 1,
        transition: { duration: 1.2, delay: 0.5 }, // Delay the image animation
      });
    } else {
      controls.start({
        y: -100,
        opacity: 0,
        transition: { duration: offSet/100 },
      });
      imageControls.start({
        scale: 0.1,
        transition: { duration: 1.2 }, // Delay the image animation

      });
    }
  }, [isVisible,imageControls, controls]);

  return (
    <div className="about" align="center">
      <motion.h1
        className="animated-text"
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
      >
        ABOUT
      </motion.h1>
      <div className="code">
        <motion.div className="left"
        initial={{ scale: 0.1 }}
        animate={imageControls}
        >
          <img src={Hero} alt="" />
        </motion.div>
        <div className="right" align="left">
          <h2>
            Hi...👋 I am <br /> Premanand Phuke
          </h2>
          <p>
            I enjoy creating things that live on the internet. My interest in
            web development started back in 2012 when I decided to try editing
            custom Tumblr themes — turns out hacking together a custom reblog
            button taught me a lot about HTML & CSS!
          </p>
          <p>
            Currently I am pursuing my B.Tech degree in Computer Science from
            PIMPRI CHINCHWAD EDUCATION TRUST'S, NUTAN COLLEGE OF ENGINEERING AND
            RESEARCH, PUNE
          </p>
        </div>
      </div>
    </div>
  );
}
