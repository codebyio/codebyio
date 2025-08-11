import CtaButton from "../CtaButton/CtaButton";
import classes from "./CtaSection.module.css";

const CtaSection = () => {
  return (
    <section className={`${classes["cta-section"]} text-center`}>
      <h2 data-aos='fade-down' data-aos-delay='100'>
        Let's talk about your project!
      </h2>
      <h1 data-aos='zoom-in' data-aos-delay='100'>
        Ready for an awesome project with us?
      </h1>
      <CtaButton message='Get Started' href='/contact-us' withIcon />
    </section>
  );
};

export default CtaSection;
