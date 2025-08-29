import classes from "./QuoteBlock.module.css";

const QuoteBlock = ({ quote, author }) => {
  return (
    <div className={classes["quote-block"]} data-aos='fade-right' data-aos-delay='100'>
      <q>
        <i>{quote}</i>
      </q>
      <p className={classes["quote-block__author"]}>
        <i>— {author}</i>
      </p>
    </div>
  );
};

export default QuoteBlock;
