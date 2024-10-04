import React from "react";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Front1 from "./Front1";
import Front2 from "./Front2";
import Front3 from "./Front3";
import Front4 from "./Front4";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2">

        <Front1 />
        <Front2 />
        <Front3 />
        <Front4 />


       </motion.div>
     </div>
  </div>
  );
};

export default HorizontalScroll;
