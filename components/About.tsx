import Image from "next/image";
import React from "react";
import profile from "../asset/profile.png";
import Skills from "./Skills";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-2 mt-10 "
    >
      <div>
        <p>
          Hi! I’m Kenneth Vega, I have a{" "}
          <strong>
            passion in designing, learning and building things for the web
          </strong>
          . I like to resolve design problems and create{" "}
          <strong> interactive interface </strong>, developing web experiences &{" "}
          <strong>web applications</strong>.
        </p>
        <div className="my-3">
          Here are the technologies I’ve been working with.
        </div>
        <Skills />
      </div>
      <div className="mx-auto">
        <Image
          src={profile}
          width={200}
          height={200}
          alt="Kenneth's profile picture"
          className="rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default About;
