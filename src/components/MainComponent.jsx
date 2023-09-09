import React, { useEffect, useState } from "react";
import "./mainComponent.scss";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useAnimation } from "framer-motion";

export default function MainComponent() {

  const [offSet, setOffsetY]= useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  
  useEffect(() => {
    // Trigger animation when the component mounts
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
      if (window.scrollY > 100) {
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
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
      controls2.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1},
      });
      controls3.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        x: -100,
        opacity: 0,
        transition: { duration: 2 },

      });
      controls2.start({
        x: 100,
        opacity: 0,
        transition: { duration: 2 },

      });
      controls3.start({
        y: 100,
        opacity: 0,
        transtion: { duration: 2 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div className="mainComponent">
      <div>
        <motion.div
          className="animated-text"
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
        >
          <h2 className="from_left">Learner</h2>
        </motion.div>
        <button>Eager technology enthusiast and lifelong learner.</button>
      </div>
      <div>
        <button>Tech explorer, always seeking new horizons.</button>
        <motion.div
          className="animated-text"
          initial={{ x: 100, opacity: 0 }}
          animate={controls2}
        >
          <h2 className="from_right">Explorer</h2>
        </motion.div>
      </div>
      <span align="center">
        <motion.h1
        className="animated-text"
        initial={{ y: 100, opacity: 0 }}
        animate={controls3}
        > FULL STACK DEVELOPER</motion.h1>
      </span>
    </div>
  );
}
