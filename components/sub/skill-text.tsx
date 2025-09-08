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
          Engine Room
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[35px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Weapons of Choice
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[25px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        If it’s in my head, it’s getting built.
      </motion.div>
    </div>
  );
};
