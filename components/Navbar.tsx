import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Overlay from "./utility/Overlay";
import { motion } from "framer-motion";
import Link from "next/link";
import { useModalContext } from "../context/ModalContext";
import Tippy from "@tippyjs/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { TbExternalLink } from "react-icons/tb";
import Button from "./utility/Button";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { setOpenModal } = useModalContext();
  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
    setIsOpen(false);
  };
  const scrollPosition = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={classNames(
        scrollPosition > 100 ? "shadow" : "shadow-none",
        `sticky top-0 bg-white z-50 w-full xmd:px-5 sm:px-0`
      )}
    >
      <header
        className={`flex max-w-[62rem] px-5 sm:px-3 h-16 mx-auto justify-between items-center`}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-bold cursor-pointer rounded-md"
        >
          <Link href="/" aria-label="logo">
            KENNETH VEGA
          </Link>
        </motion.h1>
        <button
          className="hidden md:flex z-50 mobile-nav-toggle  absolute top-2 right-4"
          aria-controls="primary-navigation"
          aria-expanded="false"
          aria-label="button"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            aria-label="mobile menu navigation button"
          />
        </button>
        <nav>
          <ul
            id="primary-navigation"
            className={`${
              isOpen ? "active" : ""
            } primary-navigation flex justify-center items-center gap-7 text-sm`}
          >
            <motion.li
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/#projects" aria-label="kenneth vega projects">
                Projects
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/#about" aria-label="kenneth vega about">
                About
              </Link>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={handleModal}
              className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              Contact
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.a
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-d50af.appspot.com/o/Kenneth%20Vega%20Resume%20(1).pdf?alt=media&token=2c2e2739-980d-40e6-8ab3-c7f2cb91a185"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center gap-2 items-center"
              >
                Resume <TbExternalLink />
              </motion.a>
            </motion.li>

            <div className="hidden md:flex gap-8 text-3xl ">
              <Tippy content="Github profile">
                <a
                  href="https://github.com/kennethvega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="github link"
                >
                  <AiFillGithub />
                </a>
              </Tippy>
              <Tippy content="Linkedin profile">
                <a
                  href="https://www.linkedin.com/in/kenneth-vega-5bb9b3237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="linkedin link"
                >
                  <AiFillLinkedin />
                </a>
              </Tippy>
            </div>
          </ul>
        </nav>
        {isOpen && <Overlay handleClose={() => setIsOpen(false)} />}
      </header>
    </div>
  );
};

export default Navbar;
