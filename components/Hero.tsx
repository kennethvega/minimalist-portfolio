import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import Button from "./utility/Button";
import Tippy from "@tippyjs/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[100vh] min-w-full flex items-center justify-center">
      <div className="-mt-16 md:-mt-20">
        <div>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
            className="text-6xl md:text-5xl sm:text-3xl __className_f6433a"
          >
            <strong>Hello, I’m Kenneth.</strong>
          </h2>
          <br />
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            className="text-[2rem] md:text-2xl sm:text-lg __className_f6433a"
          >
            I am a front-end software engineer, currently focused on building
            beautiful web interfaces and web applications.
          </p>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
            <span className="text-3xl flex gap-10 mt-10 ">
              <Tippy className="__className_f6433a" content="Github profile">
                <a
                  href="https://github.com/kennethvega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="Github profile link"
                >
                  <AiFillGithub />
                </a>
              </Tippy>
              <Tippy className="__className_f6433a" content="Linkedin profile">
                <a
                  href="https://www.linkedin.com/in/kenneth-vega-5bb9b3237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="Linkedin profile link"
                >
                  <AiFillLinkedin />
                </a>
              </Tippy>
            </span>
            <div className="mt-16 flex gap-10 sm:gap-5 xsm:gap-3">
              <Link href="/#projects">
                <Button>Look at my work &#8595;</Button>
              </Link>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-d50af.appspot.com/o/Kenneth%20Vega%20Resume%20(5).pdf?alt=media&token=52e4adca-dc6c-44c2-ae57-777c956adc15"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  View resume <TbExternalLink />
                </Button>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-once="true"
            data-aos-delay="500"
            className="scroll-down"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
