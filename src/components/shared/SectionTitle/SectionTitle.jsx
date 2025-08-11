import classes from "./SectionTitle.module.css";

const SectionTitle = ({ title, subtitle, horizontalStyle, inverted }) => {
  return (
    <div
      className={`${classes["section-title-wrapper"]} ${
        horizontalStyle && classes["horizontal-style"]
      } ${inverted && classes["inverted"]}`}
    >
      <h2
        className={classes["section-title"]}
        dangerouslySetInnerHTML={{ __html: title ?? "" }}
        data-aos='fade-down'
      ></h2>
      {subtitle && (
        <p className={classes["section-subtitle"]} data-aos='fade-up' data-aos-delay='150'>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
