import Hero from "../components/Hero";
import Container from "../components/utility/Container";
import { ProjectsDataProps } from "../ts/type/ProjectDataTypes";
import { useModalContext } from "../context/ModalContext";
import Modal from "../components/utility/Modal";
import ContactForm from "../components/ContactForm";
import data from "../asset/project.json";
import { getPlaiceholder } from "plaiceholder";
import ProjectItem from "../components/ProjectItem";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export default function Home({ projectData }: ProjectsDataProps) {
  const { openModal, setOpenModal } = useModalContext();
  const nodeRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <Container>
      <>
        <Hero />
        <section id="projects">
          <h3 className="text-xl font-semibold mb-3">Projects</h3>
          <hr />
          <div className="flex flex-col gap-8">
            {projectData &&
              projectData?.map((data) => (
                <ProjectItem data={data} key={data.name} />
              ))}
          </div>
          <p>
            <strong> MERN stack project coming soon....</strong>
          </p>
        </section>
        <div id="about" className="mb-20" />
        <section data-aos="fade-up" data-aos-once="true">
          <h3 className="text-xl font-semibold mb-3 mt-10">About me</h3>
          <hr />
          <About />
        </section>
        <section className="mt-10">
          <hr />
          <CallToAction />
        </section>
        {openModal && (
          <Modal openModal onClose={() => setOpenModal(false)}>
            <ContactForm />
          </Modal>
        )}
      </>
    </Container>
  );
}

export async function getStaticProps() {
  const images_data = await Promise.all(
    data.map(async (data) => {
      const images = data.imgSrc;

      const imagesData = await Promise.all(
        images.map(async (imgItem) => {
          const { base64, img } = await getPlaiceholder(imgItem);
          return {
            ...img,
            base64: base64,
          };
        })
      );

      return { ...data, imgSrc: imagesData };
    })
  );

  return {
    props: {
      projectData: images_data,
    },
  };
}
