import classes from "./KeyPoint.module.css";

const KeyPoint = ({ title, description }) => {
  return (
    <article className={classes["key-point"]}>
      <h4 className={classes["key-point__title"]}>{title}</h4>
      <p className={classes["key-point__description"]}>{description}</p>
    </article>
  );
};

export default KeyPoint;
