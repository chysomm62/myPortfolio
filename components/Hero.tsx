"use client";

import Image from "next/image";
import ResumeButton from "./ui/Resumebutton";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
        ease: "easeOut",
      },
    },
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 5,
        ease: "linear",
      },
    },
  };

  return (
    <section className="min-h-[70vh] container mx-auto px-5 lg:px-14 max-w-7xl mt-24 lg:mt-36 flex">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-2 items-center gap-12 w-full">
        {/* LEFT SIDE */}
        <motion.div variants={fadeUp} className="flex flex-col gap-7">
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gradient">
            Chisom Muorah
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ delay: 1 }}
            className="text-lg text-accent max-w-xl">
            Product-Driven Frontend Engineer | Turning Ideas into Seamless
            Digital Experiences
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ delay: 2 }}
            className="flex items-center gap-10">
            <ResumeButton />
            <button>Contact Me</button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div variants={imageReveal} className="relative aspect-570/650">
          <Image
            src="https://res.cloudinary.com/dfyo6umic/image/upload/f_auto,q_auto/v1770904189/profile_image.png"
            alt="profile image"
            fill
            className="object-cover rounded-sm shadow-2xl shadow-black/30 animate-[float_6s_ease-in-out_infinite] z-10"
            priority
          />

          <div className="absolute bg-accent-gradient opacity-10 w-full h-full z-20"></div>

          <motion.div
            animate={{ rotate: [-2, -1.8, -2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 border-2 rounded-lg border-[#779ccf] -rotate-2 bg-[#64ff22]/30 scale-[0.99]"></motion.div>
          <motion.div
            animate={{ rotate: [2, 2.2, 2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 border-2 rounded-lg border-[#08a5ff] rotate-2 bg-[#097a9e]/30 scale-[0.99]"></motion.div>

          <motion.div
            animate={{ rotate: [15, -15, 15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-5 -right-5 size-12 md:size-16 border rounded-lg border-[#08a5ff] rotate-15 bg-[#097a9e]/20 z-10"></motion.div>
          <motion.div
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -left-5 -bottom-5 border size-12 md:size-16 rounded-lg border-[#779ccf] -rotate-15 z-10 bg-[#64ff22]/20"></motion.div>
          <motion.div
            animate={{ scale: [1, 0.98, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-5 -left-5 size-12 md:size-16 border rounded-lg border-[#08a5ff] rotate-15 bg-[#08a5ff]/50"></motion.div>
          <motion.div
            animate={{ scale: [1, 0.98, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -right-5 -bottom-5 border size-12 md:size-16 rounded-lg border-[#779ccf] -rotate-15 bg-[#779ccf]/50"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
