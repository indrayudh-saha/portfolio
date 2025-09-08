"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box with glowing circular border */}
       <motion.div
  variants={slideInFromTop}
  className={`flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] rounded-full max-w-fit mx-auto md:mx-0 
    w-[210px] h-[210px] relative before:content-[''] before:absolute before:inset-0 
    before:rounded-full before:border-[6px] before:border-purple-500 
    before:animate-pulse before:shadow-[0_0_40px_12px_rgba(125,68,255,0.75)]`}
>
  <Image
    src="/pic.jpg"
    alt="Profile Photo"
    width={198}  // Slightly smaller than container to fit inside border
    height={198}
    className="rounded-full object-cover relative z-10"
    draggable={false}
  />
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Hi, this is Indrayudh Saha — a.k.a.
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Tarnished.<br />
          </span>{" "}
          Always on the {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            build.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a full-stack developer. I&apos;m here to show you what happens when you hand a pen to a philosopher and a keyboard to a night-thinker.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[110px] sm:max-w-[180px] mx-auto md:mx-0 flex items-center justify-center"
        >
          Learn more
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};
