import Image from "next/image";
import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";

import classes from "./ServiceHeroBanner.module.css";

const ServiceHeroBanner = ({ title, description, features, image, alt }) => {
  const renderText = (text) => {
    const isPlainText = !/\*{1,2}(.*?)\*{1,2}/.test(text);
    if (isPlainText) {
      return text;
    }

    const parts = text.split(/(\*{1,2}.*?\*{1,2})/g);

    return parts.map((part, idx) => {
      if (/^\*{1,2}(.*?)\*{1,2}$/.test(part)) {
        const boldText = part.replace(/^\*{1,2}(.*?)\*{1,2}$/, "$1");
        return <strong key={`bold-${idx}`}>{boldText}</strong>;
      }

      return part;
    });
  };

  return (
    <Section position='center' heroBanner serviceBanner>
      <Grid2 container alignItems='center'>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <h1 className={classes["title"]} data-aos='fade-right' data-aos-delay='300'>
            {renderText(title)}
          </h1>
          <p className={classes["description"]} data-aos='fade-down' data-aos-delay='500'>
            {description}
          </p>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Image
            src={image}
            className='img-fluid'
            data-aos='fade-left'
            data-aos-delay='300'
            alt={alt}
            unoptimized
          />
        </Grid2>
      </Grid2>
    </Section>
  );
};

export default ServiceHeroBanner;
