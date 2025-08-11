import Image from "next/image";
import classes from "./HeroBanner.module.css";
import CODEBYIO_HERO from "../../../public/assets/images/CODEBYIO_HERO.webp";
import MOUSESCROLL from "../../../public/assets/gif/MOUSESCROLL.gif";

const HeroBanner = ({ title, subtitle, img, video, alt, href, subtitleType }) => {
  return (
    <section className={classes["hero-banner"]}>
      {!video && (
        <Image
          src={img || CODEBYIO_HERO}
          className={classes["hero-banner__img"]}
          alt={alt}
          unoptimized
        />
      )}
      {video && (
        <video autoPlay muted loop playsInline className={classes["hero-banner__img"]}>
          <source src='/assets/videos/HOME.mp4' />
        </video>
      )}
      <div>
        <h1 className={classes["hero-banner__title"]} data-aos='fade-up'>
          {title}
        </h1>
        <h2
          className={`${classes["hero-banner__subtitle"]} ${classes[subtitleType]}`}
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {subtitle}
        </h2>
        <Image
          src={MOUSESCROLL}
          className={classes["hero-banner__scroll"]}
          alt='Mouse Scroll Gif'
          unoptimized
        />
      </div>
    </section>
  );
};

export default HeroBanner;
