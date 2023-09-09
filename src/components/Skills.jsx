import React, { useEffect, useState } from "react";

import "./skills.scss";
import { motion, useAnimation } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import Deck from "./Deck";


export default function Skills() {
  
  const [offSet, setOffsetY] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    // Trigger animation when the component mounts
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
      if (window.scrollY < 700) {
        
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
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        y: -300,
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);



  /////////////////////////////////////////////////////////////////////////////////////////////////////

  
  return (
    <div className="skills" align="center">
      <motion.h1 initial={{ y: -300, opacity: 0 }} animate={controls}>
        Skills
      </motion.h1>

      <div className="box">
        {/* {skills.map((skill) => (
          <motion.div
            className="card"
            initial={{ y: -700 }}
            animate={imageControls}
          >
            <img src={skill.img} alt="" />
          </motion.div>
        ))} */}
        <div className="container">
        <Deck/>
          
        </div>
      </div>
    </div>
  );
}
