"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        
        <h1 className="Welcome-text text-[25px]">
          My toolBox
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[35px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[25px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Explore the technologies and tools I use to craft exceptional digital experiences.
      </motion.div>
    </div>
  );
};
